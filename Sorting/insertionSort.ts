const insertionSort = (array: number[]) => {
    for (let i = 1; i < array.length; i++) {
        const current = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j]
            j--
        }
        array[j + 1] = current
    }
    return array;
}

console.log(insertionSort([4, 3, 2, 10, 12, 1, 5, 6]))