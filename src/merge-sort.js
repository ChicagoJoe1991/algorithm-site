export const merge = (left, right) => {
  let resultArray = [],
    leftIndex = 0,
    rightIndex = 0;

  //Concatenate values into the result array in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; //move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; //move right array cursor
    }
  }

  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
};

export const mergeSort = arr => {
  let n = arr.length;
  //If the array is only one unit return the array (base case)
  if (n <= 1) {
    return arr;
  }

  //Divide the array in half to determine the middle
  const middle = Math.floor(n / 2);

  //Divide the array into left and right
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  //Use recursion to combine the left and the right
  return merge(mergeSort(left), mergeSort(right));
};
