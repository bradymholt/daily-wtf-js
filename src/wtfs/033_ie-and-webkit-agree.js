(function () {
  return 2 * 3;
}.toString() ===
  function () {
    return 6;
  }.toString()); // true in FF &amp; Opera, false in IE &amp; WebKit
