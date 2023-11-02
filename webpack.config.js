const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = (env, argv) => {
  return {
    mode: argv.mode,
    entry: "./src/projectName.js",
    output: {
      filename: env === "development" ? "[name].js" : "[name].[fullhash].js",
      path: path.resolve(__dirname, "dist"),
      chunkFilename: "[name].[fullhash].js",
      clean: true
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "./project-name"),
      },
      compress: true,
      hot: true,
      port: 8080
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader, 
            "css-loader"
          ]
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader, 
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
          },
        },
      ]
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new webpack.DefinePlugin({
        __MODE__: JSON.stringify(argv.mode)
      }),
      new HtmlWebpackPlugin({
        favicon: "./favicon.ico",
        filename: "./index.html",
        template: "./src/index.hbs",
        templateParameters: require("./src/local/ru.json")
      }),
      new HtmlWebpackPlugin({
        favicon: "./favicon.ico",
        filename: "./eng/index.html",
        template: "./src/index.hbs",
        templateParameters: require("./src/local/en.json")
      }),
    ],
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    }
  };
};