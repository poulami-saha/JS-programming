const count = require("./count-occurrences");

test("Return expected character count", () => {
    expect(count("hellLo world", "l")).toBe(3);
    expect(count("hello", "z")).toBe(0);
});