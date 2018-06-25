const path = require("path");
module.exports = {
  entry: "./assets/js/scripts.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public/js")
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["es2015"]
        }
      }
    ]
  }
};
