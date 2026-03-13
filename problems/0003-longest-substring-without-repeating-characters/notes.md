# 0003-longest-substring-without-repeating-characters

https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

## Solutions

### 1. Sliding Window + Set (solution-a)

用一個 sliding window 表示目前沒有重複字元的 substring
視窗範圍是 `[left, right]`
再用 `Set` 記錄目前視窗中的字元

每次讓 `right` 往右擴張，加入新字元

- 若新字元不在 `Set` 中，表示目前視窗仍然合法
- 若新字元已經在 `Set` 中，表示出現重複
  這時就持續移動 `left`
  並把離開視窗的字元從 `Set` 移除
  直到重複消失為止

每次視窗合法時，都可以用 `right - left + 1` 更新最長長度

- 時間複雜度：`O(n)`，因為每個字元最多被加入 `Set` 一次、移出 `Set` 一次
- 空間複雜度：`O(n)`，最壞情況下 `Set` 可能存下整個沒有重複字元的視窗

### 2. Sliding Window + Map of Last Seen Index (solution-b)

這個做法同樣是 sliding window
但不再用 `Set` 一格一格縮小視窗
而是用 `Map<char, lastIndex>` 記錄每個字元上次出現的位置

當 `right` 走到一個字元時：

- 若它以前出現過，就看它上次出現的位置 `prevIndex`
- 若 `prevIndex` 還落在目前視窗內，代表出現重複
- 這時可以直接把 `left` 跳到 `prevIndex + 1`

要注意的是，`left` 不能往回退
所以更新時要寫成：

- `left = Math.max(left, prevIndex + 1)`

例如 `"abba"` 這種情況，若直接寫成 `left = prevIndex + 1` 就會出錯

- 時間複雜度：`O(n)`
- 空間複雜度：`O(n)`

## Checkpoints

- 我會用 sliding window 維護目前合法的 substring
- 我知道這題遇到重複字元時，不是重來，而是持續縮小左邊界
- 我會用 `Set` 記錄目前視窗中的字元
- 我知道這題也可以用 `Map<char, lastIndex>` 直接跳 `left`
- 我知道 `Map` 解法裡，`left` 不能回退，所以要用 `Math.max`
- 我知道這題標準解法的時間複雜度是 `O(n)`，空間複雜度是 `O(n)`
