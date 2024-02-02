const numRange = (start: number, end: number): number[] => {
    if (start === end) {
        return [start];
    }
    const numbers = numRange(start, end - 1);
    numbers.push(end);
    return numbers;
}

console.log(numRange(1, 5))