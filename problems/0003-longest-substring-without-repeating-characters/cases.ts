export type Case = {
  input: {
    s: string;
  };
  expected: number;
};

export const cases: Case[] = [
  {
    input: {
      s: "abcabcbb",
    },
    expected: 3,
  },
  {
    input: {
      s: "bbbbb",
    },
    expected: 1,
  },
  {
    input: {
      s: "pwwkew",
    },
    expected: 3,
  },
];
