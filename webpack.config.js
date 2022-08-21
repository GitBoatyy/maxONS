const path = require('path');

module.exports = {
    mode: 'development',
  entry: {
    index: './src/index.js',
    mfpanel: './src/mfpanel.js',
    makedisplay: './src/maintbutton.js',
    gotostatus: './src/maintbuttonfunction.js',
    hidedisplay: './src/hidedisplay.js',
    hidemf: './src/hidemf.js',
    goToMDP: './src/maintdatapgs.js',
    displayselection: './src/displayselection.js',
    printselection: './src/printselection.js',
    datalinkselection: './src/datalinkselection.js',
    eraseselection: './src/eraseselection.js',
  },
  output: {
    filename: '[name].bundle.js',
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