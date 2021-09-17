tsc -p tsconfig.json && browserify App.js > main.js \
&& ../node_modules/.bin/minify main.js > main.min.js \
&& mv -i main.min.js ../public/
