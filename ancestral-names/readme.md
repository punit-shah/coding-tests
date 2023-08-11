# Ancestral names

Given a list of strings in the format `{First name} {Roman numeral}`, sort the list according to the following rules:

- First, sort alphabetically, considering the first name only
- In the case of the same first name, sort numerically by the value of the Roman numeral

## Example

Input:

<!-- prettier-ignore -->
```js
[
  "Louis IX",
  "Louis VIII",
  "Philippe I",
  "Philip II",
]
```

Output:

<!-- prettier-ignore -->
```js
[
  "Louis VIII",
  "Louis IX",
  "Philip II",
  "Philippe I",
]
```

When called with an array of ancestral names, the `sortRoman` function should return the array sorted according to the rules above.
