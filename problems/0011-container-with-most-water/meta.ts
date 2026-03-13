import { cases, type Case } from "./cases";
import { maxArea as solutionA } from "./solution-a";

export const meta = {
  id: "0011",
  title: "container-with-most-water",
  cases,
  solutions: {
    a: (input: Case["input"]) => solutionA(input.height),
  },
};
