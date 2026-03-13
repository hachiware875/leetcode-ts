export function lengthOfLongestSubstring(s: string): number {
  let left = 0;
  let max = 0;
  const lastSeenIndex = new Map<string, number>(); // character -> index

  for (let right = 0; right < s.length; right++) {
    const prevIndex = lastSeenIndex.get(s[right]!);

    if (prevIndex !== undefined) {
      // 注意
      // 這裡不能只寫 left = prevIndex + 1
      // 像 abba 這種 input 就會出錯
      left = Math.max(left, prevIndex + 1);
    }

    lastSeenIndex.set(s[right]!, right);
    max = Math.max(max, right - left + 1);
  }

  return max;
}
