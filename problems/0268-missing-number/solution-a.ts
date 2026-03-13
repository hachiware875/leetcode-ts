export function missingNumber(nums: number[]): number {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((prev, current) => prev + current, 0);
  return expectedSum - actualSum;
}
