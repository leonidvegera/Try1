'use strict';

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
  let anotherSide = Math.sqrt((diagonal * diagonal) / (side * side));
  let x = (anotherSide * anotherSide) + (side*=2);
  if (diagonal > side) {
    return (+x.toFixed(2));
  } if (diagonal < side) {
    return 'not a rectangle';
  }
  console.log(anotherSide);
}
console.log(getRectangleArea(10,20));

  