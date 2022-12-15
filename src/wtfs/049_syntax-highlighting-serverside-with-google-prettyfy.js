// replace the raw code blocks with prettyfied html
t = t.replace(/&amp;lt;code&amp;gt;[^&amp;lt;]+&amp;lt;\/code&amp;gt;/g, function (code) {
  return prettyfy(code.match(/&amp;lt;code&amp;gt;([\s\S]+)&amp;lt;\/code&amp;gt;/)[1]);
});
