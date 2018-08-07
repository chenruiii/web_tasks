const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
        entry: __dirname + "/scrip/text2-2.js", //已多次提及的唯一入口文件
        output: {
            path: __dirname + "/public",
            filename: "main.js"
        },
        devtool: 'none',
        // devServer: {
        //     contentBase: "./public", //本地服务器所加载的页面所在的目录
        //     historyApiFallback: true, //不跳转
        //     inline: true,
        //     hot: true
        // },
        module: {
            rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: 
                {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            }, 
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract(
                {
                    fallback: "style-loader",
                    use: [
                    {
                        loader: "css-loader",
                        // options: 
                        // {
                        //     modules: true,
                        //     localIdentName: '[name]__[local]--[hash:base64:5]'
                        // }
                    }, 
                    {
                        loader: "postcss-loader"
                    }],
                })
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("main.css")
    ]
};
