const generateData = (numElements) => {
  let newData = [];
  for (let i = 0; i < numElements; i++) {
    newData.push(Math.floor(Math.random() * 100));
  }
  return newData;
};

export default generateData;
