var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin"); //将组件中的样式乖乖提取出来
var HtmlWebpackPlugin = require('html-webpack-plugin'); //html模板插入代码
var node_modules_dir = path.resolve(__dirname, 'node_modules');
//webpck插件
var plugins = [
  //提公用js到common.js文件中
  new webpack.optimize.CommonsChunkPlugin('common.js'),
  new HtmlWebpackPlugin({
    title: "React学习demo",
    template: "tpl.html",
    filename: "index.html",
    hash: true
  }),
  //将样式统一发布到style.css中
  new ExtractTextPlugin("style.css", {
    allChunks: true,
    disable: false
  }),
  // 使用 ProvidePlugin 加载使用率高的依赖库
  new webpack.ProvidePlugin({
    $: 'webpack-zepto'
  }),
  new webpack.HotModuleReplacementPlugin()
];
var config = {
  debug: true,
  entry: [
    './src/main.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: ''
  },
  module: {
    loaders: [{
      test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
      exclude: [node_modules_dir],
      loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'], // 加载模块 "babel" 是 "babel-loader" 的缩写,加载react热代码替换
      include: path.join(__dirname, 'src')
    }, {
      test: /\.css$/, //css后缀的文件
      loader: ExtractTextPlugin.extract(
        "style-loader", "css-loader!cssnext-loader") // Run both loaders
    }, {
      test: /\.(jpg|png|gif)$/,
      loader: "file-loader?name=images/[name].[hash].[ext]"
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "url-loader?limit=10000&minetype=application/font-woff"
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "file-loader"
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.(html|tpl)$/,
      loader: 'html-loader'
    }]
  },
  plugins:plugins,
  resolve: {
    alias: {},
    // require时省略的扩展名，如：require('module') 不需要module.js
    extension: ['', '.js']
  }
};
module.exports = config;