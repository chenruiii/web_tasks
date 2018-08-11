const webpack = require('webpack');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
        entry: __dirname + "/scrip/mycarousel.js", //已多次提及的唯一入口文件
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
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            }, 
            {
                test: /\.css$/,
                use: (
                {
                    fallback: "style-loader",
                    use: [
                    {
                        loader: "css-loader",
                        options: 
                        {
                            modules: true
                            //localIdentName: '[name]__[local]--[hash:base64:5]'
                        }
                    }, 
                    {
                        loader: "postcss-loader"
                    }],
                }),
                test: /\.less$/,
                use:  [{
                   loader: "style-loader" 
                }, {
                    loader: "css-loader" 
                }, {
                    loader: "less-loader"
                }]              
            },
            // { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
            // { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
            // { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            // { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            'window.$':'jquery',
            'window.jQuery':'jquery'
        })
        //new webpack.optimize.UglifyJsPlugin(),
        //new ExtractTextPlugin("main.css")
    ],
};
