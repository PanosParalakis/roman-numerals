import RomanNumeralGenerator from "./romanNumeralGenerator";

describe("RomanNumeralGenerator", () => {
  it("should return the correct Roman numeral for a given number", () => {
    expect(RomanNumeralGenerator(1)).toBe("I");
    expect(RomanNumeralGenerator(5)).toBe("V");
    expect(RomanNumeralGenerator(10)).toBe("X");
    expect(RomanNumeralGenerator(20)).toBe("XX");
    expect(RomanNumeralGenerator(3999)).toBe("MMMCMXCIX");
  });

  it("should throw an error for invalid input", () => {
    expect(() => RomanNumeralGenerator(NaN)).toThrow("Input must be a number");
    expect(() => RomanNumeralGenerator("abc" as any)).toThrow(
      "Input must be a number",
    );
    expect(() => RomanNumeralGenerator(0)).toThrow(
      "Input must be in the range of 1 - 3999",
    );
    expect(() => RomanNumeralGenerator(4000)).toThrow(
      "Input must be in the range of 1 - 3999",
    );
  });
});
