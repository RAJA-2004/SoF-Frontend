const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  // Only set up proxy in development mode
  if (process.env.NODE_ENV === 'development') {
    app.use(
      '/api',
      createProxyMiddleware({
        target: process.env.REACT_APP_API_URL || 'https://sof-backend-production.up.railway.app',
        changeOrigin: true,
        secure: false,
      })
    );
  }
};
