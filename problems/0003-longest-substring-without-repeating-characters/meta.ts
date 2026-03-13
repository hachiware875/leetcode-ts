import { cases, type Case } from "./cases";
import { lengthOfLongestSubstring as solutionA } from "./solution-a";
import { lengthOfLongestSubstring as solutionB } from "./solution-b";

export const meta = {
  id: "0003",
  title: "longest-substring-without-repeating-characters",
  cases,
  solutions: {
    a: (input: Case["input"]) => solutionA(input.s),
    b: (input: Case["input"]) => solutionB(input.s),
  },
};
