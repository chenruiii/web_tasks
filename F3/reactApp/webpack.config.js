const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
   entry: __dirname + "/src/main.js",
   output: {
      path:__dirname + "/build",
      filename: "index.js"
   },
	devtool: 'none',
   devServer: {
      contentBase: "./public", //本地服务器所加载的页面所在的目录
      historyApiFallback: true, //不跳转
      inline: true,
      hot: true
  },
	
   module: {
      rules: [
      {
         test: /(\.jsx|\.js)$/,
         use: {
            loader: "babel-loader",
            options: {
               "presets": ["react", "env"],
               "env": {
                  "development": {
                     "plugins": [["react-transform", {
                        "transforms": [{
                           "transform": "react-transform-hmr",
                           "imports": ["react"],
                           "locals": ["module"]
                        }]
                     }]]
                  }
               }
            }
         },

         exclude: /node_modules/,
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
      {
         test:/\.json$/,
         loader:'json-loader'
      }
      // {
         // test:'/\.(png|jpg|woff|woff2)$/',
         // use:{
         //    loader:'url-loader?limit=8192'
         // }
         
      // }
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
      }),
      new HtmlWebpackPlugin({
         template: __dirname + "/src/index.tmpl.html"
      }),
      new webpack.HotModuleReplacementPlugin(),
	]
}
