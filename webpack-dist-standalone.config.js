var path = require("path")
var styleRules = require("./webpack.dist-style.config.js")

var rules = [
  { test: /\.(worker\.js)(\?.*)?$/,
    use: [
      {
        loader: "worker-loader",
        options: {
          inline: true,
          name: "[name].js"
        }
      },
      { loader: "babel-loader?retainLines=true" }
    ]
  }
]

module.exports = require("./make-webpack-config.js")(rules, {
  _special: {
    separateStylesheets: true,
    minimize: true,
    sourcemaps: false,
  },

  entry: {
    "swagger-ui-standalone-preset": [
      "./src/polyfills",
      "./src/standalone/index.js"
    ]
  },

  output:  {
    path: path.join(__dirname, "dist"),
    publicPath: "/dist",
    library: "SwaggerUIStandalonePreset",
    libraryTarget: "umd",
    filename: "[name].js",
    chunkFilename: "js/[name].js",
  },

})
