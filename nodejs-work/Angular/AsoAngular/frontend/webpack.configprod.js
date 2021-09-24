const path = require("path");
// setup the bundler
module.exports = {
    entry: "./src/main.ts",
    mode: "production",
    // setup some rules
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {extensions: ['.ts', '.js']},
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
};