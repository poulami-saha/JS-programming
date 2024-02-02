const likes = require("./displayLikes");

test("Return expected likes", () => {
    expect(likes([])).toBe("no one likes this");
    expect(likes(["Peter"])).toBe("Peter likes this");
    expect(likes(["Jacob", "Alex"])).toBe("Jacob and Alex likes this");
    expect(likes(["Max", "John", "Mark"])).toBe("Max, John and Mark likes this");
    expect(likes(["Alex", "Jacob", "Mark", "Max"])).toBe("Alex, Jacob and 2 others likes this");
});