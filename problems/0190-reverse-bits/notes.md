# 0190-reverse-bits

https://leetcode.com/problems/reverse-bits/description/

## Solutions

### 1. Extract Lowest Bit and Rebuild Answer (solution-a)

這題把 `n` 當成固定 32-bit 的 bit pattern 來處理
做法是逐位取出原本的最低 bit，再逐位組出反轉後的答案

每一步：

- 先把 `answer` 左移一位，騰出最低位
- 用 `n & 1` 取出 `n` 目前的最低 bit
- 用 `|` 把這個 bit 放進 `answer`
- 再用 `n >>>= 1` 做無號右移，繼續處理下一位

因為題目是固定 32-bit integer
所以要固定做 32 次
不能寫成 `while (n)`
否則前導 `0` 的位置資訊會遺失

在 JavaScript / TypeScript 裡要注意使用無號右移 `>>>`
不要用 `>>`
否則高位為 `1` 時會受到符號位影響

- 時間複雜度：`O(1)`，固定做 32 次
- 空間複雜度：`O(1)`

## Checkpoints

- 我會用 `n & 1` 逐位取出原本的最低 bit
- 我會用 `answer = (answer << 1) | (n & 1)` 逐步組出答案
- 我知道這題要固定做 32 次，不能寫成 `while (n)`
- 我知道這題在 JavaScript / TypeScript 裡要注意使用無號右移 `>>>`
- 我知道這題標準解法的時間複雜度與空間複雜度都是 `O(1)`
