import { Monsters } from './Monsters'


// This should be recycled to be used  by monsters or players
function isAttacking(monster) {
    let armorClass = monster.armorClass // this should be the armorClass of the player or the monster, depends on who is reciving the attack
    let randomHit = Math.ceil(Math.random() * 20)
    let isAttacking = false

    if (randomHit < armorClass) {
        console.log('Monster attack missed')
        return
    }
    isAttacking = true
    console.log(`The monster is Attacking ${isAttacking}`)
    MonsterAttack(monster)
}

// attack used by Monster with multi-attack action like: Hezrou, abeloth, and pit fiend

function MultiAttack(monster) {
    let monsterActions = monster.actions
    let attacks = []
    let attacksInMultiAttack = []
    let attackObj = []

    //Create an object with the attacks inside multi-attack
    monsterActions.forEach((attack, idx) => {
        if (attack.attackName === 'multi-attack') {
            return
        }

        let attackData = {
            attackName: monsterActions[idx].attackName,
            bonus: monsterActions[idx].bonus,
            diceNumber: monsterActions[idx].diceNumber,
            diceValue: monsterActions[idx].diceValue,
        }
        attacksInMultiAttack.push(attackData)

    })

    //stores an object for each attack in attacksInMultiAttack
    for (let i = 0; i < monsterActions.length; i++) {
        for (let j = 0; j < attacksInMultiAttack.length; j++) {
            // console.log(i, j)
            if (monsterActions[i].attackName === attacksInMultiAttack[j].attackName) {
                attackObj.push(attacksInMultiAttack[j])
            }
        }
    }

    // Generate random values for each attack and stores the name for each attack
    const mappedRandomAttackValue = attackObj.map((attack) => {
        let name = attack.attackName
        let sum = 0
        let hitValue = 0
        for (let i = 0; i < attack.diceNumber; i++) {
            sum += Math.ceil((Math.random() * attack.diceValue))
        }

        hitValue = attack.bonus + sum
        attacks.push({ attackName: name, attackValue: hitValue })
        return attacks
    })

    //isolate the attack values from attacks
    const mappedAttackValue = attacks.map((attackValue) => {
        let attackVal = attackValue.attackValue
        let acum = 0
        acum += attackVal
        return acum
    })

    //sum of all the attacks
    const attacksTotal = mappedAttackValue.reduce((preValue, curValue) => {
        return preValue + curValue
    }, 0)

    let multiAttackWithDescription = {
        multiAttackValue: attacksTotal,
        attackName: attacks
    }

    console.log(multiAttackWithDescription)
    return multiAttackWithDescription
}

export function MonsterAttack(monster) {
    let monsterActions = monster.actions
    let attackBonus = 0
    let hitValue = 0
    let diceSum = 0
    let attackName = ''
    const attackChoice = []

    const multiAttackIdx = monsterActions.findIndex((attack) => {
        return attack.attackName === 'multi-attack'
    })

    //Multi attack or single attack decision
    let isMultiAttack = Math.random() > 0.85
    if (multiAttackIdx !== -1 && isMultiAttack) {
        return MultiAttack(monster, multiAttackIdx)

    }
    // Delete multi attack and generate a new random number
    monsterActions.splice(multiAttackIdx, 1)
    let random = Math.floor(Math.random() * monsterActions.length)

    let randomAttack = monsterActions[random]

    attackName = randomAttack.attackName
    attackBonus = randomAttack.bonus

    //Times a dice can be thrown
    for (let i = 0; i < randomAttack.diceNumber; i++) {
        diceSum += Math.ceil(Math.random() * randomAttack.diceValue)
    }
    hitValue = diceSum + attackBonus
    attackChoice.push(attackName, hitValue)
    console.log(attackChoice)

    return attackChoice

}

console.log(MonsterAttack(Monsters[3]))