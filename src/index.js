
module.exports = function towelSort(matrix) {
  if (!matrix) { return [] };
  let result = [];
  matrix.forEach((el, index) => { if (index % 2) { result.push(el.reverse()) } else { result.push(el) } })
  return result.flat();
}
