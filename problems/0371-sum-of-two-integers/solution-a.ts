export function getSum(a: number, b: number): number {
  let sum = a ^ b;
  let carry = (a & b) << 1;

  while (carry) {
    const temp = sum ^ carry;
    carry = (sum & carry) << 1;
    sum = temp;
  }

  return sum;
}
