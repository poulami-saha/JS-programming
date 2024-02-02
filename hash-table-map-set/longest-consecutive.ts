const longestConsecutive = (nums: number[]) => {
    const set = new Set(nums);
    let longestSequence = 0;
    for (const num of set) {
        if (!set.has(num - 1)) {
            let currNum = num;
            let currSeq = 1
            while (set.has(currNum + 1)) {
                currNum++
                currSeq++
            }
            longestSequence = Math.max(longestSequence, currSeq)
        }
    }
    return longestSequence;
}

console.log(longestConsecutive([100,4,2,200,1,3,5]))