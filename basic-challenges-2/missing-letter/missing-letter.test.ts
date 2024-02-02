const missingalphabet = require("./missing-letter");

test("Return expected missing letter", () => {
    expect(missingalphabet(["a","b","c","e"])).toBe("d");
    expect(missingalphabet(["X","Z"])).toBe("Y");
});