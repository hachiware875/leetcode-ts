export function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  const sorted = Array.from(nums).sort((a, b) => a - b);

  let currentStreak = 1;
  let maxStreak = 1;

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i]! === sorted[i - 1]!) {
      continue;
    }

    if (sorted[i]! === sorted[i - 1]! + 1) {
      currentStreak++;
    } else {
      maxStreak = Math.max(maxStreak, currentStreak);
      currentStreak = 1;
    }
  }

  maxStreak = Math.max(maxStreak, currentStreak);
  return maxStreak;
}
