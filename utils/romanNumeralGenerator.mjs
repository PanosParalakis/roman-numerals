/**
 * RomanNumeralGenerator is a pure function that takes a number as input
 * and returns a string representation of the Roman numeral for that number.
 *
 * @param {number} num - The number to convert to a Roman numeral.
 * @returns {string} The Roman numeral representation of the given number.
 * @throws {Error} If the input is not a number or is outside the range of 1 - 3999.
 */
export default function RomanNumeralGenerator(num) {
  // Validate input
  if (Number.isNaN(num) || typeof num !== "number") {
    throw new Error("Input must be a number");
  } else if (num < 1 || num > 3999) {
    throw new Error("Input must be in the range of 1 - 3999");
  }

  // Create a tuple of Roman numerals and their integer equivalents
  const romanNumerals = [
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
