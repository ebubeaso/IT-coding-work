import {nodeResolve} from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
 
export default {
    input: ['./src/Index.js', './src/App.js', './src/Graph.js'],
    output: {
        dir: '../static',
        format: 'esm',
        name: 'Index'
    },
    plugins: [commonjs()],
};