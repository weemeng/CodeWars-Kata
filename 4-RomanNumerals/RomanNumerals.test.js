const RomanNumerals = require("./RomanNumerals");

describe("RomanNumerals.js", () => {
  describe("toRoman", () => {
    it("should return M when translating toRoman with value 1000", () => {
      expect(RomanNumerals.toRoman(1000)).toBe("M");
    });
    it("should return CMXCIX when translating toRoman with value 999", () => {
      expect(RomanNumerals.toRoman(999)).toBe("CMXCIX");
    });
    it("should return IV when translating toRoman with value 4", () => {
      expect(RomanNumerals.toRoman(4)).toBe("IV");
    });
    it("should return I when translating toRoman with value 1", () => {
      expect(RomanNumerals.toRoman(1)).toBe("I");
    });
    it("should return MCMXCI when translating toRoman with value 1991", () => {
      expect(RomanNumerals.toRoman(1991)).toBe("MCMXCI");
    });
    it("should return MMVI when translating toRoman with value 2006", () => {
      expect(RomanNumerals.toRoman(2006)).toBe("MMVI");
    });
    it("should return MMXX when translating toRoman with value 2020", () => {
      expect(RomanNumerals.toRoman(2020)).toBe("MMXX");
    });
  });
  describe("fromRoman", () => {
    it("should return 21 when translating fromRoman with string XXI", () => {
      expect(RomanNumerals.fromRoman("XXI")).toBe(21);
    });
    it("should return 1 when translating fromRoman with string I", () => {
      expect(RomanNumerals.fromRoman("I")).toBe(1);
    });
    it("should return 3 when translating fromRoman with string III", () => {
      expect(RomanNumerals.fromRoman("III")).toBe(3);
    });
    it("should return 4 when translating fromRoman with string IV", () => {
      expect(RomanNumerals.fromRoman("IV")).toBe(4);
    });
    it("should return 2007 when translating fromRoman with string MMVII", () => {
      expect(RomanNumerals.fromRoman("MMVII")).toBe(2007);
    });
    it("should return 1669 when translating fromRoman with string MDCLXIX", () => {
      expect(RomanNumerals.fromRoman("MDCLXIX")).toBe(1669);
    });
  });
});
