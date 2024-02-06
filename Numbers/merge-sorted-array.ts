const mergeSortedArray = (arr1: number[], arr2: number[]) => {
    let i = 0;
    let j = 0;
    let result: number[] = []
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i])
            i++
        } else if (arr1[i] > arr2[j]) {
            result.push(arr2[j]);
            j++
        } else {
            result.push(arr1[i]);
            i++;
            j++;
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i])
        i++;
    }
    while (j < arr2.length) {
        result.push(arr2[j])
        j++;
    }
    return result;
}

let arr1 = [1, 3, 5]
let arr2 = [2, 4, 8]
console.log(mergeSortedArray(arr1, arr2))