# Sailinglish

Apprends le vocabulaire de la voile en anglais.

**[sailinglish.up.railway.app](https://sailinglish.up.railway.app/)**

## Le projet

Sailinglish est une app web d'apprentissage du vocabulaire nautique anglais, pensée pour les francophones qui naviguent en équipage international ou préparent des certifications (RYA, ASA...).

187 termes couvrent 11 catégories : parties du bateau, gréement, allures, manoeuvres, noeuds, météo, port & mouillage, sécurité, vie à bord, navigation, commandes d'encadrement.

## Fonctionnalités

### Modes de jeu
- **Quiz** : QCM à 4 choix avec distracteurs intelligents (faux-amis sémantiques)
- **Flashcards** : retourne la carte, auto-révision des termes non maîtrisés
- **Match** : associe les paires français-anglais par groupes de 6
- **Révision du jour** : session automatique avec les termes à revoir (SRS)

### Apprentissage
- **Spaced Repetition (SM-2)** : intervalles croissants pour les termes maîtrisés, révision rapprochée pour les erreurs
- **Confusers** : les distracteurs du quiz sont choisis parmi les termes proches (Bow/Stern, Luff/Leech/Foot, Tacking/Jibing...) pour un apprentissage plus exigeant
- **Hints** : indices contextuels optionnels sur ~60% des termes

### Dashboard
- Stats globales : termes maîtrisés, streak, sessions jouées
- Radar chart de maîtrise par catégorie
- Heatmap d'activité (12 semaines, style GitHub)
- Courbe de progression temporelle
- Historique des 10 dernières sessions

### UX
- Raccourcis clavier : 1-4 (quiz), espace/flèches (flashcards)
- Animations : confetti (bonne réponse), shake (erreur), pulse, fade
- Multi-utilisateur avec sauvegarde de progression
- Thème sombre, responsive, police accessible (Atkinson Hyperlegible)

## Stack technique

- **Frontend** : HTML + CSS + vanilla JS (pas de framework)
- **Backend** : Express.js
- **Persistence** : fichiers JSON (`/data/{username}.json`)
- **Graphiques** : Canvas HTML5 natif
- **Déploiement** : Railway (auto-deploy sur push master)

## Lancer en local

```bash
npm install
npm start
# -> http://localhost:3000
```

## Licence

Projet personnel.
