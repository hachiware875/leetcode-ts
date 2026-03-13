export function reverseBits(n: number): number {
  let answer = 0;

  for (let i = 0; i < 32; i++) {
    answer = (answer << 1) | (n & 1);
    n >>>= 1;
  }

  return answer;
}
