const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/***
 * 两种方式可以在打包时自动清除dist文件夹下无用的文件
 * 引入 CleanWebpackPlugin 插件
 * output 添加clean属性
 */

// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    // 如果js来自多个文件，是用source map可以准确的从报错信息中看到是哪个文件出现了错误
    devtool: 'inline-source-map',
    // Change your configuration file to tell the dev server where to look for files
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        // 自动清除dist文件夹
        // new CleanWebpackPlugin(),
        // HtmlWebpackPlugin 创建了一个全新的文件，所有的 bundle 会自动添加到 html 中
        new HtmlWebpackPlugin({
            title: 'Development'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node-modules/,
                loader: 'ts-loader'
            }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // 自动清除dist文件夹
        clean: true,
        publicPath: '/'
    }
};
