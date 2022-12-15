function allNames() {
  var names = [ 'dan', 'anthony', 'pavel' ];
  for (name in names) {
    console.log(name);
  }
}

allNames(); // => 2

// Source: @danlash (https://twitter.com/danlash)