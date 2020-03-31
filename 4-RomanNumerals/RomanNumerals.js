class RomanNumerals {
  static toRoman(value) {
    let returnString = "";
    const valueInArray = String(value)
      .split("")
      .reverse();
    for (let i = 0; i < valueInArray.length; i++) {
      returnString = translateValueToRoman(valueInArray[i], i) + returnString;
    }
    return returnString;
  }
  static fromRoman(value) {
    const valueInArray = String(value).split("");
    const valueLength = value.length;
    const output = valueInArray.reduce((totalValue, currentLetter, ind) => {
      let minusSign = 1;
      const currentValue = translateValueFromRoman(currentLetter);
      if (ind + 1 !== valueLength) {
        const nextValue = translateValueFromRoman(valueInArray[ind + 1]);
        if (nextValue > currentValue) {
          minusSign = -1;
        }
      }
      return (totalValue += minusSign * currentValue);
    }, 0);
    return output;
  }
}

function translateValueFromRoman(letter) {
  const baseCharacter = ["I", "X", "C", "M"];
  const baseCharacterFive = ["V", "L", "D"];
  let value = 0;
  if (baseCharacter.includes(letter)) {
    value = Math.pow(10, baseCharacter.indexOf(letter));
  }
  if (baseCharacterFive.includes(letter)) {
    value = 5 * Math.pow(10, baseCharacterFive.indexOf(letter));
  }
  return value;
}

function translateValueToRoman(num, index) {
  let numIsAbove5 = false;
  let numIs4or9 = false;
  let remainingNum = num;
  let returnString = "";
  const baseCharacter = ["I", "X", "C", "M"];
  const baseCharacterFive = ["V", "L", "D"];

  if (remainingNum == 4 || remainingNum == 9) {
    numIs4or9 = true;
  } else if (remainingNum >= 5) {
    numIsAbove5 = true;
    remainingNum -= 5;
  }
  if (numIs4or9) {
    return remainingNum == 4
      ? baseCharacter[index] + baseCharacterFive[index]
      : baseCharacter[index] + baseCharacter[index + 1];
  } else {
    if (numIsAbove5) returnString += baseCharacterFive[index];
    return (returnString += baseCharacter[index].repeat(remainingNum));
  }
}

module.exports = RomanNumerals;
