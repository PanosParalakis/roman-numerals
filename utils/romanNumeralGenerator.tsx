// This file is the typescript implementation of the RomanNumeralGenerator function
// that is defined in the RomanNumeralGenerator.mjs.

export default function RomanNumeralGenerator(num: number): string {
  // Validate input
  if (Number.isNaN(num) || typeof num !== "number") {
    throw new Error("Input must be a number");
  } else if (num < 1 || num > 3999) {
    throw new Error("Input must be in the range of 1 - 3999");
  }

  // Create a tuple of Roman numerals and their integer equivalents
  const romanNumerals: [number, string][] = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  let result = "";

  // Loop through the tuple and add the Roman numeral to the result string
  for (const [integerNumber, numeral] of romanNumerals) {
    while (num >= integerNumber) {
      result += numeral;
      num -= integerNumber;
    }
  }

  return result;
}
