export function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>(); // value -> index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]!;
    const complementIdx = map.get(complement);

    if (complementIdx !== undefined) {
      return [complementIdx, i];
    }

    map.set(nums[i]!, i);
  }

  throw new Error("Unreachable");
}
