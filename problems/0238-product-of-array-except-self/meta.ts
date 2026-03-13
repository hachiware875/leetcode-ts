import { cases, type Case } from "./cases";
import { productExceptSelf as solutionA } from "./solution-a";
import { productExceptSelf as solutionB } from "./solution-b";
import { productExceptSelf as solutionC } from "./solution-c";

function normalizeNumbers(nums: number[]): number[] {
  return nums.map((num) => (Object.is(num, -0) ? 0 : num));
}

export const meta = {
  id: "0238",
  title: "product-of-array-except-self",
  cases,
  normalize: normalizeNumbers,
  solutions: {
    a: (input: Case["input"]) => solutionA(input.nums),
    b: (input: Case["input"]) => solutionB(input.nums),
    c: (input: Case["input"]) => solutionC(input.nums),
  },
};
