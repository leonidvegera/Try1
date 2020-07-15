'use strict';

const name = 'Leonid';
const surname = "Vegera";
const fullName = `${name}
Vasyliovych 
${surname}`;

console.log(fullName);

console.log('I\'m very rich!');
console.log('Let\'s \n travel!'); //щоб поставити апостроф та перевід строки, слеш
console.log('Let\\\'s travel!'); // чтобы вставить слеш ставим дополнительный екран слеш

let guestsList = ('Martin \n Borman \n Adolf \n German \n Hugo');
console.log(guestsList);

// ------------------------------------------------------------

const message1 = 'Hello ' + name + '!'; // метод конкатенации
const message2 = `Hello ${name}!`; // метод интерполяции
console.log(message1);
console.log(message2);
//alert(message1 === message2);


// -------------------------------------------------------------

let a = 'John';
let b = 'Michael';
console.log(a.length);
console.log(b.length);

const shortest = (a.length < b.length) ? a : b;
console.log(shortest);
console.log(a[0]);
console.log(a[2]);
console.log(b.charAt(0));
console.log(b.charAt(5))

// -------------------------------------------------------------

console.log(`-----------Перебор--------------`);

for (let i = 0; i < surname.length; i++) {
  console.log(surname[i]);
}
console.log(`----------Наоборот--------------`);

for (let i = surname.length - 1; i >= 0; i--) {
  console.log(surname[i]);
}
console.log(`-----------for let...of-------------`);

for (let letter of a) {
  console.log(letter);
}

// --------------------------------------------------------------


console.log(`-----------Define code-------------`);

let speak = 'lelgislation';
console.log(speak.charCodeAt(2));   //код 2-го символа, тобто літери l - 108
console.log(String.fromCharCode(105));   //символ, який відповідає коду 105 - i 

for (let i = 0; i < surname.length; i++) {
  let xCode = surname.charCodeAt(i);
  console.log(surname[i], surname.charCodeAt(i), String.fromCharCode(xCode)); //перебір прізвища по черговості символів, перебір кодів у прізвищі, перебір з виведенням символів відповідно їх кодам
}
console.log(`-----------JS.Info----------------
------------------------------------------------`);

console.log('Intruder'.toUpperCase()); //верхній регістр строки Інтрудер
console.log('Intruder'.toLowerCase()); //нижній регістр строки Інтрудер
console.log('Intruder'[2].toUpperCase()); //верхній регістр 2-го символа строки Інтрудер
console.log('Intruder'[2].toLowerCase()); //нижній регістр 2-го символа строки Інтрудер

let str = 'Hi';
//str = 'h' + str[1];
str = str[0] + "I";
console.log(str);

// --------------------------------------------------
/* let strin = 'Ослик Иа-Иа посмотрел на виадук';
let target = 'Иа'; // цель поиска

let pos = 0;
while (true) {
  let foundPos = strin.indexOf(target, pos);
  if (foundPos == -1) break;

  alert( `Найдено тут: ${foundPos}` );
  pos = foundPos + 1; // продолжаем со следующей позиции
} */

console.log(`-----------Mate Academy----------------
------------------------------------------------`);

console.log(`-------CalcGuests-------`);
// Хуета. Код не проходит при цифре 10. Нужно разобраться! Определи первое число и дальше ParseInt

function calculateGuests(guestsInput) {
  let guests = ''; // строки не изменны! каждый раз новая строка для изменений

  for (let i = 0; i + 1 < guestsInput.length; i++) {
    if (guestsInput.charCodeAt(i) < 49 || guestsInput.charCodeAt(i) > 57) {
      continue;
    } guests = guests + guestsInput[i];

  } if (!guests.length) {
    return 'not a number';
  }
  return +guests;
}
console.log(calculateGuests('Нас будет 15 человек на сундук'));


console.log(`-------Alfabet-------`);


function isAlphabet(guests) {
  for (let i = 0; i + 1 < guests.length; i++) {  // ?????? почему i + 1 так и не понял
    //console.log(guests.length, i, i < guests.length, guests.charCodeAt(i), (guests.charCodeAt(i + 1)));
    if ((guests.charCodeAt(i) + 1) === (guests.charCodeAt(i + 1))) {
      continue;     // если код теперешней буквы + 1 будет равняться
    } else {        // коду буквы увеличенному на единицу, то програма
      return false;  // продолжается до конца и всегда тру, либо пока не наступит фолс
    }
  } return true;
}
console.log(isAlphabet('abcdefghijklmnopr'));


console.log(`-------Decript-------`);

