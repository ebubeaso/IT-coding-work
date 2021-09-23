const path = require("path");
// setup the bundler
module.exports = {
    entry: "./src/main.ts",
    watch: true,
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
    optimization: {minimize: true},
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
            watch: true
        },
        port: 3000,
        open: false,
        liveReload: true
    }
};