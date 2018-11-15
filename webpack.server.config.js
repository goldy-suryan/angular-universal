const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    server: "./server.ts"
  },
  target: "node",
  resolve: { extensions: [".ts", ".js"] },
  optimization: {
    minimize: false
    // Error if minimize to true. Still unable to find the solution
    //TypeError: StaticInjectorError[InjectionToken Application Initializer -> InjectionToken DocumentToken]:
    //StaticInjectorError(Platform: core)[InjectionToken Application Initializer -> InjectionToken DocumentToken]:
  },
  externals: [/(node_modules|main\..*\.js)/],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [{ test: /\.ts$/, loader: "ts-loader" }]
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /(.+)?angular(\\|\/)core(.+)?/,
      path.join(__dirname, "src"),
      {}
    ),
    new webpack.ContextReplacementPlugin(
      /(.+)?express(\\|\/)(.+)?/,
      path.join(__dirname, "src"),
      {}
    )
  ]
};
