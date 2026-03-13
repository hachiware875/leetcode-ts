# 0049-group-anagrams

https://leetcode.com/problems/group-anagrams/description/

## Solutions

### 1. Sorting Key (solution-a)

對每個字串做 normalization
做法是先將字串排序，排序後的字串作為 key
互為 anagram 的字串會得到相同 key
再用 `Map<key, string[]>` 將它們分到同一組

- 時間複雜度：`O(m * n log n)`，其中 `m` 是字串數量，`n` 是字串長度
- 空間複雜度：`O(m * n)`

### 2. Counting Key (solution-b)

對每個字串統計 26 個小寫英文字母出現的次數
再把這個計數結果轉成固定格式的 key
互為 anagram 的字串會得到相同 key
再用 `Map<key, string[]>` 將它們分到同一組

- 時間複雜度：`O(m * n)`，其中 `m` 是字串數量，`n` 是字串長度
- 空間複雜度：`O(m * n)`

## Checkpoints

- 我知道這題的核心是替每個字串找到同一種 normalization / key
- 我會用排序後字串當 key
- 我會用字元計數結果當 key
- 我知道這兩種做法都要搭配 `Map<key, string[]>`
- 我知道 sorting key 的時間複雜度通常是 `O(m * n log n)`
- 我知道 counting key 在這題通常可以做到 `O(m * n)`
