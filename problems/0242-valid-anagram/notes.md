# 0242-valid-anagram

https://leetcode.com/problems/valid-anagram/description/

## Solutions

### 1. Sorting (solution-a)

將兩個字串各自排序後，再逐一比較
如果排序後的每個位置都相同，代表兩個字串包含完全相同的字元與次數

- 時間複雜度：`O(n log n)`，其中 `n` 是字串長度
- 空間複雜度：`O(n)`

### 2. Two Maps (solution-b)

分別統計 `s` 與 `t` 每個字元出現的次數
再遍歷其中一個 `Map`，確認另一個 `Map` 中相同字元的數量是否一致

- 時間複雜度：`O(n)`，其中 `n` 是字串長度
- 空間複雜度：`O(n)`

### 3. One Map (solution-c)

只使用一個 `Map`：

- 掃描 `s` 時，將字元次數加一
- 同時掃描 `t` 時，將字元次數減一

最後如果所有字元的計數都回到 `0`，就代表兩個字串是 anagram

- 時間複雜度：`O(n)`，其中 `n` 是字串長度
- 空間複雜度：`O(n)`

## Checkpoints

- 我知道 anagram 的定義：字元相同，且每個字元出現次數也相同
- 我會 sorting 解法：排序後逐位比較
- 我會 `Map` 計數解法：統計每個字元出現次數後比對
- 我知道 sorting 的時間複雜度是 `O(n log n)`
- 我知道 `Map` 解法的時間複雜度通常是 `O(n)`
- 我知道這題通常 `Map` 解法比 sorting 更好
- 我知道 Unicode follow-up 的重點是要正確地以字元為單位處理字串
