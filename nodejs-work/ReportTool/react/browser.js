var fs = require("fs");
var browserify = require("browserify");
var babelify = require("babelify");
browserify("./src/Index.js")
  .transform(babelify, {
    global: true,
    presets: ["@babel/preset-env",  "@babel/preset-react"],
    plugins: ['@babel/plugin-transform-modules-commonjs']
  })
  .bundle()
  .pipe(fs.createWriteStream("main.js"));