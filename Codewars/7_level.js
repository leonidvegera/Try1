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


// -------------------------------------------------------------------------

//знайти найбільше і найменше число і вивести їх через пробіл
function highAndLow(numbers) {
let up = numbers.split(' ').sort((a,b)=> b-a);  //перемінна, в яку записали строку, перероблену в массив, і відсортовану від більшого до меншого
return up[0] + ' ' + up.reverse()[0]; //повертаємо перший символ найбільший, і перший символ розвернутого масиву
}

/* var arr = numbers.split(' ').sort(function(a, b) { return a - b });
  return arr[arr.length -1] + ' ' + arr[0];
   */

console.log(highAndLow('1 9 3 4 -5'));

// -------------------------------------------------------------------------

//("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy" !!!!!!!! Розібрати коротке!!!!!
function accum(s) {
  let mumble = s[0].toUpperCase();      //в технічну перемінну додаємо перший символ - 1 велика літера
	for (let i = 1; i < s.length; i++) {   //перебір починаючи з другого символа, тобто з 1 індекса
    mumble += '-' + s[i].toUpperCase() + s[i].toLowerCase().repeat(i);  //в перемінну з кожною ітерацією додаємо дефіс на початку, Великий символ, і всі інші маленькі символи, які будуть повторюватись і кількість раз, збільшуючись
  } return mumble;      // повертаємо перемінну
}

// return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');    //коротко!!!

/* return s.split('')
.map((item, index) => item.toUpperCase() + item.toLowerCase().repeat(index))
.join('-'); */

console.log(accum('RqaEzty'));

// -------------------------------------------------------------------------

//Установить нисходящий порядок цифр
function descendingOrder(n){
  return +(n.toString()
  .split('')
  .sort((a,b)=> b-a)
  .join(''));
}
console.log(descendingOrder(123456789));

// -------------------------------------------------------------------------

//проверить на одинаковое количество х и о (нужно было лучше сравнивать длинну)
function XO(str) {
let xCount = 0;
let oCount = 0;
for (let i = 0; i < str.length; i++) {  //переираем строку, если х в нижн регист - плюсуем 1 к технической по х, если о, к технической о
  if (str[i].toLowerCase() === 'x') {
    xCount++;
  } if (str[i].toLowerCase() === 'o') {
    oCount++;
  }
} return (xCount === oCount) ? true : false; //сравниваем, если равняются то тру, если нет - фолс
}

/* str = str.toLowerCase().split('');  //из строки делаем массив, все нижн регистр
return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length; */   //сравниваем две длинны подходящих значений

/* let x = str.match(/x/gi);  //в переменную ищет совпадения в строке всех х в нижнем регс
let o = str.match(/o/gi);   //в переменную ищет совпадения в строке всех о в нижнем регс
return (x && x.length) === (o && o.length); */  //сравниваем длинну переменных

/* var a = str.replace(/x/gi, ''),
b = str.replace(/o/gi, '');
return a.length === b.length;
 */
console.log(XO('xooXx'));

// -------------------------------------------------------------------------

//кожне нове слово з великої літери How Can Mirrors Be Real If Our Eyes Aren't Real
let toJadenCase = function (txt) {
  let a = txt.split('');           //технічна перемінна, в яку перероблюємо побуквенний масив зі строки
  for (let i = 0; i < a.length; i++) {
    if (a[i] == ' ') {              //якщо даний символ - пробіл, то
      a.splice(i + 1, 1, a[i+1].toUpperCase());   //наступний за ним символ вирізаємо (1шт) і вставляємо той же символ у верхньому регістрі
    }
  }
  return a.join('');             //повертаємо строку з массиву
};

/*    //круто! розбивав по словам, кожне нове слово з великої літери
     return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
};; */

console.log(toJadenCase(`How can mirrors be real if our eyes aren't real`));

// -------------------------------------------------------------------------

//([1,'a','b',0,15]) == [1,0,15]
function filter_list(l) {
  return l.filter((item) => item === item/1);
  //return l.filter(c => typeof c === 'number');  //проверка на число
  //return l.filter(Number.isInteger);  //круто!!!
  //return typeof elem != "string";  //так тоже норм
}
console.log(filter_list([1,'a','b',0,15]));

// -------------------------------------------------------------------------

//есть ли в слове повторяющиеся буквы
function isIsogram(str){
/*   for (let i = 0; i < str.length; i++) {
    for (let j = i+1; j < str.length; j++) {
      if (str[i].toLowerCase() === str[j].toLowerCase()) {
        return false;
      }
    }
  } return true; */
  //return !str.match(/([a-z]).*\1/i)  //через регулярные
}
console.log(isIsogram('Dermatoglyphics'));

// -------------------------------------------------------------------------