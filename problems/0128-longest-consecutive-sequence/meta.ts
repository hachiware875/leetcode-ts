import { cases, type Case } from "./cases";
import { longestConsecutive as solutionA } from "./solution-a";
import { longestConsecutive as solutionB } from "./solution-b";

export const meta = {
  id: "0128",
  title: "longest-consecutive-sequence",
  cases,
  solutions: {
    a: (input: Case["input"]) => solutionA(input.nums),
    b: (input: Case["input"]) => solutionB(input.nums),
  },
};
