import { cases, type Case } from "./cases";
import { missingNumber as solutionA } from "./solution-a";
import { missingNumber as solutionB } from "./solution-b";

export const meta = {
  id: "0268",
  title: "missing-number",
  cases,
  solutions: {
    a: (input: Case["input"]) => solutionA(input.nums),
    b: (input: Case["input"]) => solutionB(input.nums),
  },
};
