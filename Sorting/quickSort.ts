const quickSort = (array: number[]): number[] => {
    if (array.length <= 1) {
        return array
    }

    const pivot = array[array.length - 1]
    const left: number[] = [];
    const right: number[] = [];

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            left.push(array[i])
        } else {
            right.push(array[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([4, 3, 2, 10, 12, 1, 5, 6]))