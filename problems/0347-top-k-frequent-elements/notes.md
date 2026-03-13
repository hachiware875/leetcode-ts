# 0347-top-k-frequent-elements

https://leetcode.com/problems/top-k-frequent-elements/description/

## Solutions

### 1. Map Counting + Sort by Frequency (solution-a)

先用 `Map<number, number>` 統計每個數字出現次數
再把 `Map` 轉成陣列，依 count 由大到小排序
最後取前 `k` 個元素的 value

- 時間複雜度：
  - 建立 `countMap`：`O(n)`
  - 排序 `countMap` 的 entries：若不同數字有 `m` 個，則為 `O(m log m)`
  - 整體：`O(n + m log m)`
  - 最壞情況下 `m = n`，可寫成 `O(n log n)`
- 空間複雜度：
  - `Map` 最多存 `m` 個不同數字
  - 排序用的 entries array 也會有 `m` 個項目
  - 整體：`O(m)`
  - 最壞情況下 `m = n`，可寫成 `O(n)`

### 2. Frequency Buckets (solution-b)

先用 `Map<number, number>` 統計每個數字出現次數
再建立 buckets，bucket 的 index 代表 frequency
也就是 `bucket[count]` 會放所有出現 `count` 次的數字
最後從高頻往低頻掃 buckets，直到收集滿 `k` 個元素

- 時間複雜度：
  - 建立 `countMap`：`O(n)`
  - 將 `m` 個不同數字放進 buckets：`O(m)`
  - 從高頻往低頻掃 buckets 並取出元素：`O(n + m)`，因為 buckets 的長度是 `n + 1`，且所有 bucket 內元素總數為 `m`
  - 整體：`O(n + m + n + m)`
  - 因為 `m <= n`，可簡化為 `O(n)`
- 空間複雜度：
  - `Map` 最多存 `m` 個不同數字
  - buckets 長度為 `n + 1`
  - 整體：`O(m + n)`
  - 因為 `m <= n`，可簡化為 `O(n)`

### 3. MinHeap of Size k (solution-c)

先用 `Map<number, number>` 統計每個數字出現次數
再用 `MinHeap<[num, count]>` 維持目前 frequency 最高的 `k` 個候選
每次放入一個新的 `(num, count)` 後，若 heap size 超過 `k`，就 pop 掉 frequency 最小的那個
最後 heap 中剩下的就是 top `k` frequent

- 時間複雜度：
  - 建立 `countMap`：`O(n)`
  - 遍歷 `m` 個不同數字並維持大小為 `k` 的 min-heap：`O(m log k)`
  - 最後取出 heap 內元素：`O(k log k)`
  - 整體：`O(n + m log k + k log k)`
  - 通常可視為 `O(n + m log k)`
- 空間複雜度：
  - `Map` 最多存 `m` 個不同數字
  - MinHeap 最多存 `k` 個元素
  - 結果陣列會存 `k` 個元素
  - 整體：`O(m + k)`

## Checkpoints

- 我知道這題的核心是先做 frequency counting，再取 top `k`
- 我會 `Map` 統計後直接排序，也知道它是 `O(n + m log m)`
- 我知道 bucket 的優化點是不再對 frequency entries 做比較排序
- 我會 bucket 解法，也知道它通常可做到 `O(n)`
- 我知道 min-heap 解法的核心是只保留目前最好的 `k` 個候選
- 我知道 min-heap 解法通常是 `O(n + m log k)`
