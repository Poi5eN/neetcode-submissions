class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let length = nums.length
        let x = 0

        for(let i=0; i<length; i++){
            if(nums[i] !== val){
                nums[x] = nums[i]
                x = x + 1
            }
        }
        return x
    }
}
