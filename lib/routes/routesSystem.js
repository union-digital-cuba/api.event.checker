"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.systemRoutes = void 0;

var _express = _interopRequireDefault(require("express"));

var _bllSystem = require("../logic/bllSystem");

var systemRoutes = _express["default"].Router();

exports.systemRoutes = systemRoutes;
systemRoutes.get('/health', _bllSystem.healthCheck);
systemRoutes.get('/version', _bllSystem.systemVersion);