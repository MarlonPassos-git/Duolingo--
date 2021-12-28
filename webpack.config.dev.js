const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'script.min.js'
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /.(js)$/,
                exclude: /[\/]node_modules[\/]/,
                use: {
                    loader: 'babel-loader',
                },
            }
        ]
    },


}