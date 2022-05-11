const path = require('path')
const SwaggerJSDocWebpackPlugin = require('swagger-jsdoc-webpack-plugin')

const PORT = process.env.PORT || 3000
const SERVER = process.env.SERVER || 'localhost'

const { version, description, author } = require('./package.json')

module.exports = {
  mode: 'production',
  target: 'node',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
    ],
  },
  plugins: [
    new SwaggerJSDocWebpackPlugin({
      definition: {
        openapi: '3.0.0',
        info: {
          title: 'API Event Checker',
          description: description,
          version: version,
          contact: {
            name: author,
          },
          servers: [`http://${SERVER}:${PORT}`, `https://api-event-checker.herokuapp.com`],
        },
      },
      apis: ['./src/routes/*.js'],
    }),
  ],
}
