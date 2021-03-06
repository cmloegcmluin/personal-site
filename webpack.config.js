const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/app/index.js',
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {presets: ['react']},
            },
            {
                test: /\.svg$/,
                use: 'svg-react-loader',
            },
            {
                test: /\.(eot|woff|woff2|ttf|png|pdf|jpg|obj)/,
                loader: 'file-loader',
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
    devServer: {
        contentBase: path.join(__dirname, './dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/templates/index.html',
        }),
    ],
}
