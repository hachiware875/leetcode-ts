export function isPalindrome(s: string): boolean {
  const processed = s
    .toLowerCase()
    .split("")
    .filter((c) => {
      const code = c.charCodeAt(0);

      return (
        (code >= "a".charCodeAt(0) && code <= "z".charCodeAt(0)) ||
        (code >= "0".charCodeAt(0) && code <= "9".charCodeAt(0))
      );
    })
    .join("");

  let left = 0;
  let right = processed.length - 1;

  while (left < right) {
    if (processed[left] !== processed[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}
