const bubbleSort = (array: number[]) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let c = array[j];
                array[j] = array[j + 1];
                array[j + 1] = c
            }
        }
    }
    return array;
}

console.log(bubbleSort([5, 4, 2, 1]))