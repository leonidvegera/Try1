
function weatherInfo(temperature) {
  var c = convertToCelsius(temperature);
  if (c < 0) {
    return (c + " is freezing temperature");
  } else {
    return (c + " is above freezing temperature");
  }
}
console.log(weatherInfo(100));

// Фаренгейты в цельсий
function convertToCelsius(temperature) {
  var celsius = (temperature - 32) * (5 / 9);
  return +celsius.toFixed(2);          // 2 знака после ноля
}
console.log(convertToCelsius(100));

function cockroachSpeed(s) {
  let distance = s * 1000 * 100;
  let secondsInHour = 60 * 60;
  return Math.floor(distance / secondsInHour);
}
console.log(cockroachSpeed(1.09));

// --------------------------------------------------------

const quarterOf = (month) => {
  if (month > 0 && month <= 3) {
    return 1;
  } else if (month > 3 && month <= 6) {
    return 2;
  } else if (month > 6 && month <= 9) {
    return 3;
    } else if (month > 9 && month <= 12) {
    return 4;
    }
}
console.log(quarterOf(12));

// --------------------------------------------------------

// привет Имя с большой буквы, остальные в маленькие, если пробел или нет имени - привет мир
function hello(name) {
  if (name == '' || name == null) {
  return ('Hello, World!');
  } else {
    return (`Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`);
  }
}
console.log(hello('petyA'));

// --------------------------------------------------------

// если многоугольник квадрат - вычесть его площадь, если прямоугольник - периметр
const areaOrPerimeter = function(l , w) {
  if (l === w) {
    return l * w;
  } else {
    return (l * 2 + w * 2);
  }
}
console.log(areaOrPerimeter(4,4));

// --------------------------------------------------------

// принимает значение и переделівает в число через parseFloat, если получили не число - тогда null
function parseF(s) {
if (isFinite(parseFloat(s))) {
    return parseFloat(s);
  } else {
    return null;
  }
// return isFinite(parseFloat(s)) ? parseFloat(s) : null;  - с помощью тернарного оператора
// return isNaN(parseFloat(s)) ? null : parseFloat(s);  или так можно
}
console.log(parseF('1547.487fgtggbg'));

// --------------------------------------------------------

// повторяет символ S n-ое количестов раз
function repeatStr (n, s) {
  let str = '';
  for (let i = 0; i < +n; i++) {
    str += s;
  }
  return str;
  //return s.repeat(n);  - или так, это вообще просто конечно
}
console.log(repeatStr(6, 'A'));

// --------------------------------------------------------

// короткие переменные по бокам, длинная по центру
function solution(a, b) {
  //return (a.length < b.length) ? (a + b + a) : (b + a + b);
  if (a.length < b.length) {
    return a + b + a;
  } else {
    return b + a + b;
  }
}
console.log(solution('75', '222'));

// --------------------------------------------------------

//в зависимости от выбранного языка выдаёт приветствие
function greet(language) {
	switch (language) {
      case 'english':
        return 'Welcome';
      case 'czech': return 'Vitejte';
      case 'danish': return 'Velkomst';
      case 'dutch': return 'Welkom';
      case 'estonian': return 'Tere tulemast';
      case 'finnish': return 'Tervetuloa';
      case 'flemish': return 'Welgekomen';
      case 'french': return 'Bienvenue';
      case 'german': return 'Willkommen';
      case 'irish': return 'Failte';
      case 'italian': return 'Benvenuto';
      case 'latvian': return 'Gaidits';
      case 'lithuanian': return 'Laukiamas';
      case 'polish': return 'Witamy';
      case 'spanish': return 'Bienvenido';
      case 'swedish': return 'Valkommen';
      case 'welsh': return 'Croeso';
      default: return 'Welcome';
  }
}
console.log(greet('irish'));

/* function greet(lang) {
  return langs[lang]||langs['english'];
}
var langs = {
'english': 'Welcome',
'czech': 'Vitejte',
'danish': 'Velkomst',
'dutch': 'Welkom',
'estonian': 'Tere tulemast',
'finnish': 'Tervetuloa',
'flemish': 'Welgekomen',
'french': 'Bienvenue',
'german': 'Willkommen',
'irish': 'Failte',
'italian': 'Benvenuto',
'latvian': 'Gaidits',
'lithuanian': 'Laukiamas',
'polish': 'Witamy',
'spanish': 'Bienvenido',
'swedish': 'Valkommen',
'welsh': 'Croeso'
}; */      // крутой вариант - через объект сделать

