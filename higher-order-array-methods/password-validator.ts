const passwordValidator = (password: string) => {

    const hasLength = password.length >= 8
    const hasUpperCase = password.split("").some((char: string) => char === char.toUpperCase() && char !== char.toLowerCase())
    const hasLowerCase = password.split("").some((char: string) => char === char.toLowerCase() && char !== char.toUpperCase())
    const hasDigit = password.split("").some((char: string) => !isNaN(parseInt(char, 10)))
    return hasLength && hasUpperCase && hasLowerCase && hasDigit
}

console.log(passwordValidator("Abc12345"))
console.log(passwordValidator("password123"))
console.log(passwordValidator("Pass"))
console.log(passwordValidator("HelloWorld"))