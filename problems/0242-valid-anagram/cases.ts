export type Case = {
  input: {
    s: string;
    t: string;
  };
  expected: boolean;
};

export const cases: Case[] = [
  {
    input: {
      s: "anagram",
      t: "nagaram",
    },
    expected: true,
  },
  {
    input: {
      s: "rat",
      t: "car",
    },
    expected: false,
  },
  {
    input: {
      s: "aacc",
      t: "ccac",
    },
    expected: false,
  },
];
