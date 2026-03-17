# Sailinglish — Pistes d'amélioration

## 1. Enrichir les données trackées
- [x] **Historique des sessions** : stocker date, mode, catégorie, score de chaque session
- [x] **Streak** (série de jours consécutifs) : encourager la régularité
- [x] **Intervalles de spaced repetition** : stocker nextReview, interval, ease par terme

## 2. Spaced Repetition (SRS)
- [x] **Algorithme SM-2 simplifié** : intervalles croissants pour les termes maîtrisés, révision rapprochée pour les erreurs
- [ ] **Mode "Révision du jour"** : session automatique avec uniquement les termes à revoir aujourd'hui
- [ ] **Notification de rappel** : rappeler à l'utilisateur qu'il a des termes à revoir

## 3. Dashboard utilisateur
- [x] **Vue d'ensemble** : total de termes appris, score global, streak
- [x] **Radar chart par catégorie** : visualiser forces/faiblesses d'un coup d'œil (canvas)
- [x] **Historique des sessions** : liste des dernières sessions avec score et mode
- [x] **Heatmap calendrier** (style GitHub) : visualiser la régularité d'entraînement
- [ ] **Courbe de progression** : graphique temporel montrant l'évolution du nombre de termes maîtrisés

## 4. Gamification
- [ ] **Badges / jalons** : 10 termes maîtrisés, 1ère catégorie à 100%, streak de 7 jours, etc.
- [ ] **Niveaux** : système de niveaux basé sur l'XP accumulée
- [ ] **Classement** : leaderboard entre utilisateurs

## 5. Amélioration des modes de jeu
- [ ] **Mode écriture** : taper la réponse au clavier (pas de QCM)
- [ ] **Mode audio** : écouter la prononciation anglaise (Web Speech API)
- [ ] **Difficulté adaptative** : ajuster le nombre de distracteurs selon le niveau
- [ ] **Timer** : mode chronométré pour augmenter le challenge

## 6. UX / UI
- [ ] **Animations de feedback** : confettis sur bonne réponse, shake sur erreur
- [ ] **Mode sombre / clair** : toggle de thème
- [ ] **PWA** : installation sur mobile, fonctionnement offline
- [ ] **Raccourcis clavier** : 1-4 pour les réponses quiz, espace pour retourner la carte

## 7. Contenu
- [ ] **Import/export de vocabulaire** : permettre d'ajouter ses propres termes
- [ ] **Phrases en contexte** : exemples d'utilisation pour chaque terme
- [ ] **Images illustratives** : schéma du bateau avec les termes annotés
