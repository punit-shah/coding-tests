function getStringMinDifference(a: string, b: string) {
  const charCount = new Map();

  // iterate through string a
  Array.from(a).forEach((char) => {
    // increment character count for each character in string a
    if (charCount.has(char)) {
      charCount.set(char, charCount.get(char) + 1);
    } else {
      charCount.set(char, 1);
    }
  });

  // iterate through string b
  Array.from(b).forEach((char) => {
    // decrement character count for each character in string b
    if (charCount.has(char)) {
      charCount.set(char, charCount.get(char) - 1);
    } else {
      charCount.set(char, -1);
    }
  });

  // add up absolutes of all values in charCount
  // e.g. values: [-1, 0, 1, -1, 1] -> 4
  const numOfManipulations = Array.from(charCount.values()).reduce(
    (count, value) => count + Math.abs(value),
    0
  );

  // if number of manipulations is not even, anagram is not possible
  if (numOfManipulations % 2 !== 0) return -1;

  // divide by 2 since manipulations for both strings were counted
  return numOfManipulations / 2;
}

export function getMinimumDifference(a: string[], b: string[]) {
  return a.map((value, index) => getStringMinDifference(value, b[index]));
}
