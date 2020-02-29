function num2Hex(val) {
  val > 255 ? (val = 255) : val < 0 ? (val = 0) : val;
  return val < 16
    ? "0" + val.toString(16).toUpperCase()
    : val.toString(16).toUpperCase();
}

function rgb(r, g, b) {
  return num2Hex(r) + num2Hex(g) + num2Hex(b);
}

module.exports = rgb;
