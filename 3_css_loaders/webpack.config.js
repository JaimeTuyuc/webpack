const path = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            // options: {
            //   insertAt: 'top',
            // },
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
        // use: [
        //   'style-loader',
        //   'css-loader'
        // ]
      },
    ],
  },
}
