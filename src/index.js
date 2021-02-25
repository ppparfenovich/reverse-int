module.exports = function reverse (n) {
  result = parseFloat(n.toString().split('').reverse().join(''));
  return result;
}
