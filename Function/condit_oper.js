let age = 1;

if (age >= 18){
  console.log(`Adult`);
}
  else if (age > 7){
    console.log(`Child`);
  }
  else if (age > 2){
    console.log(`Toddler`);
  }
    else {
      console.log(`Infant`);
    }
console.log(`-------------------`);


let age1 = 45;
let message1 = (age1 > 18) ? (`Adult1`) : (`Child1`);

console.log(message1);
console.log(`--------------------`);


let age2 = 45;
let message2 = (age2 > 18)
 ? (`Adult2`)
 : (`Child2`);

console.log(message2);
console.log(`---conversion-to-bulean---`);

let condition = 12;

console.log(
  Boolean (condition), !!condition, !!12
)

// if (condition) {
//   console.log('Hello');
//   console.log('world');
// } 

console.log(+'2' > 18);
console.log('---conversion-to-numder---');

let value = '100.5';
console.log(Number(value));
console.log(+value);
console.log(parseFloat(value));
console.log(parseInt(value));

console.log('---conversion-to-string---');

const x = 140781;

console.log(
  String(x), x.toString(), '' + x, `${x}`)

