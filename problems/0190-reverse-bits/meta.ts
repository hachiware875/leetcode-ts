import { cases, type Case } from "./cases";
import { reverseBits as solutionA } from "./solution-a";

export const meta = {
  id: "0190",
  title: "reverse-bits",
  cases,
  solutions: {
    a: (input: Case["input"]) => solutionA(input.n),
  },
};
