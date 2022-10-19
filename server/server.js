const express = require('express');
const app = express();

const port = process.env.PORT || 3001 || 3002;

app.listen(port, () => {
  console.log(`${port} 포트 서버가 시작됐습니다.`);
});
