"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _helmet = _interopRequireDefault(require("helmet"));

var _morgan = _interopRequireDefault(require("morgan"));

var _passport = _interopRequireDefault(require("passport"));

var _mongoose = _interopRequireWildcard(require("mongoose"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _path = _interopRequireDefault(require("path"));

var _connectMongo = _interopRequireDefault(require("connect-mongo"));

var _middlewares = require("./middlewares");

var _routes = _interopRequireDefault(require("./routes"));

var _globalRouter = _interopRequireDefault(require("./routers/globalRouter"));

var _userRouter = _interopRequireDefault(require("./routers/userRouter"));

var _videoRouter = _interopRequireDefault(require("./routers/videoRouter"));

require("./passport");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const express = require('express');
// ===== middleware =======/
// ===== Router =======/
// userRouter가 default로 export 되지 않았으므로 {}를 붙여줄 것.
var app = (0, _express["default"])();
var CookieStore = (0, _connectMongo["default"])(_expressSession["default"]);
app.use((0, _helmet["default"])()); // for security

app.set("view engine", "pug"); // set은 앱의 설정, view engine의 default는 undefined임. expressjs 공식문서 볼 것.

app.set("views", _path["default"].join(__dirname, "views")); // 현재 디렉토리 수정

app.use("/uploads", _express["default"]["static"](_path["default"].join(__dirname, "uploads"))); // directory에 파일을 전달하는 새로운 middleware function.

app.use("/static", _express["default"]["static"](_path["default"].join(__dirname, "static")));
app.use((0, _cookieParser["default"])()); // user 정보를 쿠키에 저장하기 위함, 쿠키를 전달받아서 사용할 수 있도록 해줌.(ex 사용자 인증)

app.use(_bodyParser["default"].json()); // 서버에 저장된 것들을 받아오기 위함. 사용자가 웹사이트로 전달하는 정보들을 검사

app.use(_bodyParser["default"].urlencoded({
  extended: true
})); // (우리가 서버에 어떤 형식을 전송하는 지 알려주어야 함) urlencoded - normal html

app.use((0, _morgan["default"])("dev")); // for logging

app.use((0, _expressSession["default"])({
  secret: process.env.COOKIE_SECREET,
  resave: true,
  saveUninitialized: false,
  store: new CookieStore({
    mongooseConnection: _mongoose["default"].connection
  })
}));
app.use(_passport["default"].initialize());
app.use(_passport["default"].session());
app.use(_middlewares.localsMiddleware); // local 변수에 접근하기 위한 전역함수.

app.use(_routes["default"].home, _globalRouter["default"]);
app.use(_routes["default"].users, _userRouter["default"]); // get이 아니라 use의 의미는 누군가 /user로 접근하면 whold userRouter 를 쓰겠다!

app.use(_routes["default"].videos, _videoRouter["default"]);
var _default = app;
exports["default"] = _default;