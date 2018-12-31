const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = [buildConfig(true), buildConfig()];

function buildConfig(minified) {
  return {
    mode: 'production',
    entry: path.join(__dirname, 'hack.js'),
    output: {
      path: path.join(__dirname, './static/css/'),
      filename: 'ignore.js' // output js file name is identical to css file name
    },
    module: {
      rules: [{
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "sass-loader"
        ]
      }]
    },
    optimization: {
      minimizer: minified ? [
        new OptimizeCSSAssetsPlugin({})
      ] : []
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: minified ? "bootstrap-overrides.min.css" : "bootstrap-overrides.css"
      })
    ]
  }
}
