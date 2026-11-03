# Launcher TV — Samsung S95F

L’accueil façon Apple TV (sans pub) conçu dans Claude Design, transformé en vraie appli pour la TV.

## Comment c’est fait

- **L’appli TV** (`dist/tv`) s’installe une seule fois. Elle contient tout le launcher, plus les fichiers qui ne doivent jamais être en ligne (police d’essai ABC Arizona, fond d’écran GTA VI et son détourage). Elle démarre toujours, même sans internet.
- **La version en ligne** (`dist/site`) est ce que la TV va chercher pour se mettre à jour. À chaque mise en ligne, la TV télécharge la nouvelle version en arrière-plan et l’applique quand personne n’a touché la télécommande depuis 2 minutes. Plus besoin de réinstaller pour une modif.
- Tant qu’aucune adresse en ligne n’est réglée (`launcher.config.json`), l’appli TV utilise simplement la version embarquée.

## Essayer dans le navigateur

```bash
npm install
npm run preview        # puis http://localhost:8080
```

Flèches pour se déplacer, Entrée = OK (maintenue = modifier l’accueil), Échap = Retour, « i » = journal.

## Installer sur la TV (une fois)

Il faut un Mac sur le même réseau que la TV.

1. **Tizen Studio** : installer Tizen Studio (version 6.x pour macOS), puis dans le *Package Manager*, onglet *Extension SDK* : **TV Extensions** et **Samsung Certificate Extension**.
2. **Mode développeur sur la TV** : *Applis*, puis taper `1 2 3 4 5` sur la télécommande. Activer *Developer mode*, entrer l’adresse IP du Mac dans *Host PC IP*, valider, puis redémarrer la TV (bouton marche maintenu 5 s).
3. **Relier la TV** : l’IP de la TV est dans *Réglages > Général > Réseau > État du réseau*. Dans Tizen Studio, *Tools > Device Manager > Remote Device Manager*, **+**, son IP, puis activer la connexion.
4. **Certificat Samsung** (obligatoire sur les TV 2024 et plus récentes) : *Tools > Certificate Manager*, **+**, *Samsung*, *TV*, nommer le profil `Launcher`. Créer un certificat auteur (connexion au compte Samsung), puis un certificat distributeur, niveau *Public* : l’identifiant (DUID) de la TV est ajouté tout seul puisqu’elle est connectée.
5. **Emballer et installer** (dans un Terminal, depuis ce dossier) :

   ```bash
   T=~/tizen-studio
   $T/tools/sdb connect <IP de la TV>
   $T/tools/sdb devices                       # note le nom de la TV
   $T/tools/ide/bin/tizen package -t wgt -s Launcher -- dist/tv
   $T/tools/ide/bin/tizen install -n Launcher.wgt -t <nom de la TV> -- dist/tv
   ```

   « Launcher » apparaît dans les applis de la TV. Le déplacer en tête de la barre Smart Hub.

Raccourci possible : l’installeur de TizenBrew (celui de TizenTube) sait aussi installer un fichier `.wgt`. Pas testé avec ce launcher.

## Le lancer à l’allumage

*Réglages > Tous les réglages > Fonctions avancées > Options de l’écran de démarrage* : désactiver **Démarrer avec l’accueil Smart Hub**. Si l’option de lancement automatique de la dernière appli est proposée, l’activer.

Limite connue : le bouton Accueil de la télécommande ouvre toujours la barre Samsung. La seule façon de le rediriger vers le launcher est une manipulation non officielle (clé système `db/appfw/home_appid`), à ne tenter qu’en connaissance de cause et après en avoir parlé.

## Mettre en ligne (pour les mises à jour automatiques)

1. Créer un dépôt GitHub (par exemple `launcher-tv`), y envoyer ce dossier. Le fichier `.gitignore` garde hors ligne `private/` (police d’essai, fond d’écran), `node_modules/` et `dist/`.
2. Sur GitHub : *Settings > Pages > Source : GitHub Actions*. Chaque envoi sur `main` met le launcher en ligne (`.github/workflows/pages.yml`).
3. Mettre l’adresse obtenue dans `launcher.config.json`, par exemple `{"remote": "https://<compte>.github.io/launcher-tv/"}`, relancer `npm run build`, puis réinstaller l’appli TV une dernière fois (étape 5).

Ensuite, une modif = un envoi sur GitHub. Rien d’autre à faire côté TV.

## Les recos de l’accueil

Toutes les 6 heures, GitHub prépare `data/recos.json` (`tools/recos.mjs`, réglages dans `launcher.config.json`) :

- **Serializd** (`Leftgrapher`) : séries en cours → « Reprendre », ta liste → « Dans ta liste », séries vues exclues. Lecture publique, sans mot de passe.
- **Letterboxd** (`leftgrapher`) : watchlist → « Dans ta liste » ; films vus exclus ; films notés 4/5 ou aimés → « Parce que tu as aimé… ».
- **Top 10 Netflix France** (fichier officiel de Netflix) → « N°1 en France sur Netflix ».
- **TMDB** : tendances de tes plateformes en France, images de fond sans texte, logo du titre, bande-annonce, et surtout les plateformes où chaque titre est inclus dans l’abonnement (données JustWatch). Seuls les titres dispo sur Netflix, Prime Video, Apple TV, HBO Max, Crunchyroll ou Disney+ sont gardés (liste dans `launcher.config.json`).

Il faut une clé TMDB (gratuite pour un usage perso) :

