const max = require("./findMax")

test("Return max of numbers", () => {
    //const result = max([10,7,3,4,11,23]);
    expect(max([10,7,3,4,11,23])).toBe(23);
    expect(max([0,-7,-3,-4])).toBe(0);
});