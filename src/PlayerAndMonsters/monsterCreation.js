// import React from 'react'

import { monsters } from "./monsters";

const monsterList = [];

export const generateMonsters = (numberOfMonsters) => {
  for (let i = 0; i < numberOfMonsters; i++) {
    let randomIndex = Math.floor(Math.random() * monsters.length);
    let newMonster = generateMonster(monsters[randomIndex]);
    monsterList.push(newMonster);
  }

  return monsterList;
};

const generateMonster = (monster) => {
  let monsterSizes = getMonsterSizeAndGamepoints(monster);

  console.log("Ro", monster.actions, getMonsterAttacks(monster));

  const newMonsterCreation = {
    monsterName: monster.name,
    monsterSize: monsterSizes.monsterSize,
    attackNames: getMonsterAttacks(monster),
    attackValue: 0,
    hitpoints: getMonsterMaxLife(monster),
    isAttacking: false,
    monsterPoints: monsterSizes.monsterPoints,
  };
  return newMonsterCreation;
};

const getMonsterSizeAndGamepoints = (monster) => {
  let size = monster.hitpoints.additional.diceValue;
  let monsterSizeAndGamepoints = {};

  switch (size) {
    case 4:
      monsterSizeAndGamepoints = { monsterSize: "tiny", monsterPoints: 1 };
      break;
    case 6:
      monsterSizeAndGamepoints = { monsterSize: "small", monsterPoints: 3 };
      break;
    case 8:
      monsterSizeAndGamepoints = { monsterSize: "medium", monsterPoints: 4 };
      break;
    case 10:
      monsterSizeAndGamepoints = { monsterSize: "large", monsterPoints: 8 };
      break;
    case 12:
      monsterSizeAndGamepoints = { monsterSize: "huge", monsterPoints: 12 };
      break;
    case 20:
      monsterSizeAndGamepoints = {
        monsterSize: "gargantuan",
        monsterPoints: 20,
      };
      break;
    default:
      console.log(`Size: ${size} doesn't exist`);
  }

  return monsterSizeAndGamepoints;
};

//This should be recycled to be used  by monsters or players
const getAdditionalLife = (monster) => {
  let monsterInitialLife = monster.hitpoints;
  let additionalLifeSum = 0;

  for (let i = 0; i < monsterInitialLife.additional.diceNumber; i++) {
    additionalLifeSum += Math.ceil(
      Math.random() * monsterInitialLife.additional.diceValue
    );
  }
  return additionalLifeSum;
};

// Getting the monsters attacks
function getMonsterAttacks(monster) {
  let attacks = [];
  let monsterAttack = monster.actions;
  for (let i = 0; i < monsterAttack.length; i++) {
    attacks.push(monsterAttack[i]);
  }
  return attacks;
}

//This should be recycled to be used  by monsters or players
const getMonsterMaxLife = (monster) => {
  const { base, additional } = monster.hitpoints;

  const bonusLife = additional.bonus;

  const monsterMaxLife = base + bonusLife + getAdditionalLife(monster);

  return monsterMaxLife;
};
