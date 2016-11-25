var webpack = require('webpack');

module.exports = function(config) {
  config.set({
    browsers: ['Chrome', 'PhantomJS'],
    singleRun: true,
    frameworks: ['mocha', 'expect'],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'test/index.js',
    ],
    plugins: [
      'karma-chrome-launcher',
      'karma-coverage',
      'karma-expect',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-phantomjs-launcher',
      'karma-sourcemap-loader',
      'karma-webpack',
    ],
    preprocessors: {
      'test/index.js': ['webpack', 'sourcemap'],
    },
    reporters: ['mocha', 'coverage'],
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [{
          test: /\.(js|jsx)$/,
          loader: 'babel',
          exclude: /node_modules/,
          query: {
            plugins: [['istanbul', { exclude: 'test/' }]],
          },
        },
        {
          test: /\.svg$/,
          loader: 'babel!react-svg',
        },
        {
          test: /\.css$/,
          loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss',
        },
        {
          test: /\.mp3$/,
          loader: 'file',
        }],
      },
      resolve: {
        extensions: ['', '.js', '.jsx'],
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('test'),
          },
        }),
      ],
    },
    webpackServer: {
      noInfo: true,
    },
    mochaReporter: {
      output: 'autowatch',
    },
  });
};
