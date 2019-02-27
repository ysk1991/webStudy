// postcss-loader没法单独工作 需要autoprefixer协助
// 帮助webpack增强功能
// postcss.config.js 会被 postcss-loader搜索到
module.exports={
    plugin:[
        require('autoprefixer')
    ]
}