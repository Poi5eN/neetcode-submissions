class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = []

        for(let op of operations){
            if(op == 'C'){
                stack.pop()
            } else if(op == 'D'){
                stack.push(stack[stack.length - 1]*2)
            } else if(op == '+'){
                let last = stack[stack.length -1]
                let second = stack[stack.length -2]
                stack.push(last + second)
            } else{
                stack.push(Number(op))
            }
        }
        return stack.reduce((sum, score)=> sum + score, 0)
    }
}
