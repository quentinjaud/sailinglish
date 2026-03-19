// ===================== DATA =====================
const DATA = [
  // --- LE BATEAU : Parties ---
  { fr: "La proue / l'avant", en: "Bow", cat: "boat", hint: "La partie avant du bateau", confusers: ["Stern", "Transom"] },
  { fr: "La poupe / l'arrière", en: "Stern", cat: "boat", hint: "La partie arrière", confusers: ["Bow", "Transom"] },
  { fr: "Bâbord", en: "Port", cat: "boat", hint: "Le côté gauche (en regardant vers l'avant)", confusers: ["Starboard", "Harbour / Port"] },
  { fr: "Tribord", en: "Starboard", cat: "boat", hint: "Le côté droit", confusers: ["Port", "Starboard tack"] },
  { fr: "La barre", en: "Helm / Tiller", cat: "boat", hint: "Ce qui permet de diriger", confusers: ["Rudder", "Helmsman"] },
  { fr: "Le gouvernail", en: "Rudder", cat: "boat", hint: "La pale immergée sous la barre", confusers: ["Helm / Tiller", "Keel"] },
  { fr: "La bôme", en: "Boom", cat: "boat", hint: "L'espar horizontal en bas de la grand-voile", confusers: ["Mast", "Vang / Kicking strap"] },
  { fr: "Le mât", en: "Mast", cat: "boat", hint: "Le poteau vertical qui porte les voiles", confusers: ["Boom", "Shroud"] },
  { fr: "La quille", en: "Keel", cat: "boat", hint: "L'aileron sous la coque", confusers: ["Centreboard / Daggerboard", "Rudder", "Bilge"] },
  { fr: "La coque", en: "Hull", cat: "boat", hint: "Le corps du bateau", confusers: ["Deck", "Bilge", "Planking / Topsides"] },
  { fr: "La dérive", en: "Centreboard / Daggerboard", cat: "boat", hint: "Plan anti-dérive rétractable", confusers: ["Keel", "Rudder"] },
  { fr: "Le cockpit", en: "Cockpit", cat: "boat", hint: "L'espace où se tient l'équipage", confusers: ["Deck", "Saloon"] },
  { fr: "Le pont", en: "Deck", cat: "boat", hint: "La surface supérieure du bateau", confusers: ["Hull", "Cockpit", "Freeboard"] },
  { fr: "Le tableau arrière", en: "Transom", cat: "boat", hint: "Surface plate à l'arrière", confusers: ["Stern", "Hull"] },
  { fr: "Les fonds", en: "Bilge", cat: "boat", hint: "Le fond intérieur de la coque", confusers: ["Hull", "Keel", "Draft / Draught"] },
  { fr: "Le bordé", en: "Planking / Topsides", cat: "boat", hint: "Revêtement extérieur de la coque", confusers: ["Hull", "Freeboard", "Deck"] },
  { fr: "La ligne de flottaison", en: "Waterline", cat: "boat", hint: "Limite eau/air sur la coque", confusers: ["Freeboard", "Draft / Draught"] },
  { fr: "Le franc-bord", en: "Freeboard", cat: "boat", hint: "Hauteur entre l'eau et le pont", confusers: ["Waterline", "Draft / Draught", "Deck"] },
  { fr: "Le tirant d'eau", en: "Draft / Draught", cat: "boat", hint: "Profondeur sous l'eau", confusers: ["Freeboard", "Waterline", "Keel"] },

  // --- LE BATEAU : Gréement ---
  { fr: "Le hauban", en: "Shroud", cat: "rigging", hint: "Câble latéral tenant le mât", confusers: ["Forestay", "Backstay"] },
  { fr: "L'étai", en: "Forestay", cat: "rigging", hint: "Câble avant tenant le mât", confusers: ["Backstay", "Shroud"] },
  { fr: "Le pataras", en: "Backstay", cat: "rigging", hint: "Câble arrière tenant le mât", confusers: ["Forestay", "Shroud"] },
  { fr: "La drisse", en: "Halyard", cat: "rigging", hint: "Cordage pour hisser une voile", confusers: ["Sheet", "Vang / Kicking strap"] },
  { fr: "L'écoute", en: "Sheet", cat: "rigging", hint: "Cordage pour régler l'angle de la voile", confusers: ["Halyard", "Traveller"] },
  { fr: "Le taquet", en: "Cleat", cat: "rigging", hint: "Pièce pour bloquer un cordage", confusers: ["Winch", "Block / Pulley", "Shackle"] },
  { fr: "Le winch", en: "Winch", cat: "rigging", hint: "Treuil pour reprendre un cordage", confusers: ["Cleat", "Block / Pulley"] },
  { fr: "La poulie", en: "Block / Pulley", cat: "rigging", hint: "Roue pour guider un cordage", confusers: ["Winch", "Shackle"] },
  { fr: "La grand-voile", en: "Mainsail", cat: "rigging", hint: "La voile principale, sur le mât", confusers: ["Jib / Genoa", "Spinnaker"] },
  { fr: "Le foc / génois", en: "Jib / Genoa", cat: "rigging", hint: "Voile d'avant", confusers: ["Mainsail", "Spinnaker"] },
  { fr: "Le spi / spinnaker", en: "Spinnaker", cat: "rigging", hint: "Grande voile légère pour le vent arrière", confusers: ["Jib / Genoa", "Mainsail"] },
  { fr: "Le hale-bas", en: "Vang / Kicking strap", cat: "rigging", hint: "Maintient la bôme vers le bas", confusers: ["Cunningham", "Halyard", "Boom"] },
  { fr: "Le cunningham", en: "Cunningham", cat: "rigging", hint: "Tension du guindant de la grand-voile", confusers: ["Vang / Kicking strap", "Luff"] },
  { fr: "Le guindant", en: "Luff", cat: "rigging", hint: "Bord d'attaque de la voile", confusers: ["Leech", "Foot"] },
  { fr: "La chute", en: "Leech", cat: "rigging", hint: "Bord de fuite de la voile", confusers: ["Luff", "Foot"] },
  { fr: "Le bordure", en: "Foot", cat: "rigging", hint: "Bord inférieur de la voile", confusers: ["Luff", "Leech"] },
  { fr: "Le point d'écoute", en: "Clew", cat: "rigging", hint: "Coin arrière-bas de la voile", confusers: ["Tack", "Head"] },
  { fr: "Le point d'amure", en: "Tack", cat: "rigging", hint: "Coin avant-bas de la voile", confusers: ["Clew", "Head", "Tacking"] },
  { fr: "Le point de drisse", en: "Head", cat: "rigging", hint: "Coin supérieur de la voile", confusers: ["Clew", "Tack"] },
  { fr: "La latte", en: "Batten", cat: "rigging", hint: "Raidisseur inséré dans la voile", confusers: ["Cunningham", "Leech"] },
  { fr: "Le chariot d'écoute", en: "Traveller", cat: "rigging", hint: "Rail de réglage de l'écoute de GV", confusers: ["Sheet", "Cleat"] },
  { fr: "La manille", en: "Shackle", cat: "rigging", hint: "Pièce en U pour connecter", confusers: ["Snap shackle", "Cleat"] },
  { fr: "Le mousqueton", en: "Snap shackle", cat: "rigging", hint: "Manille à ouverture rapide", confusers: ["Shackle", "Block / Pulley"] },

  // --- ALLURES & NAVIGATION ---
  { fr: "Au près / près serré", en: "Close-hauled", cat: "sailing", hint: "Navigation au plus près du vent", confusers: ["Close reach", "Beam reach", "Beating / Working to windward"] },
  { fr: "Au bon plein", en: "Close reach", cat: "sailing", hint: "Entre le près et le travers", confusers: ["Close-hauled", "Beam reach", "Broad reach"] },
  { fr: "Au travers", en: "Beam reach", cat: "sailing", hint: "Vent perpendiculaire au bateau", confusers: ["Close reach", "Broad reach"] },
  { fr: "Au largue", en: "Broad reach", cat: "sailing", hint: "Vent 3/4 arrière", confusers: ["Beam reach", "Running / Downwind", "Close reach"] },
  { fr: "Vent arrière / portant", en: "Running / Downwind", cat: "sailing", hint: "Vent venant de l'arrière", confusers: ["Broad reach", "Head to wind / In irons"] },
  { fr: "Face au vent / bout au vent", en: "Head to wind / In irons", cat: "sailing", hint: "Le bateau fait face au vent", confusers: ["Close-hauled", "Running / Downwind", "Windward"] },
  { fr: "Au vent", en: "Windward", cat: "sailing", hint: "Du côté d'où vient le vent", confusers: ["Leeward", "Head to wind / In irons"] },
  { fr: "Sous le vent", en: "Leeward", cat: "sailing", hint: "Du côté opposé au vent", confusers: ["Windward", "To drift / Leeway"] },
  { fr: "Tribord amures", en: "Starboard tack", cat: "sailing", hint: "Vent vient de tribord", confusers: ["Port tack", "Starboard"] },
  { fr: "Bâbord amures", en: "Port tack", cat: "sailing", hint: "Vent vient de bâbord", confusers: ["Starboard tack", "Port"] },
  { fr: "Remonter au vent", en: "Beating / Working to windward", cat: "sailing", hint: "Progresser face au vent en zigzag", confusers: ["Close-hauled", "Tacking", "Windward"] },
  { fr: "Faire route", en: "Making way", cat: "sailing", hint: "Avancer, avoir de l'erre", confusers: ["Way / Headway", "Heading / Course"] },
  { fr: "L'erre", en: "Way / Headway", cat: "sailing", hint: "Vitesse résiduelle du bateau", confusers: ["Making way", "To drift / Leeway"] },
  { fr: "Dériver", en: "To drift / Leeway", cat: "sailing", hint: "Se déplacer latéralement sous le vent", confusers: ["Leeward", "Way / Headway", "Centreboard / Daggerboard"] },

  // --- MANŒUVRES ---
  { fr: "Virement de bord", en: "Tacking", cat: "manoeuvres", hint: "Passer le nez du bateau face au vent", confusers: ["Jibing / Gybing", "Heading up / Luffing"] },
  { fr: "Empannage", en: "Jibing / Gybing", cat: "manoeuvres", hint: "Passer l'arrière du bateau dans le vent", confusers: ["Tacking", "Bearing away"] },
  { fr: "Mettre à la cape", en: "Heaving to", cat: "manoeuvres", hint: "Position d'attente, voiles contre", confusers: ["Reefing", "Head to wind / In irons"] },
  { fr: "Prendre un ris", en: "Reefing", cat: "manoeuvres", hint: "Réduire la surface de voile", confusers: ["Lowering / Dropping sails", "Heaving to"] },
  { fr: "Hisser les voiles", en: "Hoisting sails", cat: "manoeuvres", hint: "Monter les voiles", confusers: ["Lowering / Dropping sails", "Halyard"] },
  { fr: "Affaler / descendre les voiles", en: "Lowering / Dropping sails", cat: "manoeuvres", hint: "Descendre les voiles", confusers: ["Hoisting sails", "Reefing"] },
  { fr: "Lofer", en: "Heading up / Luffing", cat: "manoeuvres", hint: "Tourner vers le vent", confusers: ["Bearing away", "Tacking", "Luff"] },
  { fr: "Abattre", en: "Bearing away", cat: "manoeuvres", hint: "Tourner en s'éloignant du vent", confusers: ["Heading up / Luffing", "Jibing / Gybing"] },
  { fr: "Chavirer", en: "Capsizing", cat: "manoeuvres", hint: "Le bateau se retourne", confusers: ["To capsize (dinghy)", "To run aground"] },
  { fr: "Dessaler", en: "To capsize (dinghy)", cat: "manoeuvres", hint: "Chavirer en dériveur", confusers: ["Capsizing", "To run aground"] },
  { fr: "Accoster / s'amarrer", en: "Mooring / Docking", cat: "manoeuvres", hint: "Se mettre à quai", confusers: ["To cast off / To get underway", "To anchor"] },
  { fr: "Appareiller", en: "To cast off / To get underway", cat: "manoeuvres", hint: "Quitter le quai, partir", confusers: ["Mooring / Docking", "Making way"] },
  { fr: "Remorquer", en: "To tow", cat: "manoeuvres", hint: "Tirer un bateau derrière soi", confusers: ["To cast off / To get underway", "Mooring / Docking"] },
  { fr: "Échouer", en: "To run aground", cat: "manoeuvres", hint: "Toucher le fond", confusers: ["To refloat / To get off", "Capsizing"] },
  { fr: "Déséchouer", en: "To refloat / To get off", cat: "manoeuvres", hint: "Se remettre à flot après échouage", confusers: ["To run aground", "To tow"] },

  // --- NŒUDS ---
  { fr: "Nœud de chaise", en: "Bowline", cat: "knots", hint: "Boucle qui ne se serre pas" },
  { fr: "Nœud de taquet", en: "Cleat hitch", cat: "knots", hint: "Pour amarrer sur un taquet" },
  { fr: "Nœud de huit", en: "Figure-eight knot", cat: "knots", hint: "Nœud d'arrêt en bout de cordage" },
  { fr: "Nœud de cabestan", en: "Clove hitch", cat: "knots", hint: "Pour s'attacher à un poteau" },
  { fr: "Nœud plat", en: "Reef knot / Square knot", cat: "knots", hint: "Pour relier deux bouts de même diamètre" },
  { fr: "Tour mort et deux demi-clefs", en: "Round turn and two half hitches", cat: "knots", hint: "Amarrage solide à un anneau" },
  { fr: "Nœud de laguis", en: "Slipped reef knot", cat: "knots", hint: "Nœud plat facile à défaire" },

  // --- MÉTÉO & MER ---
  { fr: "Le vent", en: "Wind", cat: "weather", confusers: ["Breeze", "Gust"] },
  { fr: "La rafale", en: "Gust", cat: "weather", hint: "Renforcement brusque du vent", confusers: ["Squall", "Breeze", "Lull"] },
  { fr: "Le courant", en: "Current", cat: "weather", confusers: ["Tide", "Tidal stream / Tidal current"] },
  { fr: "La marée", en: "Tide", cat: "weather", confusers: ["Current", "Tidal range", "Swell"] },
  { fr: "La houle", en: "Swell", cat: "weather", confusers: ["Rough sea", "Tide"] },
  { fr: "La brise", en: "Breeze", cat: "weather", hint: "Vent léger", confusers: ["Gust", "Lull", "Wind"] },
  { fr: "Le grain", en: "Squall", cat: "weather", hint: "Coup de vent bref et violent", confusers: ["Gust", "Gale", "Storm"] },
  { fr: "Coup de vent", en: "Gale", cat: "weather", hint: "Vent fort (force 8)", confusers: ["Storm", "Squall", "Gust"] },
  { fr: "Tempête", en: "Storm", cat: "weather", hint: "Vent très fort (force 10)", confusers: ["Gale", "Squall"] },
  { fr: "La brume / le brouillard", en: "Mist / Fog", cat: "weather" },
  { fr: "L'accalmie", en: "Lull", cat: "weather", hint: "Période de vent faible entre deux rafales", confusers: ["Breeze", "Gust", "Calm sea"] },
  { fr: "Vent de terre", en: "Offshore wind", cat: "weather", hint: "Souffle de la terre vers la mer", confusers: ["Onshore wind"] },
  { fr: "Vent du large", en: "Onshore wind", cat: "weather", hint: "Souffle de la mer vers la terre", confusers: ["Offshore wind"] },
  { fr: "Le baromètre", en: "Barometer", cat: "weather" },
  { fr: "Marée haute / pleine mer", en: "High tide / High water", cat: "weather", confusers: ["Low tide / Low water", "Tidal range"] },
  { fr: "Marée basse / basse mer", en: "Low tide / Low water", cat: "weather", confusers: ["High tide / High water", "Tidal range"] },
  { fr: "Le marnage", en: "Tidal range", cat: "weather", hint: "Différence entre haute et basse mer", confusers: ["Tide", "Tidal stream / Tidal current"] },
  { fr: "Le courant de marée", en: "Tidal stream / Tidal current", cat: "weather", confusers: ["Current", "Tidal range", "Tide"] },
  { fr: "Mer agitée", en: "Rough sea", cat: "weather", confusers: ["Calm sea", "Swell", "Gale"] },
  { fr: "Mer calme", en: "Calm sea", cat: "weather", confusers: ["Rough sea", "Lull"] },
  { fr: "L'échelle de Beaufort", en: "Beaufort scale", cat: "weather", hint: "Échelle de force du vent" },

  // --- PORT & MOUILLAGE ---
  { fr: "Le port", en: "Harbour / Port", cat: "port", confusers: ["Marina", "Port"] },
  { fr: "Le quai", en: "Quay / Dock", cat: "port", confusers: ["Pontoon / Jetty", "Slipway / Boat ramp"] },
  { fr: "Le ponton", en: "Pontoon / Jetty", cat: "port", confusers: ["Quay / Dock", "Slipway / Boat ramp"] },
  { fr: "L'ancre", en: "Anchor", cat: "port", confusers: ["Anchor chain", "Anchorage", "To anchor"] },
  { fr: "Mouiller", en: "To anchor", cat: "port", hint: "Jeter l'ancre", confusers: ["Anchor", "Anchorage", "Mooring / Docking"] },
  { fr: "Le mouillage", en: "Anchorage", cat: "port", hint: "Zone où l'on mouille", confusers: ["To anchor", "Marina", "Harbour / Port"] },
  { fr: "La chaîne d'ancre", en: "Anchor chain", cat: "port", confusers: ["Anchor", "Mooring line"] },
  { fr: "L'amarre", en: "Mooring line", cat: "port", hint: "Cordage d'amarrage", confusers: ["Anchor chain", "Sheet", "Mooring buoy"] },
  { fr: "Le bollard / la bitte", en: "Bollard", cat: "port", hint: "Poteau d'amarrage sur le quai", confusers: ["Cleat", "Fender"] },
  { fr: "La bouée", en: "Buoy", cat: "port", confusers: ["Mooring buoy", "Lifebuoy / Life ring", "Beacon / Mark"] },
  { fr: "La bouée de corps-mort", en: "Mooring buoy", cat: "port", confusers: ["Buoy", "Lifebuoy / Life ring"] },
  { fr: "Le pare-battage", en: "Fender", cat: "port", hint: "Protection entre bateau et quai", confusers: ["Bollard", "Buoy"] },
  { fr: "La capitainerie", en: "Harbour master's office", cat: "port" },
  { fr: "La cale de mise à l'eau", en: "Slipway / Boat ramp", cat: "port", confusers: ["Quay / Dock", "Pontoon / Jetty"] },
  { fr: "La marina", en: "Marina", cat: "port", confusers: ["Harbour / Port", "Anchorage"] },
  { fr: "L'écluse", en: "Lock", cat: "port", hint: "Sas pour changer de niveau d'eau" },

  // --- SÉCURITÉ ---
  { fr: "Le gilet de sauvetage", en: "Life jacket / Life vest", cat: "safety", confusers: ["Lifebuoy / Life ring", "Life raft", "Safety harness"] },
  { fr: "Homme à la mer", en: "Man overboard (MOB)", cat: "safety", confusers: ["Mayday", "Pan-pan"] },
  { fr: "La bouée couronne", en: "Lifebuoy / Life ring", cat: "safety", confusers: ["Life jacket / Life vest", "Life raft", "Buoy"] },
  { fr: "Le radeau de survie", en: "Life raft", cat: "safety", confusers: ["Lifebuoy / Life ring", "Life jacket / Life vest"] },
  { fr: "La fusée de détresse", en: "Distress flare", cat: "safety", confusers: ["Handheld flare", "Smoke signal"] },
  { fr: "Le feu à main", en: "Handheld flare", cat: "safety", confusers: ["Distress flare", "Smoke signal"] },
  { fr: "Le fumigène", en: "Smoke signal", cat: "safety", confusers: ["Distress flare", "Handheld flare"] },
  { fr: "La VHF", en: "VHF radio", cat: "safety", confusers: ["Mayday", "Pan-pan"] },
  { fr: "Mayday", en: "Mayday", cat: "safety", hint: "Appel de détresse vital", confusers: ["Pan-pan", "Man overboard (MOB)"] },
  { fr: "Pan-pan", en: "Pan-pan", cat: "safety", hint: "Appel d'urgence non vital", confusers: ["Mayday", "Man overboard (MOB)"] },
  { fr: "Le harnais", en: "Safety harness", cat: "safety", confusers: ["Life jacket / Life vest", "Jackline / Safety line"] },
  { fr: "La ligne de vie", en: "Jackline / Safety line", cat: "safety", confusers: ["Safety harness", "Mooring line"] },
  { fr: "Le coupe-circuit", en: "Kill cord / Kill switch", cat: "safety", hint: "Arrêt moteur d'urgence" },
  { fr: "Écoper", en: "To bail out", cat: "safety", hint: "Vider l'eau du bateau", confusers: ["Leak", "Bilge"] },
  { fr: "La voie d'eau", en: "Leak", cat: "safety", hint: "Entrée d'eau dans la coque", confusers: ["To bail out", "Bilge"] },

  // --- VIE À BORD ---
  { fr: "L'équipage", en: "Crew", cat: "life" },
  { fr: "Le skipper / chef de bord", en: "Skipper", cat: "life" },
  { fr: "L'équipier", en: "Crew member", cat: "life" },
  { fr: "Le barreur", en: "Helmsman", cat: "life" },
  { fr: "Le quart", en: "Watch", cat: "life", hint: "Période de veille en navigation" },
  { fr: "La cambuse", en: "Galley stores", cat: "life", hint: "Provisions de bord" },
  { fr: "La cuisine / le carré cuisine", en: "Galley", cat: "life", hint: "La cuisine du bateau" },
  { fr: "Le carré", en: "Saloon", cat: "life", hint: "Pièce à vivre du bateau" },
  { fr: "La couchette", en: "Berth / Bunk", cat: "life", hint: "Le lit du bateau" },
  { fr: "Le mal de mer", en: "Seasickness", cat: "life" },
  { fr: "Tribordais", en: "Starboard watch", cat: "life", hint: "L'équipe de quart tribord" },
  { fr: "Bâbordais", en: "Port watch", cat: "life", hint: "L'équipe de quart bâbord" },
  { fr: "Les cabinets / les toilettes", en: "Head", cat: "life", hint: "Les toilettes du bateau" },
  { fr: "Le mouillé", en: "Wet locker", cat: "life", hint: "Casier pour les vêtements mouillés" },

  // --- NAVIGATION ---
  { fr: "La carte marine", en: "Chart", cat: "navigation" },
  { fr: "Le compas", en: "Compass", cat: "navigation" },
  { fr: "Le cap", en: "Heading / Course", cat: "navigation" },
  { fr: "Le relèvement", en: "Bearing", cat: "navigation", hint: "Angle vers un point de référence" },
  { fr: "Le loch", en: "Log", cat: "navigation", hint: "Instrument mesurant la vitesse/distance" },
  { fr: "Le sondeur", en: "Depth sounder / Echo sounder", cat: "navigation" },
  { fr: "Le GPS", en: "GPS", cat: "navigation" },
  { fr: "La latitude", en: "Latitude", cat: "navigation" },
  { fr: "La longitude", en: "Longitude", cat: "navigation" },
  { fr: "Le nœud (vitesse)", en: "Knot", cat: "navigation", hint: "Unité de vitesse : 1 mille nautique/heure" },
  { fr: "Le mille nautique", en: "Nautical mile", cat: "navigation", hint: "1852 mètres" },
  { fr: "Le phare", en: "Lighthouse", cat: "navigation" },
  { fr: "La balise", en: "Beacon / Mark", cat: "navigation" },
  { fr: "Le chenal", en: "Channel / Fairway", cat: "navigation", hint: "Passage navigable balisé" },
  { fr: "Les hauts-fonds", en: "Shoals / Shallows", cat: "navigation", hint: "Zones peu profondes" },
  { fr: "L'amer", en: "Landmark / Seamark", cat: "navigation", hint: "Point de repère visible depuis la mer" },

  // --- COMMANDES D'ENCADREMENT ---
  { fr: "Paré à virer !", en: "Ready about!", cat: "commands", hint: "Prévenir l'équipage avant un virement" },
  { fr: "On vire !", en: "Helm's a-lee! / Tacking!", cat: "commands", hint: "Annoncer le virement" },
  { fr: "Paré à empanner !", en: "Stand by to jibe!", cat: "commands", hint: "Prévenir avant un empannage" },
  { fr: "On empanne !", en: "Jibe ho!", cat: "commands", hint: "Annoncer l'empannage" },
  { fr: "Choque l'écoute de grand-voile", en: "Ease the mainsheet", cat: "commands", hint: "Relâcher l'écoute de GV" },
  { fr: "Borde l'écoute de foc", en: "Trim the jib", cat: "commands", hint: "Reprendre l'écoute de foc" },
  { fr: "Borde !", en: "Trim! / Sheet in!", cat: "commands", hint: "Tirer sur l'écoute pour tendre la voile" },
  { fr: "Choque !", en: "Ease! / Let out!", cat: "commands", hint: "Relâcher l'écoute" },
  { fr: "Abats !", en: "Bear away!", cat: "commands", hint: "Tourner pour s'éloigner du vent" },
  { fr: "Lofe !", en: "Head up!", cat: "commands", hint: "Tourner vers le vent" },
  { fr: "Tiens le cap !", en: "Hold your course! / Steady!", cat: "commands", hint: "Maintenir la direction actuelle" },
  { fr: "Homme à la mer !", en: "Man overboard! (MOB)", cat: "commands", hint: "Quelqu'un est tombé à l'eau" },
  { fr: "Largue la drisse !", en: "Release the halyard!", cat: "commands", hint: "Lâcher la drisse pour descendre la voile" },
  { fr: "Hisse !", en: "Hoist! / Haul away!", cat: "commands", hint: "Monter la voile" },
  { fr: "Étarque !", en: "Tension! / Haul tight!", cat: "commands", hint: "Mettre le cordage sous tension" },
  { fr: "Attention à la bôme !", en: "Watch the boom! / Heads up!", cat: "commands", hint: "La bôme va passer, baissez la tête" },
  { fr: "Pare-à-mouiller !", en: "Stand by to anchor!", cat: "commands", hint: "Se préparer à jeter l'ancre" },
  { fr: "Mouille !", en: "Let go the anchor! / Drop anchor!", cat: "commands", hint: "Jeter l'ancre" },
  { fr: "Rappel !", en: "Hike out! / Lean out!", cat: "commands", hint: "Se pencher au vent pour contrebalancer" },
  { fr: "Tout le monde au rappel !", en: "All hands hike out!", cat: "commands", hint: "Tout l'équipage au rappel" },
  { fr: "Au vent !", en: "Windward side!", cat: "commands", hint: "Allez du côté au vent" },
  { fr: "Sous le vent !", en: "Leeward side!", cat: "commands", hint: "Allez du côté sous le vent" },
  { fr: "On rentre au port", en: "We're heading back to port", cat: "commands", hint: "Retour vers le port" },
  { fr: "Mets ton gilet !", en: "Put your life jacket on!", cat: "commands", hint: "Sécurité : porter le gilet de sauvetage" },
  { fr: "Tiens-toi bien !", en: "Hold on tight!", cat: "commands", hint: "S'accrocher, ça va bouger" },
  { fr: "Prends la barre", en: "Take the helm", cat: "commands", hint: "Prendre le contrôle de la direction" },
  { fr: "Largue tout !", en: "Let everything go!", cat: "commands", hint: "Lâcher toutes les écoutes (urgence)" },
];

