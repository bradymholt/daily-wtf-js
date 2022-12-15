var foo = {
  toString: function () {
    return 5;
  },
  valueOf: function () {
    return "foo";
  },
};
alert(foo.toString() + 1); // 6 (bad!)
alert(foo + 1); // "foo1" (no good!)
alert(+foo); // NaN (the worst!)

// Source: Ajaxian (http://ajaxian.com/archives/a-very-detailed-look-at-object-to-primitive-conversions)
