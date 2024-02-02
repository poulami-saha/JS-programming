const highestScoringWord = (str: string) => {
    // const words = str.split(" ");
    // const scores = words.map((word: string) => {
    //     let score = 0;
    //     for (let char of word) {
    //         score += char.charCodeAt(0) - 96;
    //     }
    //     return score
    // })
    // let highestScore = 0;
    // let highestIndex = 0;
    // for (let i = 0; i < scores.length; i++) {
    //     if (scores[i] > highestScore) {
    //         highestScore = scores[i];
    //         highestIndex = i
    //     }
    // }
    // return words[highestIndex];

    const words = str.split(" ");
    const scores = words.map(word => {
        return Array.from(word).reduce((score, letter) => score + letter.charCodeAt(0) - 96, 0)
    })

    const highestScore=Math.max(...scores)
    const highestIndex=scores.indexOf(highestScore)
    return words[highestIndex];
}

console.log(highestScoringWord("Hello my name is xavier"))