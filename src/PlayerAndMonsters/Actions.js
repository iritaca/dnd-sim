import { Monsters } from './Monsters'


// This should be recycled to be used  by monsters or players
function isAttacking(monster) {
    let armorClass = monster.armorClass
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

// attack used by Monster with multi-attack action like: Hezrou, abeloth, and pit fiend, multiattack needs more work it currently gives the attacks in the actions level, but it should render the number of attacks inside the multiattack
function MultiAttack(monster) {
    let monsterActions = monster.actions

    let newMonsterAttack = []
    let attacks = []
    let attacksInMultiAttack = []
    // let multiAttackWithDescription = {}

    let attackObj = []

    //Create the objects for the attacks inside the multiattack action

    monsterActions.forEach((attack, idx) => {
        if (attack.attackName === 'multi-attack') {
            attacksInMultiAttack = attack.attacks

        } else {
            let attackData = {
                attackName: monsterActions[idx].attackName,
                bonus: monsterActions[idx].bonus,
                diceNumber: monsterActions[idx].diceNumber,
                diceValue: monsterActions[idx].diceValue,
            }
            newMonsterAttack.push(attackData)
        }
    })


    // console.log(attacksInMultiAttack) //
    // console.log(newMonsterAttack) //attacks without multiattack

    //stores the object for each attacksInMultiAttack
    for (let i = 0; i < attacksInMultiAttack.length; i++) {
        for (let j = 0; j < newMonsterAttack.length; j++) {
            // console.log(i, j)
            // console.log(attacksInMultiAttack[i], newMonsterAttack[j].attackName)
            if (attacksInMultiAttack[i] === newMonsterAttack[j].attackName) {
                attackObj.push(newMonsterAttack[j])
            }
        }
    }
    // console.log(attackObj)

    // Generate 3 random values for each attack and stores the name for each attack
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

    // console.log(mappedRandomAttackValue)

    //isolate the attack values from attacks
    const mappedAttackValue = attacks.map((attackValue) => {
        let attackVal = attackValue.attackValue
        let acum = 0
        acum += attackVal
        return acum
    })

    // //sum of all the attacks
    const attacksTotal = mappedAttackValue.reduce((preValue, curValue) => {
        return preValue + curValue
    }, 0)

    // console.log(`total attacks ${attacksTotal}`)


    let multiAttackWithDescription = {
        multiAttackValue: attacksTotal,
        attackName: attacks
    }
    console.log(multiAttackWithDescription)
    return multiAttackWithDescription
}

export function MonsterAttack(monster) {
    let monsterActions = monster.actions
    let attacksCount = monsterActions.length
    let attackBonus = 0
    let hitValue = 0
    let diceSum = 0
    let attackName = ''
    // let multiAttackNames = []
    const attackChoice = []

    const multiAttack = monsterActions.find((attack) => {
        return attack.attackName === 'multi-attack'
    })

    //Multi attack or single attack decision
    if (multiAttack && Math.random() > 0.85) {
        MultiAttack(monster)
        return
    } else {
        let random = Math.floor(Math.random() * attacksCount)
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
}

console.log(MonsterAttack(Monsters[3]))