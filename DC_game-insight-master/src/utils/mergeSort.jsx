function mergeSort(arr, key) {
  if (arr.length <= 1) {
    return { sortedArray: arr, inversionCount: 0 };
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  const leftResult = mergeSort(left, key);
  const rightResult = mergeSort(right, key);

  const mergedResult = merge(leftResult.sortedArray, rightResult.sortedArray, key);
  const inversionCount = leftResult.inversionCount + rightResult.inversionCount + mergedResult.inversionCount;

  return { sortedArray: mergedResult.sortedArray, inversionCount };
}

function merge(left, right, key) {
  let result = [];
  let inversionCount = 0;
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex][key] <= right[rightIndex][key]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
      inversionCount += left.length - leftIndex; // Contagem de inversões
    }
  }

  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }
  return { sortedArray: result, inversionCount };
}

export default mergeSort;
