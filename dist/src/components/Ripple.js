"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  span {\n    transform: scale(0);\n    border-radius: 100%;\n    position: absolute;\n    opacity: 0.75;\n    background-color: ", ";\n    animation-name: ripple;\n    animation-duration: ", "ms;\n  }\n\n  @keyframes ripple {\n    to {\n      opacity: 0;\n      transform: scale(2);\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var RippleContainer = _styledComponents.default.div(_templateObject(), function (props) {
  return props.color;
}, function (props) {
  return props.duration;
}); //TODO Get the debounce to work properly


var useDebouncedRippleCleanUp = function useDebouncedRippleCleanUp(rippleCount, duration, cleanUpFunction) {
  (0, _react.useLayoutEffect)(function () {
    var bounce = null;

    if (rippleCount > 0) {
      clearTimeout(bounce);
      bounce = setTimeout(function () {
        cleanUpFunction();
        clearTimeout(bounce);
      }, duration * 4);
    }

    return clearTimeout(bounce);
  }, [rippleCount, duration, cleanUpFunction]);
};

var Ripple = function Ripple(_ref) {
  var _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 850 : _ref$duration,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "#fff" : _ref$color;

  //! Create an empty stateful array for the ripples
  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      rippleArray = _useState2[0],
      setRippleArray = _useState2[1]; //TODO Get the debounce to work


  useDebouncedRippleCleanUp(rippleArray.length, duration, function () {
    setRippleArray([]);
  }); //! Create a new ripple containing mouses current locatioan

  var addRipple = function addRipple(event) {
    var rippleContainer = event.currentTarget.getBoundingClientRect();
    var size = rippleContainer.width > rippleContainer.height ? rippleContainer.width : rippleContainer.height;
    var x = event.pageX - rippleContainer.x - size / 2;
    var y = event.pageY - rippleContainer.y - size / 2;
    var newRippleArray = {
      x: x,
      y: y,
      size: size
    }; //!add new ripple to the usestate array

    setRippleArray([].concat(_toConsumableArray(rippleArray), [newRippleArray]));
  };

  return _react.default.createElement(RippleContainer, {
    duration: duration,
    color: color,
    onMouseDown: addRipple
  }, rippleArray.length > 0 && rippleArray.map(function (ripple, index) {
    return _react.default.createElement("span", {
      key: "ripple_" + index,
      style: {
        top: ripple.y,
        left: ripple.x,
        width: ripple.size,
        height: ripple.size
      }
    });
  }));
};

var _default = Ripple;
exports.default = _default;

//# sourceMappingURL=Ripple.jsx.map