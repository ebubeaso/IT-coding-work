#! /bin/bash

# This will be used for compiling my information
tsc -p tsconfig.json && browserify Index.js -o main.js && \
../node_modules/.bin/minify main.js > main.min.js && \
mv -i main.min.js ../../static/
