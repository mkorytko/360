const path = require('path');
const HTML = require('html-webpack-plugin');

const base = {
    entry: {
        // marzipan: './src/vendor/marzipano.js',
        products: './src/index.js',
        // flowers: './src/flower.js',
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
                test: /\.jpe?g$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/images/[name].[ext]',
                },
            },
            {
                test: /\.(png|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/icons/[name].[ext]',
                },
            },
        ],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                },
            },
        },
    },
    plugins: [
        new HTML({
            filename: 'index.html',
            template: './src/index.html',
        }),
    ],
};

module.exports = base;
