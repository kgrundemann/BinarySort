const generateString = (stringLength) => {
  let string = "";
  const possibleLetters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < stringLength; i++) {
    string += possibleLetters.charAt(i % possibleLetters.length);
  }
  return string;
};

export default generateString;