const MAX_QUIZ_SIZE = 20;

// Category metadata
const CATEGORIES = {
  all:        { label: "Tout",          icon: "" },
  boat:       { label: "Bateau",        icon: "" },
  rigging:    { label: "Gréement",      icon: "" },
  sailing:    { label: "Allures",       icon: "" },
  manoeuvres: { label: "Manœuvres",     icon: "" },
  knots:      { label: "Nœuds",         icon: "" },
  weather:    { label: "Météo",         icon: "" },
  port:       { label: "Port",          icon: "" },
  safety:     { label: "Sécurité",      icon: "" },
  life:       { label: "Vie à bord",    icon: "" },
  navigation: { label: "Navigation",    icon: "" },
  commands:   { label: "Commandes",     icon: "" },
};

// ===================== PERSISTENCE =====================
let currentUser = null;
let progressCache = {};
// progressCache structure:
// {
//   terms: { "French Term": { correct, wrong, lastSeen, interval, ease, nextReview } },
//   sessions: [ { date, mode, cat, correct, wrong, total, duration } ],
//   streak: { current, best, lastDate }
// }

function ensureProgressStructure() {
  if (!progressCache.terms) {
    // Migrate old flat format
    const oldTerms = {};
    Object.keys(progressCache).forEach(key => {
      if (key !== 'terms' && key !== 'sessions' && key !== 'streak') {
        oldTerms[key] = progressCache[key];
      }
    });
    progressCache = {
      terms: Object.keys(oldTerms).length > 0 ? oldTerms : {},
      sessions: progressCache.sessions || [],
      streak: progressCache.streak || { current: 0, best: 0, lastDate: null }
    };
  }
  if (!progressCache.sessions) progressCache.sessions = [];
  if (typeof progressCache.notes !== 'string') progressCache.notes = '';
  if (!progressCache.streak) progressCache.streak = { current: 0, best: 0, lastDate: null };
}

