const fibo = (num: number): number => {
    // if (num < 2) {
    //     return num
    // }
    // return fibo(num - 1) + fibo(num - 2)
    return num < 2 ? num : fibo(num - 1) + fibo(num - 2)
}

console.log(fibo(4))