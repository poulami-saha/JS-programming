const arraySum = (numbers: number[]): number => {
    if (numbers.length === 0) return 0;
    return numbers[0] + arraySum(numbers.slice(1))
}

console.log(arraySum([1, 2, 3, 4]))