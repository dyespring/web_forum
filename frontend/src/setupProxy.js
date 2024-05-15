const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // 👈🏽 your API endpoint goes here.
    createProxyMiddleware({
      target: 'http://localhost:8000/api', 
      changeOrigin: true,
      headers: {
        origin: "http://localhost:8000"
      } 
    })
  );
};
