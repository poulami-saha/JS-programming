const missingNumber = (arr) => {
    if (arr.length === 0) return 1;

    const num = arr.length + 1;
    const expectedSum = (num * (num + 1)) / 2;
    const actualSum = arr.reduce((acc, curr) =>  acc + curr, 0);
    return expectedSum - actualSum;
}
module.exports = missingNumber;