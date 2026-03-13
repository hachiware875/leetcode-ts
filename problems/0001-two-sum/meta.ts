import { cases, type Case } from "./cases";
import { twoSum as solutionA } from "./solution-a";
import { twoSum as solutionB } from "./solution-b";
import { twoSum as solutionC } from "./solution-c";

export const meta = {
  id: "0001",
  title: "two-sum",
  cases,
  solutions: {
    a: (input: Case["input"]) => solutionA(input.nums, input.target),
    b: (input: Case["input"]) => solutionB(input.nums, input.target),
    c: (input: Case["input"]) => solutionC(input.nums, input.target),
  },
};
