const insertionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      for (let n = i + 1; n > 0; n--) {
        if (arr[n] < arr[n - 1]) {
          let temp = arr[n];
          arr[n] = arr[n - 1];
          arr[n - 1] = temp;
        }
      }
    }
  }
  return arr;
};

export default insertionSort;
