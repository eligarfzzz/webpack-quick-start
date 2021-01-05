const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    page1: "./build/js/page1/page1.js",
    page2: "./build/js/page2/page2.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]/[name].bundle.js",
  },
  devtool: "source-map",
  devServer: {
    port: 3634,
    clientLogLevel: "none",
    stats: "errors-only",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    // new CopyPlugin([{ from: "data", to: "data" }]),
    new HtmlPlugin({
      template: "./src/ts/page1/page1.html",
      chunks: ["page1"],
      filename: "page1/page1.html",
    }),
    new HtmlPlugin({
      template: "./src/ts/page2/page2.html",
      chunks: ["page2"],
      filename: "page2/page2.html",
    }),
  ],
};
