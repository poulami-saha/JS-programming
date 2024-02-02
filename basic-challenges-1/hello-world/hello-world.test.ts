const hello = require("./hello-world.ts");

test("Return Hello World as a string", () => {
    const result = hello();
    expect(result).toBe("Hello World!");
});