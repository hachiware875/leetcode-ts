import { cases, type Case } from "./cases";
import { isPalindrome as solutionA } from "./solution-a";
import { isPalindrome as solutionB } from "./solution-b";

export const meta = {
  id: "0125",
  title: "valid-palindrome",
  cases,
  solutions: {
    a: (input: Case["input"]) => solutionA(input.s),
    b: (input: Case["input"]) => solutionB(input.s),
  },
};
