const express = require("express");
const app = express();
const bodyParser = "body-parser";

const port = 8080;

app.get("/", " test");

app.listen(port, () => {
  console.log(`${port} 포트 서버가 시작됐습니다.`);
});
