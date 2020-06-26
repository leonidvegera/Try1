const count = 5;


if (count === 1){
  console.log(`One`);
}
else if (count === 2){
  console.log(`Two`);
}
else {
  console.log(`Many`);
}
console.log(`-------------------`);

switch (count) {
  case 1:
    console.log(`One`);
    break;

  case 2:
    console.log(`Two`);
    break;

  case 3:
  case 4:
  case 5:
    console.log(`Few`);
    break;

  default:
    console.log(`Many`);
}
console.log(`--------------------`);


const value = 3;

if (value < 5){
  console.log(`A few`);
}
else if (value > 10){
  console.log(`Many`);
}
else {
  console.log(`Some`);
}
console.log(`-------------------`);

switch (true){
  case value < 5:
   console.log(`A few`);
   break;

  case value > 10:
   console.log(`Many`);
   break;

  default:
   console.log(`Some`);
}
console.log(`-------------------`);


/* let arg = prompt ('Выбирай число');
switch (arg) {
  case '0':
  case '1':
    alert ('Один или ноль');
    break;
  case '2':
    alert ('Два');
    break;
  case 3:
    alert ('Не то');
    break;
  default:
    alert ('Fuck you');
}
 */

console.log(`-------------------`);

const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
  case 0:
    alert('Вы ввели число 0');
    break;

  case 1:
    alert('Вы ввели число 1');
    break;

  case 2:
  case 3:
    alert('Вы ввели число 2, а может и 3');
    break;
}