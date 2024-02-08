//Given an array nums and an integer k, rotate the array to the left by k steps.
//nums = [1, 2, 3, 4, 5, 6, 7];
//k = 3;
//output [4, 5, 6, 7, 1, 2, 3]

const rotate = (arr: number[], step: number) => {
    const len = arr.length;
    const newArray: number[] = []
    if (step > len) {
        step = step % len
    }
    for (let i = 0; i < step; i++) {
        const elem = arr.shift();
        newArray.push(elem!);
    }
    let rotated = arr.concat(newArray);
    return rotated;
}
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))