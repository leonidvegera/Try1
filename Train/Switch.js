

console.log('--------if/else_to_switch-----------');


function getTask(weekday) {
    switch (weekday) {
      case `monday`:
      case `wednesday`:
        return `Write a new module for the program`;
      case `tuesday`:
      case `thursday`:
        return `Test the module and find bugs`;
      case `friday`:
        return `You need to meet the boss today`;
      case `saturday`:
        return `Spend the evening with your friends`;
      case `sunday`:
        return `Go to the movies in the evening`;
      default:
        return `Entered the wrong day of the week`;
    }
  }

console.log('--------ternary_to_switch-----------');


function manageHomeRoutines(task) {
    switch (task) {
      case 'clean':
      case 'write_code':
        return 'petya';
      case 'make_breakfast':
      case 'review_pull_request':
        return 'misha';
      case 'adjust_lights':
        return 'vasya';
      case 'set_up_an_alarm':
      case 'check_weather':
        return `siri`;
      case 'take_out_garbage':
        return 'vasya';
      default:
        return 'masha';
    }
  }

console.log('--------getPaymentSystem-----------');


function getPaymentSystem(card) {
    switch (card) {
      case 34:
      case 37:
        return 'American Express';
      case 4:
        return 'VISA';
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
        return 'MasterCard';
      case 63:
      case 67:
        return 'Maestro';
      default:
        return 'unknown payment system';
    }
  }

console.log('--------getDirection-----------');


function getDirection(direction) {
    switch (direction) {
      case 'back':
        return `hor=0 ver=-1`;
      case 'forward':
        return `hor=0 ver=1`;
      case 'left':
        return `hor=-1 ver=0`;
      case 'right':
        return `hor=1 ver=0`;
      case 'stop':
        return `hor=0 ver=0`;
      default:
        return `hor=0 ver=0`;
      }
  }
