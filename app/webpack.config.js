const path = require('path');
const copyPlugin = require("copy-webpack-plugin");
const htmlWebpackPlugin = require('html-webpack-plugin');
const htmlReplaceWebpackPlugin = require('html-replace-webpack-plugin');

module.exports = env => {
    const compilePath = env.development ? '' : 'dist/build';
    const assetPath = env.development ? '' : 'build';
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
                                // Prefer `dart-sass`
                                implementation: require("sass"),
                            },
                        },
                    ],
                },
                {
                    test: /\.svg$/,
                    use: {
                        loader: 'svg-url-loader',
                        options: {
                            encoding: 'base64'
                        }
                    }
                }
            ]
        },
        plugins: [
            new htmlWebpackPlugin({
                hash: true,
                inject: 'body',
                filename: indexOutput,
                template: 'index.html',
            }),
            new htmlReplaceWebpackPlugin([
                {
                    pattern: '@@path',
                    replacement: assetPath
                },
            ]),
            new copyPlugin({
                patterns: [
                    {from: "assets/*.*", to: ''},
                ],
            }),
        ],
    }
};
