function getKey(str: string): string {
  const count = new Array(26).fill(0);

  for (let i = 0; i < str.length; i++) {
    count[str[i]!.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  return count.join("#");
}

export function groupAnagrams(strs: string[]): string[][] {
  const result = new Map<string, string[]>();

  for (const str of strs) {
    const key = getKey(str);
    const group = result.get(key);

    if (group !== undefined) {
      group.push(str);
    } else {
      result.set(key, [str]);
    }
  }

  return Array.from(result.values());
}
