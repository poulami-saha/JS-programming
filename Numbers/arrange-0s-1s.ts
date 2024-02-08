const arrange = (arr: number[]) => {
    const zeroArray = arr.filter(num => num !== 1);
    return [...zeroArray, ...Array(arr.length - zeroArray.length).fill(1)]

}

console.log(arrange([1, 0, 0, 1, 0, 1, 1]))