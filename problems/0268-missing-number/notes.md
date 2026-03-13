# 0268-missing-number

https://leetcode.com/problems/missing-number/description/

## Solutions

### 1. Math Sum Formula (solution-a)

若陣列包含完整的 `0..n`
那總和應該是：

- `n * (n + 1) / 2`

再減掉 `nums` 的實際總和
剩下的就是缺少的那個數

- 計算 `0..n` 應有總和：`O(1)`
- 計算 `nums` 實際總和：`O(n)`
- 整體時間複雜度：`O(n)`
- 空間複雜度：`O(1)`

### 2. XOR (solution-b)

利用 XOR 的性質：

- `a ^ a = 0`
- `a ^ 0 = a`

把 `0..n` 與 `nums` 裡所有數全部 XOR 起來
成對出現的數會互相抵消
最後剩下的就是缺少的那個數

你現在的寫法是：

- 一邊把 `1..n` XOR 進答案
- 一邊把 `nums[i]` XOR 進答案

最後留下 missing number

- 時間複雜度：`O(n)`
- 空間複雜度：`O(1)`

## Checkpoints

- 我會用 XOR 的抵消性質找 missing number
- 我知道這題兩個主流解法的額外空間複雜度都是 `O(1)`
