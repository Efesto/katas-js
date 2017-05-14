//http://codingdojo.org/cgi-bin/index.pl?KataFizzBuzz

function FizzBuzz(number) {
    value = RuleMultiple(number, 15, 'FizzBuzz');
    value = RuleMultiple(value, 5, 'Buzz');
    return RuleMultiple(value, 3, 'Fizz');
}

function RuleMultiple(number, divider, return_value){
    if (number % divider === 0 || number.toString().indexOf(divider.toString()) !== -1) {
        return return_value;
    }
    return number;
}

module.exports.FizzBuzz = FizzBuzz;




