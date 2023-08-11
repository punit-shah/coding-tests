import { getMinimumDifference } from './getMinimumDifference';

test('when called with two lists of strings, it should return the expected list of differences', () => {
  expect(
    getMinimumDifference(
      ['tea', 'tea', 'act', 'a', 'jk', 'abb', 'mn', 'abc'],
      ['ate', 'toe', 'acts', 'bb', 'kj', 'bbc', 'op', 'def']
    )
  ).toEqual([0, 1, -1, -1, 0, 1, 2, 3]);
});
