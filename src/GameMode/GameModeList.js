export const GameModeList = {
    easy: [
        {
            gamePoints: 5,
            monsterSize: {
                tiny: 1, small: 0.8, medium: 0.5
            }
        },
        {
            gamePoints: 7,
            monsterSize: {
                tiny: 0.5, small: 1, medium: 0.7
            }
        },
        {
            gamePoints: 10,
            monsterSize: {
                tiny: 0.1, small: 0.8, medium: 1
            }
        }
    ],
    normal: [
        {
            gamePoints: 12,
            monsterSize: {
                small: 1, medium: 0.8, large: 0.5
            }
        },
        {
            gamePoints: 17,
            monsterSize: {
                small: 0.8, medium: 1, large: 0.5
            }
        },
        {
            gamePoints: 22,
            monsterSize: {
                small: 0.1, medium: 0.8, large: 0.8
            }
        }
    ],
    hard: [
        {
            gamePoints: 16,
            monsterSize: {
                large: 1, huge: 0.2, gargantuan: 0.2
            }
        },
        {
            gamePoints: 38,
            monsterSize: {
                large: 1, huge: 0.6, gargantuan: 0.4
            }
        },
        {
            gamePoints: 56,
            monsterSize: {
                large: 0.4, huge: 0.6, gargantuan: 1
            }
        }
    ],

}