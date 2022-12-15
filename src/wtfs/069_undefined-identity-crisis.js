function test(a) {
  if ((undefined = a)) {
    a = {};
  }
  return a;
}
undefined === test(null);

// Source: @TimoTijhof (https://twitter.com/TimoTijhof)
