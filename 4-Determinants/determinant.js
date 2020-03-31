const getMinorMatrix = (m, colAvoid) => {
  const newArray = [];
  for (let rowIndex = 1; rowIndex < m.length; rowIndex++) {
    newArray.push(m[rowIndex].filter((x, ind) => ind !== colAvoid));
  }
  return newArray;
};

function determinant(m) {
  const l = m.length;
  if (l == 1) {
    return Number(m);
  } else if (l == 2) {
    return m[0][0] * m[1][1] - m[0][1] * m[1][0];
  } else {
    return m[0].reduce((prev, val, ind) => {
      const sign = Math.pow(-1, ind + 2);
      const detMinor = determinant(getMinorMatrix(m, ind));
      return sign * detMinor * val + prev;
    }, 0);
  }
}

module.exports = determinant;
