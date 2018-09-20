const path = require("path");
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: {
        main: "./src/js/main.js"
    },
    mode: "development",
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/"
    },
    devServer: {
        contentBase: "dist",
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{loader: "style-loader"}, {loader: "css-loader"}]
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {loader: "postcss-loader"},
                    {loader: "sass-loader"}
                ]
            },
            {
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "images/[name].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]"
                        }
                    },
                    {
                        loader: "extract-loader",
                        options: {
                            publicPath: "../"
                        }
                    },
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new OpenBrowserPlugin({url: 'http://localhost:8080'})
    ]
};
