module.exports = {
  entry: './table.jsx',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.css|.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'jsx',
      },
    ],
  },
};