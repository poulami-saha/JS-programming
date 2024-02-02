const intersection = require("./array-intersection");

test("Return expected common values", () => {
    expect(intersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])).toStrictEqual([3, 4, 5]);
});