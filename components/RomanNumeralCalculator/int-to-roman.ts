// note the use of prefixed roman numerals because, for example, 4 is IV, not IIII
const romanNumeralMap = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
} as const;

/**
 * Convert an integer to a roman numeral
 * @param input - The number to convert to a roman numeral
 * @returns String representation of the roman numeral
 * @throws If the input is less than 1 or greater than 1000
 */
export function intToRoman(input: number): string {
  // throw error if input is out of range
  if (input < 1 || input > 1000) {
    throw new Error("input must be between 1 and 1000");
  }

  let roman = "";
  for (const [key, value] of Object.entries(romanNumeralMap)) {
    // as long as the number is greater than the value of the roman numeral,
    // add the roman numeral to the string and subtract the value from the number
    while (input >= value) {
      roman += key;
      input -= value;
    }
  }
  return roman;
}
