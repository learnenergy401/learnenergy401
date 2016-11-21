module.exports = {
  entry: './Web/component/main.js',
  output: {
    path: './Web/component/',
    filename: 'bundle.js',
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
        query: { presets:['react']}
      }
    ]
  }
}