// contains two arrays that are used to 1) create an array of a given length; and 2) shuffle an array into a random order.

export const shuffleArray = array => {
  let tmp,
    current,
    top = array.length;
  if (top)
    while (--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
  return array;
};

export const createArray = len => {
  let bars = [];
  for (let i = 1; i < len + 1; i++) {
    bars.push(i);
  }
  return bars;
};
