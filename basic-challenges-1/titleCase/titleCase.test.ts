const title = require("./titleCase")

test("Return title case", () => {
    expect(title("the quick brown fox")).toBe("The Quick Brown Fox");
});