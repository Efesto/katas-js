

describe("FizzBuzz", function() {
    it("is just number if not divisible by 3, 5 and 15", function () {
        expect(fizzBuzz(2)).toBe(2);
        expect(fizzBuzz(4)).toBe(4);
    });

    it("is fizz if is divisible by 3", function () {
        expect(fizzBuzz(3)).toBe('Fizz');
        expect(fizzBuzz(9)).toBe('Fizz');
        expect(fizzBuzz(12)).toBe('Fizz');
        expect(fizzBuzz(18)).toBe('Fizz');
    });

    it("is buzz if is divisible by 5", function () {
        expect(fizzBuzz(5)).toBe('Buzz');
        expect(fizzBuzz(10)).toBe('Buzz');
        expect(fizzBuzz(20)).toBe('Buzz');
    });

    it("is fizzbuzz if is divisible by 15", function () {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
        expect(fizzBuzz(30)).toBe('FizzBuzz');
        expect(fizzBuzz(45)).toBe('FizzBuzz');
    });

    it("is fizz if has 3 in it", function () {
        expect(fizzBuzz(13)).toBe('Fizz');
        expect(fizzBuzz(23)).toBe('Fizz');
        expect(fizzBuzz(31)).toBe('Fizz');
        expect(fizzBuzz(32)).toBe('Fizz');
    })

    it("is buzz if has 5 in it", function () {
        expect(fizzBuzz(51)).toBe('Buzz');
        expect(fizzBuzz(52)).toBe('Buzz');
        expect(fizzBuzz(53)).toBe('Buzz');
    })


});