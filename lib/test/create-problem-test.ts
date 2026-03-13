import { describe, expect, test } from "bun:test";

type TestCaseShape<TInput, TExpected> = {
  input: TInput;
  expected: TExpected;
};

type ProblemMeta<TInput, TExpected> = {
  id: string;
  title: string;
  cases: TestCaseShape<TInput, TExpected>[];
  normalize?: (value: TExpected) => unknown;
  solutions: Record<string, (input: TInput) => TExpected>;
};

export function createProblemTest<TInput, TExpected>(
  meta: ProblemMeta<TInput, TExpected>,
) {
  const normalize = meta.normalize ?? ((value: TExpected) => value);

  describe(`${meta.id} ${meta.title}`, () => {
    Object.entries(meta.solutions).forEach(([solutionName, run]) => {
      describe(`solution ${solutionName}`, () => {
        meta.cases.forEach((testCase, index) => {
          test(`case ${index + 1}`, () => {
            expect(normalize(run(testCase.input))).toEqual(
              normalize(testCase.expected),
            );
          });
        });
      });
    });
  });
}
