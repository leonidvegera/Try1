'use strict';

const name = 'Leonid';
const surname = "Vegera";
const fullName = `${name} 
Vasyliovych 
${surname}`;

console.log(fullName);

console.log('I\'m very rich!');
console.log('Let\'s \n travel!');
console.log('Let\\\'s travel!'); // чтобы вставить слеш ставим дополнительный екран слеш

let guestsList = ('Martin \n Borman \n Adolf \n German \n Hugo');
console.log(guestsList);

// ------------------------------------------------------------

const message1 = 'Hello ' + name + '!'; // метод конкатенации
const message2 = `Hello ${name}!`; // метод интерполяции
console.log(message1);
console.log(message2);
//alert(message1 === message2);


// -------------------------------------------------------------

let a = 'John';
let b = 'Michael';
console.log(a.length);
console.log(b.length);

const shortest = (a.length < b.length) ? a : b;
console.log(shortest);
console.log(a[0]);
console.log(a[2]);
console.log(b.charAt(0));
console.log(b.charAt(5))

// -------------------------------------------------------------

console.log(`-----------Перебор--------------`);

for (let i = 0; i < surname.length; i++) {
  console.log(surname[i]);
}
console.log(`----------Наоборот--------------`);

for (let i = surname.length -1; i >= 0; i--) {
  console.log(surname[i]);
}
console.log(`-----------for let...of-------------`);

for (let letter of a) {
 console.log(letter);
}

// --------------------------------------------------------------


console.log(`-----------Define code-------------`)

let speak = 'lelgislation';
console.log(speak.charCodeAt(2));
console.log(String.fromCharCode(105));

for (let i = 0; i < surname.length; i++) {
  let xCode = surname.charCodeAt(i);
  console.log(surname[i], surname.charCodeAt(i), String.fromCharCode(xCode));
}