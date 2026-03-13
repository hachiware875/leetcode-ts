export type Case = {
  input: {
    height: number[];
  };
  expected: number;
};

export const cases: Case[] = [
  {
    input: {
      height: [1, 8, 6, 2, 5, 4, 8, 3, 7],
    },
    expected: 49,
  },
  {
    input: {
      height: [1, 1],
    },
    expected: 1,
  },
  {
    input: {
      height: [4, 3, 2, 1, 4],
    },
    expected: 16,
  },
];
