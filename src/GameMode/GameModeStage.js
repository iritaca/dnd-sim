// import { Monsters } from './Monsters'

import { GameModeList } from './GameModeList'

import { FillMonsterArray } from '../PlayerAndMonsters/MonsterCreation'

const RandomStage = (level) => {
    let monsterList = FillMonsterArray()
    let stage = []
    let round = []
    let minValue = 1
    let filterMode
    let gamemode

    const filterEasy = monsterList.filter((monster => {
        return monster.monsterPoints <= 4
    }))
    const filterNormal = monsterList.filter((monster => {
        return monster.monsterPoints >= 3 && monster.monsterPoints <= 8
    }))
    const filterHard = monsterList.filter((monster => {
        return monster.monsterPoints >= 8
    }))


    if (level === 'easy') {
        filterMode = filterEasy
        gamemode = GameModeList.easy
    } else if (level === 'normal') {
        filterMode = filterNormal
        gamemode = GameModeList.normal
        minValue = 3
    } else if (level === 'hard') {
        filterMode = filterHard
        gamemode = GameModeList.hard
        minValue = 7
    }

    for (let i = 0; i < 3; i++) {
        console.log('Game points:' + gamemode[i].gamePoints)
        while (gamemode[i].gamePoints >= minValue) {
            let random = Math.floor(Math.random() * filterMode.length)
            let randomMonsterPoints = filterMode[random].monsterPoints
            if (randomMonsterPoints <= gamemode[i].gamePoints && randomMonsterPoints >= 0) {
                round.push(filterMode[random])
                gamemode[i].gamePoints -= randomMonsterPoints
            }
        }
        stage.push(round)
        round = []
    }

    console.log('Level: ' + level, stage)

    return (level, stage)
}

export const SelectedLevel = (level) => {
    // console.log(level)
    // if (level === 'easy') {
    //     return RandomStage('easy')
    // }
    // if (level === 'medium') {
    //     return RandomStage('medium')
    // }
    // if (level === 'hard') {
    //     return RandomStage('hard')
    // }
    return RandomStage('hard')


}