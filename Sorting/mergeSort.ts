const mergeSort = (array: number[]):number[] => {
    if (array.length <= 1) {
        return array
    }

    const mid = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, mid))
    const right = mergeSort(array.slice(mid))


    const merge = (left: number[], right: number[]) => {
        const merged: number[] = []
        let leftIndex = 0;
        let rightIndex = 0
        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                merged.push(left[leftIndex])
                leftIndex++
            } else {
                merged.push(right[rightIndex])
                rightIndex++
            }
        }

        return merged.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
    }
    return merge(left, right)
}

console.log(mergeSort([4, 3, 2, 10, 12, 1, 5, 6]))