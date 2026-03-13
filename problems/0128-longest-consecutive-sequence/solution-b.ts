export function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  const s = new Set(nums);
  let maxStreak = 1;

  for (const value of s.values()) {
    // 當 value 為起點
    if (!s.has(value - 1)) {
      let current = value;
      let streak = 1;

      while (s.has(current + 1)) {
        current++;
        streak++;
      }

      maxStreak = Math.max(maxStreak, streak);
    }
  }

  return maxStreak;
}
