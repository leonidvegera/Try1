// порахувати кількість голосних (a, e, i, o, u)
function getCount(str) {
  var vowelsCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
      vowelsCount++;
    }
  }
  return vowelsCount;
}

/* function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;    // довжина строки, створеної з співпадінь
} */

/* function getCount(str) {     // перебор в переборі!! корисна штука
  var vowelsCount = 0;
  var vowels = ["a","e","i","o","u"];
  for(var i = 0;i < str.length;i++){       //перебираємо строку на співпадіння елементів з масивом літер, входячи в неї
    for(var j=0;j<vowels.length;j++){     // перебираємо масив з літер
      if(str[i] === vowels[j]){          // якщо є співдадіння - 
        vowelsCount++;                  // +1 до ліку
      }
    }
  }
  
  return vowelsCount;
} */

/* function getCount(str) {
  return str.replace(/[^aeiou]/gi, '').length;  //замінюємо всі потрібні елементи без урахування регістру, і повертаємо їх довжину
} */

console.log(getCount('abraceouadabra'));

// -------------------------------------------------------------------------

//выделить из строки знак который по центру, если число парное, то 2 знака
function getMiddle(s) {
  let numb = s.length / 2;
  if (Number.isInteger(numb)) {
    return (s.substr(numb - 1, 2));
  } else {
    return (s.substr(Math.floor(numb), 1));
  }
}

/* function getMiddle(s) {
  var middle = s.length / 2;
  return (s.length % 2) 
    ? s.charAt(Math.floor(middle))
    : s.slice(middle - 1, middle + 1);   // метод middle
     */

console.log(getMiddle('A'));

// -------------------------------------------------------------------------

// убрать все гласные (a, e, i, o, u) из строки - сам!!
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, ''); //замінюємо всі голосні в строці стр на пусті 
}              // в архівійде просто перелік символів, без ком чи лапок, бо ці знаки теж видалить з строки


/* const disemvowel = (str) => {   // можна так наприклад ще
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let newStr = '';
  for (let i = 0; i <= str.length; i++) {
    let char = str.charAt(i);
    if (vowels.indexOf(char) == -1) {  //якщо в строці (архіві) немає символу з індексом і, то
      newStr += char;       //цей символ додається в нову строку
    }
  }
    return newStr;
}; */

console.log(disemvowel('This website, is for losers LOL!'));

// -------------------------------------------------------------------------

function findShort(s){
  let arr = s.split(', ');
  arr.sort(function (a, b) {return a - b;});
  return arr[0].length;
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));