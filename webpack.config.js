const path = require('path');
const port = process.env.Port || 8080;
const Dotenv = require('dotenv-webpack');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: 'public/index.html', // Path to your HTML template file
    }),
    new InterpolateHtmlPlugin({
      // Define variables to interpolate
      PUBLIC_URL: '',
    }),
    // Other plugins...
  ],
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
};
