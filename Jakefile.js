const del = require("del");


desc("clean");
task("clean", [], () => {
  del.sync([
    "bin/**/*.d.ts",
    "bin/**/*.js",
    "bin/**/*.js.map",

    "lib/**/*.d.ts",
    "lib/**/*.js",
    "lib/**/*.js.map",
  ]);
});
