module.exports = function countCats(backyard) {
  let arr = backyard.flat();
  let number = 0;
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === '^^') number++;
  }
  return number;
};
