

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