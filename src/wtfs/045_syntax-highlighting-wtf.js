$(function () {
  // change code elements into pre elements with class sh_javascript_dom
  $("code").each(function () {
    var node = $(this);
    node.hide().after("pre tag would be here").next().html(node.html()).addClass("sh_javascript_dom");
    node.remove();
  });
  // invoke clientside syntax highlighter
  sh_highlightDocument();
});

// Source: brianleroux (http://twitter.com/brianleroux)
