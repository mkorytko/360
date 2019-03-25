const path = require('path');
const HTML = require('html-webpack-plugin');

const base = {
    entry: {
        products: './src/index.js',
        flowers: './src/flower.js',
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /.js/,
                loader: 'babel-loader',
            },
            {
                test: /\.(png|gif|jpe?g|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/images/[name].[ext]',
                },
            },
        ],
    },
    plugins: [
        new HTML({
            filename: 'index.html',
            template: './src/index.html',
        }),
    ],
};

module.exports = base;