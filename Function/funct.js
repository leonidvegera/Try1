// function greeter(name) {
  
//   return (`Hi, ${name}!`);
//   console.log(greeter);
// }

// greeter(mike);

console.log(`-------------------`);

function getCircleSquare(r) {
  return Math.PI * r * r;
}

const getCircleSquare2 = function(r) {
  return Math.PI * r * r;
}

const getCircleSquare3 = (r) => {
  return Math.PI * r * r;
}

const getCircleSquare4 = (r) => Math.PI * r * r;
const getCircleSquare5 = r => Math.PI * r * r;


const square = getCircleSquare5(1);
console.log(square);
console.log(`-----------------------`);


function greeter(name){
  return (`Hi, ${name}!`);
}
const john = greeter(`John`);
console.log(john);


const greeter1 = name1 => (`Hi, ${name1}!`);
const john1 = greeter1(`John1`);
console.log(john1);


const greeter2 = (partOfTheDay, name2) => (`Good ${partOfTheDay}, ${name2}!`);
const fuckYouJohn = greeter2(`morning`,`John`);
console.log(fuckYouJohn);
console.log(`------------------------------`);

// function double(num){
//   return num * 2;
// }

const double = (num) => num * 2;
const x = double(7);
console.log(x);
console.log(`---------------------`);

const multiply = (a, b = 1) => a * b;
let q = multiply(8, 5);
console.log(q);
console.log(`---------------------`);
console.log(`---------------------`);


function getLargestExpressionResult (a, b){
  let sum = (a + b);
  let min = (a - b);
  let mult = (a * b);
  let div = (a / b);
  if (sum > min && sum > mult && sum > div){
    return sum;
  }
  if (min > sum && min > mult && min > div){
    return min;
  }
  if (mult > sum && mult > min && mult >= div){
    return mult;
  }
  if (div > sum && div > min && div > mult){
    return div;
  }
}


