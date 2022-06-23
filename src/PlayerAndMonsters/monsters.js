export const monsters = [
  {
    name: "skeleton",
    armorClass: 13,
    hitpoints: {
      base: 13,
      additional: {
        diceNumber: 2,
        diceValue: 8,
        bonus: 4,
      },
    },
    actions: [
      {
        attackName: "short-sword",
        bonus: 2,
        diceNumber: 1,
        diceValue: 6,
      },
      {
        attackName: "short-bow",
        bonus: 2,
        diceNumber: 1,
        diceValue: 6,
      },
    ],
  },
  {
    name: "kobold",
    armorClass: 12,
    hitpoints: {
      base: 5,
      additional: {
        diceNumber: 2,
        diceValue: 6,
        bonus: 0,
      },
    },
    actions: [
      {
        attackName: "dagger",
        bonus: 2,
        diceNumber: 1,
        diceValue: 4,
      },
      {
        attackName: "sling",
        bonus: 2,
        diceNumber: 1,
        diceValue: 4,
      },
    ],
  },
  {
    name: "slaad tadpole",
    armorClass: 12,
    hitpoints: {
      base: 10,
      additional: {
        diceNumber: 4,
        diceValue: 4,
        bonus: 0,
      },
    },
    actions: [
      {
        attackName: "bite",
        bonus: 2,
        diceNumber: 1,
        diceValue: 4,
      },
    ],
  },
  {
    name: "hezrou",
    armorClass: 16,
    hitpoints: {
      base: 136,
      additional: {
        diceNumber: 13,
        diceValue: 10,
        bonus: 65,
      },
    },
    actions: [
      {
        attackName: "bite",
        bonus: 4,
        diceNumber: 2,
        diceValue: 10,
      },
      {
        attackName: "claw",
        bonus: 4,
        diceNumber: 2,
        diceValue: 6,
      },
      {
        attackName: "multi-attack",
        attacks: ["bite", "claw", "claw"],
      },
    ],
  },
  {
    name: "aarakocra",
    armorClass: 12,
    hitpoints: {
      base: 13,
      additional: {
        diceNumber: 3,
        diceValue: 8,
        bonus: 0,
      },
    },
    actions: [
      {
        attackName: "talon",
        bonus: 2,
        diceNumber: 1,
        diceValue: 4,
      },
      {
        attackName: "javalin",
        bonus: 2,
        diceNumber: 1,
        diceValue: 6,
      },
    ],
  },
  {
    name: "bugbear",
    armorClass: 16,
    hitpoints: {
      base: 27,
      additional: {
        diceNumber: 5,
        diceValue: 8,
        bonus: 5,
      },
    },
    actions: [
      {
        attackName: "morningstar",
        bonus: 2,
        diceNumber: 2,
        diceValue: 8,
      },
      {
        attackName: "javelin",
        bonus: 2,
        diceNumber: 2,
        diceValue: 6,
      },
    ],
  },
  {
    name: "kobold",
    armorClass: 12,
    hitpoints: {
      base: 5,
      additional: {
        diceNumber: 2,
        diceValue: 6,
        bonus: 0,
      },
    },
    actions: [
      {
        attackName: "dagger",
        bonus: 2,
        diceNumber: 1,
        diceValue: 4,
      },
      {
        attackName: "sling",
        bonus: 2,
        diceNumber: 1,
        diceValue: 4,
      },
    ],
  },
  {
    name: "barlgura",
    armorClass: 15,
    hitpoints: {
      base: 68,
      additional: {
        diceNumber: 8,
        diceValue: 10,
        bonus: 24,
      },
    },
    actions: [
      {
        attackName: "multi-attack",
        attacks: ["bite", "fist", "fist"],
      },
      {
        attackName: "bite",
        bonus: 4,
        diceNumber: 2,
        diceValue: 6,
      },
      {
        attackName: "fist",
        bonus: 4,
        diceNumber: 1,
        diceValue: 10,
      },
    ],
  },
  {
    name: "minotaur skeleton",
    armorClass: 12,
    hitpoints: {
      base: 67,
      additional: {
        diceNumber: 9,
        diceValue: 10,
        bonus: 18,
      },
    },
    actions: [
      {
        attackName: "greataxe",
        bonus: 4,
        diceNumber: 2,
        diceValue: 12,
      },
      {
        attackName: "gore",
        bonus: 4,
        diceNumber: 2,
        diceValue: 8,
      },
    ],
  },
  {
    name: "aboleth",
    armorClass: 17,
    hitpoints: {
      base: 135,
      additional: {
        diceNumber: 18,
        diceValue: 10,
        bonus: 36,
      },
    },
    actions: [
      {
        attackName: "multi-attack",
        attacks: ["tentacle", "tentacle", "tentacle"],
      },
      {
        attackName: "tentacle",
        bonus: 5,
        diceNumber: 2,
        diceValue: 6,
      },
      {
        attackName: "tail",
        bonus: 5,
        diceNumber: 3,
        diceValue: 6,
      },
    ],
  },
  {
    name: "barlor",
    armorClass: 19,
    hitpoints: {
      base: 262,
      additional: {
        diceNumber: 21,
        diceValue: 12,
        bonus: 126,
      },
    },
    actions: [
      {
        attackName: "multi-attack",
        attacks: ["longsword", "whip", "whip"],
      },

      {
        attackName: "longsword",
        bonus: 8,
        diceNumber: 3,
        diceValue: 8,
      },
      {
        attackName: "whip",
        bonus: 8,
        diceNumber: 2,
        diceValue: 6,
      },
    ],
  },
  {
    name: "pit fiend",
    armorClass: 19,
    hitpoints: {
      base: 300,
      additional: {
        diceNumber: 24,
        diceValue: 10,
        bonus: 168,
      },
    },
    actions: [
      {
        attackName: "multi-attack",
        attacks: ["bite", "claw", "mace", "tale"],
      },

      {
        attackName: "bite",
        bonus: 8,
        diceNumber: 4,
        diceValue: 6,
      },
      {
        attackName: "claw",
        bonus: 8,
        diceNumber: 2,
        diceValue: 8,
      },
      {
        attackName: "mace",
        bonus: 8,
        diceNumber: 2,
        diceValue: 6,
      },
      {
        attackName: "tail",
        bonus: 8,
        diceNumber: 3,
        diceValue: 10,
      },
    ],
  },
  {
    name: "kraken",
    armorClass: 18,
    hitpoints: {
      base: 472,
      additional: {
        diceNumber: 27,
        diceValue: 20,
        bonus: 189,
      },
    },
    actions: [
      {
        attackName: "multi-attack",
        attacks: ["tentacle", "tentacle", "tentacle"],
      },

      {
        attackName: "bite",
        bonus: 10,
        diceNumber: 3,
        diceValue: 8,
      },
      {
        attackName: "tentacle",
        bonus: 10,
        diceNumber: 3,
        diceValue: 6,
      },
      {
        attackName: "lightning storm",
        bonus: 0,
        diceNumber: 4,
        diceValue: 10,
      },
    ],
  },
  {
    name: "frost giant",
    armorClass: 15,
    hitpoints: {
      base: 138,
      additional: {
        diceNumber: 12,
        diceValue: 12,
        bonus: 60,
      },
    },
    actions: [
      {
        attackName: "multi-attack",
        attacks: ["greataxe", "greataxe"],
      },

      {
        attackName: "greataxe",
        bonus: 6,
        diceNumber: 3,
        diceValue: 12,
      },
      {
        attackName: "rock",
        bonus: 6,
        diceNumber: 4,
        diceValue: 10,
      },
    ],
  },
  {
    name: "fomorian",
    armorClass: 14,
    hitpoints: {
      base: 149,
      additional: {
        diceNumber: 13,
        diceValue: 12,
        bonus: 65,
      },
    },
    actions: [
      {
        attackName: "multi-attack",
        attacks: ["greatclub", "evileye"],
      },

      {
        attackName: "greatclub",
        bonus: 6,
        diceNumber: 3,
        diceValue: 8,
      },
      {
        attackName: "evileye",
        bonus: 0,
        diceNumber: 6,
        diceValue: 8,
      },
    ],
  },
  {
    name: "empyrean",
    armorClass: 22,
    hitpoints: {
      base: 313,
      additional: {
        diceNumber: 19,
        diceValue: 12,
        bonus: 190,
      },
    },
    actions: [
      {
        attackName: "maul",
        bonus: 10,
        diceNumber: 6,
        diceValue: 6,
      },
      {
        attackName: "bolt",
        bonus: 0,
        diceNumber: 7,
        diceValue: 6,
      },
    ],
  },
  {
    name: "dragon turtle",
    armorClass: 20,
    hitpoints: {
      base: 341,
      additional: {
        diceNumber: 22,
        diceValue: 20,
        bonus: 110,
      },
    },
    actions: [
      {
        attackName: "multi-attack",
        attacks: ["bite", "claw", "claw"],
      },

      {
        attackName: "bite",
        bonus: 7,
        diceNumber: 3,
        diceValue: 12,
      },
      {
        attackName: "claw",
        bonus: 7,
        diceNumber: 2,
        diceValue: 8,
      },
      {
        attackName: "tail",
        bonus: 7,
        diceNumber: 3,
        diceValue: 12,
      },
      {
        attackName: "steam breath",
        bonus: 0,
        diceNumber: 15,
        diceValue: 6,
      },
    ],
  },
  {
    name: "ancient blue dragon",
    armorClass: 22,
    hitpoints: {
      base: 481,
      additional: {
        diceNumber: 26,
        diceValue: 20,
        bonus: 208,
      },
    },
    actions: [
      {
        attackName: "multi-attack",
        attacks: ["bite", "claw", "claw"],
      },

      {
        attackName: "bite",
        bonus: 9,
        diceNumber: 2,
        diceValue: 10,
      },
      {
        attackName: "claw",
        bonus: 9,
        diceNumber: 2,
        diceValue: 6,
      },
      {
        attackName: "tail",
        bonus: 9,
        diceNumber: 2,
        diceValue: 8,
      },
      {
        attackName: "lightning breath",
        bonus: 0,
        diceNumber: 16,
        diceValue: 10,
      },
    ],
  },
  {
    name: "basilisk",
    armorClass: 15,
    hitpoints: {
      base: 52,
      additional: {
        diceNumber: 8,
        diceValue: 8,
        bonus: 16,
      },
    },
    actions: [
      {
        attackName: "bite",
        bonus: 3,
        diceNumber: 2,
        diceValue: 6,
      },
    ],
  },
  {
    name: "spined devil",
    armorClass: 13,
    hitpoints: {
      base: 22,
      additional: {
        diceNumber: 5,
        diceValue: 6,
        bonus: 5,
      },
    },
    actions: [
      {
        attackName: "multi-attack",
        attacks: ["bite", "fork", "tail spine", "tail spine"],
      },

      {
        attackName: "bite",
        bonus: 0,
        diceNumber: 2,
        diceValue: 4,
      },
      {
        attackName: "fork",
        bonus: 0,
        diceNumber: 1,
        diceValue: 6,
      },
      {
        attackName: "tail spine",
        bonus: 2,
        diceNumber: 1,
        diceValue: 4,
      },
    ],
  },
  {
    name: "cockatrice",
    armorClass: 11,
    hitpoints: {
      base: 27,
      additional: {
        diceNumber: 6,
        diceValue: 6,
        bonus: 6,
      },
    },
    actions: [
      {
        attackName: "bite",
        bonus: 1,
        diceNumber: 1,
        diceValue: 4,
      },
    ],
  },
  {
    name: "ankheg",
    armorClass: 14,
    hitpoints: {
      base: 39,
      additional: {
        diceNumber: 6,
        diceValue: 10,
        bonus: 6,
      },
    },
    actions: [
      {
        attackName: "bite",
        bonus: 3,
        diceNumber: 2,
        diceValue: 6,
      },
      {
        attackName: "acid spray",
        bonus: 0,
        diceNumber: 3,
        diceValue: 6,
      },
    ],
  },
  {
    name: "imp",
    armorClass: 13,
    hitpoints: {
      base: 10,
      additional: {
        diceNumber: 3,
        diceValue: 4,
        bonus: 3,
      },
    },
    actions: [
      {
        attackName: "sting",
        bonus: 0,
        diceNumber: 3,
        diceValue: 6,
      },
    ],
  },
  {
    name: "demilich",
    armorClass: 20,
    hitpoints: {
      base: 80,
      additional: {
        diceNumber: 20,
        diceValue: 4,
        bonus: 0,
      },
    },
    actions: [
      {
        attackName: "life drain",
        bonus: 0,
        diceNumber: 6,
        diceValue: 6,
      },
    ],
  },
  {
    name: "crawling claw",
    armorClass: 12,
    hitpoints: {
      base: 2,
      additional: {
        diceNumber: 1,
        diceValue: 4,
        bonus: 0,
      },
    },
    actions: [
      {
        attackName: "claw",
        bonus: 1,
        diceNumber: 1,
        diceValue: 4,
      },
    ],
  },
];
