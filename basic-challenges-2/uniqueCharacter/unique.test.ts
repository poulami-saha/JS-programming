const uniqueChar = require("./unique");

test("Return expected value", () => {
    expect(uniqueChar("abcdefg")).toBeTruthy;
    expect(uniqueChar("programming")).toBeFalsy;
});