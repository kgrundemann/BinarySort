const QuickSort = (data) => {
  let sortedData = [...data];
  quickSort(sortedData, 0, sortedData.length - 1);
  return sortedData;
};

const quickSort = (arr, start, end) => {
  if (start < end) {
    let pivotIndex = partition(arr, start, end);
    quickSort(arr, start, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, end);
  }
  return arr;
};

const partition = (arr, start, end) => {
  let pivot = arr[end];
  let i = start - 1;
  for (let j = start; j <= end - 1; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];
  return i + 1;
};

export default QuickSort;
