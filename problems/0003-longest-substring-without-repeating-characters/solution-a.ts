export function lengthOfLongestSubstring(s: string): number {
  let left = 0;
  let max = 0;
  const set = new Set<string>();

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right]!)) {
      set.delete(s[left]!);
      left++;
    }

    set.add(s[right]!);
    max = Math.max(max, right - left + 1);
  }

  return max;
}
