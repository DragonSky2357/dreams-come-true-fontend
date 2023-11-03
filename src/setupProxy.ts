import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function (app: any) {
  app.use(
    "/api", // 불러오려는 server 의 api path
    createProxyMiddleware({
      target: `${process.env.REACT_APP_BASE_URL}`, // server 주소를 넣어주면 된다.
      changeOrigin: true,
    })
  );
};
