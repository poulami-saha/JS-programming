const removeDuplicate=require("./duplicate");
test("remove duplicate", () => {
    expect(removeDuplicate([1,1,1,1,1,1])).toStrictEqual([1]);
    expect(removeDuplicate([1,2,3,4,1,2])).toStrictEqual([1,2,3,4]);
});