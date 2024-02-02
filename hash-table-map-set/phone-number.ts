const phoneNumberDirectory = (phoneNumbers: string[]) => {
    const directory = new Map();
    for (let entry of phoneNumbers) {
        const [name, phone] = entry.split(":");
        directory.set(name, phone)
    }
    return directory;
}
const phoneNumbersArray = [
    'John:123-456-789',
    'Mary:234-567-890',
    "henry:124-568-790"
]
console.log(phoneNumberDirectory(phoneNumbersArray))