module.exports = function countCats(backyard) {
  let array = [];
  let sum = 0;
  let cat = "^^";
  for (let i = 0; i < backyard.length; i++) {
    array = array.concat(backyard[i]);
  }
  for (let j = 0; j < array.length; j++) {
    if (array[j] == cat) {
      sum += 1;
    } 
  }
  return sum;
};
