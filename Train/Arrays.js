'use strict';


const numbers = [10, 11, 12, 13];
console.log(numbers);

// -------------------Перебор массива--------------------------------

for (let i = 0; i < numbers.length; i++) {  // перебор фор
  console.log(numbers[i]);
}

for (let value of numbers) {  // перебор черех лет оф
  console.log(value); 
}

// -------------------Создание массива--------------------------------

const arr1 = [8, ,9];
const arr2 = new Array(8);
const arr3 = Array(8, 9);
console.log(arr1);
console.log(arr2);
console.log(arr3);

// ---------------Создание массива из строки-----------------------------

const word1 = 'wbc';
const word2 = 'icf';
const word3 = 'millwall';
console.log(word1.split(''));
console.log(Array.from(word2));
console.log([...word3]);

// ---------------Добавление элементов в массив-----------------------------

numbers.push(99);  // push - добавления элемента в конец массива с помощью Push
console.log(numbers);
numbers.push(100, 101, 102);  // push - добавление нескольк єлемен в конец массива с помощью Push
console.log(numbers);
numbers[2] = 0;  // замена элемента в середине массива с помощью []
console.log(numbers);
numbers[8] = 88;  // добавление элемента в конец массива с помощью [], индекс ячейки 8 равняется длинне 9
console.log(numbers); 
console.log(numbers.length); // длинна массива - 9
numbers[numbers.length] = 33;  // добавление элемента в конец массива с помощью испол длинны массива и [], длинна массива 9, добавляем девятый элемент, длинна становится 10
console.log(numbers);
numbers.unshift(1,2,3,4);  //unshift - добавление нескольких єлементов в начало массива
console.log(numbers);

// ---------------Удаление элементов из массива-----------------------------

numbers.pop();  // pop - удаление элемента в конце массива с помощью Pop
console.log(numbers);
numbers.shift();  // shift - удаление элемента в начале массива с помощью Shift
console.log(numbers);


console.log(`-----------Mate Academy----------------
------------------------------------------------`);

console.log(`-------Make stickers-------`);   // Зробив майже сам, запушити в пустий масив піддивився

function makeStickers(countOfDetails, robotPart) {
  let stickers = [];                          // створюємо пустий масив, куди будемо пушити кожного разу коли умова відбувається
  let numberOfDetail = 0;                     // створюємо кількість деталей і надаємо цифрове значення 0 - потім видалив цей елемент як не потрібний
  for (let i = 1; i <= countOfDetails; i++) {   // починаємо перебір послідовності деталей, поки не стане більше ніж кількість деталей
    numberOfDetail++;                            // збільшуючи кожного разу кількість деталей на 1
    let sticker = `${robotPart} detail #${numberOfDetail}`;  //нехай масив буде текстовим з додаванням перемінних, він буде додаватись до пустого масиву
    if (numberOfDetail <= countOfDetails) {           // поки номер деталі не буде більшим ніж кількість деталей
      stickers.push(sticker);                        // до масиву буде додаватись новий масив з новою деталлю
    } else {                                 // в іншому випадку - виходимо з перебору
      break;
    }
  }
  return stickers;                      // повертаємо функції значення масиву з доданими
}
console.log(makeStickers(5, 'Head'));

//+++++++++++++++++++++ Краще +++++++++++++++++++++++++++
function makeStickers(countOfDetails, robotPart) {  // а от до цього додумався сам,
  let stickers = [];                             // видаливши зайву numberOfDetail, що дублювала і
  for (let i = 1; i <= countOfDetails; i++) {     // залишив лише і
    let sticker = `${robotPart} detail #${i}`;
    if (i <= countOfDetails) {
      stickers.push(sticker);
    } else {
      break;
    }
  }
  return stickers;
}
console.log(makeStickers(7, 'Tail'));



console.log(`-------Double power-------`); // майже сам, думав через arrguments, але вийшло через перебір

function doublePower(currentPowers) {
  let doubleArray = [];                     // створюємо пустий масив, куди будемо пушити кожного разу коли умова відбувається
  for (let i = 0; i < currentPowers.length; i++) {  // починаємо перебір ячейок масива з потужностями, поки не досягнемо повної довжини масива
      doubleArray.push((currentPowers[i]) * 2);    // при переборі кожної ячейки масиву значення ячейки з номером і множимо на 2 і додаємо до масиву
  } 
  return doubleArray;                // повертаємо функції значення помноженого на 2 масиву з доданими
}
console.log(doublePower(5));


/* function doublePower(currentPowers) {
  // write code here
  const doublePower = [];
  if (currentPowers==1) {
  for (let value of currentPowers) {
  doublePower.push(2*(currentPowers));
  } return doublePower;
  } else {for (let value of currentPowers) {
    doublePower.push(2*currentPowers[value]);
  } return doublePower;
}} */


console.log(`-------Get speed statistic-------`);

/* function getSpeedStatistic(testResults) {
  let testResultsMin = [];
  let testResultsMax = [];
  let testResultsMid = [];
  for (let i = 0; i < testResults.length; i++) {
    if 
  }
} */


