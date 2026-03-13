# 0001-two-sum

https://leetcode.com/problems/two-sum/description/

## Solutions

### 1. Brute force (solution-a)

兩層迴圈遍歷所有 `i < j` 的組合
如果 `nums[i] + nums[j] === target`，就回傳 `[i, j]`

- 時間複雜度：`O(n^2)`
- 空間複雜度：`O(1)`

### 2. Two-pass Hash Map (solution-b)

先遍歷一次，用 `Map` 記錄 `value -> index`
再遍歷第二次，對每個 `nums[i]` 找 `target - nums[i]` 是否存在

要注意同一個元素不能重複使用
所以找到 complement 的 index 之後，還要確認它不是 `i`

- 時間複雜度：`O(n)`，其中 `n` 是陣列長度
- 空間複雜度：`O(n)`

### 3. One-pass Hash Map (solution-c)

一次遍歷陣列
對每個 `nums[i]`，先檢查 `target - nums[i]` 是否已經出現在 `Map` 中
如果有，就直接回傳答案
如果沒有，再把目前的值與 index 存進 `Map`

這個做法不容易重複使用同一個元素
因為查 complement 時，`Map` 中只會有先前出現過的元素，不會包含當前的 `nums[i]`

- 時間複雜度：`O(n)`，其中 `n` 是陣列長度
- 空間複雜度：`O(n)`

## Checkpoints

- 我會 brute force 解法，也知道它是 `O(n^2)` / `O(1)`
- 我知道這題的核心是找 `target - nums[i]`
- 我會 two-pass hash map 解法，也知道它是 `O(n)` / `O(n)`
- 我會 one-pass hash map 解法，也知道它是 `O(n)` / `O(n)`
- 我知道 two-pass hash map 要特別注意 complement 的 index 不能等於自己
- 我知道 one-pass hash map 不容易踩到這個坑，因為它只查先前出現過的元素
- 我知道這題最常見的最佳解是 one-pass hash map
