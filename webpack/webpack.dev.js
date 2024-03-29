const webpack = require("webpack");
// const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    hot: true,
    open:true
  },
  plugins: [
    new webpack.DefinePlugin({ "process.env.name": JSON.stringify("Hello from Dev env custom variable") }),
    // new ReactRefreshPlugin(),
  ],
};
