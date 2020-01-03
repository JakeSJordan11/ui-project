"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Ripple = _interopRequireDefault(require("./Ripple"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  overflow: hidden;\n  position: relative;\n  cursor: pointer;\n  background: none;\n  padding: 1rem 3rem;\n  border: 2px solid;\n  color: #303030;\n  text-transform: uppercase;\n  border-radius: 5px;\n  box-shadow: 0 2px 5px 1px #888888;\n  margin: 1rem;\n  :focus {\n    outline: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents.default.button(_templateObject());

var RippleButton = function RippleButton(props) {
  return _react.default.createElement(Button, null, props.children || "default ripple button", _react.default.createElement(_Ripple.default, {
    color: props.color || "#134751"
  }));
};

var _default = RippleButton;
exports.default = _default;

//# sourceMappingURL=RippleButton.jsx.map