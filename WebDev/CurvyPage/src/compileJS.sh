tsc -p tsconfig.json && browserify Index.js > main.js && \
../node_modules/.bin/minify main.js > main.min.js && \
mv -i main.min.js ../public/ && rm main.js
