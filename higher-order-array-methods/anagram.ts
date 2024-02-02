const anagram = (str1:string, str2:string) => {
    const freqCount1 = str1.split("").reduce((acc:any, char:string) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {})
    const freqCount2 = str2.split("").reduce((acc:any, char:string) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {})

    return Object.keys(freqCount1).every((char:string) => freqCount1[char] === freqCount2[char]);
}

console.log(anagram("app","paa"))