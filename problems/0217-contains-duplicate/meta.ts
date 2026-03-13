import { cases, type Case } from "./cases";
import { containsDuplicate as solutionA } from "./solution-a";
import { containsDuplicate as solutionB } from "./solution-b";
import { containsDuplicate as solutionC } from "./solution-c";

export const meta = {
  id: "0217",
  title: "contains-duplicate",
  cases,
  solutions: {
    a: (input: Case["input"]) => solutionA(input.nums),
    b: (input: Case["input"]) => solutionB(input.nums),
    c: (input: Case["input"]) => solutionC(input.nums),
  },
};
