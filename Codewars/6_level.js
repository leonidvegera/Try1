
//знайти числа, на які без залишку ділиться намбер для отримання чисел 3 і 5, і знайти суму цих чисел
// сам вперше пройшов 6 рівень!!!
function solution(number){
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(solution(21));

// -------------------------------------------------------------------------------------

// !!! доробити, було трохи важко!!! найти одинаковые числа в массиве
//в массиве найти число, которое появляется нечетное количество раз
function findOdd(A) {
  return A.filter(function(item, pos, arr) {
    return item[pos] === item[pos+1];
  })
}
console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))

//const findOdd = (xs) => xs.reduce((a, b) => a ^ b);  - побитовый оператор!!!

// -------------------------------------------------------------------------------------

//Проїбавсі цілий день, все вийшло!!!!
// додавати між собою число, поки воно не стане простим (одинарним) САМ!!!!
function digital_root(n) {            //n буду вводити як число, тому перетворюватимемо його на строку
  let count = 0;
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < n.toString().length; i++) {      //поки кількість знаків в числа, перетвореного в строку, буде менше..
    count += +(n.toString()[i]);                       //записуємо в нове число суму знаків числа, які перетворюємо в число
  }
  if (count.toString().length > 1) {                    //якщо сума знаків строки нового числа все ще більша ніж 1,
    for (let j = 0; j < count.toString().length; j++) {  //перебираємо число, попередньо перетворивши його на строку
      count1 += +(count.toString()[j]);                   //записуємо в нове число суму знаків числа, які перетворюємо в число
    } if (count1.toString().length > 1) {                //якщо знов сума знаків строки нового числа все ще більша ніж 1,
        for (let q = 0; q < count1.toString().length; q++) {  //знов перебираємо число, попередньо перетворивши його на строку
          count2 += +(count1.toString()[q]);                   //і знов записуємо в нове число суму знаків числа, які перетворюємо в число
        }return count2;                                       //і повертаємо останнє число що вийшло
      } return count1;                               //повернення числа, розрахованого на рівень вище
  } else {                                          //повернення числа одразу після першого розрахунку, якщо число було не більше 1.
    return count;
 }
}

/* function digital_root(n) {     // !!!!!! ніхуя не зрозумів, але розв'язок дуже цікавий! Розібрати!!!!
  return (n - 1) % 9 + 1;
} */

/* function digital_root(n) {        //теж розібрати
  if (n < 10) return n;
  return digital_root(
    n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
 */

/* function digital_root(n) {
  if (n < 10)
    return n;
  for (var sum = 0, i = 0, n = String(n); i < n.length; i++)
    sum += Number(n[i]);
  return digital_root(sum);
} */

console.log(digital_root(456));

//--------------------------------------------------------------------------------------------------------------

//посчитать лайки
function likes(names) {
  for (let i = 0; names.length > 0; i++) {
     if (names.length === 1) {
      return names[0] + ' likes this';
    } if (names.length === 2) {
      return names[0] + ' and ' + names[1] + ' like this';
    } if (names.length === 3) {
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } if (names.length > 3) {
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
  } return 'no one likes this';
}
/* names = names || [];
switch(names.length){
  case 0: return 'no one likes this'; break;
  case 1: return names[0] + ' likes this'; break;
  case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
  case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
  default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
} */
console.log(likes(['Peter', 'Alex', 'Mark', 'Max', 'Poc', 'Eric', 'Violet', 'Flower']));

//--------------------------------------------------------------------------------------------------------------

//массив должен превращаться в телефонный номер
function createPhoneNumber(numbers) {
let str = numbers.join('');
return '(' + str.substr(0, 3) + ') ' + str.substr(3,3) + '-' + str.substr(6,4);
}

/* var format = "(xxx) xxx-xxxx";
for(var i = 0; i < numbers.length; i++) {
  format = format.replace('x', numbers[i]);
}
return format;
 */
console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))

//---------------------------------------------------------------------------

