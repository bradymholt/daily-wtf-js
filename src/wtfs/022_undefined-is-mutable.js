var a = {};
a.b === undefined; // true because property b is not set
undefined = 42;
a.b === undefined; // false

// Source: @mathias (http://mathiasbynens.be/)