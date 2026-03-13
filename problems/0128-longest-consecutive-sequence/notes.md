# 0128-longest-consecutive-sequence

https://leetcode.com/problems/longest-consecutive-sequence/description/

## Solutions

### 1. Sorting (solution-a)

先排序
再線性掃描排序後的陣列，維護目前這一段 consecutive sequence 的長度

要注意兩個細節：

- 如果遇到 duplicate，不能把 streak 斷掉，應直接跳過
- 迴圈結束後要再更新一次 `maxStreak`
  因為最長那段可能剛好延伸到陣列尾端

- 時間複雜度：`O(n log n)`
- 空間複雜度：`O(n)`
  這份實作有先複製一份陣列再排序

### 2. Hash Set + Sequence Start (solution-b)

先把所有數字放進 `Set`
對每個不同的數字，只在它沒有前一個數字時，才把它當成一段 consecutive sequence 的起點

也就是說，若 `!set.has(num - 1)`，才從 `num` 開始一路檢查：

- `num + 1`
- `num + 2`
- `num + 3`

這樣每段連續區間只會真的被掃一次
不會從同一段中的每個元素都重複往後掃

- 時間複雜度：
  - 建立 `Set`：`O(n)`
  - 檢查每個元素是否為起點：`O(n)` 平均情況
  - 所有從起點往後延伸的掃描總和：`O(n)` 平均情況
  - 整體：`O(n)` 平均情況
- 空間複雜度：`O(n)`

## Checkpoints

- 我知道排序解法要特別處理 duplicate，不能把 streak 錯誤重設
- 我知道排序解法在迴圈結束後要再更新一次 `maxStreak`
- 我知道這題更好的方向是用 `Set` 快速判斷某個值是否存在
- 我知道只有在 `num - 1` 不存在時，`num` 才是一段連續區間的起點
- 我知道 `Set` 解法雖然看起來有巢狀結構，但每段區間只會被掃一次，所以整體仍是 `O(n)` 平均情況
