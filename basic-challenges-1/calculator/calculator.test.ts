const calc = require("./calculator");

test("Return sum of 2 numbers", () => {
    const num1 = 10;
    const num2 = 20;
    const result = calc(num1, num2, "+");
    expect(result).toBe(30);
});
test("Return difference of 2 numbers", () => {
    const num1 = 10;
    const num2 = 20;
    const result = calc(num1, num2, "-");
    expect(result).toBe(-10);
});
test("Return product of 2 numbers", () => {
    const num1 = 10;
    const num2 = 20;
    const result = calc(num1, num2, "*");
    expect(result).toBe(200);
});
test("Return divide of 2 numbers", () => {
    const num1 = 10;
    const num2 = 20;
    const result = calc(num1, num2, "/");
    expect(result).toBe(0.5);
});
test("Throws error", () => {
    const num1 = 10;
    const num2 = 20;
    expect(() => calc(num1, num2, "!")).toThrow("Invalid Operator");
});