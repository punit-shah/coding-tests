# Anagram difference

Given two strings, find the minimum number of characters in either string that must be modified to make the two strings anagrams.
If it's not possible to make the two strings anagrams, return `-1`.

## Example

When called with input `a` and `b` in the example below, the `getMinimumDifference` function should output the array `[0, 1, -1]`

```js
const a = ['tea', 'tea', 'act'];
const b = ['ate', 'toe', 'acts'];

getMinimumDifference(a, b); // [0, 1, -1]
```

### Explanation

- Index 0: `tea` and `ate` are anagrams, so 0 characters need to be modified
- Index 1: `tea` and `toe` are not anagrams, so 1 character would need to be modified in either string to make them anagrams
- Index 2: `act` and `acts` are not anagrams, and it is not possible to make them anagrams because they have different numbers of characters
