'use strict';

let isFiniteA = isFinite(Infinity);
console.log(isFiniteA);

let isNotANumberB = isNaN('abd');
console.log(isNotANumberB);

//---------------------------------------------

let g = 54.267;
console.log(Math.trunc(g));
console.log(Math.round(g));
console.log(g.toFixed(5));
console.log(typeof(g.toFixed(2)));
console.log(+g.toFixed(5));

let oo = Math.random();
console.log(oo);
console.log(oo * 5);
console.log(Math.trunc(oo * 5 + 2));

// -------------------------------
function getCentury(year) {
  return (Math.ceil(year / 100));
}
console.log(getCentury(1730));
// -------------------------------

function convertCurrency(amount, exchangeRate, currencyName) {
  let x = amount * exchangeRate;
    return (`Give them ${+x.toFixed(2)} ${currencyName}('s)`);
}
console.log(convertCurrency(10000, 0.034, 'euro'));

// ---------------------------------------------------------

function getRectangleArea(side, diagonal) {
  let anotherSide = Math.sqrt((diagonal**2) - (side**2)); // (diagonal*diagonal) - (side*side)
  let squre = anotherSide * side;
  if (diagonal > side) {
    return (+squre.toFixed(2));
  } else {
    return 'not a rectangle';
  }
}
console.log(getRectangleArea(10,20));

// -----------------------------------------------------------

function isEven(number) {
  if (number%2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(10.2));

// -----------------------------------------------------------

function makeDecision(fuelRemaining, distance, fuelConsumption) {
  let distanceCanRide = fuelRemaining * 100 / fuelConsumption;
  if (Math.floor(distanceCanRide) > distance) {
    return 'reach gas station by themselves';
  } else {
    return 'ask for help';
  }
}
console.log(makeDecision(3,34,6.5));

// --------------------------------------------------------------

function countNetworking(K, N) {
  const year = 12;
  let countWithoutCarant = year - K;
  return Math.floor(countWithoutCarant / N);
}
console.log(countNetworking(2,2));

// ------------------------------------------------------------