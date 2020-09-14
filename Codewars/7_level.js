// порахувати кількість голосних (a, e, i, o, u)
function getCount(str) {
  var vowelsCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
      vowelsCount++;
    }
  }
  return vowelsCount;
}

/* function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;    // довжина строки, створеної з співпадінь
} */

/* function getCount(str) {     // перебор в переборі!! корисна штука
  var vowelsCount = 0;
  var vowels = ["a","e","i","o","u"];
  for(var i = 0;i < str.length;i++){       //перебираємо строку на співпадіння елементів з масивом літер, входячи в неї
    for(var j=0;j<vowels.length;j++){     // перебираємо масив з літер
      if(str[i] === vowels[j]){          // якщо є співдадіння - 
        vowelsCount++;                  // +1 до ліку
      }
    }
  }
  
  return vowelsCount;
} */

/* function getCount(str) {
  return str.replace(/[^aeiou]/gi, '').length;  //замінюємо всі потрібні елементи без урахування регістру, і повертаємо їх довжину
} */

console.log(getCount('abraceouadabra'));

// -------------------------------------------------------------------------

//выделить из строки знак который по центру, если число парное, то 2 знака
function getMiddle(s) {
  let numb = s.length / 2;
  if (Number.isInteger(numb)) {
    return (s.substr(numb - 1, 2));
  } else {
    return (s.substr(Math.floor(numb), 1));
  }
}

/* function getMiddle(s) {
  var middle = s.length / 2;
  return (s.length % 2) 
    ? s.charAt(Math.floor(middle))
    : s.slice(middle - 1, middle + 1);   // метод middle
     */

console.log(getMiddle('A'));

// -------------------------------------------------------------------------

// убрать все гласные (a, e, i, o, u) из строки - сам!!
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, ''); //замінюємо всі голосні в строці стр на пусті 
}              // в архівійде просто перелік символів, без ком чи лапок, бо ці знаки теж видалить з строки


/* const disemvowel = (str) => {   // можна так наприклад ще
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let newStr = '';
  for (let i = 0; i <= str.length; i++) {
    let char = str.charAt(i);
    if (vowels.indexOf(char) == -1) {  //якщо в строці (архіві) немає символу з індексом і, то
      newStr += char;       //цей символ додається в нову строку
    }
  }
    return newStr;
}; */

console.log(disemvowel('This website, is for losers LOL!'));

// -------------------------------------------------------------------------

// вернуть длинну самого короткого слова
function findShort(s){
  return s.split(' ')       //превращаем строку в масив с разделителями по пробелам
 .sort((a,b) => a.length - b.length)    //сортируем по возрастанию длинны элементов массива
 [0].length;         //возвращвем длинну первого элемента массива
}

/* function findShort(s){
  var arr = s.split(' ');
  var smallest = arr[0];     //техническая переменная (начальная самая маленькая)
  for (var i = 0; i < arr.length; i++) {
    if(arr[i].length < smallest.length){   //если длинна перебираемого элемента массива меньше технической переменной
      smallest = arr[i];                   //то самая маленькая длинна обновляется до новой минимальной
    }
  }
  return smallest.length;                  //возвращается длинна самой маленк переменной
} */
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

// крутой вариант!!!!!-----!!!!-!!!!!-----!!!!!---!!!!!!
let findShort2 = (s) =>                //создаем функцию
s.split(' ')                           //преобразуем строку в массив
.sort((a,b) => a.length - b.length)    //сортируем по порядку возрастания длинны элементов
.shift()                               //получаем первый элемент из массива
.length;                               //и возвращаем его длинну
console.log(findShort2("bitcoin take over the world maybe who knows perhaps"));

// -------------------------------------------------------------------------

//каждое слово должно начинаться с большой буквы
let str = (s) =>                               //создаём функцию
s.split(' ')                                   //преобразуем строку в массив с разделителем по пробелу
.map(s => s[0].toUpperCase() + s.slice(1))     //в каждом элементе первую букву делаем большой, слово дополняем остатком слова
.join(' ');                                    //превращаем массив в строку с разделителем по пробелу
console.log(str('How can mirrors be real if our eyes aren\'t real'));

// -------------------------------------------------------------------------

//проверяем, если квадратный корень числа н ровное число - тру, если дробное - фолс
let isSquare = function(n){
  return Number.isInteger(Math.sqrt(n)) ? true : false;
  //return Math.sqrt(n) % 1 === 0;    //остаток от деления корня на единицу должен быть 0
}
console.log(isSquare(25));

// -------------------------------------------------------------------------

//каждую цифру числа в квадрат и конкатинировать получившиеся цифры
function squareDigits(num){
let num1 = String(num);    //превращаем цифровое значение в строку
let str = '';              //техническая строка
for (let i = 0; i < num1.length; i++) {    //перебираем строку
  str += (num1[i] * num1[i]);         //квадрат каждого элемента конкатинируем к технической строке
} return +str;                        //возвращаем число
}
// return Number(('' + num).split('').map(function (val) { return val * val;}).join('')); //вот круто!!!
// return +num.toString().split('').map(i => i*i).join(''); !!!! еще круче
// return +String(num).split('').map(function(num){return +num * +num;}).join('');

console.log(squareDigits(9119));