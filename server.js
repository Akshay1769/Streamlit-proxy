const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(
  "/",
  createProxyMiddleware({
    target:"https://ats-system-1-a6dv.onrender.com",
    changeOrigin: true,
    ws: true
  })
);

app.listen(process.env.PORT || 3000);
