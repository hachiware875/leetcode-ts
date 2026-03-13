import { cases, type Case } from "./cases";
import { countBits as solutionA } from "./solution-a";

export const meta = {
  id: "0338",
  title: "counting-bits",
  cases,
  solutions: {
    a: (input: Case["input"]) => solutionA(input.n),
  },
};
