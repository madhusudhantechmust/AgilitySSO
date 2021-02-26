const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: "production",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules|.html/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": ["@babel/preset-env", "@babel/react"],
            "plugins": ["inline-json-import", ["@babel/plugin-proposal-decorators", { "legacy": true}],
            ["@babel/plugin-proposal-class-properties", { "loose": true}], ["@babel/transform-runtime"]]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gif|svg|jpg|png)$/,
        loader: "file-loader",
      }
    ]
  },
  plugins: [
    new CopyPlugin([
        { from: 'public/index.html', to: 'index.html' },
        { from: 'CSXS/manifest.xml', to: 'CSXS/manifest.xml' },
        { from: 'CSInterface.js', to: 'CSInterface.js'},
        { from: '.debug', to: '.debug', toType: 'file' },
        { from: 'src', to: 'src' },
    ]),
  ],
};