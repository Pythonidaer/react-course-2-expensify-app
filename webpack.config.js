// entry point - where does it kick off
// output - where does it output that final fil

// built in node function
const path = require("path");

module.exports = {
  // defining all of the configuration details for
  //   our webpack build
  // module.exports is a node thing
  //   it's a way to expose things (i.e. objects) to
  // another file

  //   where it should start/what's that main file
  // start with a relative path
  // entry: "./src/playground/redux-101.js",
  entry: "./src/app.js",
  // entry: "./src/playground/destructuring.js",
  // entry: "./src/playground/hoc.js",

  //   another must have
  output: {
    // needs to be an absolute path
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devtool: "cheap-module-eval=source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true,
  },
};
