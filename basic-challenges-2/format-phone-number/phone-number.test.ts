const phone = require("./phone-number");

test("Return expected missing letter", () => {
    expect(phone([5, 1, 9, 6, 2, 3, 4, 5, 7, 8])).toBe("(519) 623-4578");
});