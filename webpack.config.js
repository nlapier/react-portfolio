module.exports = {
  
  entry: "./index.jsx",

  output: {
    filename: "./public/bundle.js",
    "publicPath": "/"
  },

  devtool: 'cheap-source-map',

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      { 
        test: /\.css$/, 
        loader: 'style-loader!css-loader' 
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },

  resolve: {
    extensions: ['', '.jsx', '.js']
  }

}
//webpack: extract text plugin
/*
      { 
        test: /\.(png|jpg|jpeg|gif|woff)$/, 
        loader: 'url-loader?limit=25000' 
      },
      { 
        test: /\.(png|jpg|jpeg|gif|woff)$/, 
        loader: 'file-loader' 
      }

*/