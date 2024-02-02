const symmetricDifference = (arr1: number[], arr2: number[]): number[] => {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const result: number[] = [];
    for (const num of set1) {
        if (!set2.has(num)) {
            result.push(num)
        }
    }
    for (const num of set2) {
        if (!set1.has(num)) {
            result.push(num)
        }
    }
    return result;
}
console.log(symmetricDifference([1, 2, 3], [2, 3, 4]))