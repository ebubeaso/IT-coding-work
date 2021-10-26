// This is the development configuration
const path = require("path");
module.exports = {
    entry: ["regenerator-runtime/runtime.js", "./src/Index.tsx"],
    watch: true,
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react', 
                        '@babel/preset-typescript']
                    },
                },
            },
        ],
    },
    resolve: {extensions: ['.ts', '.tsx', '.js']},
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
            watch: true
        },
        port: 3000,
        liveReload: true,
        open: false
    }
}
