
for (let i = 0; i < 5; i++){
  
  console.log(i);
  console.log('OK!');
}
console.log('-------DONE-------')

// Все мы любим развлекаться на свадьбе. 
// Однажды ведущий придумал конкурс, 
// где люди выстраиваются в очередь и выпивают,
// но по определенным правилам. Каждый должен 
// выпить количество стопок, которое равняется
// его месту в очереди. Первый выпивает 1 стопку,
// второй - 2, третий - 3 и т.д. Помоги ведущему
// подготовить необходимое количество стопок, 
// чтобы люди не ждали!

// Примеры:

// getDrinks(3) === 6 (1 + 2 + 3);
// getDrinks(0) === 0 нет гостей - нет выпивки;
// getDrinks(5) === 15 (1 + 2 + 3 + 4 + 5);


function getDrinks(guests) {
  let sum = 0;
    for (let i = 1; i <= guests; i++) {
    sum += i; 
    }
   return sum;
  }


console.log(getDrinks(4))

console.log('------------------');

function getDrinksWithStep(guests, step) {
  let sumOfDrinks = 0;
    for (let i = 1; i <= guests; i += step) {
      sumOfDrinks += i;
    }
    return sumOfDrinks;
  }
  
console.log('--------------------');

function calculateProfit(amount, percent, period) {
  let amount1 = amount;
    for (let i = 1; i <= period; i++){
      amount = (amount * percent / 100) + amount;
    }
return amount - amount1;
}
console.log('--------------------');

function getYears(amount, percent, expectedLimit) {
  let countYears = -1;
  while (amount <= expectedLimit){
    amount = amount * percent / 100 + amount;
    countYears++;
  }
  return countYears;
}

// моє вирішення


/* function getYears(amount, percent, expectedLimit) {
 let yearsCount = 0;
 for (amount; amount < expectedLimit; yearsCount++) {
     amount = amount * (1 + percent / 100); 
   }
   return yearsCount - 1;
} */

// вирішення alien
console.log('--------------------');
