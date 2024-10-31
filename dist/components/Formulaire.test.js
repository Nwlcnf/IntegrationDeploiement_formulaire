"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _Formulaire = _interopRequireDefault(require("./Formulaire"));
var _reactToastify = require("react-toastify");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn()
  }
}));
describe('Formulaire component', () => {
  beforeEach(() => {
    (0, _react2.render)(/*#__PURE__*/_react.default.createElement(_Formulaire.default, null));
  });
  test('renders form fields', () => {
    expect(_react2.screen.getAllByPlaceholderText(/Nom/i)[0]).toBeInTheDocument(); // First element
    expect(_react2.screen.getByPlaceholderText(/Prénom/i)).toBeInTheDocument();
    expect(_react2.screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(_react2.screen.getByPlaceholderText(/Date/i)).toBeInTheDocument();
    expect(_react2.screen.getByPlaceholderText(/Ville/i)).toBeInTheDocument();
    expect(_react2.screen.getByPlaceholderText(/Code Postal/i)).toBeInTheDocument();
  });
  test('shows error messages for invalid inputs', () => {
    _react2.fireEvent.change(_react2.screen.getAllByPlaceholderText(/Nom/i)[0], {
      target: {
        value: '123'
      }
    });
    _react2.fireEvent.change(_react2.screen.getByPlaceholderText(/Prénom/i), {
      target: {
        value: ''
      }
    });
    _react2.fireEvent.change(_react2.screen.getByPlaceholderText(/Email/i), {
      target: {
        value: 'invalidEmail'
      }
    });
    _react2.fireEvent.change(_react2.screen.getByPlaceholderText(/Date/i), {
      target: {
        value: '2010-01-01'
      }
    }); // Moins de 18 ans
    _react2.fireEvent.change(_react2.screen.getByPlaceholderText(/Ville/i), {
      target: {
        value: 'City123'
      }
    });
    _react2.fireEvent.change(_react2.screen.getByPlaceholderText(/Code Postal/i), {
      target: {
        value: '1234'
      }
    });
    _react2.fireEvent.click(_react2.screen.getByRole('button', {
      name: /S'inscrire/i
    }));

    // Flexible matcher for 18 years error message
    expect(_react2.screen.getByText((content, element) => content.includes('Vous devez avoir au moins 18 ans'))).toBeInTheDocument();
    expect(_react2.screen.getByText(/Nom invalide/i)).toBeInTheDocument();
    expect(_react2.screen.getByText(/Email invalide/i)).toBeInTheDocument();
    expect(_react2.screen.getByText(/Ville invalide/i)).toBeInTheDocument();
    expect(_react2.screen.getByText(/Code postal invalide/i)).toBeInTheDocument();
  });
  test('submits form with valid inputs', () => {
    _react2.fireEvent.change(_react2.screen.getAllByPlaceholderText(/Nom/i)[0], {
      target: {
        value: 'John'
      }
    }); // First element
    _react2.fireEvent.change(_react2.screen.getByPlaceholderText(/Prénom/i), {
      target: {
        value: 'Doe'
      }
    });
    _react2.fireEvent.change(_react2.screen.getByPlaceholderText(/Email/i), {
      target: {
        value: 'john.doe@example.com'
      }
    });
    _react2.fireEvent.change(_react2.screen.getByPlaceholderText(/Date/i), {
      target: {
        value: '2000-01-01'
      }
    });
    _react2.fireEvent.change(_react2.screen.getByPlaceholderText(/Ville/i), {
      target: {
        value: 'Paris'
      }
    });
    _react2.fireEvent.change(_react2.screen.getByPlaceholderText(/Code Postal/i), {
      target: {
        value: '75001'
      }
    });
    _react2.fireEvent.click(_react2.screen.getByRole('button', {
      name: /S'inscrire/i
    }));
    expect(_react2.screen.getByText(/Liste des inscrits/i)).toBeInTheDocument();
    expect(_react2.screen.getByText(/John Doe - john.doe@example.com/i)).toBeInTheDocument();
  });
  test('disables button when form inputs are invalid', () => {
    expect(_react2.screen.getByRole('button', {
      name: /S'inscrire/i
    })).toBeDisabled();
    _react2.fireEvent.change(_react2.screen.getAllByPlaceholderText(/Nom/i)[0], {
      target: {
        value: 'John'
      }
    }); // First element
    _react2.fireEvent.change(_react2.screen.getByPlaceholderText(/Prénom/i), {
      target: {
        value: 'Doe'
      }
    });
    _react2.fireEvent.change(_react2.screen.getByPlaceholderText(/Email/i), {
      target: {
        value: 'john.doe@example.com'
      }
    });
    _react2.fireEvent.change(_react2.screen.getByPlaceholderText(/Date/i), {
      target: {
        value: '2000-01-01'
      }
    });
    _react2.fireEvent.change(_react2.screen.getByPlaceholderText(/Ville/i), {
      target: {
        value: 'Paris'
      }
    });
    expect(_react2.screen.getByRole('button', {
      name: /S'inscrire/i
    })).toBeDisabled();
    _react2.fireEvent.change(_react2.screen.getByPlaceholderText(/Code Postal/i), {
      target: {
        value: '75001'
      }
    });
    expect(_react2.screen.getByRole('button', {
      name: /S'inscrire/i
    })).toBeEnabled();
  });
});