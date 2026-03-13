export type Case = {
  input: {
    s: string;
  };
  expected: boolean;
};

export const cases: Case[] = [
  {
    input: {
      s: "A man, a plan, a canal: Panama",
    },
    expected: true,
  },
  {
    input: {
      s: "race a car",
    },
    expected: false,
  },
  {
    input: {
      s: " ",
    },
    expected: true,
  },
];
