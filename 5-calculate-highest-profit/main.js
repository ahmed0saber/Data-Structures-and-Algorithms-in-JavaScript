let prices = [10, 12, 4, 5, 9]
let profit = Number.MIN_VALUE
let buyDay = 0, sellDay = 0
for(let i=0; i<prices.length; i++){
    for(let j=i; j<prices.length; j++){
        if(prices[j] - prices[i] > profit){
            profit = prices[j] - prices[i]
            buyDay = i
            sellDay = j
        }
    }
}
console.log(prices)
console.log(`If you want to achieve the highest possible profit, you should buy at day indexed ${buyDay} and sell at day indexed ${sellDay}, to earn ${profit}$`)
