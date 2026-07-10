class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let length = nums.length

        for(let i=0; i<length; i++){
            for(let j=i+1; j<length; j++){
                if(nums[i] === nums[j]){
                    return true
                }
            }
        }
        return false
    }
}
