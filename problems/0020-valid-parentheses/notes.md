# 0020-valid-parentheses

https://leetcode.com/problems/valid-parentheses/description/

## Solutions

### 1. Stack (solution-a)

用 stack 存還沒配對成功的 opening brackets

每看到一個字元：

- 若是 opening bracket，就 push 進 stack
- 若是 closing bracket，就把 stack top pop 出來檢查是否匹配

若中途配對失敗，就直接回傳 `false`
最後若 stack 還有剩，代表仍有 opening bracket 沒被配對，也要回傳 `false`

- 時間複雜度：`O(n)`
- 空間複雜度：`O(n)`，最壞情況下 stack 可能存下全部 opening brackets

## Checkpoints

- 我知道這題的核心是括號必須正確配對，且順序也要正確
- 我會用 stack 記錄尚未配對的 opening brackets
- 我知道 closing bracket 要和最近的 opening bracket 配對
- 我知道最後 stack 必須為空，才能代表所有括號都成功配對
- 我知道這題標準解法的時間複雜度是 `O(n)`，空間複雜度是 `O(n)`
