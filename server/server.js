const express = require("express");
const bodyParser = require("body-parser");

const port = process.env.PORT || 3002;

/** server 실행 코드  */
app.listen(port, () => {
  console.log(`${port} 포트 서버가 시작됐습니다.`);
  console.log(`${port} The server is running.`);
});
