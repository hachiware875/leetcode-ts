export function productExceptSelf(nums: number[]): number[] {
  const result = new Array(nums.length);

  for (let i = 0; i < nums.length; i++) {
    let product = 1;

    for (let j = 0; j < nums.length; j++) {
      if (j === i) {
        continue;
      }

      product *= nums[j]!;
    }

    result[i] = product;
  }

  return result;
}
