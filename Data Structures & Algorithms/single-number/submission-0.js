class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let hash = {}

        for(let i=0; i<nums.length; i++){
            if(!hash[nums[i]]){
                hash[nums[i]] = 1
            } else{
                hash[nums[i]]++
            }
        }

        for(let i=0; i<nums.length; i++){
            if(hash[nums[i]]==1){
                return nums[i]
            }
        }
    }
}
