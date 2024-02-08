//Given an array nums and an integer k, rotate the array to the right by k steps.
//nums = [1, 2, 3, 4, 5, 6, 7];
//k = 3;
//output [5, 6, 7, 1, 2, 3, 4]

const rightRotate = (arr: number[], step: number) => {
    const len = arr.length;
    if (step > len) {
        step = step % len
    }

    let rotated: number[] = [];
    for (let i = 0; i < len; i++) {
        const index = (i + step) % len
        rotated[index] = arr[i]
    }

    return rotated;
}

const rotate2 = (nums: number[], k: number) => {
    function reverse(arr:number[], start:number, end:number) {
        while (start < end) {
          [arr[start], arr[end]] = [arr[end], arr[start]];
          start++;
          end--;
        }
      }
    
      k %= nums.length;
    
      reverse(nums, 0, (nums.length - 1));
      reverse(nums, 0, (k - 1));
      reverse(nums, k, (nums.length - 1));
    
      return nums;
}
console.log(rotate2([1, 2, 3, 4, 5, 6, 7], 3))