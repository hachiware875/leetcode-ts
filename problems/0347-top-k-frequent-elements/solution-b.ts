export function topKFrequent(nums: number[], k: number): number[] {
  const countMap = new Map<number, number>();

  for (const num of nums) {
    countMap.set(num, (countMap.get(num) ?? 0) + 1);
  }

  const buckets: number[][] = new Array(nums.length + 1)
    .fill(null)
    .map(() => []);

  for (const [value, count] of countMap) {
    buckets[count]!.push(value);
  }

  const result: number[] = [];

  for (let i = buckets.length - 1; i >= 0; i--) {
    const bucket = buckets[i]!;

    if (bucket.length !== 0) {
      result.push(...bucket);

      // 題目保證答案集合是唯一的
      // 因此不會出現「某個 bucket 全部加入後，result.length 會超過 k」的模糊情況
      if (result.length === k) {
        return result;
      }
    }
  }

  throw new Error("Unreachable");
}
