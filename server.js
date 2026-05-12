const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(
  "/",
  createProxyMiddleware({
    target: "http://13.48.166.164:8501",
    changeOrigin: true,
    ws: true
  })
);

app.listen(process.env.PORT || 3000);
