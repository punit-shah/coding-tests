/*
 * Complete the 'sortRoman' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY names as parameter.
 */

const romanDigitValues: { [symbol: string]: number } = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
};

function romanToDecimal(roman: string) {
  const romanAsArray = Array.from(roman);
  return romanAsArray.reduce((totalValue, currentSymbol, index) => {
    const nextSymbol = romanAsArray[index + 1];

    const currentSymbolValue = romanDigitValues[currentSymbol];
    const nextSymbolValue = romanDigitValues[nextSymbol];

    return currentSymbolValue < nextSymbolValue
      ? totalValue - currentSymbolValue
      : totalValue + currentSymbolValue;
  }, 0);
}

export function sortRoman(names: string[]) {
  return names
    .map((str) => str.split(' '))
    .map(([name, roman]) => ({
      original: `${name} ${roman}`,
      name,
      decimal: romanToDecimal(roman),
    }))
    .sort((a, b) => {
      const { name: aName, decimal: aDecimal } = a;
      const { name: bName, decimal: bDecimal } = b;

      if (aName < bName) return -1;
      if (aName > bName) return 1;
      return aDecimal - bDecimal;
    })
    .map(({ original }) => original);
}
