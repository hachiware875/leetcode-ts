export function countBits(n: number): number[] {
  const answer = new Array(n + 1);
  answer[0] = 0;

  if (n >= 1) {
    answer[1] = 1;

    for (let i = 2; i <= n; i++) {
      answer[i] = answer[i >> 1] + (i & 1);
    }
  }

  return answer;
}
