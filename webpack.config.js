const path = require("path");
const HTML = require("html-webpack-plugin");

const base = {
    entry: {
        app: "./src/index.js",
    },
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, "public"),
    },
    module:{
        rules: [
            {
                test: /.js/,
                loader: "babel-loader",
            },
            {
                test: /\.(png|gif|jpe?g)$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/images/[name].[ext]',
                },
            },
        ]
    },
    plugins: [
        new HTML({
            filename: "index.html",
            template: "./src/index.html",
        }),
    ]
};

module.exports = base;