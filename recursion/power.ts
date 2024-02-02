const power = (num: number, times: number): number => {
    if (times === 0) {
        return 1
    }
    return num * power(num, times - 1)
}

console.log(power(2, 5))