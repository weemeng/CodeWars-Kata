const sumStrings = require("./sumStrings");

describe("sumString", () => {
  it("should return '579 when '123','456'", () => {
      expect(sumStrings('123','456')).toBe('579')
  });
  it.only("should return '712577413488402631964821329' when '712569312664357328695151392', '8100824045303269669937'", () => {
      expect(sumStrings('712569312664357328695151392', '8100824045303269669937')).toBe('712577413488402631964821329')
  });
});

