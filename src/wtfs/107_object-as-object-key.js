var result = (function () {
  var foo = new Object();
  var bar = new Object();
  var map = new Object();

  map[foo] = "foo";
  map[bar] = "bar";

  return map[foo];
})();

console.log(result); // "bar"

// Source: Miguel Mota (http://www.miguelmota.com/)
