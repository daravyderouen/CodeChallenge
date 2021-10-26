//write a fn best
//return maximum profit for buying AND selling 1 stock
//best =[]

//write buy stock earlier in the array and sell it at the highest point of the array

const best = (prices) => {
    let maxProfit = 0
    let minPrice = prices[o]
    for(let sell =1; sell < prices.length; sell++){
        let sell=prices[sell]
        let profit = sellPrice - minPrice
        maxProfit = Math.max(maxProfit, profit)
        if(sellPrice < minPrice)minPrice = sellPrice
    }
    return maxProfit
};

