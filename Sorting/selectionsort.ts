const selectionSort = (array: number[]) => {
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j
            }
        }

        if (minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]]
        }
    }
    return array;
}

console.log(selectionSort([4, 3, 2, 10, 12, 1, 5, 6]))