import { describe, expect, test } from "bun:test";

type TestCaseShape<TInput, TExpected> = {
  input: TInput;
  expected: TExpected;
};

type ProblemMeta<TInput, TExpected> = {
  id: string;
  title: string;
  cases: TestCaseShape<TInput, TExpected>[];
  solutions: Record<string, (input: TInput) => TExpected>;
};

export function createProblemTest<TInput, TExpected>(
  meta: ProblemMeta<TInput, TExpected>,
) {
  describe(`${meta.id} ${meta.title}`, () => {
    Object.entries(meta.solutions).forEach(([solutionName, run]) => {
      describe(`solution ${solutionName}`, () => {
        meta.cases.forEach((testCase, index) => {
          test(`case ${index + 1}`, () => {
            expect(run(testCase.input)).toEqual(testCase.expected);
          });
        });
      });
    });
  });
}
