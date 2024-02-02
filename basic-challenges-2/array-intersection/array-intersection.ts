// const arrayIntersection = (arr1, arr2) => {
//     const newArray = [];
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr2.includes(arr1[i]) && !newArray.includes(arr1[i])) {
//             newArray.push(arr1[i])
//         }
//     }
//     return newArray;
// }

const arrayIntersection = (arr1, arr2) => {
    const newArray = [];
    const set = new Set(arr1);
    for (let num of arr2) {
        if (set.has(num)) {
            newArray.push(num)
        }
    }
    return newArray;
}
module.exports = arrayIntersection