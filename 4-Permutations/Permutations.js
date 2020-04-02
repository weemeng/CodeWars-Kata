function permutations(string) {
  // Heap permutation
  if (string.length === 1) {
    return [string];
  }
  const splitString = string.split("").sort((a, b) => a - b);
  const list = [];
  
  function generate(k, array  ) {
    if (k == 1) {
      list.push(array.join(""));
      return
    }
    for (let i = 0; i < k; i++) {
      generate(k - 1, array);
      if (k % 2 == 0) {
        array = swap(array, i, k - 1);
      } else {
        array = swap(array, 0, k - 1);
      }
    }
  }
  generate(splitString.length, splitString);
  const withoutDup = [...new Set(list)];
  return withoutDup.sort();
}

function swap(array, a, b) {
  const tempData = array[a];
  array[a] = array[b];
  array[b] = tempData;
  return array;
}

module.exports = permutations;