import { cases, type Case } from "./cases";
import { groupAnagrams as solutionA } from "./solution-a";
import { groupAnagrams as solutionB } from "./solution-b";

function normalizeGroups(groups: string[][]): string[][] {
  return groups
    .map((group) => [...group].sort())
    .sort((a, b) => {
      const keyA = a.join(",");
      const keyB = b.join(",");

      return keyA.localeCompare(keyB);
    });
}

export const meta = {
  id: "0049",
  title: "group-anagrams",
  cases,
  normalize: normalizeGroups,
  solutions: {
    a: (input: Case["input"]) => solutionA(input.strs),
    b: (input: Case["input"]) => solutionB(input.strs),
  },
};
