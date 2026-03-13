export type Case = {
  input: {
    nums: number[];
  };
  expected: number;
};

export const cases: Case[] = [
  {
    input: {
      nums: [100, 4, 200, 1, 3, 2],
    },
    expected: 4,
  },
  {
    input: {
      nums: [0, 3, 7, 2, 5, 8, 4, 6, 0, 1],
    },
    expected: 9,
  },
  {
    input: {
      nums: [1, 0, 1, 2],
    },
    expected: 3,
  },
];
