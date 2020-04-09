"use strict";

var _passport = _interopRequireDefault(require("passport"));

var _User = _interopRequireDefault(require("./models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_passport["default"].use(_User["default"].createStrategy());

_passport["default"].serializeUser(_User["default"].serializeUser()); // user id만 쿠키를 통해서 전달하는 shortcut function


_passport["default"].deserializeUser(_User["default"].deserializeUser()); // user id를 통해서 어떻게 사용자를 식별하는가?