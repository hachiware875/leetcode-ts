export type Case = {
  input: {
    n: number;
  };
  expected: number[];
};

export const cases: Case[] = [
  {
    input: {
      n: 2,
    },
    expected: [0, 1, 1],
  },
  {
    input: {
      n: 5,
    },
    expected: [0, 1, 1, 2, 1, 2],
  },
  {
    input: {
      n: 0,
    },
    expected: [0],
  },
];
