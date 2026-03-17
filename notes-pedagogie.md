# Sailinglish — Notes pédagogiques

## Philosophie

L'objectif n'est pas d'apprendre l'anglais général mais le **vocabulaire technique de la voile** — celui qu'on utilise vraiment sur un bateau en équipage anglophone. L'app cible les francophones qui naviguent, pas les débutants en anglais.

## Choix de contenu

### 187 termes, 11 catégories
Le vocabulaire couvre ce dont on a besoin en situation réelle :
- **Bateau** : nommer les parties (bow, stern, helm...)
- **Gréement** : identifier et manipuler (halyard, sheet, cleat...)
- **Allures** : communiquer la direction du vent (close-hauled, beam reach...)
- **Manoeuvres** : comprendre et exécuter (tacking, jibing, reefing...)
- **Commandes** : réagir aux ordres du skipper ("Ready about!", "Ease the mainsheet"...)
- **Sécurité** : vocabulaire vital (MOB, mayday, pan-pan...)

Les commandes d'encadrement sont particulièrement importantes — c'est ce qu'on entend en premier quand on embarque sur un bateau anglophone.

### Hints
~60% des termes ont un indice contextuel en français. Le hint n'est pas une traduction — c'est une description fonctionnelle ("Cordage pour hisser une voile" pour halyard). Ça aide à ancrer le terme dans un usage concret plutôt que dans une simple correspondance FR→EN.

## Choix d'apprentissage

### Spaced Repetition (SM-2 simplifié)
- Chaque terme a un `interval` (jours avant prochaine révision), un `ease` (multiplicateur), et un `nextReview` (timestamp)
- Bonne réponse : interval passe de 0→1→6→ exponentiellement, ease augmente
- Mauvaise réponse : interval reset à 0, ease diminue (min 1.3)
- Un terme est "maîtrisé" quand correct >= 3 ET correct > wrong

Pourquoi SM-2 plutôt qu'un algo plus moderne (FSRS, etc.) ? Simplicité. Pour 187 termes, SM-2 est largement suffisant. La complexité algorithmique n'est pas le goulot d'étranglement — c'est la régularité de l'utilisateur.

### Révision du jour
- Filtre automatique des termes dont `nextReview <= maintenant`
- Cappée à 30 termes max pour éviter la surcharge cognitive
- Les termes jamais vus sont considérés comme "due" — sur un nouveau compte, les 187 termes sont proposés. Le cap à 30 rend ça gérable.

### Confusers (distracteurs intelligents)
**Problème identifié** : avec des distracteurs aléatoires de la même catégorie, le quiz est trop facile. "Comment dit-on proue ?" avec comme options Bow / Winch / Spinnaker / Bollard — c'est évident même sans connaître le terme.

**Solution** : chaque terme peut avoir un tableau `confusers` listant les traductions anglaises des termes sémantiquement proches. Le quiz pioche en priorité dedans.

Exemples de groupes confusants :
- **Allures** : Close-hauled / Close reach / Beam reach / Broad reach — se confondent facilement
- **Bords de voile** : Luff / Leech / Foot — trois côtés d'un triangle
- **Coins de voile** : Clew / Tack / Head — trois coins du même triangle
- **Câbles de mât** : Shroud / Forestay / Backstay — même fonction, positions différentes
- **Intensité du vent** : Gust / Squall / Gale / Storm — gradation subtile
- **Cross-catégorie** : Port (côté bâbord) vs Harbour/Port (le port) — même mot anglais, sens différents

### Trois modes complémentaires
- **Quiz** : teste la reconnaissance active (FR→EN) avec la pression du choix
- **Flashcards** : permet l'auto-évaluation honnête, révision des termes non sus
- **Match** : renforce les associations par paires, plus ludique

## Pistes de réflexion

### Mode écriture
Taper la réponse au clavier serait plus exigeant que le QCM. Questions ouvertes :
- Tolérance aux typos ? Levenshtein distance <= 2 ?
- Comment gérer les réponses multiples ? ("Helm / Tiller" — accepter les deux ?)
- Peut-être proposer seulement sur les termes déjà maîtrisés en QCM, comme un niveau supérieur ?

### Mode audio
Web Speech API pour la prononciation anglaise. Intéressant parce que le vocabulaire nautique anglais a des prononciations surprenantes (bowline = "bo-lin", gunwale = "gunnel", leeward = "loo-ard"). Mais la synthèse vocale les prononce-t-elle correctement ?

### Difficulté adaptative
Ajuster le nombre de distracteurs (3, 5, 7) selon le niveau de maîtrise de la catégorie ? Ou mélanger des confusers cross-catégorie pour les termes déjà bien maîtrisés ?

### Phrases en contexte
"Ease the mainsheet" est plus utile que "Mainsheet = écoute de GV" seul. Les commandes d'encadrement font déjà ça. Étendre aux autres catégories ?

### Gamification
Les badges et XP motivent la régularité mais risquent de transformer l'apprentissage en grind. Trouver le bon dosage : récompenser la maîtrise réelle (catégorie à 100%) plutôt que le volume (nombre de sessions).
