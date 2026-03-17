# Sailinglish — Notes techniques

## Architecture actuelle

### Vanilla JS monofichier
Tout le code client est dans `app.js` (~1200 lignes). Pas de framework, pas de build step, pas de bundler. Le fichier est chargé directement par le navigateur.

**Pourquoi ?** L'app est simple — une SPA avec quelques écrans, pas de routing complexe, pas de composants réutilisables. Un framework ajouterait de la complexité sans bénéfice. Le code reste lisible et modifiable rapidement.

**Limite identifiée** : à ~1200 lignes, le fichier commence à être long. Si on ajoute beaucoup de features (badges, niveaux, mode écriture...), il faudra peut-être découper en modules ES6. Mais pas avant que ça devienne un vrai problème.

### Express minimal
Le serveur fait 3 choses :
1. Servir les fichiers statiques
2. `GET /api/progress/:user` — lire le JSON d'un utilisateur
3. `POST /api/progress/:user` — écrire le JSON d'un utilisateur
4. `GET /api/users` — lister les utilisateurs existants

Pas d'authentification, pas de base de données, pas de session. Les fichiers JSON dans `/data/` sont la "base de données".

**Limite** : pas de protection contre les écritures concurrentes, pas de validation des données, pas d'auth. Acceptable pour un usage personnel/petit groupe. Insuffisant si l'app devait scaler.

### Canvas natif pour les graphiques
Radar chart, heatmap, courbe de progression — tout est dessiné en Canvas 2D natif. Pas de Chart.js, pas de D3.

**Pourquoi ?** Les graphiques sont simples et statiques (pas d'interaction, pas de tooltips). Le code Canvas est plus léger qu'une librairie, et on contrôle exactement le rendu. Le style (couleurs, fonts) est cohérent avec le reste de l'app.

**Limite** : pas de responsive natif sur le canvas (le `max-width: 100%` CSS scale l'image mais pas la résolution). Sur écrans haute densité, le texte peut être un peu flou. Solution possible : multiplier les dimensions canvas par `devicePixelRatio`.

## Persistence

### Client
- `localStorage.sailinglish_user` : pseudo du dernier utilisateur connecté (auto-login)
- `progressCache` en mémoire : objet progress complet pendant la session

### Serveur
- `/data/{username}.json` : un fichier par utilisateur
- Structure : `{ terms: {}, sessions: [], streak: {} }`
- Chaque terme stocke : `correct`, `wrong`, `lastSeen`, `interval`, `ease`, `nextReview`

### Flux de sauvegarde
Le client envoie `progressCache` complet au serveur via `POST /api/progress/:user` après chaque session. C'est du "last write wins" — pas de merge, pas de diff. Simple mais potentiellement destructif en cas d'onglets multiples.

## Points d'attention

### Le fichier `app.js` contient les données
Les 187 termes sont hardcodés dans `app.js` sous forme de tableau `DATA`. C'est simple mais ça signifie que :
- Modifier le vocabulaire = modifier le code
- Pas d'import/export possible sans extraire les données
- Si on veut du contenu dynamique (API, fichier externe), il faut refactorer

Pour un import/export, il faudrait au minimum extraire `DATA` dans un `vocabulary.json` chargé au démarrage.

### SRS côté client uniquement
Tout le calcul SRS se fait côté client. Le serveur ne fait que stocker/restituer du JSON brut. Ça signifie que :
- Pas de notifications push possibles (le serveur ne sait pas quand revoir)
- Pas de "révision du jour" sans ouvrir l'app
- Le streak est calculé côté client — un utilisateur pourrait le falsifier

Pour des notifications, il faudrait un cron côté serveur + un système de notification (email, push API, ou intégration externe).

### Pas de PWA
L'app ne fonctionne pas offline. Pas de service worker, pas de manifest. Sur mobile, l'utilisateur doit ouvrir le navigateur à chaque fois.

Pour en faire une PWA :
1. Ajouter `manifest.json` (nom, icônes, couleurs)
2. Ajouter un service worker qui cache les assets statiques
3. La persistence JSON côté serveur complique l'offline — il faudrait un mode localStorage-first avec sync au retour en ligne

### Déploiement
Railway connecté au repo GitHub `quentinjaud/sailinglish`. Chaque push sur `master` déclenche un auto-deploy. Le dossier `/data/` est sur le filesystem Railway — **les données utilisateur sont perdues à chaque redéploiement** si Railway ne persiste pas le volume.

**Action possible** : vérifier si Railway persiste `/data/` entre les deploys. Sinon, migrer vers une vraie base (SQLite fichier, ou un service externe type Supabase/Firebase).

## Évolutions techniques possibles

### Court terme (peu d'effort)
- Extraire `DATA` dans `vocabulary.json`
- Ajouter `devicePixelRatio` aux canvas pour le rendu haute densité
- Ajouter un `.gitignore` pour `/data/` (les données utilisateur ne devraient pas être versionnées)

### Moyen terme
- PWA basique (manifest + service worker pour le cache)
- Mode écriture : input texte + Levenshtein pour la tolérance
- Découper `app.js` en modules si le fichier dépasse ~2000 lignes

### Long terme (si l'app grandit)
- Base de données réelle (SQLite ou Postgres via Railway)
- Auth basique (pour protéger les données et permettre le leaderboard)
- API pour les notifications de rappel
