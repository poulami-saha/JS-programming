const nonRepeat = require("./first-non-repeating");

test("Return expected missing letter", () => {
    expect(nonRepeat("programming")).toBe("p");
    expect(nonRepeat("aabbcddee")).toBe("c");
});