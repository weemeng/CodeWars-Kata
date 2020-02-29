const valid = require("./valid");

describe("valid", () => {
  it("should return true when `()` ", () => {
    expect(valid("()")).toBeTruthy();
  });
  it("should return false when `())` ", () => {
    expect(valid("())")).toBeFalsy();
  });
  it("should return false when `)(()))` ", () => {
    expect(valid(")(()))")).toBeFalsy();
  });
  it("should return false when `(` ", () => {
    expect(valid("(")).toBeFalsy();
  });
  it("should return true when `(())((()())())` ", () => {
    expect(valid("(())((()())())")).toBeTruthy();
  });
});
