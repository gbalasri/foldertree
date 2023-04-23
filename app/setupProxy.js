const {createProxyMiddleware} = require('http-proxy-middleware');
module.exports = app => {
    app.use(
        createProxyMiddleware('/', {
        target : 'https://dev.test.sega.co.uk/api/list',
        changeOrigin :true
        }
        )
    )
}