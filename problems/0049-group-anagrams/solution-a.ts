export function groupAnagrams(strs: string[]): string[][] {
  const result = new Map<string, string[]>();

  for (const str of strs) {
    const key = str.split("").sort().join("");
    const group = result.get(key);

    if (group !== undefined) {
      group.push(str);
    } else {
      result.set(key, [str]);
    }
  }

  return Array.from(result.values());
}
