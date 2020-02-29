const sieveOfEratos = array => {
  const arraySieved = array;
  arraySieved[0] = false;
  arraySieved[1] = false;
  for (let i = 2; i < array.length; i++) {
    if (arraySieved[i]) {
      const maxJ = Math.ceil(array.length / i);
      for (let j = 2; j < maxJ; j++) {
        arraySieved[i * j] = false;
      }
    }
  }
  const arrayOfPrimes = [];
  arraySieved.map((x, ind) => {
    if (x) {
      arrayOfPrimes.push(ind);
    }
  });
  return arrayOfPrimes;
};

const findPrimes = ArrayOfValues => {
  const min = Math.abs(Math.min(...ArrayOfValues));
  const max = Math.max(...ArrayOfValues, min);
  const highestValOfPrime = Math.abs(max);
  const arrayofTrueFalseofPrimes = Array(highestValOfPrime+1).fill(true);
  return sieveOfEratos(arrayofTrueFalseofPrimes);
};

function sumOfDivided(lst) {
  if (lst.length == 0) {
    return lst
  }
  const arrayOfPrimes = findPrimes(lst);
  const output = [];
  for (let i = 0; i < arrayOfPrimes.length; i++) {
    output[i] = [arrayOfPrimes[i], null];
  }

  lst.map(inputElement => {
    for (let i = 0; i < arrayOfPrimes.length; i++) {
      if (inputElement%arrayOfPrimes[i] == 0) {
        output[i][1] += inputElement
      }
    }
  });
  const result = output.filter(x => x[1] == 0 ? true : !!x[1])
  return result
}
module.exports = sumOfDivided;
