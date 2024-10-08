const pokemonData = [
  { name: "Bulbasaur", description: "A Grass/Poison type Pokémon.", skills: ["Overgrow", "Chlorophyll"] },
  { name: "Ivysaur", description: "The evolved form of Bulbasaur.", skills: ["Overgrow", "Chlorophyll"] },
  { name: "Venusaur", description: "The final form of Bulbasaur.", skills: ["Overgrow", "Chlorophyll"] },
  { name: "Charmander", description: "A Fire type Pokémon.", skills: ["Blaze", "Solar Power"] },
  { name: "Charmeleon", description: "The evolved form of Charmander.", skills: ["Blaze", "Solar Power"] },
  { name: "Charizard", description: "The final form of Charmander.", skills: ["Blaze", "Solar Power"] },
  { name: "Squirtle", description: "A Water type Pokémon.", skills: ["Torrent", "Rain Dish"] },
  { name: "Wartortle", description: "The evolved form of Squirtle.", skills: ["Torrent", "Rain Dish"] },
  { name: "Blastoise", description: "The final form of Squirtle.", skills: ["Torrent", "Rain Dish"] },
  { name: "Caterpie", description: "A Bug type Pokémon.", skills: ["Shield Dust", "Run Away"] },
  { name: "Metapod", description: "The evolved form of Caterpie.", skills: ["Shed Skin"] },
  { name: "Butterfree", description: "The final form of Caterpie.", skills: ["Compound Eyes", "Tinted Lens"] },
  { name: "Weedle", description: "A Bug/Poison type Pokémon.", skills: ["Shield Dust", "Run Away"] },
  { name: "Kakuna", description: "The evolved form of Weedle.", skills: ["Shed Skin"] },
  { name: "Beedrill", description: "The final form of Weedle.", skills: ["Swarm", "Sniper"] },
  { name: "Pidgey", description: "A Normal/Flying type Pokémon.", skills: ["Keen Eye", "Tangled Feet", "Big Pecks"] },
  { name: "Pidgeotto", description: "The evolved form of Pidgey.", skills: ["Keen Eye", "Tangled Feet", "Big Pecks"] },
  { name: "Pidgeot", description: "The final form of Pidgey.", skills: ["Keen Eye", "Tangled Feet", "Big Pecks"] },
  { name: "Rattata", description: "A Normal type Pokémon.", skills: ["Run Away", "Guts", "Hustle"] },
  { name: "Raticate", description: "The evolved form of Rattata.", skills: ["Run Away", "Guts", "Hustle"] },
  { name: "Spearow", description: "A Normal/Flying type Pokémon.", skills: ["Keen Eye", "Sniper"] },
  { name: "Fearow", description: "The evolved form of Spearow.", skills: ["Keen Eye", "Sniper"] },
  { name: "Ekans", description: "A Poison type Pokémon.", skills: ["Intimidate", "Shed Skin", "Unnerve"] },
  { name: "Arbok", description: "The evolved form of Ekans.", skills: ["Intimidate", "Shed Skin", "Unnerve"] },
  { name: "Pikachu", description: "An Electric type Pokémon.", skills: ["Static", "Lightning Rod"] },
  { name: "Raichu", description: "The evolved form of Pikachu.", skills: ["Static", "Lightning Rod"] },
  { name: "Sandshrew", description: "A Ground type Pokémon.", skills: ["Sand Veil", "Sand Rush"] },
  { name: "Sandslash", description: "The evolved form of Sandshrew.", skills: ["Sand Veil", "Sand Rush"] },
  { name: "Nidoran♀", description: "A Poison type Pokémon.", skills: ["Poison Point", "Rivalry", "Hustle"] },
  { name: "Nidorina", description: "The evolved form of Nidoran♀.", skills: ["Poison Point", "Rivalry", "Hustle"] },
  { name: "Nidoqueen", description: "The final form of Nidoran♀.", skills: ["Poison Point", "Rivalry", "Sheer Force"] },
  { name: "Nidoran♂", description: "A Poison type Pokémon.", skills: ["Poison Point", "Rivalry", "Hustle"] },
  { name: "Nidorino", description: "The evolved form of Nidoran♂.", skills: ["Poison Point", "Rivalry", "Hustle"] },
  { name: "Nidoking", description: "The final form of Nidoran♂.", skills: ["Poison Point", "Rivalry", "Sheer Force"] },
  { name: "Clefairy", description: "A Fairy type Pokémon.", skills: ["Cute Charm", "Magic Guard", "Friend Guard"] },
  { name: "Clefable", description: "The evolved form of Clefairy.", skills: ["Cute Charm", "Magic Guard", "Unaware"] },
  { name: "Vulpix", description: "A Fire type Pokémon.", skills: ["Flash Fire", "Drought"] },
  { name: "Ninetales", description: "The evolved form of Vulpix.", skills: ["Flash Fire", "Drought"] },
  { name: "Jigglypuff", description: "A Normal/Fairy type Pokémon.", skills: ["Cute Charm", "Competitive", "Friend Guard"] },
  { name: "Wigglytuff", description: "The evolved form of Jigglypuff.", skills: ["Cute Charm", "Competitive", "Frisk"] },
  { name: "Zubat", description: "A Poison/Flying type Pokémon.", skills: ["Inner Focus", "Infiltrator"] },
  { name: "Golbat", description: "The evolved form of Zubat.", skills: ["Inner Focus", "Infiltrator"] },
  { name: "Oddish", description: "A Grass/Poison type Pokémon.", skills: ["Chlorophyll", "Run Away"] },
  { name: "Gloom", description: "The evolved form of Oddish.", skills: ["Chlorophyll", "Stench"] },
  { name: "Vileplume", description: "The final form of Oddish.", skills: ["Chlorophyll", "Effect Spore"] },
  { name: "Paras", description: "A Bug/Grass type Pokémon.", skills: ["Effect Spore", "Dry Skin", "Damp"] },
  { name: "Parasect", description: "The evolved form of Paras.", skills: ["Effect Spore", "Dry Skin", "Damp"] },
  { name: "Venonat", description: "A Bug/Poison type Pokémon.", skills: ["Compound Eyes", "Tinted Lens", "Run Away"] },
  { name: "Venomoth", description: "The evolved form of Venonat.", skills: ["Shield Dust", "Tinted Lens", "Wonder Skin"] },
  { name: "Diglett", description: "A Ground type Pokémon.", skills: ["Sand Veil", "Arena Trap", "Sand Force"] },
  { name: "Dugtrio", description: "The evolved form of Diglett.", skills: ["Sand Veil", "Arena Trap", "Sand Force"] },
  { name: "Meowth", description: "A Normal type Pokémon.", skills: ["Pickup", "Technician", "Unnerve"] },
  { name: "Persian", description: "The evolved form of Meowth.", skills: ["Limber", "Technician", "Unnerve"] },
  { name: "Psyduck", description: "A Water type Pokémon.", skills: ["Damp", "Cloud Nine", "Swift Swim"] },
  { name: "Golduck", description: "The evolved form of Psyduck.", skills: ["Damp", "Cloud Nine", "Swift Swim"] },
  { name: "Mankey", description: "A Fighting type Pokémon.", skills: ["Vital Spirit", "Anger Point", "Defiant"] },
  { name: "Primeape", description: "The evolved form of Mankey.", skills: ["Vital Spirit", "Anger Point", "Defiant"] },
  { name: "Growlithe", description: "A Fire type Pokémon.", skills: ["Intimidate", "Flash Fire", "Justified"] },
  { name: "Arcanine", description: "The evolved form of Growlithe.", skills: ["Intimidate", "Flash Fire", "Justified"] },
  { name: "Poliwag", description: "A Water type Pokémon.", skills: ["Water Absorb", "Damp", "Swift Swim"] },
  { name: "Poliwhirl", description: "The evolved form of Poliwag.", skills: ["Water Absorb", "Damp", "Swift Swim"] },
  { name: "Poliwrath", description: "The final form of Poliwag.", skills: ["Water Absorb", "Damp", "Swift Swim"] },
  { name: "Abra", description: "A Psychic type Pokémon.", skills: ["Synchronize", "Inner Focus", "Magic Guard"] },
  { name: "Kadabra", description: "The evolved form of Abra.", skills: ["Synchronize", "Inner Focus", "Magic Guard"] },
  { name: "Alakazam", description: "The final form of Abra.", skills: ["Synchronize", "Inner Focus", "Magic Guard"] },
  { name: "Machop", description: "A Fighting type Pokémon.", skills: ["Guts", "No Guard", "Steadfast"] },
  { name: "Machoke", description: "The evolved form of Machop.", skills: ["Guts", "No Guard", "Steadfast"] },
  { name: "Machamp", description: "The final form of Machop.", skills: ["Guts", "No Guard", "Steadfast"] },
  { name: "Bellsprout", description: "A Grass/Poison type Pokémon.", skills: ["Chlorophyll", "Gluttony"] },
  { name: "Weepinbell", description: "The evolved form of Bellsprout.", skills: ["Chlorophyll", "Gluttony"] },
  { name: "Victreebel", description: "The final form of Bellsprout.", skills: ["Chlorophyll", "Gluttony"] },
  { name: "Tentacool", description: "A Water/Poison type Pokémon.", skills: ["Clear Body", "Liquid Ooze", "Rain Dish"] },
  { name: "Tentacruel", description: "The evolved form of Tentacool.", skills: ["Clear Body", "Liquid Ooze", "Rain Dish"] },
  { name: "Geodude", description: "A Rock/Ground type Pokémon.", skills: ["Rock Head", "Sturdy", "Sand Veil"] },
  { name: "Graveler", description: "The evolved form of Geodude.", skills: ["Rock Head", "Sturdy", "Sand Veil"] },
  { name: "Golem", description: "The final form of Geodude.", skills: ["Rock Head", "Sturdy", "Sand Veil"] },
  { name: "Ponyta", description: "A Fire type Pokémon.", skills: ["Run Away", "Flash Fire", "Flame Body"] },
  { name: "Rapidash", description: "The evolved form of Ponyta.", skills: ["Run Away", "Flash Fire", "Flame Body"] },
  { name: "Slowpoke", description: "A Water/Psychic type Pokémon.", skills: ["Oblivious", "Own Tempo", "Regenerator"] },
  { name: "Slowbro", description: "The evolved form of Slowpoke.", skills: ["Oblivious", "Own Tempo", "Regenerator"] },
  { name: "Magnemite", description: "An Electric/Steel type Pokémon.", skills: ["Magnet Pull", "Sturdy", "Analytic"] },
  { name: "Magneton", description: "The evolved form of Magnemite.", skills: ["Magnet Pull", "Sturdy", "Analytic"] },
  { name: "Farfetch'd", description: "A Normal/Flying type Pokémon.", skills: ["Keen Eye", "Inner Focus", "Defiant"] },
  { name: "Doduo", description: "A Normal/Flying type Pokémon.", skills: ["Run Away", "Early Bird", "Tangled Feet"] },
  { name: "Dodrio", description: "The evolved form of Doduo.", skills: ["Run Away", "Early Bird", "Tangled Feet"] },
  { name: "Seel", description: "A Water type Pokémon.", skills: ["Thick Fat", "Hydration", "Ice Body"] },
  { name: "Dewgong", description: "The evolved form of Seel.", skills: ["Thick Fat", "Hydration", "Ice Body"] },
  { name: "Grimer", description: "A Poison type Pokémon.", skills: ["Stench", "Sticky Hold", "Poison Touch"] },
  { name: "Muk", description: "The evolved form of Grimer.", skills: ["Stench", "Sticky Hold", "Poison Touch"] },
  { name: "Shellder", description: "A Water type Pokémon.", skills: ["Shell Armor", "Skill Link", "Overcoat"] },
  { name: "Cloyster", description: "The evolved form of Shellder.", skills: ["Shell Armor", "Skill Link", "Overcoat"] },
  { name: "Gastly", description: "A Ghost/Poison type Pokémon.", skills: ["Levitate"] },
  { name: "Haunter", description: "The evolved form of Gastly.", skills: ["Levitate"] },
  { name: "Gengar", description: "The final form of Gastly.", skills: ["Cursed Body"] },
  { name: "Onix", description: "A Rock/Ground type Pokémon.", skills: ["Rock Head", "Sturdy", "Weak Armor"] },
  { name: "Drowzee", description: "A Psychic type Pokémon.", skills: ["Insomnia", "Forewarn", "Inner Focus"] },
  { name: "Hypno", description: "The evolved form of Drowzee.", skills: ["Insomnia", "Forewarn", "Inner Focus"] },
  { name: "Krabby", description: "A Water type Pokémon.", skills: ["Hyper Cutter", "Shell Armor", "Sheer Force"] },
  { name: "Kingler", description: "The evolved form of Krabby.", skills: ["Hyper Cutter", "Shell Armor", "Sheer Force"] },
  { name: "Voltorb", description: "An Electric type Pokémon.", skills: ["Soundproof", "Static", "Aftermath"] },
  { name: "Electrode", description: "The evolved form of Voltorb.", skills: ["Soundproof", "Static", "Aftermath"] },
  { name: "Exeggcute", description: "A Grass/Psychic type Pokémon.", skills: ["Chlorophyll", "Harvest"] },
  { name: "Exeggutor", description: "The evolved form of Exeggcute.", skills: ["Chlorophyll", "Harvest"] },
  { name: "Cubone", description: "A Ground type Pokémon.", skills: ["Rock Head", "Lightning Rod", "Battle Armor"] },
  { name: "Marowak", description: "The evolved form of Cubone.", skills: ["Rock Head", "Lightning Rod", "Battle Armor"] },
  { name: "Hitmonlee", description: "A Fighting type Pokémon.", skills: ["Limber", "Reckless", "Unburden"] },
  { name: "Hitmonchan", description: "A Fighting type Pokémon.", skills: ["Keen Eye", "Iron Fist", "Inner Focus"] },
  { name: "Lickitung", description: "A Normal type Pokémon.", skills: ["Own Tempo", "Oblivious", "Cloud Nine"] },
  { name: "Koffing", description: "A Poison type Pokémon.", skills: ["Levitate", "Neutralizing Gas", "Stench"] },
  { name: "Weezing", description: "The evolved form of Koffing.", skills: ["Levitate", "Neutralizing Gas", "Stench"] },
  { name: "Rhyhorn", description: "A Ground/Rock type Pokémon.", skills: ["Lightning Rod", "Rock Head", "Reckless"] },
  { name: "Rhydon", description: "The evolved form of Rhyhorn.", skills: ["Lightning Rod", "Rock Head", "Reckless"] },
  { name: "Chansey", description: "A Normal type Pokémon.", skills: ["Natural Cure", "Serene Grace", "Healer"] },
  { name: "Tangela", description: "A Grass type Pokémon.", skills: ["Chlorophyll", "Leaf Guard", "Regenerator"] },
  { name: "Kangaskhan", description: "A Normal type Pokémon.", skills: ["Early Bird", "Scrappy", "Inner Focus"] },
  { name: "Horsea", description: "A Water type Pokémon.", skills: ["Swift Swim", "Sniper", "Damp"] },
  { name: "Seadra", description: "The evolved form of Horsea.", skills: ["Poison Point", "Sniper", "Damp"] },
  { name: "Goldeen", description: "A Water type Pokémon.", skills: ["Swift Swim", "Water Veil", "Lightning Rod"] },
  { name: "Seaking", description: "The evolved form of Goldeen.", skills: ["Swift Swim", "Water Veil", "Lightning Rod"] },
  { name: "Staryu", description: "A Water type Pokémon.", skills: ["Illuminate", "Natural Cure", "Analytic"] },
  { name: "Starmie", description: "The evolved form of Staryu.", skills: ["Illuminate", "Natural Cure", "Analytic"] },
  { name: "Mr. Mime", description: "A Psychic/Fairy type Pokémon.", skills: ["Soundproof", "Filter", "Technician"] },
  { name: "Scyther", description: "A Bug/Flying type Pokémon.", skills: ["Swarm", "Technician", "Steadfast"] },
  { name: "Jynx", description: "An Ice/Psychic type Pokémon.", skills: ["Oblivious", "Forewarn", "Dry Skin"] },
  { name: "Electabuzz", description: "An Electric type Pokémon.", skills: ["Static", "Vital Spirit"] },
  { name: "Magmar", description: "A Fire type Pokémon.", skills: ["Flame Body", "Vital Spirit"] },
  { name: "Pinsir", description: "A Bug type Pokémon.", skills: ["Hyper Cutter", "Mold Breaker", "Moxie"] },
  { name: "Tauros", description: "A Normal type Pokémon.", skills: ["Intimidate", "Anger Point", "Sheer Force"] },
  { name: "Magikarp", description: "A Water type Pokémon.", skills: ["Swift Swim", "Rattled"] },
  { name: "Gyarados", description: "The evolved form of Magikarp.", skills: ["Intimidate", "Moxie"] },
  { name: "Lapras", description: "A Water/Ice type Pokémon.", skills: ["Water Absorb", "Shell Armor", "Hydration"] },
  { name: "Ditto", description: "A Normal type Pokémon.", skills: ["Limber", "Imposter"] },
  { name: "Eevee", description: "A Normal type Pokémon.", skills: ["Run Away", "Adaptability", "Anticipation"] },
  { name: "Vaporeon", description: "The Water type evolution of Eevee.", skills: ["Water Absorb", "Hydration"] },
  { name: "Jolteon", description: "The Electric type evolution of Eevee.", skills: ["Volt Absorb", "Quick Feet"] },
  { name: "Flareon", description: "The Fire type evolution of Eevee.", skills: ["Flash Fire", "Guts"] },
  { name: "Porygon", description: "A Normal type Pokémon.", skills: ["Trace", "Download", "Analytic"] },
  { name: "Omanyte", description: "A Rock/Water type Pokémon.", skills: ["Swift Swim", "Shell Armor", "Weak Armor"] },
  { name: "Omastar", description: "The evolved form of Omanyte.", skills: ["Swift Swim", "Shell Armor", "Weak Armor"] },
  { name: "Kabuto", description: "A Rock/Water type Pokémon.", skills: ["Swift Swim", "Battle Armor", "Weak Armor"] },
  { name: "Kabutops", description: "The evolved form of Kabuto.", skills: ["Swift Swim", "Battle Armor", "Weak Armor"] },
  { name: "Aerodactyl", description: "A Rock/Flying type Pokémon.", skills: ["Rock Head", "Pressure", "Unnerve"] },
  { name: "Snorlax", description: "A Normal type Pokémon.", skills: ["Immunity", "Thick Fat", "Gluttony"] },
  { name: "Articuno", description: "A Legendary Ice/Flying type Pokémon.", skills: ["Pressure", "Snow Cloak"] },
  { name: "Zapdos", description: "A Legendary Electric/Flying type Pokémon.", skills: ["Pressure", "Static"] },
  { name: "Moltres", description: "A Legendary Fire/Flying type Pokémon.", skills: ["Pressure", "Flame Body"] },
  { name: "Dratini", description: "A Dragon type Pokémon.", skills: ["Shed Skin", "Marvel Scale"] },
  { name: "Dragonair", description: "The evolved form of Dratini.", skills: ["Shed Skin", "Marvel Scale"] },
  { name: "Dragonite", description: "The final form of Dratini.", skills: ["Inner Focus", "Multiscale"] },
  { name: "Mewtwo", description: "A Legendary Psychic type Pokémon.", skills: ["Pressure", "Unnerve"] },
  { name: "Mew", description: "A Legendary Psychic type Pokémon.", skills: ["Synchronize"] },
];

export default defineEventHandler(async (event) => {
    const pokemonNamesLength = pokemonData.length;
    const randomIndex = Math.floor(Math.random() * pokemonNamesLength);
    const pokemonName = pokemonData[randomIndex];
    
    // Return as a JSON response
    return pokemonName;
  });