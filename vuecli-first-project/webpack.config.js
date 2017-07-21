//vue-cli helps to load JS into 1 file which significantly reduces load time

var path = require('path')

// certain syntax used here cant be understood by modern browsers coz its ES6 syntax
// so we need to bundle to a single JS file that any browser can understand
// hence webpack
var webpack = require('webpack')

module.exports = {
  //entry point for the application
  entry: './src/main.js',

  //when we compile it, the output should go specifically to dist directory
  //build.js file
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    //loaders is used for pre-processing anything
    //eg. applying sass
    rules: [
      {
        //looks for any files ending with .vue and applies vue-loader
        test: /\.vue$/,
        //vue-loader is exactly what allows us to use single file template
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        //babel is used to compile ES6 down to JS that any browser can understand
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        //looks for image files
        test: /\.(png|jpg|gif|svg)$/,
        //helps to move files anywhere into
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      //if we try to require vue$ its pointing to vue.esm.js
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

//looks if we are in production and do certain things
if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
