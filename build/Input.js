"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = require("@yosmy/style");

var _primitiveUiSpec = require("@yosmy/primitive-ui-spec");

var _primitiveUi = require("@yosmy/primitive-ui");

var _Container = _interopRequireDefault(require("./Container"));

var _Error = _interopRequireDefault(require("./Error"));

var _Text = require("./Text");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Input = (0, _react.memo)(function (_ref) {
  var theme = _ref.theme,
      margin = _ref.margin,
      padding = _ref.padding,
      width = _ref.width,
      flex = _ref.flex,
      id = _ref.id,
      value = _ref.value,
      placeholder = _ref.placeholder,
      focus = _ref.focus,
      keyboard = _ref.keyboard,
      length = _ref.length,
      multi = _ref.multi,
      secure = _ref.secure,
      capitalize = _ref.capitalize,
      onChange = _ref.onChange,
      start = _ref.start,
      end = _ref.end,
      help = _ref.help,
      error = _ref.error,
      props = _objectWithoutProperties(_ref, ["theme", "margin", "padding", "width", "flex", "id", "value", "placeholder", "focus", "keyboard", "length", "multi", "secure", "capitalize", "onChange", "start", "end", "help", "error"]);

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Container["default"], _objectSpread(_objectSpread({
    flow: "column",
    align: {
      main: "flex-start",
      cross: "flex-start"
    },
    margin: margin,
    padding: padding,
    width: width,
    flex: flex
  }, props), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Container["default"], {
      flow: "row",
      align: {
        main: "flex-start",
        cross: "center"
      },
      border: {
        color: theme.input.border.color,
        bottom: {
          width: theme.input.border.width
        }
      },
      children: [start, /*#__PURE__*/(0, _jsxRuntime.jsx)(_primitiveUi.Input, {
        id: id,
        flex: 1,
        margin: {
          left: start && theme.spacing(2),
          right: end && theme.spacing(2)
        },
        value: value,
        placeholder: placeholder,
        focus: focus,
        keyboard: keyboard,
        length: length,
        multi: multi,
        secure: secure,
        capitalize: capitalize,
        height: theme.spacing(4),
        onChange: onChange
      }), end]
    }), help && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Text.SecondaryText, {
      margin: {
        top: 0.5
      },
      children: help
    }), error && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Error["default"], {
      align: {
        main: "flex-start"
      },
      margin: {
        top: 0.5
      },
      padding: {
        top: 0.5,
        bottom: 0.5,
        right: 0.5
      },
      children: error
    })]
  }));
}, function (prev, next) {
  return prev.value === next.value && prev.start === next.start && prev.end === next.end;
});
Input.propTypes = _objectSpread({
  margin: _primitiveUiSpec.Container.MarginProp,
  width: _primitiveUiSpec.Container.WidthProp,
  help: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  error: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].string]),
  start: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func]),
  end: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func])
}, _primitiveUiSpec.Input.Props); // const renderHelp = (help) => {
//     return help && (!Array.isArray(help)
//         ? <Text>
//             {help}
//         </Text>
//         : help.map((line, i) => {
//             return <Text
//                 key={i}
//             >
//                 {line}
//             </Text>
//         })
//     )
// }

var _default = (0, _style.withTheme)(Input);

exports["default"] = _default;