const path = require('path');
const webpack = require('webpack');
//const HtmlWebpackPlugin = require('html-webpack-plugin');
//const ExtractTextPlugin = require('extract-text-webpack-plguin');

module.exports = {
  entry: path.resolve(__dirname,'.。/src/index.js'), //指定入口文件，程序从这里开始编译
  output: {
    path: path.resolve(__dirname,'../dist'), //输出的路径
    filename: 'bundle.js' //打包后文件
  },
  resolve: {
    alias: {
      page: path.resolve(_dirname,'../src/page'),
      component: path.resolve(__dirname,'../src/component')
    }
  },
  module: {
    rules: [
      //react(jsx)语法的处理
      {
        test: /\.(js|jsx)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015','react'],
          }
        },
        exclude: /node_modules/
      }
    ]
  }
};