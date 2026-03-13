# 0238-product-of-array-except-self

https://leetcode.com/problems/product-of-array-except-self/description/

## Solutions

### 1. Brute force (solution-a)

對每個 index 都重新掃一次整個陣列
把除了自己以外的元素全部乘起來

- 時間複雜度：`O(n^2)`
- 空間複雜度：`O(1)` 額外空間

### 2. Prefix Array + Suffix Array (solution-b)

先建立 `prefix[i]`
表示 `i` 左邊所有元素的乘積

再建立 `suffix[i]`
表示 `i` 右邊所有元素的乘積

最後對每個位置做：

- `result[i] = prefix[i] * suffix[i]`

這樣就能自然避開把 `nums[i]` 自己乘進去

- 時間複雜度：`O(n)`
- 空間複雜度：`O(n)` 額外空間

### 3. Prefix in Answer + Right Product (solution-c)

先把 `answer[i]` 存成左邊所有元素的乘積
再從右往左走，用 `rightProduct` 累積目前位置右邊所有元素的乘積
每走到一格，就把 `rightProduct` 乘進 `answer[i]`

這等於把 `solution-b` 的 `suffix[]` 壓成一個變數

- 時間複雜度：`O(n)`
- 空間複雜度：`O(1)` 額外空間，不計輸出陣列 `answer`

## Checkpoints

- 我知道這題核心是把每個位置的答案拆成左邊乘積和右邊乘積
- 我會用 `prefix` 與 `suffix` 兩個陣列寫出 `O(n)` 解
- 我知道 `solution-b` 和 `solution-c` 的差別在於有沒有保留整個 `suffix[]`
- 我知道這題不能靠除法處理，因為 `0` 會讓思路變麻煩
