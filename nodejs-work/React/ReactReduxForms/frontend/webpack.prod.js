const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/Index.tsx",
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
    }
}
