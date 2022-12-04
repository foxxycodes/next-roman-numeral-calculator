import { intToRoman } from "@/components/RomanNumeralCalculator/int-to-roman";

describe("intToRoman", () => {
  it("should convert base numbers to roman numerals", () => {
    expect(intToRoman(1)).toBe("I");
    expect(intToRoman(5)).toBe("V");
    expect(intToRoman(10)).toBe("X");
    expect(intToRoman(50)).toBe("L");
    expect(intToRoman(100)).toBe("C");
    expect(intToRoman(500)).toBe("D");
    expect(intToRoman(1000)).toBe("M");

    expect(intToRoman(4)).toBe("IV");
    expect(intToRoman(9)).toBe("IX");
    expect(intToRoman(40)).toBe("XL");
    expect(intToRoman(90)).toBe("XC");
    expect(intToRoman(400)).toBe("CD");
    expect(intToRoman(900)).toBe("CM");
  });

  it("should convert 555 to DLV", () => {
    expect(intToRoman(555)).toBe("DLV");
  });

  it("should convert 994 to CMXCIV", () => {
    expect(intToRoman(994)).toBe("CMXCIV");
  });

  it("should throw error if input is < 1 or > 1000", () => {
    expect(() => intToRoman(-1)).toThrow();
    expect(() => intToRoman(0)).toThrow();
    expect(() => intToRoman(1001)).toThrow();
  });
});
