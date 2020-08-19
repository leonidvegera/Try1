

function weatherInfo(temperature) {
  var c = convertToCelsius(temperature);
  if (c < 0) {
    return (c + " is freezing temperature");
  } else {
    return (c + " is above freezing temperature");
  }
}
console.log(weatherInfo(100));

// Фаренгейты в цельсий
function convertToCelsius(temperature) {
  var celsius = (temperature - 32) * (5 / 9);
  return +celsius.toFixed(2);          // 2 знака после ноля
}
console.log(convertToCelsius(100));

function cockroachSpeed(s) {
  let distance = s * 1000 * 100;
  let secondsInHour = 60 * 60;
  return Math.floor(distance / secondsInHour);
}
console.log(cockroachSpeed(1.09));

// --------------------------------------------------------

const quarterOf = (month) => {
  if (month > 0 && month <= 3) {
    return 1;
  } else if (month > 3 && month <= 6) {
    return 2;
  } else if (month > 6 && month <= 9) {
    return 3;
    } else if (month > 9 && month <= 12) {
    return 4;
    }
}
console.log(quarterOf(12));

// --------------------------------------------------------

// привет Имя с большой буквы, остальные в маленькие, если пробел или нет имени - привет мир
function hello(name) {
  if (name == '' || name == null) {
  return ('Hello, World!');
  } else {
    return (`Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`);
  }
}
console.log(hello('petyA'));

// --------------------------------------------------------

// если многоугольник квадрат - вычесть его площадь, если прямоугольник - периметр
const areaOrPerimeter = function(l , w) {
  if (l === w) {
    return l * w;
  } else {
    return (l * 2 + w * 2);
  }
}
console.log(areaOrPerimeter(4,4));

// --------------------------------------------------------

// принимает значение и переделівает в число через parseFloat, если получили не число - тогда null
function parseF(s) {
if (isFinite(parseFloat(s))) {
    return parseFloat(s);
  } else {
    return null;
  }
// return isFinite(parseFloat(s)) ? parseFloat(s) : null;  - с помощью тернарного оператора
// return isNaN(parseFloat(s)) ? null : parseFloat(s);  или так можно
}
console.log(parseF('1547.487fgtggbg'));

// --------------------------------------------------------

// повторяет символ S n-ое количестов раз
function repeatStr (n, s) {
  let str = '';
  for (let i = 0; i < +n; i++) {
    str += s;
  }
  return str;
  //return s.repeat(n);  - или так, это вообще просто конечно
}
console.log(repeatStr(6, 'A'));

// --------------------------------------------------------

// короткие переменные по бокам, длинная по центру
function solution(a, b) {
  //return (a.length < b.length) ? (a + b + a) : (b + a + b);
  if (a.length < b.length) {
    return a + b + a;
  } else {
    return b + a + b;
  }
}
console.log(solution('75', '222'));

// --------------------------------------------------------

//в зависимости от выбранного языка выдаёт приветствие
function greet(language) {
	switch (language) {
      case 'english':
        return 'Welcome';
      case 'czech': return 'Vitejte';
      case 'danish': return 'Velkomst';
      case 'dutch': return 'Welkom';
      case 'estonian': return 'Tere tulemast';
      case 'finnish': return 'Tervetuloa';
      case 'flemish': return 'Welgekomen';
      case 'french': return 'Bienvenue';
      case 'german': return 'Willkommen';
      case 'irish': return 'Failte';
      case 'italian': return 'Benvenuto';
      case 'latvian': return 'Gaidits';
      case 'lithuanian': return 'Laukiamas';
      case 'polish': return 'Witamy';
      case 'spanish': return 'Bienvenido';
      case 'swedish': return 'Valkommen';
      case 'welsh': return 'Croeso';
      default: return 'Welcome';
  }
}
console.log(greet('irish'));

/* function greet(lang) {
  return langs[lang]||langs['english'];
}
var langs = {
'english': 'Welcome',
'czech': 'Vitejte',
'danish': 'Velkomst',
'dutch': 'Welkom',
'estonian': 'Tere tulemast',
'finnish': 'Tervetuloa',
'flemish': 'Welgekomen',
'french': 'Bienvenue',
'german': 'Willkommen',
'irish': 'Failte',
'italian': 'Benvenuto',
'latvian': 'Gaidits',
'lithuanian': 'Laukiamas',
'polish': 'Witamy',
'spanish': 'Bienvenido',
'swedish': 'Valkommen',
'welsh': 'Croeso'
}; */      // крутой вариант - через объект сделать

/* function greet(language) {
  var GreetingsDB = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
  }, 
  defaultLanguage = 'english';
  return GreetingsDB[language] || GreetingsDB[defaultLanguage];
} */  // или так еще лучше

// --------------------------------------------------------

// цифры из переменной Х превратить в 0 (<5), или в 1 (5 и больше)
function fakeBin(x){
  let str = '';
  for (let i = 0; i < x.length; i++) {
    if (x[i] >= 5) {
      str += 1;
    } else {
      str += 0;
    }
  } return str;
}
console.log(fakeBin('526180'));

// --------------------------------------------------------