/* function greet(language) {
  var GreetingsDB = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
  }, 
  defaultLanguage = 'english';
  return GreetingsDB[language] || GreetingsDB[defaultLanguage];
} */  // или так еще лучше

// --------------------------------------------------------

// цифры из переменной Х превратить в 0 (<5), или в 1 (5 и больше)
function fakeBin(x){
  let str = '';
  for (let i = 0; i < x.length; i++) {
    if (x[i] >= 5) {
      str += 1;
    } else {
      str += 0;
    }
  } return str;
}
console.log(fakeBin('526180'));

// --------------------------------------------------------

// !!!!!! ледь вийшло !!!!!!!!!!!!!!!  наступну букву після пробілу зробити великою

// смотря кто заказівает выпивку, тот и получает (выровнять буквы разных регистров к Большой букве в начале каждого слова)
function getDrinkByProfession(param) {
  let new1Param = param[0].toUpperCase() + param.slice(1).toLowerCase();
  let new2Param = '';
  for (let i = 0; i < new1Param.length; i++) {
    if (new1Param[i - 1] === ' ') {
      new2Param += new1Param[i].toUpperCase();
    } else {
      new2Param += new1Param[i];
    }
  }
  switch (new2Param) {
    case 'Jabroni':	return "Patron Tequila";
    case "School Counselor":	return "Anything with Alcohol";
    case "Programmer":	return "Hipster Craft Beer";
    case "Bike Gang Member":	return "Moonshine";
    case "Politician":	return "Your tax dollars";
    case "Rapper":	return "Cristal";
    default: return "Beer";
   }
}
console.log(getDrinkByProfession('scHOoL coUnSElor'));

/* function getDrinkByProfession(param) {
  param = param.toLowerCase();
  
  switch(param) {
    case "jabroni": return "Patron Tequila";
    case "school counselor": return "Anything with Alcohol";
    case "programmer": return "Hipster Craft Beer";
    case "bike gang member": return "Moonshine";
    case "politician": return "Your tax dollars";
    case "rapper": return "Cristal";
    default: return "Beer";             //  по хитрожопому. сделал все ключи маленькими
  }
} */

// --------------------------------------------------------

// вводим имя заглавными, получаем инициалы
function abbrevName(name){
let str = name[0].toUpperCase();
for (let i = 0; i < name.length; i++) {
  if (name[i] === ' ') {
    str += '.' + name[i+1].toUpperCase();
  }
}
return str;
}
console.log(abbrevName('Svitlana Leonid Vegera'));

// --------------------------------------------------------

// польские буквы должны быть заменены на латиницу
/* function correctPolishLetters (string) {
let string1 = '';
for (let i = 0; i < string.length; i++) {
  switch (string[i]) {
    case 'ą': return string.replace(ą, a);
    case 'ć': return string.replace (ć, c);
    case 'ę': return string.replace (ę, e);
    case 'ł': return string.replace (ł, l);
    case 'ń': return string.replace (ń, n);
    case 'ó': return string.replace (ó, o);
    case 'ś': return string.replace (ś, s);
    case 'ź': return string.replace (ź, s);
    case 'ż': return string.replace (ż, s);
    default: return string[i];
  }
} return string;
}
console.log(correctPolishLetters('łędrzej Błądziński')); */

// --------------------------------------------------------

// расчитываем какая сумма чаевых должна быть в зависимости от суммы и качества чаевых (качество могут писать в смешанном регистре, сумма чаевых округляется вверх)
function calculateTip(amount, rating) {
  if (rating.toLowerCase() == 'terrible') {
    return amount * 0;
  } else if (rating.toLowerCase() == 'poor') {
    return Math.ceil(amount * 0.05);
  } else if (rating.toLowerCase() == 'good') {
    return Math.ceil(amount * 0.1);
  } else if (rating.toLowerCase() == 'great') {
    return Math.ceil(amount * 0.15);
  } else if (rating.toLowerCase() == 'excellent') {
    return Math.ceil(amount * 0.2);
  } else {
    return 'Rating not recognised';
  }
}
console.log(calculateTip(445.2,'Great'));

