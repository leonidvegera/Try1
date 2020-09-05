// порахувати кількість (a, e, i, o, u)
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

