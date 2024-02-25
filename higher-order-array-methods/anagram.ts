//Given two strings s and t, return true if t is an anagram of s, and false otherwise.

//An Anagram is a word or phrase formed by rearranging the letters of a different word or 
// phrase, typically using all the original letters exactly once.

const anagram = (str1: string, str2: string) => {
    const freqCount1 = str1.split("").reduce((acc: any, char: string) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {})
    const freqCount2 = str2.split("").reduce((acc: any, char: string) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {})

    return Object.keys(freqCount1).every((char: string) => freqCount1[char] === freqCount2[char]);
}

const anagram2 = (str1: string, str2: string) => {
    const s = str1.split("").sort().join("");
    const t = str2.split("").sort().join("");
    return s === t ? true : false;

}

console.log(anagram("app", "paa"))
console.log(anagram2("app", "ppa"))