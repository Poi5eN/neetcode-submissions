class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
        let length = nums.length
        let x = 0

        for(let i=0; i<length; i++){
            if(nums[i] !== 0){
                nums[x] = nums[i]
                x++
            }
        }
        for(let i=x; i<length; i++){
            nums[i] = 0
        }
    }
}
