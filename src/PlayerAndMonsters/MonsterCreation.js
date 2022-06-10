// import React from 'react'

import { Monsters } from './Monsters'

const monsterList = []

const MonsterSize = (monster) => {
    let size = monster.hitpoints.additional.diceValue
    let monsterSizeAndGamepoints = {}

    switch (size) {
        case 4:
            monsterSizeAndGamepoints = { monsterSize: 'tiny', monsterPoints: 1 }
            break;
        case 6:
            monsterSizeAndGamepoints = { monsterSize: 'small', monsterPoints: 3 }
            break;
        case 8:
            monsterSizeAndGamepoints = { monsterSize: 'medium', monsterPoints: 4 }
            break;
        case 10:
            monsterSizeAndGamepoints = { monsterSize: 'large', monsterPoints: 8 }
            break;
        case 12:
            monsterSizeAndGamepoints = { monsterSize: 'huge', monsterPoints: 12 }
            break;
        case 20:
            monsterSizeAndGamepoints = { monsterSize: 'gargantuan', monsterPoints: 20 }
            break;
        default:
            console.log(`Size: ${size} doesn't exist`)
    }

    return monsterSizeAndGamepoints
}

//This should be recycled to be used  by monsters or players
const AdditionalLife = (monster) => {
    let monsterInitialLife = monster.hitpoints
    let additionalLifeSum = 0;

    for (let i = 0; i < monsterInitialLife.additional.diceNumber; i++) {
        additionalLifeSum += Math.ceil(Math.random() * monsterInitialLife.additional.diceValue)
    }
    return additionalLifeSum
}



// Getting the monsters attacks
function MonsterAttacks(monster) {
    let attacks = []
    let monsterAttack = monster.actions
    for (let i = 0; i < monsterAttack.length; i++) {
        attacks.push(monsterAttack[i])
    }
    return attacks
}



//This should be recycled to be used  by monsters or players
const MonsterMaxLife = (monster) => {
    let monsterInitialLife = monster.hitpoints
    let baseLife = monsterInitialLife.base
    let bonusLife = monsterInitialLife.additional.bonus

    let monsterMaxLife = baseLife + bonusLife + AdditionalLife(monster)

    return monsterMaxLife
}

const MonsterCreation = (monster) => {

    // const [attackName, attackValue] = MonsterAttack(monster)
    let monsterSizes = MonsterSize(monster)


    const newMonsterCreation = {
        monsterName: monster.name, monsterSize: monsterSizes.monsterSize, attackNames: MonsterAttacks(monster), attackValue: 0, hitpoints: MonsterMaxLife(monster), isAttacking: false, monsterPoints: monsterSizes.monsterPoints

    }
    return newMonsterCreation

}

export const FillMonsterArray = () => {
    for (let i = 0; i < Monsters.length; i++) {
        let random = Math.floor(Math.random() * Monsters.length)
        let newMonster = MonsterCreation(Monsters[random])
        monsterList.push(newMonster)
    }

    return monsterList
}