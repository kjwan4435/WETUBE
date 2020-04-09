"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadVideo = exports.onlyPrivate = exports.onlyPublic = exports.localsMiddleware = void 0;

var _multer = _interopRequireDefault(require("multer"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var multerVideo = (0, _multer["default"])({
  dest: "uploads/videos/"
});

var localsMiddleware = function localsMiddleware(req, res, next) {
  res.locals.siteName = "WeTube"; // locals에 있는 건 Template에서 변수명처럼 존재한다.

  res.locals.routes = _routes["default"];
  res.locals.user = req.user || null;
  console.log(req.user);
  next();
};

exports.localsMiddleware = localsMiddleware;

var onlyPublic = function onlyPublic(req, res, next) {
  if (req.user) {
    res.redirect(_routes["default"].home);
  } else {
    next();
  }
};

exports.onlyPublic = onlyPublic;

var onlyPrivate = function onlyPrivate(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.redirect(_routes["default"].home);
  }
};

exports.onlyPrivate = onlyPrivate;
var uploadVideo = multerVideo.single("videoFile");
exports.uploadVideo = uploadVideo;