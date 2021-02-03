const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports = function(app) {
 app.use(
   '/api/json_KanjiFurigana.asp',
   // '/zh-hant/tools/kana',
   createProxyMiddleware({
     // target: 'https://www.jcinfo.net/',
     target: 'https://www.jpmarumaru.com/tw/',
     changeOrigin: true,
   })
 );
};
