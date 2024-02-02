const palindrome = (str) => {
    const formattedString = str.toLowerCase().replace(/[^a-z0-9]/g, "")
    const reversed = str.split("").reverse().join("");
    return reversed === formattedString;
}

module.exports = palindrome