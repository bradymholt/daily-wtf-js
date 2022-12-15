function Test() {}
Test.prototype = null;
var a = new Test();
a instanceof Test; //Uncaught TypeError: Function has non-object prototype 'null' in instanceof check(…)
a instanceof Object; // true WTF?

// Source: ref (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)
