"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _validation = require("../utils/validation");
var _reactToastify = require("react-toastify");
require("./Formulaire.css");
var _ListeInscrit = _interopRequireDefault(require("./ListeInscrit"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Formulaire = () => {
  const [nom, setNom] = (0, _react.useState)('');
  const [prenom, setPrenom] = (0, _react.useState)('');
  const [email, setEmail] = (0, _react.useState)('');
  const [dateNaissance, setDateNaissance] = (0, _react.useState)('');
  const [ville, setVille] = (0, _react.useState)('');
  const [codePostal, setCodePostal] = (0, _react.useState)('');
  const [users, setUsers] = (0, _react.useState)([]);
  const [error, setError] = (0, _react.useState)('');
  const handleSubmit = e => {
    e.preventDefault();
    setError('');

    // Validation des champs
    if (!(0, _validation.validateName)(nom) || !(0, _validation.validateName)(prenom) || !(0, _validation.validateCity)(ville)) {
      setError('Nom, prénom ou ville invalide');
      return;
    }
    if (!(0, _validation.validateEmail)(email)) {
      setError('Email invalide');
      return;
    }
    if (!(0, _validation.validateDateOfBirth)(dateNaissance)) {
      setError('Vous devez avoir au moins 18 ans');
      return;
    }
    if (!(0, _validation.validatePostalCode)(codePostal)) {
      setError('Code postal invalide');
      return;
    }

    // Ajout de l'utilisateur
    const newUser = {
      nom,
      prenom,
      email,
      dateNaissance,
      ville,
      codePostal
    };
    setUsers([...users, newUser]);
    _reactToastify.toast.success('Inscription réussie !');

    // Réinitialisation des champs
    setNom('');
    setPrenom('');
    setEmail('');
    setDateNaissance('');
    setVille('');
    setCodePostal('');
  };
  const isFormValid = nom && prenom && email && dateNaissance && ville && codePostal;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "form"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Formulaire d'inscription"), /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: "Nom",
    value: nom,
    onChange: e => setNom(e.target.value)
  }), /*#__PURE__*/_react.default.createElement("p", {
    style: {
      color: 'red'
    }
  }, !(0, _validation.validateName)(nom) && nom && "Nom invalide"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: "Pr\xE9nom",
    value: prenom,
    onChange: e => setPrenom(e.target.value)
  }), /*#__PURE__*/_react.default.createElement("p", {
    style: {
      color: 'red'
    }
  }, !(0, _validation.validateName)(prenom) && prenom && "Prénom invalide"), /*#__PURE__*/_react.default.createElement("input", {
    type: "email",
    placeholder: "Email",
    value: email,
    onChange: e => setEmail(e.target.value)
  }), /*#__PURE__*/_react.default.createElement("p", {
    style: {
      color: 'red'
    }
  }, !(0, _validation.validateEmail)(email) && email && "Email invalide"), /*#__PURE__*/_react.default.createElement("input", {
    type: "date",
    placeholder: "Date",
    value: dateNaissance,
    onChange: e => setDateNaissance(e.target.value)
  }), /*#__PURE__*/_react.default.createElement("p", {
    style: {
      color: 'red'
    }
  }, !(0, _validation.validateDateOfBirth)(dateNaissance) && dateNaissance && "Vous devez avoir au moins 18 ans"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: "Ville ",
    value: ville,
    onChange: e => setVille(e.target.value)
  }), /*#__PURE__*/_react.default.createElement("p", {
    style: {
      color: 'red'
    }
  }, !(0, _validation.validateCity)(ville) && ville && "Ville invalide"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: "Code Postal",
    value: codePostal,
    onChange: e => setCodePostal(e.target.value)
  }), /*#__PURE__*/_react.default.createElement("p", {
    style: {
      color: 'red'
    }
  }, !(0, _validation.validatePostalCode)(codePostal) && codePostal && "Code postal invalide"), error && /*#__PURE__*/_react.default.createElement("p", {
    style: {
      color: 'red'
    }
  }, error), /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    disabled: !isFormValid
  }, "S'inscrire")), /*#__PURE__*/_react.default.createElement(_ListeInscrit.default, {
    liste: users
  }));
};
var _default = exports.default = Formulaire;