export type Case = {
  input: {
    a: number;
    b: number;
  };
  expected: number;
};

export const cases: Case[] = [
  {
    input: {
      a: 1,
      b: 2,
    },
    expected: 3,
  },
  {
    input: {
      a: 2,
      b: 3,
    },
    expected: 5,
  },
  {
    input: {
      a: -1,
      b: 1,
    },
    expected: 0,
  },
];
