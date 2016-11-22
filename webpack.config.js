module.exports = {
  devtool: "source-map",
  entry: './src/client/index.js',
  output: {
    filename: './src/server/public/bundle.js'
  },
  module: {
    loaders: [
      { 
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader" 
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader?sourceMap", "sass?sourceMap"]
      }
    ]
  }
}