import { cases, type Case } from "./cases";
import { maxProfit as solutionA } from "./solution-a";

export const meta = {
  id: "0121",
  title: "best-time-to-buy-and-sell-stock",
  cases,
  solutions: {
    a: (input: Case["input"]) => solutionA(input.prices),
  },
};
