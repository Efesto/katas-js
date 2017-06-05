"use strict";

describe("FizzBuzz", function() {
    let FizzBuzz = require('../src/FizzBuzzKata').FizzBuzz;

    it("is just number if not divisible by 3, 5 and 15", function () {
        expect(FizzBuzz(2)).toBe(2);
        expect(FizzBuzz(4)).toBe(4);
    });

    it("is fizz if is divisible by 3", function () {
        expect(FizzBuzz(3)).toBe('Fizz');
        expect(FizzBuzz(9)).toBe('Fizz');
        expect(FizzBuzz(12)).toBe('Fizz');
        expect(FizzBuzz(18)).toBe('Fizz');
    });

    it("is buzz if is divisible by 5", function () {
        expect(FizzBuzz(5)).toBe('Buzz');
        expect(FizzBuzz(10)).toBe('Buzz');
        expect(FizzBuzz(20)).toBe('Buzz');
    });

    it("is fizzbuzz if is divisible by 15", function () {
        expect(FizzBuzz(15)).toBe('FizzBuzz');
        expect(FizzBuzz(30)).toBe('FizzBuzz');
        expect(FizzBuzz(45)).toBe('FizzBuzz');
    });

    it("is fizz if has 3 in it", function () {
        expect(FizzBuzz(13)).toBe('Fizz');
        expect(FizzBuzz(23)).toBe('Fizz');
        expect(FizzBuzz(31)).toBe('Fizz');
        expect(FizzBuzz(32)).toBe('Fizz');
    });

    it("is buzz if has 5 in it", function () {
        expect(FizzBuzz(51)).toBe('Buzz');
        expect(FizzBuzz(52)).toBe('Buzz');
        expect(FizzBuzz(53)).toBe('Buzz');
    })


});