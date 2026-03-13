export function isValid(s: string): boolean {
  const stack: string[] = [];

  for (const character of s) {
    if (character === "(" || character === "[" || character === "{") {
      stack.push(character);
    } else {
      const top = stack.pop();

      if (
        (character === ")" && top !== "(") ||
        (character === "]" && top !== "[") ||
        (character === "}" && top !== "{")
      ) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
