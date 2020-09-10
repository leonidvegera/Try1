'use strict';


const userFirstName1 = 'Leonid';
const userSecondName1 = 'Vegera';
let age1 = 38;

const userFirstName2 = 'Nicolia';
const userSecondName2 = 'Anelka';
let age2 = 45

function printUserName (firstName, secondName, age){
  console.log (`User: ${firstName} ${secondName}, (age:${age})`);
  console.table (`User: ${firstName} ${secondName}, age: ${age}`);
}

printUserName (userFirstName1, userSecondName1, age1);
printUserName (userFirstName2, userSecondName2, age2);
