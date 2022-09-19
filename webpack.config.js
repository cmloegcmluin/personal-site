const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require("webpack")

module.exports = {
    entry: './src/app/index.js',
    mode: 'none',
    output: {
        assetModuleFilename: '[file]'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {presets: ['@babel/preset-react']},
            },
            {
                test: /\.svg$/,
                use: 'svg-react-loader',
            },
            {
                test: /\.(eot|woff|woff2|ttf|png|pdf|jpg|obj)/,
                type: 'asset/resource',
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/templates/index.html',
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser.js',
        }),
    ],
}
