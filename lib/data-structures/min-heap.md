# MinHeap

## 這是什麼

`MinHeap` 是一種資料結構
它的核心功能是快速取得目前最小的元素

heap 底層可以理解成 complete binary tree
實作上通常會用 array 來表示

它不會保證所有元素完全排序
它只保證 root 是整個 heap 的最小值

## Heap Property

MinHeap 的規則是：

- 每個 parent 都要小於等於自己的直接 children

這是 local rule
只要整棵樹每個 local rule 都成立，root 就會是全域最小值

## Array 表示法

這個專案的 `MinHeap` 使用 0-based array 表示 complete binary tree

- root index: `0`
- left child index: `2 * i + 1`
- right child index: `2 * i + 2`
- parent index: `Math.floor((i - 1) / 2)`

## 支援的操作

- `size()`
  - 取得目前元素數量
- `peek()`
  - 查看目前最小值，但不移除
- `push(value)`
  - 加入新元素，並維持 heap property
- `pop()`
  - 移除並回傳目前最小值，並維持 heap property

其中 `push()` 與 `pop()` 是比較需要留意的操作
因為它們不只是單純插入或取出資料
還會涉及 heap 內部結構的維護

## Push 的精神

- 先把新元素放到 array 最後面
- 再一路往上和 parent 比較
- 如果比 parent 小，就交換
- 直到不需要交換或到 root 為止

這個過程常叫做 bubble up 或 sift up

## Pop 的精神

- 先取出 root，也就是目前最小值
- 把最後一個元素補到 root
- 再一路往下和較小的 child 比較
- 如果目前節點比較大，就交換
- 直到不需要交換為止

這個過程常叫做 bubble down 或 sift down

## 複雜度

- `peek()`：`O(1)`
- `size()`：`O(1)`
- `push()`：`O(log n)`
- `pop()`：`O(log n)`
- 空間複雜度：`O(n)`

`push()` 和 `pop()` 之所以是 `O(log n)`
是因為它們在維護 heap 時，最壞情況下需要沿著樹一路往上或往下調整

而 complete binary tree 的高度大約是 `log n`
所以調整成本通常就是 `O(log n)`

## 為什麼適合做 Priority Queue

Priority Queue 的需求通常是：

- 持續加入元素
- 快速取得目前優先級最高或最低的元素

MinHeap 很適合實作「每次快速取最小值」的 priority queue

## 在 LeetCode 常見的用途

- Top K 類題目
- Merge K Sorted Lists
- Find Median from Data Stream
- 與頻率、最值、動態維護候選集合有關的題目
