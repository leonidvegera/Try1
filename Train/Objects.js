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

//востановим имена пользователей users в которых firstName равно undefined
// сам об'єкт знаходиться в масиві. спочатку заходимо в середину масиву ( users[prop] ) і рухаємось далі до потрібного ключа через .
function restoreNames(users) {
  for (let prop in users) {
    users[prop].firstName = users[prop].fullName.split(' ').splice(0,1).join();
    console.log(users[prop]);
    console.log(users[prop].fullName);
  }
  return users;
}
console.log(restoreNames([{firstName: undefined, lastName: 'House', fullName: 'Gregory House'}]));


console.log(`-------removeFemaleAges-------`);

//дано масив об'єктів, тому при переборі ключів спочатку заходимо в масив[], далі в .ключ
function removeFemaleAges(people) {
  for (let prop in people) {
    if (people[prop].gender === 'female') {         //якщо стать жіноча
      delete people[prop].age;                     //видаляємо вік
    }
  }
  return people;
}
console.log(removeFemaleAges([
  { name: 'Lilia', gender: 'female', age: 23 },
  { name: 'Robert', gender: 'male', age: 51 },
  { name: 'Katarina', gender: 'female', age: 19 },
  { name: 'Carolyn', gender: 'female', age: 35 },
  { name: 'Michael', gender: 'male', age: 31 },
  ]));


console.log(`-------getOutdated-------`);

//Функция getOutdated принимает массив роботов robots и возвращает массив индексов для роботов, у которых core_version меньше новой версии newVersion ПО.
const robots = [
  {core_version: 9},
  {core_version: 13}, 
  {core_version: 16}, 
  {core_version: 9}, 
  {core_version: 14}];

function getOutdated(robots, newVersion) {
  let result = [];
  for (let i = 0; i < robots.length; i++) {
    if (robots[i].core_version < newVersion) {
      result.push(i);
    }
  }

  return result;
}
console.log(getOutdated(robots, 10));


console.log(`-------count_boxes-------`);

// !!!! з підказки роми апостола!! йдемо в циклі по boxes. дивимось на букву, якщо такої букви в obj немає - пишемо для цеї букви 1.
// якщо така буква вже є в obj  - збільшуємо значення на 1
function countBoxes(boxes) {
  const obj = {};

  for (let i = 0; i < boxes.length; i++) {
    if (obj.hasOwnProperty(boxes[i]) === false) {
      obj[boxes[i]] = 1;
    } else {
      obj[boxes[i]] += 1;
    }
  }

  return obj;
}
console.log(countBoxes('aaaaca31'));


console.log(`-------getRobotSchema-------`);

//Создай функцию getRobotSchema, которая принимает объект robot и возвращает набор ключей и типы значений, которые в них сохраняться. Результат должен выглядеть так: [[key, type], [key, type] ...]
const robot = {
  version: 16,
  name: 'Cleaner 3000',
  coords: [345, 12],
};

function getRobotSchema(robot) {
  for (let key in robot) {         //перебираем объект
    robot[key] = typeof(robot[key]);  //каждое значение меняем на новое (тип значения)
  }

  return Object.entries(robot);  //возвращаем массив из массивов
}
console.log(getRobotSchema(robot));