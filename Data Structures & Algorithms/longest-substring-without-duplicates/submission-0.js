class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let sub = '', max = 0
        for(const char of s){
            sub = sub.slice(sub.indexOf(char) + 1) + char
            max = Math.max(max, sub.length)
        }
        return max
    }
}
