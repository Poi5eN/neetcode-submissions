class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let arr = [];

        for (let i = 0; i < 2; i++) {
            for (let num of nums) {
                arr.push(num);
            }
        }

        return arr;
    }
}
