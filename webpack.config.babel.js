import path from 'path';
import webpack from 'webpack';

export default {
  devtool: 'eval',
  entry: ['webpack-hot-middleware/client?reload=true', 'babel-polyfill', './src/index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
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
      include: path.join(__dirname, 'src'),
    },
    {
      test: /\.svg$/,
      loader: 'babel!react-svg',
    }],
  },
};
