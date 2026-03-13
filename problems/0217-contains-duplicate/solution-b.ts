export function containsDuplicate(nums: number[]): boolean {
  // 補充：JS 的 sort 為 in-place
  const sorted = Array.from(nums).sort((a, b) => a - b);

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === sorted[i - 1]) {
      return true;
    }
  }

  return false;
}
