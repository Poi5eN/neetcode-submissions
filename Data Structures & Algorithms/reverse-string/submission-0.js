class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let length = s.length
        let half = Math.floor(length/2)

        for(let i=0; i<half; i++){
            let temp = s[i]
            s[i] = s[length - 1 - i]
            s[length - 1 - i] = temp
        }
    }
}
