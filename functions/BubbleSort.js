const BubbleSort = (data) => {
  let sortedData = [...data];
  let n = sortedData.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (sortedData[j] > sortedData[j + 1]) {
        let temp = sortedData[j];
        sortedData[j] = sortedData[j + 1];
        sortedData[j + 1] = temp;
      }
    }
  }
  return sortedData;
};

export default BubbleSort;
