# 0011-container-with-most-water

https://leetcode.com/problems/container-with-most-water/description/

## Solutions

### 1. Two Pointers (solution-a)

用兩個指標放在最左與最右
每一步先計算目前容器面積

- 面積 = `min(height[left], height[right]) * (right - left)`

接著移動較短的那一邊

原因是：

- 寬度每往內移一步都會變小
- 若移動較高的那一邊，較短的那一邊仍是瓶頸
- 此時短板沒有變高，寬度又變小，面積不可能更好
- 只有移動較短的那一邊，才有機會找到更高的短板

所以每一步都可以安全地排除一整條不可能更好的候選

若想更嚴謹地讓自己信服，可以把 correctness 拆成兩個 part

- Part 1
  每一步刪掉一整條候選是安全的
  若左邊是短板，則固定左端點的其他組合寬度只會更小，不可能比目前更好
  右邊短板時也是同理

- Part 2
  候選空間會一路縮到空
  一開始候選是所有 `0 (left) <= l < r <= n - 1 (right)` 的 pair
  每一步不是 `left++` 就是 `right--`
  所以候選空間會持續縮小
  最後當 `left >= right` 時，就已經沒有合法 pair 剩下

- 時間複雜度：`O(n)`，因為 `left` 與 `right` 都只會單向移動
- 空間複雜度：`O(1)`

## Checkpoints

- 我會用 two pointers 從左右兩端往中間收斂
- 我知道這題要移動較短的那一邊，而不是較高的那一邊
- 我知道這題不需要列舉所有 pair，就能在線性時間內找到答案
- 我知道這題標準解法的時間複雜度是 `O(n)`，空間複雜度是 `O(1)`