1. Sur themoviedb.org, connecté : *Paramètres > API > Créer*, type *Développeur*, usage personnel (nom : Launcher TV).
2. Copier le **jeton d’accès en lecture à l’API** (la longue suite qui commence par `eyJ`).
3. Sur GitHub, dans le dépôt : *Settings > Secrets and variables > Actions > New repository secret*, nom `TMDB_TOKEN`, valeur : le jeton. Il reste privé : il n’apparaît ni dans le code ni sur la TV.

### En option : tes vidéos YouTube et les jeux du moment

- **YouTube** (nouvelles vidéos des chaînes auxquelles tu es abonné, une par chaîne, jusqu’à 3) :
  1. Tes abonnements doivent être publics : sur youtube.com, *Paramètres > Confidentialité*, décocher « Garder tous mes abonnements privés ».
  2. L’identifiant de ta chaîne (il commence par `UC`) : youtube.com/account_advanced. Le mettre dans `launcher.config.json`, `recos.youtube.channelId`.
  3. Une clé gratuite : console.cloud.google.com, activer *YouTube Data API v3*, puis *Identifiants > Créer une clé API*. Secret GitHub `YOUTUBE_KEY`.
  En secours, sans clé : la liste de tes chaînes (export Google Takeout) dans `recos.youtube.channels`.
- **Jeux** (2 RPG, 1 indé et 1 puzzle du moment sur PS5 ou Switch, avec leur image officielle) : clé gratuite sur rawg.io/apidocs, secret GitHub `RAWG_KEY`. Choisir une reco de jeu bascule sur la PS5 ou la Switch.

À l’accueil, les 8 premières recos mélangent séries en cours, ta liste, une vidéo, un jeu et des découvertes.

Sans clé TMDB, l’accueil garde ses exemples. Attention : `recos.json` est en ligne comme le reste du site, donc tes titres en cours et ta liste y sont visibles (ils le sont déjà sur tes profils publics Serializd et Letterboxd). Les crédits TMDB et JustWatch sont dans le panneau Info.

## Ce qui est branché sur la TV

| Élément | Sur la TV |
|---|---|
| Tuiles d’applis | Ouvrent la vraie appli (identifiants connus, sinon recherche par nom parmi les applis installées), lancée dès l’appui ; la tuile pulse jusqu’à ce que l’appli s’affiche. Si elle n’est pas trouvée : message, et retour à l’accueil. |
| Recos | Une vidéo YouTube s’ouvre directement dans TizenTube. Les autres (Netflix, Disney+, HBO Max, Apple TV…) ouvrent l’appli sur son accueil : sur les TV récentes, elles ignorent les demandes d’ouvrir un titre précis. |
| YouTube | Ouvre TizenBrew (régler TizenBrew pour lancer TizenTube automatiquement). « YouTube, appli officielle » ouvre l’appli Samsung. |
| PS5, Switch, Mac, PC | Basculent sur HDMI 1, 2, 3, 4 : l’image en direct apparaît sous la tuile qui grandit, puis l’écran TV de Samsung prend le relais. Si la TV refuse, le menu Sources s’ouvre. |
| Aperçu d’une source | Tuile PS5 ou Switch du dock sélectionnée quelques secondes : son image en direct remplit la tuile, dans son cadre (la TV bascule sur cette entrée, son compris). Pas d’aperçu pour les applis (Tizen ne donne pas l’image d’une autre appli). |
| Fonds des recos | En vraie 4K quand TMDB a l’image en 3840 px : un clip vidéo d’une image, préparé en ligne avec les recos (`tools/bg4k.mjs`), joué sous l’interface par le lecteur de la TV (`src/video.js`). Ailleurs, l’image 1920×1080. |
| Ajouter une appli | Ouvre le store Samsung. |
| Réglages | Ouvrent le vrai panneau de réglages Samsung, par-dessus le launcher. |
| Hub > Accueil Tizen | Ferme le launcher et ouvre l’accueil Samsung d’origine. |
| Retour sur l’accueil | Un message, puis un 2e appui (dans les 2 s) ferme le launcher. Pour le rouvrir : liste des applis Samsung. |
| Retour dans le launcher | L’accueil réapparaît en fondu. |
| Ordre des applis (mode modifier) | Gardé d’un allumage à l’autre. |

Encore simulé (prévu plus tard) : Hue Sync et l’éclairage, Wi-Fi et Bluetooth, modes vidéo/jeu, « Tout éteindre », recos de jeux, météo, ouverture directe d’une série dans son appli.

## Dépannage

Touche **Info** de la télécommande (ou « i » au clavier) : affiche le journal (applis ouvertes, identifiants essayés, entrées HDMI). Utile si une tuile n’ouvre pas la bonne appli.

## Organisation

- `src/boards/` : les deux écrans de la maquette (accueil, hub), générés depuis Claude Design par `tools/convert.py`. Ne pas modifier à la main.
- `src/tv-boards.js` : ce qui relie la maquette à la TV (ouvrir une appli, une entrée HDMI, les réglages…).
- `src/tv.js` : identifiants des applis Samsung et appels Tizen.
- `src/launch-fx.js` : animation d’ouverture sur la TV (la tuile qui grandit jusqu’au plein écran).
- `src/video.js` : plan vidéo de la TV (fonds 4K, image en direct des entrées HDMI).
- `src/app.js` : assemblage, mise à l’échelle 1920×1080, messages, journal.
- `tv/` : coquille de l’appli TV (`config.xml`, page de démarrage et de mise à jour, icône).
- `public/assets/` : images publiques. `private/assets/` : fichiers qui ne vont jamais en ligne.
