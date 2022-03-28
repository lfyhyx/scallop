module.exports = {
    devServer: {
        proxy: {
            '/api': {
                // 反向代理配置
                target : 'http://***',
                changeOrigin : true
            }
        }
    }
}