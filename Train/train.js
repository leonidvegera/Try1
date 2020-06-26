' use strict '

//  let i = 0;

/* for (;;) {
  if (i>=5) {
    break;
  }
    console.log(i);
    console.log('OK!');
  i++;
  
}
console.log ('---DONE---'); */


/* for (let i = 2; i <= 50; i = i + 4) {
  if (i % 2 === 0){
  console.log(i);
  console.log ('YES');
  }
} */


/* for (let i = 0; true; i++) {
  if (i >= 9) {
    break;
  }
  console.log(i);
  console.log('Yes!');

}
console.log('Fuck you bitch'); */


/* for (let i = 5; i <= 30; i = i + 3) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
  console.log('NieChetnye');
}
console.log('---Zaebis---');
 */


/* for (let i = 0; i < getCount(); i++) {
  const seconds = i * 60 * 60 * 24;
  console.log('seconds', seconds);
}

function getCount() {
  console.log('Counting');
  return 10
} */



/* console.log('------------while-------------');


let n = 2000;
let count = 0;

while (n % 2 === 0) {
  n = n / 2;
  console.log(n);
  count++;
}
console.log(count); */

/* console.log('------------do-------------');

let n = 2000;
let count = 0;

do {
  n = n / 2;
  console.log(n);
  count++;
} while (n % 2 === 0)
console.log(count); */

console.log('--------alert, prompt---------');

/* let name = prompt (`What is your name`, 'Vova');
alert (`My name is ${name}!`);
 */


/* let num;
do{
  num = prompt('Write number > 100', 0);
} while (num <= 100 && num); */

/* let i;
prompt('Write number > 100', i); */

let arg = prompt('Выбирай число');
switch (arg) {
  case '0':
  case '1':
    alert('Один или ноль');
    break;
  case '2':
    alert('Два');
    break;
  case 3:
    alert('Не то');
    break;
  default:
    alert('Fuck you');
}