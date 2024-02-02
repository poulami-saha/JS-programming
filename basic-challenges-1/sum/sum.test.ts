const getSum = require("./sum")

test("Return sum of 2 numbers", () => {
    const num1 = 10;
    const num2 = 20;
    const result = getSum(num1, num2);
    expect(result).toBe(30);
});