"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.consoleWarn = exports.consoleLog = exports.consoleInfo = exports.consoleError = void 0;

var _handleDates = require("./handleDates");

var consoleLog = function consoleLog(message) {
  console.log("".concat((0, _handleDates.getCurrentDate)(), " : Log => ").concat(message));
};

exports.consoleLog = consoleLog;

var consoleError = function consoleError(message) {
  console.error("".concat((0, _handleDates.getCurrentDate)(), " : Error => ").concat(message));
};

exports.consoleError = consoleError;

var consoleInfo = function consoleInfo(message) {
  console.info("".concat((0, _handleDates.getCurrentDate)(), " : Info => ").concat(message));
};

exports.consoleInfo = consoleInfo;

var consoleWarn = function consoleWarn(message) {
  console.warn("".concat((0, _handleDates.getCurrentDate)(), " : Warn => ").concat(message));
};

exports.consoleWarn = consoleWarn;