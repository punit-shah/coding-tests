import { sortRoman } from './sortRoman';

it('should correctly sort a list of names with Roman numerals', () => {
  expect(
    sortRoman([
      'Steven XL',
      'Steven XVI',
      'David IX',
      'Mary XV',
      'Mary XIII',
      'Mary XX',
      'Louis IX',
      'Louis VIII',
      'Philippe I',
      'Philip II',
    ])
  ).toEqual([
    'David IX',
    'Louis VIII',
    'Louis IX',
    'Mary XIII',
    'Mary XV',
    'Mary XX',
    'Philip II',
    'Philippe I',
    'Steven XVI',
    'Steven XL',
  ]);
});
