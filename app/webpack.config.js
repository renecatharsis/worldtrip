const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
    const compilePath = env.development ? '' : 'dist/build';
    const indexOutput = env.development ? 'index.html' : '../index.html';

    return {
        entry: './src/index.js',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, compilePath),
        },
        module: {
            rules: [
                {
                    test: /\.svg/,
                    type: 'asset/inline'
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        "style-loader",
                        "css-loader",
                        {
                            loader: "sass-loader",
                            options: {
                                implementation: require("sass"),
                            },
                        },
                    ],
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                hash: true,
                inject: 'body',
                filename: indexOutput,
                template: 'index.html',
            })
        ],
    }
};
