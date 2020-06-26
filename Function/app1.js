
function buildHouse (numberOfFloors, color){
  const house = `${color} ${numberOfFloors}-floors house`;

return house
}

const smallHouse = buildHouse(3, `black`);
const bigHouse = buildHouse(9, `yellow`);

console.log(smallHouse);
console.log(bigHouse);
console.log(`---------------------`);


function sum(a = 2 + 9, b = 6 + 8){
  console.log(a, b);

  return a + b;
}

const result = sum();
console.log(result);
console.log(`----------------------`);


function sum1(a, b){
  console.log(a, b);

}
const result1 = sum1(1, 2);
const result2 = sum1(1, 2, 3, 4);
