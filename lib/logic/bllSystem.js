"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.systemVersion = exports.healthCheck = void 0;

var _package = require("../../package.json");

var healthCheck = function healthCheck(req, res) {
  res.status(200).json('It works!');
};

exports.healthCheck = healthCheck;

var systemVersion = function systemVersion(req, res) {
  res.status(200).json("API Version: ".concat(_package.version));
};

exports.systemVersion = systemVersion;