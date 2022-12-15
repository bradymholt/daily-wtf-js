function toInt(number) {
  return number &amp;&amp; + number | 0 || 0;
}
console.log(toInt("1"));  // 1
console.log(toInt("1.2"));  // 1
console.log(toInt("-1.2"));  // -1
console.log(toInt(1.2));  // 1
console.log(toInt(0));  // 0
console.log(toInt("0"));  // 0
console.log(toInt(Number.NaN));  // 0
console.log(toInt(1/0));  // 0

// Source: @Poetro (http://twitter.com/Poetro)