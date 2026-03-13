import { cases, type Case } from "./cases";
import { isValid as solutionA } from "./solution-a";

export const meta = {
  id: "0020",
  title: "valid-parentheses",
  cases,
  solutions: {
    a: (input: Case["input"]) => solutionA(input.s),
  },
};
