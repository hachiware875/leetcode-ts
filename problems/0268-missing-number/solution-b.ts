export function missingNumber(nums: number[]): number {
  let xor = 0;

  for (let i = 0; i < nums.length; i++) {
    // XOR all numbers in 1..n and all values in nums
    xor ^= i + 1;
    xor ^= nums[i]!;
  }

  return xor;
}
