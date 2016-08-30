const path = require('path');

const paths = {
  src: path.resolve('src'),
  dist: path.resolve('dist'),
};

module.exports = {
  entry: `${paths.src}/main.js`,
  output: {
    path: paths.dist,
    publicPath: '/',
    filename: 'bundle.js',
  },

  devServer: {
    contentBase: paths.src,
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: paths.src,
        loader: 'babel-loader',
      },
    ],
  },

  resolve: {
    root: paths.src,
    extensions: ['', '.jsx', '.js'],
  },
};
