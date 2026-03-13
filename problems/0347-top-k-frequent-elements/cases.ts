export type Case = {
  input: {
    nums: number[];
    k: number;
  };
  expected: number[];
};

export const cases: Case[] = [
  {
    input: {
      nums: [1, 1, 1, 2, 2, 3],
      k: 2,
    },
    expected: [1, 2],
  },
  {
    input: {
      nums: [1],
      k: 1,
    },
    expected: [1],
  },
  {
    input: {
      nums: [1, 2, 1, 2, 1, 2, 3, 1, 3, 2],
      k: 2,
    },
    expected: [1, 2],
  },
];
