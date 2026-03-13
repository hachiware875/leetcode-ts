import { cases, type Case } from "./cases";
import { twoSum as solutionA } from "./solution-a";
import { twoSum as solutionB } from "./solution-b";
import { twoSum as solutionC } from "./solution-c";

function normalizePair(indices: number[]): number[] {
  return [...indices].sort((a, b) => a - b);
}

export const meta = {
  id: "0001",
  title: "two-sum",
  cases,
  normalize: normalizePair,
  solutions: {
    a: (input: Case["input"]) => solutionA(input.nums, input.target),
    b: (input: Case["input"]) => solutionB(input.nums, input.target),
    c: (input: Case["input"]) => solutionC(input.nums, input.target),
  },
};
