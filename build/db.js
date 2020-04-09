"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

_mongoose["default"].connect(process.env.MONGO_URL, {
  // 항상 mongodb를 실행할 때마다 줄 configuration. new version에 맞춰서 설정해놓은거임 신경 ㄴㄴ
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

var db = _mongoose["default"].connection;

var handleOpen = function handleOpen() {
  return console.log("✅ connect to DB");
};

var handleError = function handleError(error) {
  return console.log("\u274C connection DB ERROR: ".concat(error));
};

db.once("open", handleOpen);
db.on("error", handleError);