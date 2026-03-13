export type Case = {
  input: {
    n: number;
  };
  expected: number;
};

export const cases: Case[] = [
  {
    input: {
      n: 0b00000010100101000001111010011100,
    },
    expected: 0b00111001011110000010100101000000,
  },
  {
    input: {
      n: 0b01111111111111111111111111111100,
    },
    expected: 0b00111111111111111111111111111110,
  },
  {
    input: {
      n: 0,
    },
    expected: 0,
  },
];
