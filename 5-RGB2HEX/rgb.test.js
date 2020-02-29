const rgb = require("./rgb");

describe("rgb2hex", () => {
  it("should return 00FFFF when rgb(0, 255, 255", () => {
    expect(rgb(0, 255, 255)).toBe("00FFFF");
  });
  it("should return 000000 when rgb(0, 0, -20", () => {
    expect(rgb(0, 0, -20)).toBe("000000");
  });
  it("should return FFFFFF when rgb(300, 255, 255", () => {
    expect(rgb(300, 255, 255)).toBe("FFFFFF");
  });
  it("should return ADFF2F when rgb(173, 255, 47", () => {
    expect(rgb(173, 255, 47)).toBe("ADFF2F");
  });
});
