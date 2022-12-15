1 === 1; // true

Number.prototype.isOne = (function () {
  return this === 1;
})(1).isOne(); // false!

Number.prototype.reallyIsOne = (function () {
  return this - 1 === 0;
})(1).reallyIsOne(); // true
