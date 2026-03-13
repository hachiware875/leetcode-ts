export type Case = {
  input: {
    n: number;
  };
  expected: number;
};

export const cases: Case[] = [
  {
    input: {
      n: 0b00000000000000000000000000001011,
    },
    expected: 3,
  },
  {
    input: {
      n: 0b00000000000000000000000010000000,
    },
    expected: 1,
  },
  {
    input: {
      n: 0b11111111111111111111111111111101,
    },
    expected: 31,
  },
];
