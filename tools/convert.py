#!/usr/bin/env python3
"""Convertit les planches de la maquette (.dc.html) en modules JS autonomes (Preact + htm).

Pour chaque planche : le gabarit devient une fonction `template(v, html)`, la logique
(`class Component extends DCLogic`) est reprise telle quelle, les réglages par défaut
sont extraits de data-props. Les images /_blob/<id> pointent vers assets/.
"""
import html as htmllib
import json
import os
import re
import shutil
import sys

SRC = sys.argv[1]          # dossier contenant Main.dc.html et Hub.dc.html
BLOBS = sys.argv[2]        # dossier des fichiers <id>.<ext>
OUT = sys.argv[3]          # dossier du projet (src/, public/)

# Police ABC Arizona (version d’essai), fond d’écran GTA VI et son détourage : droits non cédés, donc jamais publiés.
PRIVATE = {
    '8e90b28a614eddbea6d85e4702f24467',  # ABC Arizona (sous-ensemble des chiffres)
    '4f5e09ca6c8aa580ccb346464c135574',  # fond d’écran GTA VI
    'e976f5c87b3654b062bf30f2fc5727dc',  # personnages détourés
}

VOID = ('img', 'br', 'input', 'hr', 'meta', 'link', 'source')


def parts(path):
    s = open(path, encoding='utf-8').read()
    helmet = s[s.index('<helmet>') + 8:s.index('</helmet>')]
    tpl = s[s.index('</helmet>') + 9:s.index('</x-dc>')]
    m = re.search(r'<script type="text/x-dc" data-dc-script data-props=("([^"]*)"|\'([^\']*)\')>([\s\S]*?)</script>', s)
    props = json.loads(htmllib.unescape(m.group(2) or m.group(3)))
    logic = m.group(4)
    css = re.search(r'<style>([\s\S]*?)</style>', helmet).group(1)
    return tpl, css, props, logic


def blob_map():
    out = {}
    for f in os.listdir(BLOBS):
        m = re.match(r'([0-9a-f]{32})\.(\w+)$', f)
        if m:
            out[m.group(1)] = f
    return out


def convert_template(tpl):
    # Échappements pour un gabarit littéral JS (le gabarit n'en contient pas, on reste prudent).
    t = tpl.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')
    # Indices de remplissage du moteur de la maquette : inutiles ici.
    t = re.sub(r'\s+hint-[a-z-]+="[^"]*"', '', t)
    # Balises vides fermées pour htm.
    t = re.sub(r'<(%s)\b([^>]*?)\s*/?>' % '|'.join(VOID), lambda m: '<%s%s />' % (m.group(1), m.group(2)), t)

    loops = []
    out = []
    pos = 0
    tag_re = re.compile(r'<sc-for\s+list="\{\{\s*([^}]+?)\s*\}\}"\s+as="(\w+)"\s*>|</sc-for>|<sc-if\s+value="\{\{\s*([^}]+?)\s*\}\}"\s*>|</sc-if>')

    def expr(path):
        path = path.strip()
        if path in ('true', 'false', 'null') or re.match(r'^-?\d+(\.\d+)?$', path):
            return path
        head = path.split('.')[0]
        segs = path.split('.')
        if head in loops or head == '$index':
            base, rest = segs[0], segs[1:]
        else:
            base, rest = 'v', segs
        return base + ''.join('?.' + s for s in rest) if rest else base

    def holes(text):
        return re.sub(r'\{\{\s*([^}]+?)\s*\}\}', lambda m: '${' + expr(m.group(1)) + '}', text)

    for m in tag_re.finditer(t):
        out.append(holes(t[pos:m.start()]))
        g = m.group(0)
        if g.startswith('<sc-for'):
            lst, var = m.group(1), m.group(2)
            out.append('${(' + expr(lst) + ' || []).map((' + var + ', $index) => html`')
            loops.append(var)
        elif g == '</sc-for>':
            loops.pop()
            out.append('`)}')
        elif g.startswith('<sc-if'):
            out.append('${(' + expr(m.group(3)) + ') ? html`')
        else:
            out.append('` : null}')
        pos = m.end()
    out.append(holes(t[pos:]))
    assert not loops
    return ''.join(out).strip()


def patch_logic(name, logic):
    # Les ajustements propres à la TV (veille, lancement des applis…) sont faits par héritage dans src/tv-boards.js.
    return logic


