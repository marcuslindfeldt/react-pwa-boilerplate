const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const paths = {
  src: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist'),
  public: path.resolve(__dirname, 'public'),
};

module.exports = {
  context: path.src,

  output: {
    path: paths.dist,
    publicPath: '/',
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
          'css-loader?modules',
          'postcss-loader',
        ],
      },
    ],
  },

  postcss() {
    return [autoprefixer];
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      },
    }),
  ],

  resolve: {
    alias: {
      components: `${paths.src}/components`,
      layouts: `${paths.src}/layouts`,
      pages: `${paths.src}/pages`,
    },
    extensions: ['', '.jsx', '.js'],
  },
};