console.log(`-------Compare robots-------`);         // !!! Все розрахував і зробив сам з першого разу!!

function compareRobots(firstRobotResults, secondRobotResults) {
  let sumOfResults1 = 0;                           //створюємо числову перемінну для результатів сумування елементів масиву першого роботу
  let sumOfResults2 = 0;                           //створюємо числову перемінну для результатів сумування елементів масиву другого роботу
  for (let i = 0; i < firstRobotResults.length; i++) {   // перебираємо масив першого роботу 
    sumOfResults1 += firstRobotResults[i];               // і додаємо в перемінну кожен елемент масиву (поки не закінситься масив)
  }
  for (let i = 0; i < secondRobotResults.length; i++) {   // перебираємо масив другого роботу
    sumOfResults2 += secondRobotResults[i];               // і додаємо в перемінну кожен елемент масиву (поки не закінситься масив)
  }
  if (sumOfResults1 > sumOfResults2) {                  // якщо сума результатів першого масиву більше ніж сума результатів другого масиву,
    return 'First robot for sale!';                     // повертаємо функції текстове значення
  }
  if (sumOfResults1 < sumOfResults2) {                 // і так далі по аналогії
    return 'Second robot for sale!';
  }
  if (sumOfResults1 === sumOfResults2) {
    return 'Both robots for sale!';
  }
}
console.log(compareRobots([10,15,2,4,9], [8,7,6,4,5]));



console.log(`--------Is sorted---------`);

//function isSorted(boxes) {
/*   let indexOfBox = '';
  for (let i = 0; i < boxes.length; i++) {
     indexOfBox += boxes[i];
      console.log(i);
   
  } */
/*   let indexOfBox = '';
  for (let i = 0; i < boxes.length; i++) {
    indexOfBox += boxes[i];
    if ((indexOfBox.charCodeAt(i) + 1) <= (indexOfBox.charCodeAt(i + 1))) {
    continue;
  } else {
    return false;
  }
} return true;
} */
//console.log(isSorted([0,1,2,3,'b','c','d']));


console.log(`-------Get location-------`);  // Ніхуя не зрозумів. Треба розбиратись

function getLocation(coordinates, commands) {
  let x;
  let y;
  for (let i = 0; i < commands.length; i++) {
    if (commands[i] == 'forward') {
      coordinates[1] += 1;
    }
    if (commands[i] == 'back') {
      coordinates[1] -= 1;
    }
    if (commands[i] == 'right') {
      x+=1;
    }
    if (commands[i] == 'left') {
      x-=1;
    } 
  } let result = [x, y];
  return result;
}
console.log(getLocation([0,0], ['forward', 'right']));


 /* function getLocation(coordinates, commands) {
  let x = coordinates.shift();
  let y = coordinates.pop();
  let result = [x,y]
  for (let i=0; i<commands.length; i++) {
   if (commands[i]=='forward') {y+=1;}
   if (commands[i]=='back') {y-=1;}
   if (commands[i]=='right') {x+=1;}
   if (commands[i]=='left') {x-=1;}
  }
  return result;
  }
  console.log(getLocation([0,0], ['forward', 'right'])) */


/*   function getLocation(coordinates, commands) {
    // write code here
   let x = coordinates.shift();
   let y = coordinates.shift();
   for (let i=0; i<commands.length; i++) {
    if (commands[i]=='forward') {y+=1;}
    if (commands[i]=='back') {y-=1;}
    if (commands[i]=='right') {x+=1;}
    if (commands[i]=='left') {x-=1;}
  } let result = [x,y]; console.log(result);
  return result;
  } */



  console.log(`-------Get plan-------`);  // Повністю сам додумався, але дуже складно, півдня потів

function getPlan(currentProduction, months, percent) {
  let planCount = [Math.floor(currentProduction * percent / 100) + currentProduction];  // Задаємо перший елемент масиву до якого потім будемо додавати елементи, одразу прораховуючи в ньому першу дію і округлюючи до цілого числа, бо потім полізуть дроби
  let temporPlan = (currentProduction * percent / 100) + currentProduction;             // Задаємо змінну з прорахованою першою дією (те ж саме що і зверху) для того щоб в цю змінну потім при ітераціях в циклі додавати суми
  if (months > 0) {                                                                     // Задаємо умову щоб було мінімум 1 місяць, бо якщо немає місяців, то немає і ніяких дій
    for (let i = 1; i < months; i++) {                                                  // Якщо умова дотримана, то перебираємо цикл   
      temporPlan = Math.floor((temporPlan * percent / 100) + temporPlan);             // з кожною ітерацією до первинної перемінної додаємо відсоток нової перемінної, округлений до меншого числа
      planCount.push(Math.floor(temporPlan));                                          // з кожною ітерацією до первинного масиву додаємо нові елементи, округлені до меншого числа
    }
    return planCount;                                                                  // повертаємо функції значення масиву
  } else {
    return [];                                                                         // якщо місяців 0, повертаємо масиву пусте значення
  }
}

console.log(getPlan(1000,6,30));
