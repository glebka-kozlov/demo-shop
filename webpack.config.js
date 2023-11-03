const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = (env, argv) => {

  let config = {
    entry: "./src/index.js",
    output: {
      filename: argv.mode === "development" ? "[name].js" : "[name].[fullhash].js",
      path: argv.mode === "development" ? path.resolve(__dirname, "dev") : path.resolve(__dirname, "dist"),
      chunkFilename: "[name].[fullhash].js"
    },
    module: {
      rules: [
        {
          test: /\.(scss|css)$/,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader"
          ]
        },
        {
          test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
          type: "asset/resource"
        },
        {
          test: /\.hbs$/,
          loader: "handlebars-loader",
          options: {
            inlineRequires: "/images/"
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "./index.html",
        template: "./src/index.hbs",
        templateParameters: require("./src/local/en.json")
      })
    ],
    mode: argv.mode
  };

  if (argv.mode === "development") {

    config.devtool = "source-map";

    config.devServer = {
      historyApiFallback: true,
      devMiddleware: {
        writeToDisk: true
      },
      open: true,
      compress: true,
      hot: true,
      port: 3000
    };
  }

  return config;
};