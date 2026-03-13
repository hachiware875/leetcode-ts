# 0191-number-of-1-bits

https://leetcode.com/problems/number-of-1-bits/description/

## Solutions

### 1. Check Lowest Bit and Unsigned Right Shift (solution-a)

每次檢查目前最低位是不是 `1`

- 用 `n & 1` 檢查最低 bit
- 若結果是 `1`，就把計數加一
- 再用 `n >>>= 1` 做無號右移，繼續檢查下一位

在 JavaScript / TypeScript 裡，這題要注意使用無號右移 `>>>`
不要用帶符號右移 `>>`
否則遇到高位為 `1` 的情況時，可能會因為符號位補 `1` 而出問題

- 時間複雜度：`O(1)`，若視為 32-bit integer，就是固定檢查最多 32 次
- 空間複雜度：`O(1)`

### 2. Brian Kernighan's Algorithm (solution-b)

每次做：

- `n = n & (n - 1)`

這個操作會把最右邊那個 `1` 消掉
所以做幾次，就代表原本有幾個 `1`

例如：

- `101100`
- 做一次 `n & (n - 1)` 後會變成 `101000`

因此這個方法不用逐位檢查全部 bit
而是直接一個一個消掉 `1`

- 時間複雜度：`O(k)`，其中 `k` 是 `1` 的個數
- 若視為 32-bit integer，最壞情況仍可視為 `O(1)`
- 空間複雜度：`O(1)`

## Checkpoints

- 我知道這題在 JavaScript / TypeScript 裡要注意使用無號右移 `>>>`
- 我會用 `n = n & (n - 1)` 一次消掉最右邊那個 `1`
- 我知道這題兩種常見解法的額外空間複雜度都是 `O(1)`
