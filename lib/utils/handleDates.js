"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentDate = void 0;

var _luxon = require("luxon");

var getCurrentDate = function getCurrentDate() {
  return _luxon.DateTime.utc().toSQL({
    includeOffset: false
  });
};

exports.getCurrentDate = getCurrentDate;