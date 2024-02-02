const missing = require("./missing-number");

test("Return expected missing number", () => {
    expect(missing([1,3,4,5,6])).toBe(2);
    expect(missing([])).toBe(1);
});