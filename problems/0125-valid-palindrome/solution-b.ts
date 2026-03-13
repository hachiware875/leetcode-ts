function isAlphaNumeric(c: string): boolean {
  const code = c.charCodeAt(0);

  return (
    (code >= "a".charCodeAt(0) && code <= "z".charCodeAt(0)) ||
    (code >= "0".charCodeAt(0) && code <= "9".charCodeAt(0))
  );
}

export function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphaNumeric(s[left]!.toLowerCase())) {
      left++;
    }

    while (left < right && !isAlphaNumeric(s[right]!.toLowerCase())) {
      right--;
    }

    if (s[left]!.toLowerCase() !== s[right]!.toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}
