export const players = [{
    race: 'dark elf',
    class: 'wizard',
    level: 3,
    armorClass: 11,
    initiative: 3,
    hitpoints: 20,
    actions: {
        quarterStaff: {
            bonus: 2,
            diceNumber: 1,
            diceValue: 6,
        },
        spellcasting: {
            burningHands: {
                diceNumber: 3,
                diceValue: 6,
            },
            fireBolt: {
                diceNumber: 1,
                diceValue: 10,
            },
            scrochingRay: {
                diceNumber: 2,
                diceValue: 6,
            },
        }
    }
},
{
    race: 'dwarf',
    class: 'paladin',
    level: 3,
    armorClass: 19,
    initiative: 3,
    hitpoints: 31,
    actions: {
        warhammer: {
            bonus: 5,
            diceNumber: 1,
            diceValue: 8,
        },
        lighthammer: {
            bonus: 5,
            diceNumber: 1,
            diceValue: 8,
        },
    }
},
{
    race: 'halfling',
    class: 'rogue',
    level: 3,
    armorClass: 15,
    initiative: 3,
    hitpoints: 23,
    actions: {
        shortsword: {
            bonus: 3,
            diceNumber: 1,
            diceValue: 6,
        },
        handCrossbow: {
            bonus: 3,
            diceNumber: 1,
            diceValue: 6,
        },
    }
},
{
    race: 'half-orc',
    class: 'Berserker',
    level: 3,
    armorClass: 14,
    initiative: 1,
    hitpoints: 33,
    actions: {
        greatAxe: {
            bonus: 5,
            diceNumber: 1,
            diceValue: 12,
        },
        handAxe: {
            bonus: 5,
            diceNumber: 1,
            diceValue: 6,
        },
    }
},
{
    race: 'dragonborn',
    class: 'monk',
    level: 3,
    armorClass: 21,
    initiative: 3,
    hitpoints: 24,
    actions: {
        fist: {
            bonus: 5,
            diceNumber: 3,
            diceValue: 6,
        },
        kick: {
            bonus: 5,
            diceNumber: 3,
            diceValue: 6,
        },
    }
},
]