/* function calculateTip(amount, rating) {
  switch(rating.toLowerCase()){
    case "terrible":return 0;
    case "poor":return Math.ceil(amount * 0.05);
    case "good":return Math.ceil(amount * 0.1);
    case "great":return Math.ceil(amount * 0.15);
    case "excellent":return Math.ceil(amount * 0.2);
    default:return "Rating not recognised";
  }
} */       //додаткове рішення

// --------------------------------------------------------

// из массива оценок вывести среднюю оценку и округлить вниз
function getAverage(marks){
  let count = 0;
  for (let i = 0; i < marks.length; i++) {
    count += marks[i];
  }
  return Math.floor(count / marks.length);
}
console.log(getAverage([1,2,3,4,5]));

// --------------------------------------------------------

function getPlanetName(id) {
  var name;
  switch(id) {
    case 1:
      return name = 'Mercury';
    case 2:
      return name = 'Venus';
    case 3:
      return name = 'Earth';
    case 4:
      return name = 'Mars';
    case 5:
      return name = 'Jupiter';
    case 6:
      return 'Saturn';            // можно без name =
    case 7:
      return 'Uranus';
    case 8:
      return name = 'Neptune';
  }
}
console.log(getPlanetName(7));

// --------------------------------------------------------

// записываем в массив числа, которые ровно делятся на integer в промежутке между интегер и лимит
function findMultiples(integer, limit) {
  let arr = [];
  for (let i = 1; i <= limit; i++) {
    //if (Number.isInteger(i / integer)) {     //проверка на целое число
    if (i % integer === 0) {                   // либо так
      arr.push(i);
    }
  } return arr;
}
console.log(findMultiples(5, 25));

/* function findMultiples(int,limit){
  let result = []
  for (let i = int; i<=limit ; i+=int)    // по умному, шагом является число интегер, и не нужна проверка на целое число!
    result.push(i)
  return result
} */

// --------------------------------------------------------

//шукаємо в масиві а елементи х. якщо є - тру, якщо ні - фолс
function check(a, x) {
  for (let i = 0; i < a.length; i++) {
    if (a.includes(x)) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(check([80, 117, 115, 45, 90, 13], 45));

//const check = (a,x) => a.includes(x);     коротко и круто

/* function check(a,x){
  return a.includes(x);
}; */       //                       або так

// --------------------------------------------------------

//з масива вибрати числа що більше 0 і додати їх між собою
function positiveSum(arr) {
let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      sum += arr[i];
    }
  } return sum;
}
console.log(positiveSum([2, 4, 6, 10]));



// --------------------------------------------------------

//-----Навчився дебажити!!!!---------якщо сума квадратів першого масива більша ніж сума кубів другого масива, то тру, гавпаки фолс------------
function arrayMadness(a, b) {
  let sqrSum = 0;
  let cubSum = 0;
  for (let i = 0; i < a.length; i++) {
    sqrSum += (a[i]**=2);
  }
  for (let i = 0; i < b.length; i++) {
    cubSum += ((b[i])**=3);
  }
  if (sqrSum > cubSum) {
    return true;
  } else {
    return false;
  }
}
console.log(arrayMadness([1,2,3], [0,1,2]));

// --------------------------------------------------------

// з масива вибрати 2 найменші числа і додати їх між собою
function sumTwoSmallestNumbers(numbers){  
  numbers = numbers.sort(function(a, b) {return a - b; });  //сортуємо масив, переставляючи 2 найменші числа на позиції 0 і 1
  return numbers[0] + numbers[1];          // повертаємо суму першого і другого елементів масиву
}
console.log(sumTwoSmallestNumbers([15,7,80,99,3,45,61]));

// --------------------------------------------------------

// перетворити рік на сторіччя
function century(year) {
  return (Math.ceil(year / 100));
}
console.log(century('2015'));

// --------------------------------------------------------

