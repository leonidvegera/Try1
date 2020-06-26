'use strict';

let y = 17;

let qq = prompt('What is date today', `${y}`);
if (+qq === 18) {
  alert('Great job!');
} else {
  confirm('Are you stupid?');
}

let x = '5';
let z = x + y;
y = 13;
let p = 'mine';


console.log(x + 6);
console.log(x, 6);
console.log(+x + 6);
console.log(+x / 0);
console.log('Petya' * 10);
console.log(typeof x);
console.log(typeof y);
console.log(typeof t);
console.log(typeof z);
console.log(x, y, z);

console.log(p);

let m = 48;
let w = 'years';

console.log(w);
console.log(m);
console.log(w + m);
console.log(w * m);
console.log(w * 10);


/* let pp = confirm('Ти дурний?');
console.log(pp); */

console.log(7 + +'6');

let cashInWallet;
let cashOnCard;
let price;

cashInWallet = 45;
cashOnCard = 30;
price = 76;

if (cashInWallet + cashOnCard >= price) {
  console.log(true);
} else {
  console.log(false);
}


function getGuestsCount(guestsInput) {
  if (parseInt(guestsInput)) {
    return (parseInt(guestsInput));
  } else {
    return ('not a number');
  }
}
console.log(getGuestsCount('3 people'));
console.log(parseInt('3 people'));



function getStatistic(name, answer) {

  if (answer == '-' || answer == 0 || answer == "") {
    return (`${name} doesn\'t understand`)
  } else if (answer) {
    return (`${name} understands`);
  } else {
    return (`server error`);
  }
}
console.log(getStatistic('Boris', 'null'));


function or(a, b) {
  return a || b;
}
console.log(or(4, 9));

function or2(a, b) {
  if (a) {
    return a;
  } else {
    return b
  }
}
console.log(or2(3, 5));


function and(a, b) {
  return a && b;
}
console.log(and(0, 1));

function and2(a, b) {
  if (!a) {
    return a;
  } else {
    return b
  }
}
console.log(and2(3, 7));




function recommendRoom(adultsCount, childrenCount = 0, babiesCount = 0) {

  let allCount = adultsCount + childrenCount + babiesCount;
  
  if (allCount <= 4) {
    return 'small room';
  } if (allCount > 4 && allCount <= 5 && babiesCount >= 1) { return 'small room + extra bed';
  } if (allCount >= 9 && babiesCount >= 1) {
    return 'big room + extra bed';
  } else {
     return 'big room';
  }
  }
  console.log(recommendRoom(8));


function canTheyBook(adultsCount, childrenCount = 0) {
  if ((adultsCount + childrenCount) <= 8
      && (adultsCount > 0)
      && (childrenCount / adultsCount <= 2)
      && (childrenCount + adultsCount > 0)) {
    return 'Заселяем нахуй!!';
   } else {
    return 'Езжайте домой!';
  }
}
console.log(canTheyBook(3,2));