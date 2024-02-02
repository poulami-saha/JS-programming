const email = require("./validate-email");

test("Return expected value", () => {
    expect(email("a@gmail.com")).toBeTruthy;
    expect(email("abc@gmail")).toBeFalsy;
});