# 0338-counting-bits

https://leetcode.com/problems/counting-bits/description/

## Solutions

### 1. DP with Right Shift Recurrence (solution-a)

對 `0..n` 依序填答案陣列
核心是重複利用前面已經算過的結果

對每個 `i`：

- `i >> 1` 等於把 `i` 的二進位右移一位
- `(i & 1)` 代表 `i` 的最低 bit 是不是 `1`

所以可以得到 recurrence：

- `bits[i] = bits[i >> 1] + (i & 1)`

這表示：

- 若 `i` 是偶數，最低 bit 是 `0`，所以 `bits[i] = bits[i >> 1]`
- 若 `i` 是奇數，最低 bit 是 `1`，所以 `bits[i] = bits[i >> 1] + 1`

因此只要從小到大填表，就能用 `O(n)` 算出 `0..n` 全部答案

- 時間複雜度：`O(n)`
- 空間複雜度：`O(n)`

## Checkpoints

- 我知道這題主解的重點是重複利用前面已經算過的結果
- 我會用 `bits[i] = bits[i >> 1] + (i & 1)` 這個 recurrence
- 我知道 `i >> 1` 代表去掉最低 bit，`i & 1` 代表最低 bit 是否為 `1`
- 我知道這題標準解法的時間複雜度是 `O(n)`，空間複雜度是 `O(n)`
