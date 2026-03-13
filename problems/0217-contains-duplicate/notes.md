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
