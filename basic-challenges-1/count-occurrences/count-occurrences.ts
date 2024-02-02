const countOccurences = (word, char) => {
    let count = 0
    const arr = word.split("");
    arr.forEach(elem => {
        if (elem === char) count++
    });
    return count;
}
//Alternate Approach

// const countOccurences = (word, char) => {
//     return word.split(char).length-1
// }
module.exports=countOccurences;