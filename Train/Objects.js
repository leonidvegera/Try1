'use strict';

let bigBoss = {             // об'єкт зі Свойствами (ключами і значеннями)
  name: 'Leonid',
  surname: 'Vegera',
  nick: 'nobble',
  age: 39,
  character: 'fabulous'
};

function whoIsBoss(user) {          // параметром функції буде назва об'єкта
  console.log(`Our ${user.nick} ${user.name} ${user.surname} in ${user.character} age of ${user.age}`);
}
whoIsBoss(bigBoss); // функція виводить в консоль всі свойства об'єкта з доданим текстом

// -------------------Прописи ключа--------------------------

let best = 'Rebrov';
let worst = 'Aliev';
let dynamo = {
  'coach': 'Luzhnyi',
  "middlefield": 'Garmash',
  forward: 'Shevchenko',
  'goal keeper': 'Boyko',
  best,
  worst,
  "fu#%ing_subst": 'Maximov',
  12: 'Leonenko',
  13: 'Kaduri',
  ['ex + coach']: 'Sabo',
  [1 + 6]: 'Mamedov',
  ['1 + 1']: 'Blokhin',
}
console.log(dynamo);

// -------------------Получение свойств--------------------------------

console.log(dynamo['middlefield']);  // виводимо в консоль значення об'єктів
console.log(dynamo["middlefield"]);  // можна і так, те ж саме
console.log(dynamo.middlefield);     // можна і так, те ж саме
console.log(dynamo.coach);
console.log(dynamo['fu#%ing_subst']);
console.log(dynamo['12']);
console.table(dynamo);

// -------------------Замена и добавление свойств--------------------------------

dynamo.coach = 'Lobanivskyi';
dynamo.middlefield = 'Bielkevich';
dynamo['forward'] = 'Bielanov';
dynamo.looser = 'Milevskyi';
dynamo['worst coach'] = 'Tsygan';
dynamo.zhyd = 'Surkis';
dynamo['star'] = 'Shovkovskyi';
console.log(dynamo);
console.table(dynamo);

// -------------------Удаление свойств-------------------

delete dynamo['fu#%ing_subst'];
delete dynamo['1 + 1'];
delete dynamo['7'];
delete dynamo['ex + coach'];
delete dynamo.looser;
delete dynamo.zhyd;
console.log(dynamo);
console.table(dynamo);

// -------------------Проверка на наличие свойства в обёекте-------------------

console.log(dynamo.hasOwnProperty('coach'));
console.log(dynamo.hasOwnProperty('zhyd'));
console.log('goal keeper' in dynamo);
console.log('looser' in dynamo);
console.log(dynamo.star !== undefined);
console.log(dynamo.zhopa !== undefined);

// -------------------Запись ключа по разному-------------------

let data = {
  "3": 100,
  '3': 200,
  3: 300,
  [5 - 2]: 400, // спочатку плюсується, а потім перетворюється на строку
  ['2 + 1']: 600, // строка, тому результат додавання не буде 3
}
console.log(data);
console.log(data["3"]);
console.log(data['3']);
console.log(data[3]);
console.log(data[5 - 2]);
console.log(data['2 + 1']); //не співпадає з іншими

// -------------------Про ім'я перемінної без ''-------------------

const hisName = {
  firstName: 'George',
  age: 36,
}
let firstName = 'firstName';
console.log(hisName[firstName]);

// -------------------Перебір об'єкту-------------------
console.log(`-------Перебір об'єкту-------`)

let dynamo86 = {
  goalkeeper1: 'Chanov',
  goalkeeper2: 'Mihailov',
  coach: 'Lobanovskyi',
  defender1: 'Kuznecov',
  defender2: 'Baltacha',
  defener3: 'Bessonov',
  1: 'Belanov',
  midfield1: 'Rac',
  midfield2: 'Demianenko',
  midfield3: 'Yaremchuk',
  2: 'Zavarov',
  midfield4: 'Bal',
  3: 'Blohin',
  assassin: 'Leonenko',
}
console.log(dynamo86);
console.table(dynamo86);

for (let players in dynamo86) {
  console.log(players, dynamo86[players]);
}

const dynamoKeys = Object.keys(dynamo86);
console.log(dynamoKeys);

const dynamoValues = Object.values(dynamo86);
console.log(dynamoValues);

const dynamoEntries = Object.entries(dynamo86);
console.log(dynamoEntries);



console.log(`-----------Mate Academy----------------
--------------------------------------------------`);

console.log(`-------AddFullName-------`); // Примитив, вирішив за 5 хі вночі

function addFullName(user) {
  user.fullName = `${user.firstName} ${user.lastName}`;
}


console.log(`-------RestoreNames-------`);

function restoreNames(users) {
  // write code here
}

console.log(`-------removeFemaleAges-------`);

function removeFemaleAges(people) {
  if (people.gender === 'female') {
    delete people.age;
  }
}

