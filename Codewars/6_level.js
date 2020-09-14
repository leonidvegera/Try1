
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

// !!!!! доробити, було трохи важко!!!!!
//в массиве найти число, которое появляется нечетное количество раз
/* function findOdd(A) {
  return a.find (item =>  );
}
 */
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
