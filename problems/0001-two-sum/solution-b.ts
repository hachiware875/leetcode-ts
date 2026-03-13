export function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>(); // value -> index

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i]!, i);
  }

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]!;
    const complementIdx = map.get(complement);

    // 遇到 nums = [3, 3], target = 6 這種情形要檢查
    if (complementIdx !== undefined && complementIdx !== i) {
      return [i, complementIdx];
    }
  }

  throw new Error("Unreachable");
}
