

describe("FizzBuzz", function() {
    it("not multiples of 3 and 5 are just numbers", function () {
        expect(fizzBuzz(2)).toBe(2);
    });

    it("3 and multiples are fizz", function () {
        expect(fizzBuzz(3)).toBe('Fizz');
        expect(fizzBuzz(9)).toBe('Fizz');
        expect(fizzBuzz(12)).toBe('Fizz');
        expect(fizzBuzz(18)).toBe('Fizz');
    });

    it("5 and multiples are buzz", function () {
        expect(fizzBuzz(5)).toBe('Buzz');
        expect(fizzBuzz(10)).toBe('Buzz');
        expect(fizzBuzz(20)).toBe('Buzz');
    });

    it("15 and multiples are fizzbuzz", function () {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
        expect(fizzBuzz(30)).toBe('FizzBuzz');
        expect(fizzBuzz(45)).toBe('FizzBuzz');
    });


});