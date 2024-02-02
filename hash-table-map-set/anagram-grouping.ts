const anagramGrouping = (words: string[]) => {
    const anagramGroups = new Map();
    
    for (let word of words) {
        const sortedChars = word.split("").sort().join("");
        if (anagramGroups.has(sortedChars)) {
            anagramGroups.get(sortedChars).push(word)
        } else {
            anagramGroups.set(sortedChars, [word])
        }
    }

    return Array.from(anagramGroups.values())
}

console.log(anagramGrouping(["cat", "act", "dog", "god", "tac"]))