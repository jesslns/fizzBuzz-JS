function Fizzbuzz () {};

// Fizzbuzz.prototype.isDivisibleByThree = function (number) {
//   return (number%3 === 0);
// };
//
// Fizzbuzz.prototype.isDivisibleByFive = function (number) {
//   return (number%5 ===0);
// }
//
// Fizzbuzz.prototype.notFizzOrBuzz = function (number) {
//   return number;
// }
//
// Fizzbuzz.prototype.isFizzBuzz = function (number) {
//   return (number%15 === 0);
// }

Fizzbuzz.prototype.play = function(number) {
  if (this._isDivisibleBy(number,15)) {
    return 'Fizzbuzz';
  } else if (this._isDivisibleBy(number,5)) {
    return 'Buzz';
  } else if (this._isDivisibleBy(number,3)) {
    return 'Fizz';
  } else {
    return number;
  }
}

Fizzbuzz.prototype._isDivisibleBy = function(number, divisor) {
  return (number%divisor === 0);
};



var fizzbuzz = new Fizzbuzz();

for (var i = 1; i <= 100; i++) {
  console.log(fizzbuzz.play(i));
}