// Spaced Repetition (SM-2 simplified)
// interval: days until next review
// ease: multiplier (starts at 2.5, min 1.3)
// nextReview: timestamp of when to review
function updateSRS(termData, correct) {
  if (!termData.interval) termData.interval = 0;
  if (!termData.ease) termData.ease = 2.5;

  if (correct) {
    if (termData.interval === 0) {
      termData.interval = 1;
    } else if (termData.interval === 1) {
      termData.interval = 6;
    } else {
      termData.interval = Math.round(termData.interval * termData.ease);
    }
    termData.ease = Math.max(1.3, termData.ease + 0.1);
  } else {
    termData.interval = 0;
    termData.ease = Math.max(1.3, termData.ease - 0.2);
  }
  termData.nextReview = Date.now() + termData.interval * 24 * 60 * 60 * 1000;
}

function updateStreak() {
  const streak = progressCache.streak;
  const today = new Date().toISOString().slice(0, 10);
  if (streak.lastDate === today) return; // Already counted today

  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  if (streak.lastDate === yesterday) {
    streak.current++;
  } else {
    streak.current = 1;
  }
  streak.best = Math.max(streak.best, streak.current);
  streak.lastDate = today;
}

let sessionStartTime = null;

async function login() {
  const input = document.getElementById('loginInput');
  const name = input.value.trim().replace(/[^a-zA-Z0-9_-]/g, '');
  if (!name) return;
  currentUser = name;
  localStorage.setItem('sailinglish_user', name);

  // Load progress from server
  try {
    const res = await fetch(`/api/progress/${currentUser}`);
    progressCache = await res.json();
  } catch {
    progressCache = {};
  }
  ensureProgressStructure();

  document.getElementById('loginScreen').classList.add('hidden');
  document.getElementById('menu').classList.remove('hidden');
  document.getElementById('userLabel').textContent = currentUser;
  updateMastery();
  updateDailyReviewCount();
}

