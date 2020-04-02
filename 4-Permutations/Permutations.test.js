const permutations = require("./Permutations")
describe("Permutations.js", () => {
  it("should return a when a is sent", () => {
    expect(permutations('a')).toEqual(['a']);
  });
  it("", () => {
    expect(permutations('ab')).toEqual(['ab','ba']);
  });
  it("", () => {
    expect(permutations('abc')).toEqual(['abc','acb','bac','bca','cab','cba']);
  });
});
