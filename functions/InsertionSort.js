const InsertionSort = (data) => {
  let sortedData = [...data];
  for (let i = 1; i < sortedData.length; i++) {
    let key = sortedData[i];
    let j = i - 1;
    while (j >= 0 && sortedData[j] > key) {
      sortedData[j + 1] = sortedData[j];
      j = j - 1;
    }
    sortedData[j + 1] = key;
  }
  return sortedData;
};

export default InsertionSort;