function decryptMessage(message) {
  let str1 = '';
  for (let i = message.length-1; i >= 0; i--) {  //перебір в зворотному порядку
    str1 += message[i];                          //додаємо в нову строку поточний символ кожного разу
    }
  return str1;
}
console.log(decryptMessage('+Fuck you bitch!!!')); // Зробив сам, додумався через декілька днів


console.log(`-------Werefolf-------`);

function isWerewolf(target) {    // майже сам, трохи піддивився
  let dir1 = '';                 // пуста строка напрямок1
  let dir2 = '';                 // пуста строка напрямок2
  for (let i = 0; i < target.length; i++) {   
    if (target[i] !== ' ') {        //якщо поточний символ не є пробілом,
    dir1 += target[i];              //поміщаємо цей символ в нову строку напрямок1
    }                               // якщо пробіл, промовчимо))
  }
  for (let i = target.length -1; i >= 0; i--) { //перебираємо строку в зворотному порядку
    if (target[i] !== ' ') {        // аналогічно, якщо символ не є пробілом...
    dir2 += target[i];
    }
  }
  if (dir1 === dir2) {              // порівнюємо нові строки. якщо дорівн то тру
    return true;
  } else {
    return false;
  }
}
console.log(isWerewolf('a b c b a'));


// -------------------------------------
//інший розв'язок

/* function isWerewolf(target) {
  let sentence = target.replace(/ /g, '');
  let reverse = '';
  for(let i=sentence.length - 1; i>=0; i--){
    reverse += sentence[i];
  }if (sentence == reverse){
    return true;
  }else{
    return false;
  }
} */



console.log(`-------Success rate-------`); // Сам сделал!!!

function getSuccessRate(statistic) {
  let oneString = statistic.replace(/0/g,'');  //створюємо строку, в якій всі нолі замінюємо пустим місцем
  let percent = oneString.length * 100 / statistic.length; //перемінна, в якій визначаємо відсоток одиниць до всіх символів разом
  if (percent) {
    return (Math.round(percent));  // округляємо до цілого числа і повертаємо
  } else {
    return 0                      // якщо не пройшла операція (нулі або пусто), повертаємо ноль
  }
}
console.log(getSuccessRate('11101100')); // 63%. Сам сделал!!! Красава


console.log(`-------Success rate improved-------`);

function getSuccessRateImproved(statistic) {
  let str1 = '';
  let str2 = '';
  for (let letter of statistic) {
    if (+letter === Number(letter) && +letter !== +'0') {   // якщо символ будь-яке число крім ноля, то відправляємо його в нову строку str1
      str1 += letter;
  } if (letter === '0') {       //якщо вимволи Нолі, відправляємо їх в окрему строку str2
      str2 += letter;
  } continue;                   //якщо символи інші знаки, виходимо на початок функції
}
return Math.round(str1.length * 100 / (str1.length + str2.length));
}
console.log(getSuccessRateImproved('dfr00111ertrb111')); // Зробив майже сам



console.log(`-------Remove vowels-------`); // Зробив сам, правда довго і якось тупо

function removeVowels(document) {
  let str1 = '';                           // строка для збереження нових даних
  for (let i = 0; i < document.length; i++) {
    if (document[i] === 'a'        //якщо поточний символ строки дорівнює "а" і т.д.,
    || document[i] === 'e'         //...
    || document[i] === 'i' 
    || document[i] === 'o' 
    || document[i] === 'u' 
    || document[i] === 'y'
    || document[i] === 'A' 
    || document[i] === 'E' 
    || document[i] === 'I' 
    || document[i] === 'O' 
    || document[i] === 'U' 
    || document[i] === 'Y') {
      str1 += '';                // в в строку заноситься пусте значення
     } else {
       str1 += document[i];      //в іншому випадку в строку заноситься поточний символ
     }
  } return str1;                // функція повертає значення строки1
}
console.log(removeVowels('Haello baby'));


console.log(`-------Make abbr-------`);  // Сам порішав! Я крутий!

function makeAbbr(words) {
  let str = words[0].toUpperCase();         //задаємо нову строку, перший символ якої це велика літера початкової строки
  for (let i = 1; i < words.length; i++) {  //перебір починаємо з другого символу, бо перший вже є
    if (words[i] === ' ') {                 //якщо поточний символ дорівнює пробілу, 
      str += (words[i+1]).toUpperCase() ;   //то додаємо до строки наступний за ним символ у верхньому регістрі
    }
  } return str;                             //повертаємо строку
}
console.log(makeAbbr('central inteligence agency')); 