const webpack = require("webpack");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const pkg = require('./package.json');

const plugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: './src/index.html'
  }),
  new webpack.BannerPlugin(`
  Lamplighter.js
  v${pkg.version}
  Documentation: https://github.com/ptallen63/lamplighter
`),
];

module.exports = {

  // webpack will take the files from ./src/index
  entry: {
   "lamplighter" : './src/index',
  "lampligher.min": './src/index',
  },
  devtool: 'cheap-source-map',

  // and output it into /dist as bundle.js
  output: {
    path: path.join(__dirname, '/lib'),
    filename: '[name].js',
    library: 'lamplighter',
    libraryTarget: 'umd',
  },

  optimization: {
    minimize: true,
    minimizer: [new UglifyJsPlugin({
      include: /\.min\.js$/,
      sourceMap: true,
    })]
  },

  // adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  module: {
    rules: [

      // we use babel-loader to load our jsx and tsx files
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },

      // css-loader to bundle all the css files into one file and style-loader to add all the styles  inside the style tag of the document
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: plugins,
};