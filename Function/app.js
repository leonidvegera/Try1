
// ---------- Rectangle 3 x 10
const a1 = 3;
const b1 = 10;

const perimetr1 = ((a1 * 2) + (b1 * 2));
const square1 = a1 * b1;

console.log(perimetr1);
console.log(square1);
console.log('---------------------');

console.log('Rectangle', a1, 'x', b1);
console.log('Perimetr is', perimetr1);
console.log('Square is', square1);
console.log('---------------------');

// ---------- Rectangle 5 x 5

printRectanglInfo(5, 5)

// ---------- Rectangle 31 x 64

printRectanglInfo(31, 64)


function printRectanglInfo(a, b) {
  const perimetr = ((a * 2) + (b * 2));
  const square = a * b;
  
  console.log(perimetr);
  console.log(square);
  console.log('---------------------');
  
  console.log('Rectangle', a, 'x', b);
  console.log('Perimetr is', perimetr);
  console.log('Square is', square);
  console.log('---------------------')
}