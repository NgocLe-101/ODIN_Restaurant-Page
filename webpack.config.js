const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/scripts/index.js',
    homepageModule: './src/scripts/homepage.js',
    aboutModule: './src/scripts/about.js',
    menuModule: './src/scripts/menu.js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Restaurant Page',
      template: './src/index.html',
      inject: 'head',
      scriptLoading: 'defer'
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ]
  }
};