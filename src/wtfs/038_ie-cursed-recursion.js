window.recurse = function (times) {
  if (times !== 0) recurse(times - 1);
};
recurse(13); // stack overflow at: 0
