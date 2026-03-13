import { cases, type Case } from "./cases";
import { isAnagram as solutionA } from "./solution-a";
import { isAnagram as solutionB } from "./solution-b";
import { isAnagram as solutionC } from "./solution-c";

export const meta = {
  id: "0242",
  title: "valid-anagram",
  cases,
  solutions: {
    a: (input: Case["input"]) => solutionA(input.s, input.t),
    b: (input: Case["input"]) => solutionB(input.s, input.t),
    c: (input: Case["input"]) => solutionC(input.s, input.t),
  },
};
