const checkPalindrome = require("./palindrome.ts");

test("check palindrome", () => {
    expect(checkPalindrome("racecar")).toBeTruthy();
    //expect(reverse("hello")).toBe("olleh");
});