const vowel = require("./vowel.ts");

test("Count the number of vowels", () => {
    expect(vowel("javascript")).toBe(3);
    expect(vowel("hello")).toBe(2);
});