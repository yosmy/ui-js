"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _primitiveUiSpec = require("@yosmy/primitive-ui-spec");

var _Text = require("./Text");

var _Container = _interopRequireDefault(require("./Container"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ListItem = function ListItem(_ref) {
  var margin = _ref.margin,
      padding = _ref.padding,
      border = _ref.border,
      background = _ref.background,
      start = _ref.start,
      title = _ref.title,
      subtitle = _ref.subtitle,
      end = _ref.end,
      disabled = _ref.disabled,
      onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ["margin", "padding", "border", "background", "start", "title", "subtitle", "end", "disabled", "onClick"]);

  if (typeof start === "function") {
    start = start();
  }

  if (typeof title === "string") {
    title = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Text.Text, {
      wrap: true,
      children: title
    });
  } else if (typeof title === "function") {
    title = title();
  }

  if (typeof subtitle === "string") {
    subtitle = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Text.SecondaryText, {
      wrap: true,
      children: subtitle
    });
  } else if (typeof subtitle === "function") {
    subtitle = subtitle();
  }

  if (typeof end === "function") {
    end = end();
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Container["default"], _objectSpread(_objectSpread({
    flow: "row",
    align: {
      main: "flex-start",
      cross: "center"
    },
    margin: margin,
    padding: padding,
    border: border,
    background: background
  }, props), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Container["default"], {
      flow: "row",
      flex: true,
      align: {
        main: "flex-start",
        cross: "center"
      },
      onClick: !disabled ? onClick : undefined,
      children: [start, /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Container["default"], {
        margin: {
          left: start && 1
        },
        children: [title, subtitle]
      })]
    }), end]
  }));
};

ListItem.propTypes = {
  margin: _primitiveUiSpec.Container.MarginProp,
  padding: _primitiveUiSpec.Container.PaddingProp,
  border: _primitiveUiSpec.Container.BorderProp,
  background: _primitiveUiSpec.Container.BackgroundProp,
  start: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func]),
  title: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object, _propTypes["default"].func]),
  subtitle: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object, _propTypes["default"].func]),
  end: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func]),
  disabled: _propTypes["default"].bool,
  onClick: _propTypes["default"].func
};
var _default = ListItem;
exports["default"] = _default;