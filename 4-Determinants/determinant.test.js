const determinant = require("./determinant");

describe("determinant.js", () => {
  it("should return 1 when [1]", () => {
    expect(determinant([1])).toBe(1);
  });
  it("should return -1 when [[1, 3],[2, 5]]", () => {
    const m1 = [
      [1, 3],
      [2, 5]
    ];
    expect(determinant(m1)).toBe(-1);
  });
  it("should return -20 when [[2, 5, 3],[1, -2, -1],[1, 3, 4]]", () => {
    const m2 = [
      [2, 5, 3],
      [1, -2, -1],
      [1, 3, 4]
    ];
    expect(determinant(m2)).toBe(-20);
  });
});
