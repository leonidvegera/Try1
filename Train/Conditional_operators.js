
console.log('-------can_buy_beer----------');

function canBuyBeer(age) {
    if (age < 18) {
      return (`You can not buy beer`);
      } else {
      return (`You can buy beer`);
      }
  }

  
console.log('-------ternary_hell----------');

function getAgeCategory(age) {
    let category;
  
    if (age < 2) {
    category = `baby`;
    } else if (age < 10) {
    category = `child`;
    } else if (age < 18) {
    category = `teenager`;
    } else if (age < 60) {
    category = `adult`;
    } else {
    category = `senior`;
    }
  
    return (category);
  }


console.log('---------remove_else----------');

function getNumbersEquality(a, b) {
    if (a === b) {
      return 'a and b are equal';
    } if (a < b) {
      return 'a < b';
    } if (a > b) {
      return 'a > b';
    }
  }

console.log('-------get_tips_rating----------');

function getTipsRating(amount) {
    if (amount === 0) {
      return `terrible`;
    } if (amount <= 10) {
      return `poor`;
    } if (amount <= 20){
      return `good`;
    } if (amount <= 50){
      return `great`;
    } if (amount > 50){
      return `excellent`;
    }
  }

console.log('-------calculate_taxes----------');

function calculateTaxes(income) {
    let taxes;
    if (income < 1000) {
      taxes = income * 0.02;
      return taxes;
      }
      if (income <= 10000) {
      taxes = (1000 * 0.02 + (income - 1000) * 0.03);
      return taxes;
    }
      if (income > 10000) {
      taxes = (1000 * 0.02 + 9000 * 0.03 + (income - 10000) * 0.05);
      return taxes;
    }
  }

console.log('-----get_largest_expression_result------');

function getLargestExpressionResult(a, b) {
    const sum = (a + b);
    const min = (a - b);
    const mult = (a * b);
    const div = (a / b);
    if (sum > min && sum > mult && sum > div) {
      return sum;
    }
    if (min > sum && min > mult && min > div) {
      return min;
    }
    if (mult > sum && mult > min && mult >= div) {
      return mult;
    }
    if (div > sum && div > min && div > mult) {
      return div;
    }
  }

  
  
