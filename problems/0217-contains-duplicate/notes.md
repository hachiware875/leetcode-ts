# 0217-contains-duplicate

https://leetcode.com/problems/contains-duplicate/description/

## Solutions

### 1. Brute force (solution-a)

兩兩比對所有元素，只要找到一組相同就回傳 `true`

- 時間複雜度：`O(n^2)`
- 空間複雜度：`O(1)`

### 2. Sorting (solution-b)

先排序，再線性掃描相鄰元素
如果 `nums[i] === nums[i - 1]`，就代表有重複值

- 時間複雜度：`O(n log n)`
- 空間複雜度：`O(1)`（不考慮排序所需空間）

### 3. Hash Set (solution-c)

用 `Set` 記錄已看過的數字
掃描陣列時：

- 如果目前數字已存在於 `Set`，回傳 `true`
- 否則把它加入 `Set`

全部掃完都沒重複就回傳 `false`

- 時間複雜度：`O(n)`
- 空間複雜度：`O(n)`

這題通常最直接、最實用的解法就是 `Set`

## Checkpoints

- 我會 brute force 解法，也知道它是 `O(n^2)` / `O(1)`
- 我會 sorting 解法，也知道它是 `O(n log n)`
- 我知道 sorting 解法的核心是排序後重複值會相鄰
- 我會 `Set` 解法，也知道它是平均 `O(n)` / `O(n)`
- 我知道 `Set` 解法較實用，因為 `has` 與 `add` 平均是 `O(1)`
- 我知道這題目前不需要深挖 hash table 底層細節
