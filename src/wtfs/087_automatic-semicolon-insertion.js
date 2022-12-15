var a = 1;
b = 1;

(function () {
  var a = 2;
  b = 2;
})();

console.log(a); // prints 1
console.log(b); // prints 2

// Source: @jfparadis (http://twitter.com/jfparadis)
