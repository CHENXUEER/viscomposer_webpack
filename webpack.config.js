var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [{
            test: /\.(js)$/,
            loaders: ['babel-loader']
        },{
            test: /\.(less|css)$/,
            loader: "style!css!less"
        },{
            test: /\.(png|jpg|gif)$/,
            loader: 'url?limit=25000',
            include: [path.join(__dirname, 'static/images'), path.join(__dirname, 'src/less')]
        }]
    },
    devServer: {
        //inline: true
        port: 8080
    }
};