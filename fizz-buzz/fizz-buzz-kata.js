//http://codingdojo.org/cgi-bin/index.pl?KataFizzBuzz

var fizzBuzz = function(number) {

    value = ruleMultiple(number, 15, 'FizzBuzz');
    value = ruleMultiple(value, 5, 'Buzz');
    return ruleMultiple(value, 3, 'Fizz');
};

var ruleMultiple = function(number, divider, return_value){
    if (number % divider == 0 || number.toString().indexOf(divider.toString()) != -1) {
        return return_value;
    }
    return number;
};




