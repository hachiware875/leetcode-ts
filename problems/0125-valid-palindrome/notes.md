# 0125-valid-palindrome

https://leetcode.com/problems/valid-palindrome/description/

## Solutions

### 1. Normalize Then Two Pointers (solution-a)

先把字串轉成小寫
再過濾掉非英數字元，得到只包含小寫字母與數字的新字串
最後用雙指標從左右往中間比對

這版最直觀，條件處理也比較集中

- 時間複雜度：`O(n)`
- 空間複雜度：`O(n)`

### 2. Two Pointers on Original String (solution-b)

直接在原字串上用雙指標
若左右任一側不是英數字元，就跳過
只有在兩側都指向英數字元時才比較，而且比較前先統一成小寫

這版省掉建立新字串的空間，但條件判斷較多，也比較容易寫錯邊界

- 時間複雜度：`O(n)`
- 空間複雜度：`O(1)`

## Checkpoints

- 我知道這題核心是雙指標從左右往中間比對
