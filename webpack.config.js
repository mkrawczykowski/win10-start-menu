const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");


module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.woff2?$|\.ttf$|\.otf$|\.eot$|\.woff$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts/',
              publicPath: '../fonts/',
            },
          },
        ],
      },
      {
        test: /\.scss$/i,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: {} },
          { loader: "postcss-loader", options: {} },
          { loader: "sass-loader", options: {} },
        ],
      },
      // {
      //   test: /\.scss$/i,
      //   use: [
      //     "style-loader",
      //     "css-loader",
      //     {
      //       loader: "postcss-loader",
      //       options: {
      //         postcssOptions: {
      //           plugins: [
      //             [
      //               "postcss-preset-env",
      //               {
      //                 // Options
      //               },
      //             ],
      //           ],
      //         },
      //       },
      //     },
      //     "sass-loader"
      //   ],
      // },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     // { from: "./src/images/", to: "../dist/images/" },
    //     // { from: "./src/favicons/", to: "../dist/favicons/" },
    //   ],
    // }),
  ],
};