def patch_hub_template(body):
    # Sur la TV, le hub se pose par-dessus l’accueil vivant : plus besoin de la capture figée ni du fond opaque.
    cap = re.search(r'<img aria-hidden="true" alt="" src="/_blob/[0-9a-f]{32}"[^>]*/>\s*', body)
    assert cap, 'capture du hub introuvable'
    body = body[:cap.start()] + body[cap.end():]
    o = 'overflow: hidden; background: #05070E;'
    assert body.count(o) == 1, 'fond du hub introuvable'
    return body.replace(o, 'overflow: hidden; background: transparent;')


def shrink(path, width=640):
    """Logos des tuiles : 640 px de large suffisent (2 fois leur taille à l’écran). Une image 4 fois trop grande,
    réduite par la TV à chaque image, ressort crénelée et coûte de la mémoire."""
    try:
        from PIL import Image
    except ImportError:
        return False
    if not re.search(r'\.(png|webp|jpe?g)$', path, re.I):
        return False
    im = Image.open(path)
    if im.width <= width:
        return False
    h = round(im.height * width / im.width)
    im = im.convert('RGBA') if im.mode in ('P', 'LA') else im
    out = im.resize((width, h), Image.LANCZOS)
    if path.lower().endswith('.webp'):
        out.save(path, 'WEBP', quality=92, method=6)
    elif path.lower().endswith('.png'):
        out.save(path, 'PNG', optimize=True)
    else:
        out.convert('RGB').save(path, 'JPEG', quality=90)
    return True


def main():
    bm = blob_map()
    os.makedirs(os.path.join(OUT, 'src', 'boards'), exist_ok=True)
    os.makedirs(os.path.join(OUT, 'public', 'assets'), exist_ok=True)
    used = set()
    all_css = []
    for name, fname in (('main', 'Main.dc.html'), ('hub', 'Hub.dc.html')):
        tpl, css, props, logic = parts(os.path.join(SRC, fname))
        body = convert_template(tpl)

        def blob(m):
            used.add(m.group(1))
            return 'assets/' + bm[m.group(1)]
        if name == 'hub':
            body = patch_hub_template(body)
        body = re.sub(r'"/_blob/([0-9a-f]{32})"', lambda m: '"${A("%s")}"' % blob(m)[7:], body)
        body = re.sub(r'/_blob/([0-9a-f]{32})', lambda m: '${A("%s")}' % blob(m)[7:], body)
        css = re.sub(r'/_blob/([0-9a-f]{32})', blob, css)
        all_css.append('/* ---- %s ---- */\n%s' % (fname, css.strip()))
        defaults = {k: v.get('default') for k, v in props.items() if isinstance(v, dict) and 'default' in v}
        logic = patch_logic(name, logic)
        js = (
            '// Généré depuis la maquette (%s) par build/convert.py — ne pas modifier à la main.\n' % fname
            + 'import { A } from "../assets.js";\n\n'
            + 'export const defaults = %s;\n\n' % json.dumps(defaults, ensure_ascii=False, indent=2)
            + 'export function template(v, html) {\n  return html`' + body + '`;\n}\n\n'
            + 'export function makeLogic(DCLogic) {\n' + logic.strip() + '\n  return Component;\n}\n'
        )
        open(os.path.join(OUT, 'src', 'boards', name + '.js'), 'w', encoding='utf-8').write(js)
    open(os.path.join(OUT, 'src', 'boards', 'boards.css'), 'w', encoding='utf-8').write('\n\n'.join(all_css) + '\n')
    os.makedirs(os.path.join(OUT, 'private', 'assets'), exist_ok=True)
    for i in sorted(used):
        dest = 'private' if i in PRIVATE else 'public'
        target = os.path.join(OUT, dest, 'assets', bm[i])
        shutil.copy(os.path.join(BLOBS, bm[i]), target)
        if dest == 'public' and shrink(target):
            # Nouveau nom : l’appli TV garde sa copie d’origine sous l’ancien nom, celle-ci viendra du serveur.
            base, ext = os.path.splitext(bm[i])
            renamed = base + '-640' + ext
            os.replace(target, os.path.join(OUT, dest, 'assets', renamed))
            for gen in ('main.js', 'hub.js', 'boards.css'):
                gp = os.path.join(OUT, 'src', 'boards', gen)
                g = open(gp, encoding='utf-8').read()
                if bm[i] in g:
                    open(gp, 'w', encoding='utf-8').write(g.replace(bm[i], renamed))
    print('planches converties ; %d fichiers d’images/polices copiés (%d privés)' % (len(used), len(used & PRIVATE)))


main()