// убрать первый и последний элемент
function removeChar(str){
  return (str.slice(1,-1));
 };
console.log(removeChar('Creation'));

// --------------------------------------------------------

// позитивне число зробити негативним, негативне залишити негативним
function makeNegative(num) {
  return (num > 0) ? num *(-1) : num;
/*   if (num > 0) {   // або так ще можна
  return num * (-1);
  } else {
    return num;
  } */
}
console.log(makeNegative(-0.12));

// --------------------------------------------------------

// прибрати пробіли з строки
function noSpace(x) {
  return (x.replace(/ /g,""));
}
console.log(noSpace('Hello my name is George Bush'));

// --------------------------------------------------------
// --------------------------------------------------------

function countSheeps(arrayOfSheep) {
  let count = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] == true) {
      count++;
    }
  } return (`There are ${count} sheeps in total`);
}
console.log(countSheeps([true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true ]));

// --------------------------------------------------------
//знайти суму квадратів елементів з архіву

function squareSum(numbers){
  let a = 0;
  for (let i = 0; i < numbers.length; i++) {
    a += numbers[i] * numbers[i];
  } return a;
}

/* function squareSum(numbers){     //самий крутий метод
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
} */

/* function squareSum(numbers){
  var sum = 0;
  numbers.forEach(function(n) {
    sum += n * n
  });
  return sum;
} */

console.log(squareSum([0, 3, 4, 5]));

// --------------------------------------------------------
//операция двух чисел если оператор имеет значение...
function basicOp(operation, value1, value2) {
  if (operation == '+') {
    return value1 + value2;
  } else if (operation == '-') {
    return value1 - value2;
  } else if (operation == '*') {
    return value1 * value2;
  } else if (operation == '/') {
    return value1 / value2;
  }
}

/* function basicOp(operation, value1, value2) {
  switch (operation) {
      case '+':
          return value1 + value2;
      case '-':
          return value1 - value2;
      case '*':
          return value1 * value2;
      case '/':
          return value1 / value2;
      default:
          return 0;
  }
} */

/* var cases = {               //через создание объекта
  '+': value1 + value2,
  '-': value1 - value2,
  '*': value1 * value2,
  '/': value1 / value2
};
return cases[operation] */

console.log(basicOp('/', 49, 7));

// --------------------------------------------------------
//знайти елемент в масиві, визначити індекс і вивести текст з визначенням індексу знаходження
function findNeedle(haystack) {
  let a = haystack.indexOf('needle');
  return (`found the needle at position ${a}`);
  //return "found the needle at position " + haystack.indexOf("needle"); //так теж можна було
  //return `found the needle at position ${haystack.indexOf('needle')}`;
}

/* var i = 0;
while (i < haystack.length) {
  if (haystack[i] == 'needle') {
    return 'found the needle at position ' + i;       //чи так
  }
  i++;  
} */

console.log(findNeedle([1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54]));

// --------------------------------------------------------

//348597 => [7,9,5,8,4,3]
function digitize(n) {
  return n.toString().split('').reverse().map(item => +item);  //сначала делаем из числа строку, из строки делаем массив, разворачиваем в обратном направлении и делаем элементы массива цифрами
}
//return String(n).split('').map(Number).reverse();  // похоже на моё
console.log(digitize(348597));

// --------------------------------------------------------

//вернуть новый массив с удвоенными элементами
function maps(x) {
  return x.map(item => item*2);
}
console.log(maps([1, 2, 3]));

// --------------------------------------------------------

//вернуть новій массив с сумой позитивных и негативных значений
function countPositivesSumNegatives(input) {
  if (input.length == 0 && input == null) {
    return [];
  }
  let posCount = 0;
  let negSum = 0;
  for (let i = 0; i < input.length; i++) {
    if (+input[i] >= 0) {
      posCount++;
    } if (+input[i] < 0) {
      negSum += input[i];
    }
  } return [posCount, negSum];
}

/* if (input == null || input.length == 0)
return [];
var positive = 0;
var negative = 0;
for (var i=0, l=input.length; i<l; ++i)
{
if (input[i] > 0)
  ++ positive;
else
  negative += input[i];
}
return [positive, negative]; */

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));