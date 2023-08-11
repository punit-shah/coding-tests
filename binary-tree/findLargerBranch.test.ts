import { findLargerBranch } from './findLargerBranch';

test.each`
  test                                   | input                   | expected
  ${'Larger left branch (from example)'} | ${[3, 6, 2, 9, -1, 10]} | ${'Left'}
  ${'Larger right branch'}               | ${[1, 4, 100, 5]}       | ${'Right'}
  ${'Equal branches'}                    | ${[1, 10, 5, 1, 0, 6]}  | ${''}
  ${'Empty tree'}                        | ${[]}                   | ${''}
  ${'Only root node'}                    | ${[1]}                  | ${''}
`('$test', ({ input, expected }) => {
  expect(findLargerBranch(input)).toBe(expected);
});
