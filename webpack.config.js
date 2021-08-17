const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [{
          // Inject CSS to page
          loader: 'style-loader'
        }, {
          // Translate CSS into CommonJS modules
          loader: 'css-loader'
        }, {
          // Compile Sass to CSS
          loader: 'sass-loader'
        }]
      },
      {
        test: /\.vue$/i,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new VueLoaderPlugin()
  ]
}
