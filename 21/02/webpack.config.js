const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

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
                use: ['vue-style-loader', 'css-loader']
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/i,
                use: ['file-loader']
            },
            {
                 test: /\.vue$/i,
                 use: ['vue-loader',]
            },
            {
                 test: /\.less$/i,
                 use: ['vue-style-loader', 'css-loader','less-loader']
            }
        ]
    },
    devtool: 'source-map',
    resolve:{
        alias:{
            'vue':'vue/dist/vue.esm',
            '@': path.resolve(__dirname, 'src/components')
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'index.html'
        }),
        new VueLoaderPlugin()
    ]
}