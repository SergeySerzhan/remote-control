const path = require('path');

module.exports = {
  entry: './server.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'index.ts',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  target: 'node',
};
