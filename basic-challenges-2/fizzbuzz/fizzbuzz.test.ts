const fizz = require("./fizzbuzz");

test("Return expected fizzbuzz", () => {
    expect(fizz(5)).toStrictEqual([1, 2, "Fizz", 4, "Buzz"]);
    expect(fizz(15)).toStrictEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]);
});