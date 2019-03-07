const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
 

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dest'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/i,
                use: ['file-loader']
            }
        ]
    },
    devtool: 'source-map',
    resolve:{
        alias:{
            'vue':'vue/dist/vue.esm'
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'index.html'
        })
    ]
}