function logout() {
  currentUser = null;
  localStorage.removeItem('sailinglish_user');
  document.getElementById('menu').classList.add('hidden');
  document.getElementById('dashboard').classList.add('hidden');
  document.getElementById('loginScreen').classList.remove('hidden');
  document.getElementById('loginInput').value = '';
  loadExistingUsers();
}

// Load existing users into login screen
async function loadExistingUsers() {
  try {
    const res = await fetch('/api/users');
    const users = await res.json();
    const container = document.getElementById('existingUsers');
    container.innerHTML = '';
    if (users.length > 0) {
      document.getElementById('existingLabel').classList.remove('hidden');
      users.forEach(name => {
        const chip = document.createElement('button');
        chip.className = 'user-chip';
        chip.textContent = name;
        chip.onclick = () => {
          document.getElementById('loginInput').value = name;
          login();
        };
        container.appendChild(chip);
      });
    }
  } catch {}
}

// Auto-login if user was previously set
async function autoLogin() {
  const saved = localStorage.getItem('sailinglish_user');
  if (saved) {
    document.getElementById('loginInput').value = saved;
    await login();
  } else {
    loadExistingUsers();
  }
}

function saveProgressToServer() {
  if (!currentUser) return;
  fetch(`/api/progress/${currentUser}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(progressCache)
  }).catch(() => {});
}

function recordAnswer(termFr, correct) {
  ensureProgressStructure();
  if (!progressCache.terms[termFr]) progressCache.terms[termFr] = { correct: 0, wrong: 0, lastSeen: 0, interval: 0, ease: 2.5, nextReview: 0 };
  const t = progressCache.terms[termFr];
  if (correct) t.correct++;
  else t.wrong++;
  t.lastSeen = Date.now();
  updateSRS(t, correct);
  saveProgressToServer();
}

function recordSession(mode, cat, correct, wrong, total) {
  ensureProgressStructure();
  updateStreak();
  progressCache.sessions.push({
    date: new Date().toISOString(),
    mode: mode,
    cat: cat,
    correct: correct,
    wrong: wrong,
    total: total,
    duration: sessionStartTime ? Math.round((Date.now() - sessionStartTime) / 1000) : 0
  });
  // Keep last 100 sessions max
  if (progressCache.sessions.length > 100) {
    progressCache.sessions = progressCache.sessions.slice(-100);
  }
  saveProgressToServer();
}

function getMastery(filterCat) {
  ensureProgressStructure();
  const items = filterCat === 'all' ? DATA : DATA.filter(d => d.cat === filterCat);
  if (items.length === 0) return 0;
  let mastered = 0;
  items.forEach(item => {
    const p = progressCache.terms[item.fr];
    if (p && p.correct >= 3 && p.correct > p.wrong) mastered++;
  });
  return Math.round((mastered / items.length) * 100);
}

function sortByWeakness(items) {
  ensureProgressStructure();
  const now = Date.now();
  return [...items].sort((a, b) => {
    const pa = progressCache.terms[a.fr] || { correct: 0, wrong: 0, lastSeen: 0, nextReview: 0 };
    const pb = progressCache.terms[b.fr] || { correct: 0, wrong: 0, lastSeen: 0, nextReview: 0 };
    // Priority: items due for review (nextReview <= now) come first
    const aDue = pa.nextReview <= now ? 0 : 1;
    const bDue = pb.nextReview <= now ? 0 : 1;
    if (aDue !== bDue) return aDue - bDue;
    // Then by score (weakest first)
    const scoreA = pa.correct - pa.wrong;
    const scoreB = pb.correct - pb.wrong;
    if (scoreA !== scoreB) return scoreA - scoreB;
    return pa.lastSeen - pb.lastSeen;
  });
}

function getTermsDueForReview() {
  ensureProgressStructure();
  const now = Date.now();
  return DATA.filter(item => {
    const p = progressCache.terms[item.fr];
    if (!p) return true; // Never seen = due
    return p.nextReview <= now;
  });
}

// ===================== STATE =====================
let selectedMode = null;
let selectedCat = null;
let currentData = [];
let currentIndex = 0;
let goodCount = 0;
let badCount = 0;
let answered = false;

// Flashcard state
let flashcardDeck = [];
let reviewDeck = [];
let cardFlipped = false;
let cardTransitioning = false;

// Match state
let matchItems = [];
let matchRound = 0;
let matchSelectedFr = null;
let matchSelectedEn = null;
let matchPairsLeft = 0;

// Write state
let writeAnswered = false;

// ===================== INIT =====================
function initCatChips() {
  const container = document.getElementById('catChips');
  container.innerHTML = '';
  Object.keys(CATEGORIES).forEach(key => {
    const btn = document.createElement('button');
    btn.className = 'btn';
    btn.dataset.cat = key;
    const count = key === 'all' ? DATA.length : DATA.filter(d => d.cat === key).length;
    btn.textContent = `${CATEGORIES[key].label} (${count})`;
    btn.onclick = () => selectCategory(key);
    container.appendChild(btn);
  });
}

initCatChips();

// Login on Enter key
document.getElementById('loginInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') login();
});

// Auto-login
autoLogin();

// ===================== MENU =====================
function selectMode(mode) {
  selectedMode = mode;
  document.querySelectorAll('[data-mode]').forEach(b => b.classList.toggle('active', b.dataset.mode === mode));
  updateStartBtn();
}

function selectCategory(cat) {
  selectedCat = cat;
  document.querySelectorAll('[data-cat]').forEach(b => b.classList.toggle('active', b.dataset.cat === cat));
  updateStartBtn();
  updateMastery();
}

function updateStartBtn() {
  document.getElementById('startBtn').disabled = !(selectedMode && selectedCat);
}

function updateMastery() {
  const section = document.getElementById('masterySection');
  if (!selectedCat) { section.classList.add('hidden'); return; }
  const pct = getMastery(selectedCat);
  section.classList.remove('hidden');
  document.getElementById('masteryLabel').textContent = `${pct} % maîtrisé`;
  document.getElementById('masteryFill').style.width = `${pct}%`;
}

// ===================== GAME START =====================
function startGame() {
  currentData = DATA.filter(d => selectedCat === 'all' || d.cat === selectedCat);
  currentData = sortByWeakness(currentData).slice(0, MAX_QUIZ_SIZE);
  launchGame(currentData);
}

function startDailyReview() {
  const dueTerms = getTermsDueForReview();
  if (dueTerms.length === 0) {
    const msg = document.getElementById('dailyReviewMsg');
    msg.classList.remove('hidden');
    setTimeout(() => msg.classList.add('hidden'), 3000);
    return;
  }
  selectedMode = 'quiz';
  selectedCat = 'review';
  currentData = sortByWeakness(dueTerms).slice(0, 30);
  launchGame(currentData);
}

function updateDailyReviewCount() {
  const count = getTermsDueForReview().length;
  document.getElementById('dailyReviewCount').textContent = count > 0 ? count : '';
}

function launchGame(items) {
  currentData = items;
  currentIndex = 0;
  goodCount = 0;
  badCount = 0;
  sessionStartTime = Date.now();

  document.getElementById('menu').classList.add('hidden');
  document.getElementById('endScreen').classList.add('hidden');
  document.getElementById('game').classList.remove('hidden');

  // Hide all mode areas
  document.getElementById('quizArea').classList.add('hidden');
  document.getElementById('flashcardArea').classList.add('hidden');
  document.getElementById('matchArea').classList.add('hidden');
  document.getElementById('writeArea').classList.add('hidden');

  updateScoreBar();

  if (selectedMode === 'quiz') {
    document.getElementById('quizArea').classList.remove('hidden');
    showQuestion();
  } else if (selectedMode === 'flashcard') {
    document.getElementById('flashcardArea').classList.remove('hidden');
    flashcardDeck = [...currentData];
    reviewDeck = [];
    showFlashcard();
  } else if (selectedMode === 'match') {
    document.getElementById('matchArea').classList.remove('hidden');
    matchRound = 0;
    startMatchRound();
  } else if (selectedMode === 'write') {
    document.getElementById('writeArea').classList.remove('hidden');
    showWriteQuestion();
  }
}

// ===================== QUIZ =====================
function showQuestion() {
  if (currentIndex >= currentData.length) { endGame(); return; }

  answered = false;
  const item = currentData[currentIndex];

  document.getElementById('questionText').textContent = item.fr;
  const hintEl = document.getElementById('questionHint');
  if (item.hint) {
    hintEl.textContent = item.hint;
    hintEl.classList.remove('hidden');
  } else {
    hintEl.classList.add('hidden');
  }

  // Generate 4 options (1 correct + 3 distractors, preferring confusers)
  const distractors = [];
  if (item.confusers && item.confusers.length > 0) {
    const shuffledConfusers = [...item.confusers];
    shuffle(shuffledConfusers);
    shuffledConfusers.forEach(c => {
      if (distractors.length < 3 && c !== item.en) distractors.push(c);
    });
  }
  if (distractors.length < 3) {
    const pool = DATA.filter(d => d.en !== item.en && !distractors.includes(d.en) && (selectedCat === 'all' || d.cat === item.cat));
    shuffle(pool);
    pool.forEach(d => { if (distractors.length < 3) distractors.push(d.en); });
  }
  const options = [item.en, ...distractors];
  shuffle(options);

  const grid = document.getElementById('optionsGrid');
  grid.innerHTML = '';
  options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.dataset.key = i + 1;
    btn.textContent = opt;
    btn.onclick = () => answerQuiz(btn, opt, item.en);
    grid.appendChild(btn);
  });

  document.getElementById('nextBtn').classList.add('hidden');
}

function answerQuiz(btn, selected, correct) {
  if (answered) return;
  answered = true;

  const item = currentData[currentIndex];
  const isCorrect = selected === correct;
  if (isCorrect) {
    goodCount++;
    btn.classList.add('correct');
    spawnConfetti(btn);
  } else {
    badCount++;
    btn.classList.add('wrong');
    const qCard = document.querySelector('.question-card');
    qCard.classList.add('shake');
    setTimeout(() => qCard.classList.remove('shake'), 400);
    document.querySelectorAll('.option-btn').forEach(b => {
      if (b.textContent === correct) b.classList.add('correct');
    });
  }
  recordAnswer(item.fr, isCorrect);

  document.querySelectorAll('.option-btn').forEach(b => b.classList.add('disabled'));
  currentIndex++;
  updateScoreBar();
  document.getElementById('nextBtn').classList.remove('hidden');
}

function nextQuestion() {
  showQuestion();
}

// ===================== FLASHCARD =====================
function showFlashcard() {
  if (flashcardDeck.length === 0) {
    if (reviewDeck.length > 0) {
      flashcardDeck = [...reviewDeck];
      shuffle(flashcardDeck);
      reviewDeck = [];
    } else {
      endGame();
      return;
    }
  }

  const card = document.getElementById('flashcard');
  const wasFlipped = cardFlipped;
  cardFlipped = false;
  cardTransitioning = true;

  function loadNextContent() {
    const item = flashcardDeck[0];
    document.getElementById('cardFront').textContent = item.fr;
    document.getElementById('cardBack').textContent = item.en;

    const hintEl = document.getElementById('cardHint');
    if (item.hint) {
      hintEl.textContent = item.hint;
      hintEl.classList.remove('hidden');
    } else {
      hintEl.classList.add('hidden');
    }

    const remaining = flashcardDeck.length + reviewDeck.length;
    document.getElementById('flashcardProgress').textContent =
      `${goodCount} maîtrisé(s) · ${remaining} restante(s) · ${reviewDeck.length} à revoir`;
    cardTransitioning = false;
  }

  if (wasFlipped) {
    card.classList.remove('flipped');
    setTimeout(loadNextContent, 520);
  } else {
    loadNextContent();
  }
}

function flipCard() {
  if (cardTransitioning) return;
  cardFlipped = !cardFlipped;
  document.getElementById('flashcard').classList.toggle('flipped', cardFlipped);
}

function flashcardAnswer(knew) {
  if (cardTransitioning) return;
  const item = flashcardDeck.shift();
  if (knew) {
    goodCount++;
  } else {
    badCount++;
    reviewDeck.push(item);
  }
  recordAnswer(item.fr, knew);
  currentIndex++;
  updateScoreBar();
  showFlashcard();
}

// ===================== MATCH =====================
const MATCH_SIZE = 6;

function startMatchRound() {
  const start = matchRound * MATCH_SIZE;
  if (start >= currentData.length) { endGame(); return; }

  matchItems = currentData.slice(start, start + MATCH_SIZE);
  matchPairsLeft = matchItems.length;
  matchSelectedFr = null;
  matchSelectedEn = null;

  const colFr = document.getElementById('matchColFr');
  const colEn = document.getElementById('matchColEn');
  colFr.innerHTML = '';
  colEn.innerHTML = '';

  // Shuffle EN column independently
  const shuffledEn = shuffle([...matchItems]);

  matchItems.forEach((item, i) => {
    const cardFr = document.createElement('div');
    cardFr.className = 'match-card';
    cardFr.textContent = item.fr;
    cardFr.dataset.fr = item.fr;
    cardFr.onclick = () => selectMatchFr(cardFr);
    colFr.appendChild(cardFr);
  });

  shuffledEn.forEach((item, i) => {
    const cardEn = document.createElement('div');
    cardEn.className = 'match-card';
    cardEn.textContent = item.en;
    cardEn.dataset.en = item.en;
    cardEn.dataset.fr = item.fr; // the correct FR match
    cardEn.onclick = () => selectMatchEn(cardEn);
    colEn.appendChild(cardEn);
  });

  document.getElementById('matchInfo').textContent =
    `Associe les paires · ${start + 1}–${Math.min(start + MATCH_SIZE, currentData.length)} sur ${currentData.length}`;
}

function selectMatchFr(card) {
  if (card.classList.contains('matched')) return;
  // Deselect previous
  document.querySelectorAll('#matchColFr .match-card.selected').forEach(c => c.classList.remove('selected'));
  card.classList.add('selected');
  matchSelectedFr = card;
  tryMatch();
}

function selectMatchEn(card) {
  if (card.classList.contains('matched')) return;
  document.querySelectorAll('#matchColEn .match-card.selected').forEach(c => c.classList.remove('selected'));
  card.classList.add('selected');
  matchSelectedEn = card;
  tryMatch();
}

function tryMatch() {
  if (!matchSelectedFr || !matchSelectedEn) return;

  const frText = matchSelectedFr.dataset.fr;
  const correctFr = matchSelectedEn.dataset.fr;

  if (frText === correctFr) {
    // Correct match
    matchSelectedFr.classList.remove('selected');
    matchSelectedEn.classList.remove('selected');
    matchSelectedFr.classList.add('matched');
    matchSelectedEn.classList.add('matched');
    goodCount++;
    recordAnswer(frText, true);
    currentIndex++;
    matchPairsLeft--;
    updateScoreBar();

    if (matchPairsLeft === 0) {
      matchRound++;
      setTimeout(() => startMatchRound(), 600);
    }
  } else {
    // Wrong match
    badCount++;
    recordAnswer(frText, false);
    currentIndex++;
    updateScoreBar();

    const fr = matchSelectedFr;
    const en = matchSelectedEn;
    fr.classList.add('wrong-flash');
    en.classList.add('wrong-flash');
    fr.classList.remove('selected');
    en.classList.remove('selected');

    setTimeout(() => {
      fr.classList.remove('wrong-flash');
      en.classList.remove('wrong-flash');
    }, 500);
  }

  matchSelectedFr = null;
  matchSelectedEn = null;
}

// ===================== SCORE & END =====================
function updateScoreBar() {
  document.getElementById('goodScore').textContent = '✓ ' + goodCount;
  document.getElementById('badScore').textContent = '✗ ' + badCount;
  document.getElementById('totalScore').textContent = currentIndex + ' / ' + currentData.length;
}

function endGame() {
  document.getElementById('game').classList.add('hidden');
  document.getElementById('endScreen').classList.remove('hidden');

  recordSession(selectedMode, selectedCat, goodCount, badCount, currentData.length);

  const pct = currentData.length > 0 ? Math.round((goodCount / currentData.length) * 100) : 0;
  document.getElementById('endStats').innerHTML =
    `<span class="good">✓ ${goodCount} bonne(s)</span><br>` +
    `<span class="bad">✗ ${badCount} erreur(s)</span><br>` +
    `Score : <strong>${pct}%</strong>`;
}

function backToMenu() {
  document.getElementById('game').classList.add('hidden');
  document.getElementById('endScreen').classList.add('hidden');
  document.getElementById('menu').classList.remove('hidden');
  updateMastery();
  updateDailyReviewCount();
}

// ===================== DASHBOARD =====================
function showDashboard() {
  document.getElementById('menu').classList.add('hidden');
  document.getElementById('dashboard').classList.remove('hidden');
  renderDashboard();
}

function closeDashboard() {
  document.getElementById('dashboard').classList.add('hidden');
  document.getElementById('menu').classList.remove('hidden');
  updateMastery();
  updateDailyReviewCount();
}

function renderDashboard() {
  ensureProgressStructure();

  // Stats cards
  let mastered = 0;
  const now = Date.now();
  let due = 0, learning = 0, known = 0;
  DATA.forEach(item => {
    const p = progressCache.terms[item.fr];
    if (p && p.correct >= 3 && p.correct > p.wrong) mastered++;
    if (!p || p.nextReview <= now) {
      due++;
    } else if (p.interval >= 21) {
      known++;
    } else {
      learning++;
    }
  });

  document.getElementById('dashMastered').textContent = mastered;
  document.getElementById('dashStreak').textContent = progressCache.streak.current || 0;
  document.getElementById('dashSessions').textContent = progressCache.sessions.length;
  document.getElementById('srsDue').textContent = due;
  document.getElementById('srsLearning').textContent = learning;
  document.getElementById('srsKnown').textContent = known;

  // Radar chart
  drawRadarChart();

  // Heatmap
  drawHeatmap();

  // Progress curve
  drawProgressCurve();

  // Session list
  renderSessionList();

  // Notes
  document.getElementById('userNotes').value = progressCache.notes || '';
}

function saveNotes() {
  ensureProgressStructure();
  progressCache.notes = document.getElementById('userNotes').value;
  saveProgressToServer();

  const btn = document.getElementById('notesSaveBtn');
  btn.classList.add('saved');
  setTimeout(() => btn.classList.remove('saved'), 600);
}

function drawRadarChart() {
  const canvas = document.getElementById('radarCanvas');
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  const cx = W / 2, cy = H / 2;
  const R = Math.min(cx, cy) - 40;

  ctx.clearRect(0, 0, W, H);

  const cats = Object.keys(CATEGORIES).filter(k => k !== 'all');
  const n = cats.length;
  const angleStep = (2 * Math.PI) / n;
  const startAngle = -Math.PI / 2;

  // Draw grid circles
  ctx.strokeStyle = 'rgba(158,149,144,0.2)';
  ctx.lineWidth = 1;
  [0.25, 0.5, 0.75, 1].forEach(frac => {
    ctx.beginPath();
    ctx.arc(cx, cy, R * frac, 0, 2 * Math.PI);
    ctx.stroke();
  });

  // Draw axes & labels
  ctx.fillStyle = '#9e9590';
  ctx.font = '11px Atkinson Hyperlegible Next, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  cats.forEach((cat, i) => {
    const angle = startAngle + i * angleStep;
    const x = cx + R * Math.cos(angle);
    const y = cy + R * Math.sin(angle);

    ctx.strokeStyle = 'rgba(158,149,144,0.15)';
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(x, y);
    ctx.stroke();

    const lx = cx + (R + 22) * Math.cos(angle);
    const ly = cy + (R + 22) * Math.sin(angle);
    ctx.fillText(CATEGORIES[cat].label, lx, ly);
  });

  // Draw data polygon
  const values = cats.map(cat => getMastery(cat) / 100);

  ctx.beginPath();
  ctx.fillStyle = 'rgba(242, 193, 46, 0.2)';
  ctx.strokeStyle = 'rgba(242, 193, 46, 0.8)';
  ctx.lineWidth = 2;

  values.forEach((v, i) => {
    const angle = startAngle + i * angleStep;
    const x = cx + R * v * Math.cos(angle);
    const y = cy + R * v * Math.sin(angle);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Draw dots
  values.forEach((v, i) => {
    const angle = startAngle + i * angleStep;
    const x = cx + R * v * Math.cos(angle);
    const y = cy + R * v * Math.sin(angle);
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, 2 * Math.PI);
    ctx.fillStyle = '#f2c12e';
    ctx.fill();
  });
}

function drawHeatmap() {
  const container = document.getElementById('heatmapGrid');
  container.innerHTML = '';

  ensureProgressStructure();

  // Count sessions per day for the last 12 weeks
  const dayCounts = {};
  progressCache.sessions.forEach(s => {
    const day = s.date.slice(0, 10);
    dayCounts[day] = (dayCounts[day] || 0) + 1;
  });

  // Also count days with any activity from term lastSeen
  Object.values(progressCache.terms).forEach(t => {
    if (t.lastSeen) {
      const day = new Date(t.lastSeen).toISOString().slice(0, 10);
      dayCounts[day] = (dayCounts[day] || 0);
    }
  });

  const today = new Date();
  const dayOfWeek = today.getDay(); // 0=Sunday
  const totalWeeks = 12;
  // Start from (totalWeeks) weeks ago, aligned to Monday
  const startDate = new Date(today);
  startDate.setDate(startDate.getDate() - (totalWeeks * 7) - dayOfWeek + 1);

  for (let w = 0; w < totalWeeks + 1; w++) {
    const weekDiv = document.createElement('div');
    weekDiv.className = 'heatmap-week';

    for (let d = 0; d < 7; d++) {
      const cellDate = new Date(startDate);
      cellDate.setDate(cellDate.getDate() + w * 7 + d);

      if (cellDate > today) {
        const empty = document.createElement('div');
        empty.className = 'heatmap-cell';
        empty.style.visibility = 'hidden';
        weekDiv.appendChild(empty);
        continue;
      }

      const dateStr = cellDate.toISOString().slice(0, 10);
      const count = dayCounts[dateStr] || 0;

      const cell = document.createElement('div');
      cell.className = 'heatmap-cell';
      if (count >= 4) cell.classList.add('l4');
      else if (count >= 3) cell.classList.add('l3');
      else if (count >= 2) cell.classList.add('l2');
      else if (count >= 1) cell.classList.add('l1');

      cell.title = `${dateStr}: ${count} session(s)`;
      weekDiv.appendChild(cell);
    }
    container.appendChild(weekDiv);
  }
}

function drawProgressCurve() {
  const canvas = document.getElementById('progressCanvas');
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  ctx.clearRect(0, 0, W, H);

  // Collect mastered terms with their lastSeen date
  const masteredByDate = [];
  Object.entries(progressCache.terms).forEach(([, p]) => {
    if (p && p.correct >= 3 && p.correct > p.wrong && p.lastSeen) {
      masteredByDate.push(p.lastSeen);
    }
  });

  if (masteredByDate.length === 0) {
    ctx.fillStyle = '#9e9590';
    ctx.font = '14px Atkinson Hyperlegible Next, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Pas encore de données', W / 2, H / 2);
    return;
  }

  // Sort by date, build cumulative curve
  masteredByDate.sort((a, b) => a - b);
  const dayMs = 86400000;
  const dateKey = ts => new Date(ts).toISOString().slice(0, 10);

  // Group by day
  const dayMap = {};
  masteredByDate.forEach((ts, i) => {
    const key = dateKey(ts);
    dayMap[key] = i + 1; // cumulative count
  });

  const days = Object.keys(dayMap).sort();
  const points = days.map(d => ({ date: d, count: dayMap[d] }));

  // Chart margins
  const ml = 40, mr = 15, mt = 15, mb = 30;
  const cw = W - ml - mr;
  const ch = H - mt - mb;
  const maxCount = points[points.length - 1].count;
  const yMax = Math.ceil(maxCount / 5) * 5 || 5;

  // X positions
  const xStep = points.length > 1 ? cw / (points.length - 1) : 0;

  // Draw grid lines
  ctx.strokeStyle = 'rgba(158,149,144,0.2)';
  ctx.lineWidth = 1;
  const gridLines = 4;
  for (let i = 0; i <= gridLines; i++) {
    const y = mt + ch - (i / gridLines) * ch;
    ctx.beginPath();
    ctx.moveTo(ml, y);
    ctx.lineTo(W - mr, y);
    ctx.stroke();

    // Y-axis labels
    ctx.fillStyle = '#9e9590';
    ctx.font = '10px Atkinson Hyperlegible Next, sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText(Math.round((i / gridLines) * yMax), ml - 6, y + 3);
  }

  // Draw area + line
  ctx.beginPath();
  points.forEach((p, i) => {
    const x = ml + (points.length > 1 ? i * xStep : cw / 2);
    const y = mt + ch - (p.count / yMax) * ch;
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });

  // Fill area
  const lastX = ml + (points.length > 1 ? (points.length - 1) * xStep : cw / 2);
  const firstX = ml + (points.length > 1 ? 0 : cw / 2);
  ctx.lineTo(lastX, mt + ch);
  ctx.lineTo(firstX, mt + ch);
  ctx.closePath();
  ctx.fillStyle = 'rgba(242, 193, 46, 0.15)';
  ctx.fill();

  // Line
  ctx.beginPath();
  points.forEach((p, i) => {
    const x = ml + (points.length > 1 ? i * xStep : cw / 2);
    const y = mt + ch - (p.count / yMax) * ch;
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.strokeStyle = '#f2c12e';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Dots
  ctx.fillStyle = '#f2c12e';
  points.forEach((p, i) => {
    const x = ml + (points.length > 1 ? i * xStep : cw / 2);
    const y = mt + ch - (p.count / yMax) * ch;
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fill();
  });

  // X-axis date labels (show max ~6 labels to avoid overlap)
  ctx.fillStyle = '#9e9590';
  ctx.font = '10px Atkinson Hyperlegible Next, sans-serif';
  ctx.textAlign = 'center';
  const labelStep = Math.max(1, Math.floor(points.length / 6));
  points.forEach((p, i) => {
    if (i % labelStep === 0 || i === points.length - 1) {
      const x = ml + (points.length > 1 ? i * xStep : cw / 2);
      const d = new Date(p.date + 'T00:00:00');
      const label = d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
      ctx.fillText(label, x, H - 8);
    }
  });
}

function renderSessionList() {
  const container = document.getElementById('sessionList');
  container.innerHTML = '';

  ensureProgressStructure();
  const sessions = [...progressCache.sessions].reverse().slice(0, 10);

  if (sessions.length === 0) {
    container.innerHTML = '<p style="color:var(--text-muted);font-size:0.85rem;text-align:center;">Aucune session enregistrée</p>';
    return;
  }

  const modeLabels = { quiz: 'Quiz', flashcard: 'Flashcards', match: 'Match' };

  sessions.forEach(s => {
    const div = document.createElement('div');
    div.className = 'session-item';

    const date = new Date(s.date);
    const dateStr = date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
    const timeStr = date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
    const catLabel = s.cat === 'review' ? 'Révision' : (CATEGORIES[s.cat] ? CATEGORIES[s.cat].label : s.cat);
    const pct = s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0;
    const duration = s.duration ? `${Math.floor(s.duration / 60)}m${String(s.duration % 60).padStart(2, '0')}s` : '';

    div.innerHTML = `
      <div>
        <div>${modeLabels[s.mode] || s.mode} · ${catLabel}</div>
        <div class="session-meta">${dateStr} ${timeStr}${duration ? ' · ' + duration : ''}</div>
      </div>
      <div class="session-score" style="color:${pct >= 70 ? 'var(--green)' : pct >= 40 ? 'var(--sunflower)' : 'var(--red)'}">${pct}%</div>
    `;
    container.appendChild(div);
  });
}

// ===================== CONFETTI =====================
function spawnConfetti(anchorEl) {
  const rect = anchorEl.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const colors = ['#f2c12e', '#6bbf59', '#e05a4f', '#4fc3f7', '#ab47bc'];
  for (let i = 0; i < 12; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-particle';
    el.style.left = cx + 'px';
    el.style.top = cy + 'px';
    el.style.background = colors[i % colors.length];
    el.style.setProperty('--dx', (Math.random() - 0.5) * 160 + 'px');
    el.style.setProperty('--dy', (Math.random() - 0.5) * 160 + 'px');
    el.style.setProperty('--rot', Math.random() * 720 - 360 + 'deg');
    document.body.appendChild(el);
    el.addEventListener('animationend', () => el.remove());
  }
}

// ===================== WRITE MODE =====================
function normalizeAnswer(str) {
  return str
    .toLowerCase()
    .trim()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/['']/g, "'")
    .replace(/\s+/g, ' ');
}

function levenshtein(a, b) {
  const m = a.length, n = b.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[m][n];
}

function checkWriteAnswer(userInput, correctEn) {
  const userNorm = normalizeAnswer(userInput);
  const alternatives = correctEn.split(' / ').map(s => s.trim());

  for (const alt of alternatives) {
    const altNorm = normalizeAnswer(alt);
    if (userNorm === altNorm) return { status: 'correct', accepted: alt };
  }

  for (const alt of alternatives) {
    const altNorm = normalizeAnswer(alt);
    const dist = levenshtein(userNorm, altNorm);
    const maxDist = altNorm.length <= 5 ? 1 : 2;
    if (dist <= maxDist) return { status: 'almost', accepted: alt };
  }

  return { status: 'wrong' };
}

function showWriteQuestion() {
  if (currentIndex >= currentData.length) { endGame(); return; }

  writeAnswered = false;
  const item = currentData[currentIndex];

  document.getElementById('writeQuestionText').textContent = item.fr;
  const hintEl = document.getElementById('writeQuestionHint');
  if (item.hint) {
    hintEl.textContent = item.hint;
    hintEl.classList.remove('hidden');
  } else {
    hintEl.classList.add('hidden');
  }

  const input = document.getElementById('writeInput');
  input.value = '';
  input.disabled = false;
  input.className = 'write-input';
  input.focus();

  document.getElementById('writeSubmitBtn').disabled = false;
  document.getElementById('writeFeedback').classList.add('hidden');
  document.getElementById('writeFeedback').className = 'write-feedback hidden';
  document.getElementById('writeNextBtn').classList.add('hidden');
  document.getElementById('writeProgress').textContent =
    `${currentIndex + 1} / ${currentData.length}`;
}

function submitWriteAnswer() {
  if (writeAnswered) return;

  const input = document.getElementById('writeInput');
  const userAnswer = input.value.trim();
  if (!userAnswer) return;

  writeAnswered = true;
  input.disabled = true;
  document.getElementById('writeSubmitBtn').disabled = true;

  const item = currentData[currentIndex];
  const result = checkWriteAnswer(userAnswer, item.en);

  const feedback = document.getElementById('writeFeedback');
  feedback.classList.remove('hidden');

  if (result.status === 'correct') {
    goodCount++;
    input.classList.add('correct');
    feedback.className = 'write-feedback correct';
    feedback.textContent = 'Correct !';
    spawnConfetti(input);
    recordAnswer(item.fr, true);
  } else if (result.status === 'almost') {
    goodCount++;
    input.classList.add('almost');
    feedback.className = 'write-feedback almost';
    feedback.textContent = `Presque ! Tu as écrit « ${userAnswer} », la réponse exacte est « ${result.accepted} »`;
    recordAnswer(item.fr, true);
  } else {
    badCount++;
    input.classList.add('wrong');
    feedback.className = 'write-feedback wrong';
    feedback.textContent = `La bonne réponse : ${item.en}`;
    const qCard = document.getElementById('writeQuestionCard');
    qCard.classList.add('shake');
    setTimeout(() => qCard.classList.remove('shake'), 400);
    recordAnswer(item.fr, false);
  }

  currentIndex++;
  updateScoreBar();
  document.getElementById('writeNextBtn').classList.remove('hidden');
}

function nextWriteQuestion() {
  showWriteQuestion();
}

function handleWriteKeys(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    if (!writeAnswered) {
      submitWriteAnswer();
    } else {
      nextWriteQuestion();
    }
  }
}

// ===================== KEYBOARD SHORTCUTS =====================
document.addEventListener('keydown', handleKeyboard);

function handleKeyboard(e) {
  // Only act when game screen is visible
  if (document.getElementById('game').classList.contains('hidden')) return;

  // Quiz mode
  if (!document.getElementById('quizArea').classList.contains('hidden')) {
    handleQuizKeys(e);
  }
  // Flashcard mode
  else if (!document.getElementById('flashcardArea').classList.contains('hidden')) {
    handleFlashcardKeys(e);
  }
  // Write mode
  else if (!document.getElementById('writeArea').classList.contains('hidden')) {
    handleWriteKeys(e);
  }
}

function handleQuizKeys(e) {
  const key = e.key;
  if (!answered && key >= '1' && key <= '4') {
    const btns = document.querySelectorAll('#optionsGrid .option-btn');
    const idx = parseInt(key) - 1;
    if (btns[idx]) btns[idx].click();
  } else if (answered && (key === 'Enter' || key === ' ')) {
    e.preventDefault();
    nextQuestion();
  }
}

function handleFlashcardKeys(e) {
  const key = e.key;
  if (key === ' ') {
    e.preventDefault();
    flipCard();
  } else if (cardFlipped && key === 'ArrowRight') {
    flashcardAnswer(true);
  } else if (cardFlipped && key === 'ArrowLeft') {
    flashcardAnswer(false);
  }
}

// ===================== UTILS =====================
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
