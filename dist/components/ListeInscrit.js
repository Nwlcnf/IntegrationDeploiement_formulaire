"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ListeInscrit = _ref => {
  let {
    liste
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h2", null, "Liste des inscrits"), /*#__PURE__*/_react.default.createElement("ul", null, liste.map((user, index) => /*#__PURE__*/_react.default.createElement("li", {
    key: index
  }, `${user.nom} ${user.prenom} - ${user.email}`))));
};
var _default = exports.default = ListeInscrit;