const bubbleSort = arr => {
  let swap;
  let a = arr;
  let n = a.length - 1;

  do {
    swap = false;
    for (let i = 0; i < n; i++) {
      if (a[i] > a[i + 1]) {
        let temp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = temp;
        swap = true;
      }
    }
    n--;
  } while (swap);
  return a;
};

export default bubbleSort;
