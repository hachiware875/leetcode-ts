import { cases, type Case } from "./cases";
import { getSum as solutionA } from "./solution-a";

export const meta = {
  id: "0371",
  title: "sum-of-two-integers",
  cases,
  solutions: {
    a: (input: Case["input"]) => solutionA(input.a, input.b),
  },
};
