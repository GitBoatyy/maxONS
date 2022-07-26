const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    mfpanel: './src/mfpanel.js',
  },
  output: {
    filename: 'main.js',
    //add more js via filename: 'js.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};