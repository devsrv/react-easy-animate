var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-proposal-class-properties', 
              '@babel/plugin-proposal-object-rest-spread',
              '@babel/plugin-transform-react-jsx'
            ],
            presets: [
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  },
  externals: {
    'react': 'commonjs react' 
  }
};