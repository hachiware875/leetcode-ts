import { MinHeap } from "../../lib/data-structures/min-heap-generic";

export function topKFrequent(nums: number[], k: number): number[] {
  const countMap = new Map<number, number>();

  for (const num of nums) {
    countMap.set(num, (countMap.get(num) ?? 0) + 1);
  }

  const minHeap = new MinHeap(
    (a: [number, number], b: [number, number]) => a[1] - b[1],
  );

  for (const entry of countMap) {
    minHeap.push(entry);

    if (minHeap.size() > k) {
      minHeap.pop();
    }
  }

  const result = [];

  for (let i = 0; i < k; i++) {
    const min = minHeap.pop()![0];
    result.push(min);
  }

  return result;
}
