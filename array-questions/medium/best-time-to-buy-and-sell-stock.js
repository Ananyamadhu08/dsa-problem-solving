// Given an array of prices where prices[i] is the price of a given stock on the ith day. Maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit return 0.

function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice;
    }
  }

  return maxProfit;
}

const prices = [7, 1, 5, 3, 6, 4];

const result = maxProfit(prices);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(1)
