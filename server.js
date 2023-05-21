const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// app.use(express.json());
// var cors = require("cors");
// app.use(cors());

app.use(express.static(path.join(__dirname, "/build")));

app.listen(port, function () {
  console.log("서버실행" + port);
});

// react-router-dom 에게 페이지 라우팅 전권을 넘기기
app.get("*", function (res, req) {
  req.sendFile(path.join(__dirname, "/build/index.html"));
});
