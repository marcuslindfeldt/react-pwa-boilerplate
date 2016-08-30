const path = require('path');
const autoprefixer = require('autoprefixer');

const paths = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
  public: path.join(__dirname, 'public'),
};

module.exports = {
  entry: `${paths.src}/main.js`,
  output: {
    path: paths.dist,
    publicPath: '/',
    filename: 'bundle.js',
  },

  devServer: {
    contentBase: [paths.src, paths.public],
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: paths.src,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },

  postcss() {
    return [autoprefixer];
  },

  resolve: {
    root: paths.src,
    extensions: ['', '.jsx', '.js'],
  },
};
