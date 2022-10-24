const express = "express";
const bodyParser = "body-parser";

const app = express();

app.use(express.static(path.join(__dirname, "react-project/build")));

app.get("/", function (요청, 응답) {
  응답.sendFile(path.join(__dirname, "/react-project/build/index.html"));
});

// const port = process.env.PORT || 3001 || 3002;

// app.listen(port, () => {
//   console.log(`${port} 포트 서버가 시작됐습니다.`);
// });
