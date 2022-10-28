const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:8001",
};

const app = express();
app.use(cors(corsOptions));

const models = require("./models/index.js");
models.sequelize
  .sync()
  .then(() => {
    console.log("aptitude Database Sync Completed.");
    console.log("데이터베이스 동기화가 성공했습니다.");
  })
  .catch(err => {
    console.error("aptitude Database Sync Failed.");
    console.error("Sync에 실패했습니다.");
    console.error(err);
  });

require("./routes/index.js")(app);

app.get("/", (req, res) => {
  res.send("test code");
  // res.json({ message: "test code" });
});

const port = 3002;

/** server 실행 코드  */
app.listen(port, () => {
  console.log(`${port} 포트 서버가 시작됐습니다.`);
  console.log(`${port} The server is running.`);
});
