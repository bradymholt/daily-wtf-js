var a = 8;
var someFunc = function () {
  document.write(a);
  var a = 8;
};
someFunc(); // writes undefined

// Source: Boaz, Al &amp; Rick (http://weblog.bocoup.com/weird-var-behavior-in-javascript)
