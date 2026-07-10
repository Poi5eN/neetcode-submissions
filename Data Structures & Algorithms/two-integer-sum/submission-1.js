class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let length = nums.length
        let seen = new Map()
        
        for(let i=0; i<length; i++){
            let complement = target - nums[i]
            if(seen.has(complement)){
                return [seen.get(complement), i]
            }

            seen.set(nums[i], i)
        }
    }
}
