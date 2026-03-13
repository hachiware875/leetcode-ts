export function maxProfit(prices: number[]): number {
  if (prices.length === 0) {
    return 0;
  }

  let minPrice = prices[0]!;
  let max = 0;

  for (let i = 1; i < prices.length; i++) {
    const price = prices[i]!;

    if (price > minPrice) {
      const profit = price - minPrice;
      max = Math.max(max, profit);
    } else {
      minPrice = price;
    }
  }

  return max;
}
