const reverseStringTest = require("./reverseString.ts");

test("Return reverse of a string", () => {
    expect(reverseStringTest("javascript")).toBe("tpircsavaj");
    expect(reverseStringTest("hello")).toBe("olleh");
});