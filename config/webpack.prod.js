const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    entry: {
        main: "./src/js/main.js"
    },
    mode: "production",
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
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [{loader: MiniCSSExtractPlugin.loader}, {loader: "css-loader"}]
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: MiniCSSExtractPlugin.loader},
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
                            name: "images/[name].[ext]",
                            publicPath: "./"
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
                            publicPath: "./"
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
        new OptimizeCssAssetsPlugin(),
        new MiniCSSExtractPlugin({
            filename: "[name].css"
        })
    ]
};
