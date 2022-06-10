const players = []

const armorClass = 17

const player1 = {
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
}