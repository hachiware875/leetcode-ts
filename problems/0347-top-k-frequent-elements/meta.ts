import { cases, type Case } from "./cases";
import { topKFrequent as solutionA } from "./solution-a";
import { topKFrequent as solutionB } from "./solution-b";
import { topKFrequent as solutionC } from "./solution-c";

function normalizeNumbers(nums: number[]): number[] {
  return [...nums].sort((a, b) => a - b);
}

export const meta = {
  id: "0347",
  title: "top-k-frequent-elements",
  cases,
  normalize: normalizeNumbers,
  solutions: {
    a: (input: Case["input"]) => solutionA(input.nums, input.k),
    b: (input: Case["input"]) => solutionB(input.nums, input.k),
    c: (input: Case["input"]) => solutionC(input.nums, input.k),
  },
};
