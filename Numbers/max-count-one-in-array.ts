const maxCount = (arr: number[]) => {
    let maxCount = 0;
    let currentCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            currentCount++;
            maxCount = Math.max(currentCount, maxCount);
        } else {
            currentCount = 0
        }
    }
    return maxCount;
}

console.log(maxCount([1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1]))