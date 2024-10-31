"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Formulaire = _interopRequireDefault(require("./components/Formulaire"));
var _reactToastify = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const App = () => {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Formulaire.default, null), /*#__PURE__*/_react.default.createElement(_reactToastify.ToastContainer, null));
};
var _default = exports.default = App;