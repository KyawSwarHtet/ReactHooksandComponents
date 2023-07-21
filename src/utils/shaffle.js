function shaffle(array) {
  let ShaffledArray = [];
  let usedIndexes = [];

  let i = 0;
  while (i < array.length) {
    let randomNumber = Math.floor(Math.random() * array.length);
    if (!usedIndexes.includes(randomNumber)) {
      ShaffledArray.push(array[randomNumber]);
      usedIndexes.push(randomNumber);
      i++;
    }
  }

  return ShaffledArray;
}

export default shaffle;
