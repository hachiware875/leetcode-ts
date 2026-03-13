export function threeSum(nums: number[]): number[][] {
  const answer: number[][] = [];

  const sortedNums = Array.from(nums).sort((a, b) => a - b);

  for (let i = 0; i <= sortedNums.length - 3; i++) {
    if (i > 0 && sortedNums[i]! === sortedNums[i - 1]!) {
      continue;
    }

    const target = -sortedNums[i]!;

    let left = i + 1;
    let right = sortedNums.length - 1;

    while (left < right) {
      const sum = sortedNums[left]! + sortedNums[right]!;

      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        answer.push([sortedNums[i]!, sortedNums[left]!, sortedNums[right]!]);

        do {
          left++;
        } while (left < right && sortedNums[left]! === sortedNums[left - 1]!);

        do {
          right--;
        } while (left < right && sortedNums[right]! === sortedNums[right + 1]!);
      }
    }
  }

  return answer;
}
