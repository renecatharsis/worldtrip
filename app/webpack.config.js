const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
    const compilePath = env.development ? '' : 'dist/build';
    const outputFileName = env.development ? 'main.js' : '[hash].main.js';

    return {
        entry: './src/index.js',
        output: {
            filename: outputFileName,
            path: path.resolve(__dirname, compilePath),
        },
        plugins: [
            new htmlWebpackPlugin({
                inject: true,
                filename: '../index.html',
                template: 'template/index.html',
            }),
        ],
    }
};