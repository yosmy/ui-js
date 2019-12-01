"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormIcon = exports.Icon = void 0;

var _react = _interopRequireDefault(require("react"));

var _style = require("@yosmy/style");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Icon = function Icon(_ref) {
  var theme = _ref.theme,
      data = _ref.data,
      size = _ref.size,
      color = _ref.color,
      contrast = _ref.contrast,
      big = _ref.big,
      props = _objectWithoutProperties(_ref, ["theme", "data", "size", "color", "contrast", "big"]);

  var Icon = data;

  if (contrast) {
    theme.icon.color = theme.icon.contrast.color;
  }

  if (big) {
    theme.icon.size = theme.icon.big.size;
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, _objectSpread({
    size: size || theme.icon.size,
    color: color || theme.icon.color
  }, props));
};

var IconWithTheme = (0, _style.withTheme)(Icon);
exports.Icon = IconWithTheme;

var FormIcon = function FormIcon(_ref2) {
  var theme = _ref2.theme,
      props = _objectWithoutProperties(_ref2, ["theme"]);

  theme = _objectSpread(_objectSpread({}, theme), {}, {
    icon: _objectSpread(_objectSpread({}, theme.icon), theme.form_icon)
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, _objectSpread({
    theme: theme
  }, props));
};

var FormIconWithTheme = (0, _style.withTheme)(FormIcon);
exports.FormIcon = FormIconWithTheme;