"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _primitiveUiSpec = require("@yosmy/primitive-ui-spec");

var _flags = require("./flags");

var _Image = _interopRequireDefault(require("./Image"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Flag = function Flag(_ref) {
  var country = _ref.country,
      size = _ref.size,
      margin = _ref.margin,
      props = _objectWithoutProperties(_ref, ["country", "size", "margin"]);

  var flag = country === "world" ? _flags.world : _flags.flags[country.toLowerCase()] || _flags.unknown;

  var _buildWidthAndHeight = buildWidthAndHeight(size),
      width = _buildWidthAndHeight.width,
      height = _buildWidthAndHeight.height;

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Image["default"], _objectSpread({
    source: flag,
    margin: margin,
    width: width,
    height: height
  }, props));
};

var buildWidthAndHeight = function buildWidthAndHeight(size) {
  var width, height;

  switch (size) {
    case "xs":
      width = 7;
      height = 7 * 3 / 4;
      break;

    case "sm":
    case undefined:
      width = 14;
      height = 14 * 3 / 4;
      break;

    case "md":
      width = 28;
      height = 28 * 3 / 4;
      break;

    case "lg":
      width = 56;
      height = 56 * 3 / 4;
      break;

    default:
      throw new Error("invalid size ".concat(size));
  }

  return {
    width: width,
    height: height
  };
};

Flag.propTypes = {
  country: _propTypes["default"].string.isRequired,
  // iso
  name: _propTypes["default"].string,
  size: _propTypes["default"].oneOf(["xs", "sm", "md", "lg"]),
  margin: _primitiveUiSpec.Container.MarginProp
};
var _default = Flag;
exports["default"] = _default;