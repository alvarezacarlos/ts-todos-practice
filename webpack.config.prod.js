const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
//   mode: 'development',
  mode: 'production',
  entry: './src/app.ts',
  devServer: {
    static: [
      {
        directory: path.join(__dirname),
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/dist/'
  },
  //   devtool: 'inline-source-map',
  devtool: false , // false, "source-map" o "nosources-source-map" para ocultar el código fuente
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new CleanPlugin.CleanWebpackPlugin()
  ]
};