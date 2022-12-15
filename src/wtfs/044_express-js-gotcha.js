configure(function () {
  set("root", __dirname);
  // allow static file serving from public directory
  use(Static);
});

// Source: More background here. (http://groups.google.com/group/express-js/browse_thread/thread/863ed1888597e630)
