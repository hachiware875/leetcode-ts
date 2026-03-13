import { cases, type Case } from "./cases";
import { hammingWeight as solutionA } from "./solution-a";
import { hammingWeight as solutionB } from "./solution-b";

export const meta = {
  id: "0191",
  title: "number-of-1-bits",
  cases,
  solutions: {
    a: (input: Case["input"]) => solutionA(input.n),
    b: (input: Case["input"]) => solutionB(input.n),
  },
};
