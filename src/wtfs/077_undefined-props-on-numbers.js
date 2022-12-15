function getBounds(node) {
  var n = node || 0;
  return { width: n.width, height: n.height };
}

/*
If you call getBounds() with null, you'll get back
{ width: undefined, height: undefined } because in JS,
numbers have properties (inherited from Number), and
using an undefined property doesn't throw, it just
returns undefined. null and undefined are propertyless.
*/

// Source: @unwiredben (https://twitter.com/unwiredben)
