"use strict";

class StringCalculator {
  sum(input) {
    const inputValues = input.split(',');
    let sum = 0;
    inputValues.forEach((value) => {
      sum += parseInt(value);
    })

    return sum;
  }
}

module.exports = StringCalculator;
