export function containsDuplicate(nums: number[]): boolean {
  const s = new Set<number>();
  s.add(nums[0]!);

  for (let i = 1; i < nums.length; i++) {
    if (s.has(nums[i]!)) {
      return true;
    }

    s.add(nums[i]!);
  }

  return false;
}
