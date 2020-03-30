const selectionSort = arr => {
  let n = arr.length - 1;
  console.log(n);
  let bigIndex;
  do {
    bigIndex = 0;
    for (let i = 1; i <= n; i++) {
      if (arr[i] > arr[bigIndex]) {
        bigIndex = i;
      }
      if (i === n) {
        let temp = arr[n];
        arr[n] = arr[bigIndex];
        arr[bigIndex] = temp;
        n--;
        bigIndex = 0;
      }
    }
  } while (n > 0);
  return arr;
};

export default selectionSort;
