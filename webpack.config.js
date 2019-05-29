const path = require("path");

const client_path = path.resolve(__dirname, "client");
const public_path = path.resolve(__dirname, "public");

module.exports = {
  mode: "development",
  devtool: 'source-map',

  entry: client_path + "/index.js",

  output: {
    path: path.resolve(public_path, "js"),
    filename: "bundle.js",
    publicPath: "js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/react"]
            }
          }
        ]
      }
    ]
  },

  devServer: {
    port: 3000,
    contentBase: public_path,
    openPage: "index.html",
    watchContentBase: true,
    historyApiFallback: true
  }
};