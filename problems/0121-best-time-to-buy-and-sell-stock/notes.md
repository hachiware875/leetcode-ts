# 0121-best-time-to-buy-and-sell-stock

https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

## Solutions

### 1. One Pass Tracking Minimum Price (solution-a)

從左到右掃一次陣列
掃描過程中維護兩個資訊

- 到目前為止的最低價格 `minPrice`
- 到目前為止的最大利潤 `max`

每看到一個新價格：

- 若它比 `minPrice` 高，代表可以嘗試在今天賣出
  這時用 `price - minPrice` 計算利潤，看看能不能更新最大值
- 若它比 `minPrice` 更低，就更新 `minPrice`
  因為之後若要買入，這個更低的價格會比舊的 `minPrice` 更有利

這樣不需要列舉所有買賣組合

- 時間複雜度：`O(n)`
- 空間複雜度：`O(1)`

## Checkpoints

- 我會用一次遍歷同時維護 `minPrice` 和目前最佳利潤
- 我知道這題標準解法的時間複雜度是 `O(n)`，空間複雜度是 `O(1)`
