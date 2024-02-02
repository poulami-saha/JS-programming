const hashTagGenerator = (str: string) => {
    if (str.trim().length === 0) {
        return false;
    }
    if (str.trim().length > 140) {
        return false;
    }
    //cover any type of space or tab
    //const hashTag = str.trim().split(/\s+/).map((word: string) => word.charAt(0).toUpperCase() + word.substring(1)).join("")

    //return `#${hashTag}`
    const hastag = str.trim().split(/\s+/).reduce((acc, word) => {
        return acc + word.charAt(0).toUpperCase() + word.substring(1);
    }, "#")
    return hastag;
}

console.log(hashTagGenerator("Javascript is great"))
console.log(hashTagGenerator(""))