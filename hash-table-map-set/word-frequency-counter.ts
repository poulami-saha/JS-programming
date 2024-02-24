const frequencyCounter = (str: string) => {
    const words = str.toLowerCase().split(/\W+/) // removes all punctuations and spaces

    const wordFrequency = new Map();
    for (let word of words) {
        if (word === "") continue;
        wordFrequency.set(word, (wordFrequency.get(word) || 0) + 1)
    }
    return wordFrequency;

}
console.log(frequencyCounter("The quick brown fox jumps over the lazy dog."))