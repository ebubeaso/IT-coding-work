const path = require("path");
// configure the bundler
module.exports = {
    entry: ["./src/main.ts", "./src/polyfills.ts"],
    watch: true,
    mode: "production",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {extensions: ['.ts', '.js']},
    output: {
        filename: "script.js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
            watch: true,
        },
        port: 3000,
        open: false,
        liveReload: true
    }
}
