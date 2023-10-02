// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/logTab.js', // Entry point of your application
  output: {
    filename: 'bundle.js', // Name of the output bundle file
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      // Use Babel to transpile JavaScript files (optional)
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};