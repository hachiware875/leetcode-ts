# 0015-3sum

https://leetcode.com/problems/3sum/description/

## Solutions

### 1. Sorting + Two Pointers (solution-a)

先排序
再固定第一個數 `nums[i]`
剩下的問題就變成在右邊區間找兩個數，讓它們的和等於 `-nums[i]`

這題要排序，主要有兩個原因

- 排序後，two pointers 才有方向感
- 若目前總和太小，就把 `left` 往右移，讓總和變大
- 若目前總和太大，就把 `right` 往左移，讓總和變小

如果沒有排序，就無法根據目前總和判斷下一步該往哪裡移

- 排序後，duplicate 會集中在一起
- 外層固定第一個數時，可以跳過重複的 `nums[i]`
- 找到一組答案後，也可以繼續跳過重複的 `left` / `right`

因此排序不只是為了方便觀察
而是讓搜尋與去重都能自然成立

- 排序：`O(n log n)`
- 外層枚舉第一個數：`O(n)`
- 內層 two pointers 掃描：每輪最多 `O(n)`
- 整體時間複雜度：`O(n^2)`，因為 `O(n^2)` 會主導 `O(n log n)`
- 空間複雜度：若不計排序所需空間，額外空間是 O(1)

## Checkpoints

- 我知道這題可以想成固定一個數，再做一次 2Sum
- 我知道這題要排序，因為排序後 two pointers 才有方向感
- 我知道這題要排序，因為排序後 duplicate 會集中，方便跳過
- 我知道外層 `i` 和內層 `left` / `right` 都要處理 duplicate
- 我知道這題標準解法的時間複雜度是 `O(n^2)`
