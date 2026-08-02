class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let length = prices.length
        let min = prices[0]
        let mprofit = 0

        for(let i=0; i<length; i++){
            if(prices[i] - min > mprofit){
                mprofit = prices[i] - min
            }
            if(prices[i]<min){
                min = prices[i]
            }
        }
        return mprofit
    }
}
