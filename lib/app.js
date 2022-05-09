"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _package = require("../package.json");

var _handleConsole = require("./utils/handleConsole");

var _routesSystem = require("./routes/routesSystem");

var app = (0, _express["default"])(); // cargando las variables de entorno

_dotenv["default"].config();

var PORT = process.env.PORT || 3000;
var SERVER = process.env.SERVER || 'localhost'; // configurando express

app.set('port', PORT);
app.set('json spaces', 2);
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_express["default"].json());
app.use((0, _cors["default"])());
app.use(_routesSystem.systemRoutes);
app.use(_express["default"]["static"]('public'));
app.listen(PORT, function () {
  (0, _handleConsole.consoleInfo)("API v".concat(_package.version, ", Server Started at: http://").concat(SERVER, ":").concat(PORT, " \u2615"));
});