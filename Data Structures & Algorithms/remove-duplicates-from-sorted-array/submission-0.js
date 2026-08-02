class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let length = nums.length
        let x = 0

        for(let i=0; i<length; i++){
            if(nums[i]>nums[x]){
                x = x+1
                nums[x] = nums[i]
            }
        }
        return (x+1)
    }
}
