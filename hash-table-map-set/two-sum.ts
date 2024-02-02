const twoSum = (nums: number[], target: number) => {
    const numSet = new Set();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numSet.has(complement)) {
            return [i, nums.indexOf(complement)]
        }
        numSet.add(nums[i])
    }
    return []
}
console.log(twoSum([2, 7, 11, 15], 17))