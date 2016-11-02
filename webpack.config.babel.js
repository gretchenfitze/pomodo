import path from 'path';
import webpack from 'webpack';

export default {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    'babel-polyfill',
    './src/index',
  ],
  output: {
    path: path.resolve(__dirname, 'public', 'build'),
    filename: 'bundle.js',
    publicPath: '/build/',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: path.join(__dirname, 'node_modules'),
    },
    {
      test: /\.svg$/,
      loader: 'babel!react-svg',
    },
    {
      test: /\.css$/,
      loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
    }],
  },
};
