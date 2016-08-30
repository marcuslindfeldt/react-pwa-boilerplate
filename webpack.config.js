const path = require('path');

const paths = {
  src: path.resolve('src'),
  dist: path.resolve('dist'),
};

module.exports = {
  entry: `${paths.src}/scripts/main.js`,
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
        test: /\.js$/,
        include: paths.src,
        loader: 'babel-loader',
      },
    ],
  },
};
