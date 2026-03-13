export function topKFrequent(nums: number[], k: number): number[] {
  const countMap = new Map<number, number>();

  for (const num of nums) {
    countMap.set(num, (countMap.get(num) ?? 0) + 1);
  }

  const sorted = Array.from(countMap).sort(
    ([, countA], [, countB]) => countB - countA,
  );

  return sorted.slice(0, k).map(([value]) => value);
}
