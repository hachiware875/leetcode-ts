export type Case = {
  input: {
    s: string;
  };
  expected: boolean;
};

export const cases: Case[] = [
  {
    input: {
      s: "()",
    },
    expected: true,
  },
  {
    input: {
      s: "()[]{}",
    },
    expected: true,
  },
  {
    input: {
      s: "(]",
    },
    expected: false,
  },
];
