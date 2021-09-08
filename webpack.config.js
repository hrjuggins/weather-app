const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv");

module.exports = {
  // 1
  entry: {
    app: path.resolve(__dirname, "./src/index.js"),
  },
  // 2
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(scss|css)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    alias: {
      process: "process/browser",
    },
  },
  output: {
    path: path.resolve(__dirname, "build"), // change this
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(dotenv.config().parsed), // it will automatically pick up key values from .env file
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve("./index.html"),
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "./build"),
    hot: true,
    historyApiFallback: true,
  },
};
