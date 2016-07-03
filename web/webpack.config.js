// import path from 'path';

module.exports = {
    entry: "./js/entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
              presets: ['es2015']
            }
          },
          { 
            test: /\.css$/, 
            loader: "style!css" 
          }
        ]
    }
};

