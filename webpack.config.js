module.exports = {
  entry: './Web/scripts/main.js',
  output: {
    path: './Web/scripts/',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './Web',
    port: 8100
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      }
    ]
  }
}