//если в слове больше чем 5 букв, развернуть его !!!Сам сделал!!!! через слайс замена
function spinWords(text){
  let t = text.split(' ');             //строку превращ в массив с пробелами и присваив в переменную
  for (let i = 0; i < t.length; i++) {
    if (t[i].length >= 5) {              // перебир, если длинна элем массива больше или равно 5
      t.splice(i, 1, (t[i].split('').reverse().join('')));  //то в массиве t на текущ позиции i удаляем 1 єлем-т и вставляем вместо него (элемент, разбитый на символы, развернутые в обратном порядке, и снова склееный в элемент))
    }
  } return t.join(' ');        //возвращаем строку, разделённую пробелами
}
/* function spinWords(words){            //map function как функция!!!! хорошо отработало
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  })
  .join(' ');
} */

//return str.split(' ').map( w => w.length<5 ? w : w.split('').reverse().join('') ).join(' ');

console.log(spinWords('Hey fellow warriors'));

//---------------------------------------------------------------------------

//преобразовываем в двоичную систему и сумируем единицы (1234 is 10011010010 -- 5)
var countBits = function(n) {
  if (n === 0) {
    return 0;
  } if (n > 0) {
    let biNum = n.toString(2);
    let got = biNum.match(/1/g).reduce((sum, current) => sum + Number(current), 0);
    return got;
  }
};
// return n.toString(2).split('0').join('').length; //круто!!! число в двоичное, превращаем в массив с разделит 0 (ноли пропадают), обратно в массив(одни единицы), длинна всех элементов 1

// return n.toString(2).replace(/0/g,'').length;  //замінили 0 на пусту строку і вивели довжину

//n.toString(2).split('').filter(ele => ele == 1).length    //або через фільтр!!!

/* a = n.toString(2).match(/1/g);      //цифру до двоічного коду і вибірку всіх одиниць!!
  return a == null ? 0 : a.length */   //якщо повертає нал, тоді 0, або ж довжину строки що вийшла

console.log(countBits(1234));
//------------------------------------ ще одне моє рішення!!!!
var countBits1 = function(n) {
 return (n.toString(2)        //число до двоїчного
 .split('')                   //строку в массив (по знаку)
 .sort((a,b) => b-a)          //сортуємо, спочатку 1, потім 0
 .join('')                    //массив перетворюємо на строку
 .lastIndexOf(1)) + 1;        //знаходимо місце останньої одиниці + 1 (кількість одиниць)
}
console.log(countBits1(1234));

//---------------------------------------------------------------------------

//найти в массиве единственное четное или не четное число
function findOutlier(integers) {
let a = integers.filter(item => item % 2 === 0);  //создаём переменную с масивом чётных чисел
return (a.length > 1) ? +(integers.filter(item => item % 2 !== 0)).join('') : +a.join('');
}                         // если массив четных длиннее 1 числа, значит ищем дальше фильтром нечётное число, и превращаем из массива в строку, и унарным в число; в другом случае это переменная а, которую передел в строку и унарным+ в число
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));

/* function findOutlier(integers){                //можна і так, але я крутіше зробив
  const even = integers.filter(int => int % 2 === 0);
  const odd  = integers.filter(int => int % 2 !== 0);
  return even.length === 1 ? even[0] : odd[0];
} */

//---------------------------------------------------------------------------

//  arrayDiff([1,2,2,2,3],[2]) == [1,3] убрать элементы, если они есть во втором массиве
function arrayDiff(a, b) {    // не получилось у самого
  return a.filter(item => b.indexOf(item) === -1);
/*   return a.filter(function(w) {
    return b.lastIndexOf(w) === -1;
  })*/
} 

// return a.filter(function(x) { return b.indexOf(x) == -1; });  //отбирает в массив а, если индекс элемента не найден
// return a.filter(x => b.indexOf(x) == -1);
// return a.filter(e => !b.includes(e))  //крутіше всього - отбирает, если б не включает таких єлементов

console.log(arrayDiff([6,-9,-7,-10,3,0,-19,1,1,8,-7,19,11,15],[6,-10,15,-7]));