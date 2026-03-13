import { cases, type Case } from "./cases";
import { threeSum as solutionA } from "./solution-a";

function normalizeTriplets(triplets: number[][]): number[][] {
  return triplets
    .map((triplet) => [...triplet].sort((a, b) => a - b))
    .sort((a, b) => {
      const keyA = a.join(",");
      const keyB = b.join(",");

      return keyA.localeCompare(keyB);
    });
}

export const meta = {
  id: "0015",
  title: "3sum",
  cases,
  normalize: normalizeTriplets,
  solutions: {
    a: (input: Case["input"]) => solutionA(input.nums),
  },
};
