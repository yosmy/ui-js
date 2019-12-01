"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SecondaryText = exports.TitleText = exports.BannerText = exports.Text = void 0;

var _react = _interopRequireDefault(require("react"));

var _style = require("@yosmy/style");

var _primitiveUiSpec = require("@yosmy/primitive-ui-spec");

var _primitiveUi = require("@yosmy/primitive-ui");

var _Container = require("./Container");

var _LinePlaceholder = _interopRequireDefault(require("./LinePlaceholder"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Props = {
  margin: _primitiveUiSpec.Container.MarginProp
};

var Text = function Text(_ref) {
  var theme = _ref.theme,
      margin = _ref.margin,
      padding = _ref.padding,
      contrast = _ref.contrast,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["theme", "margin", "padding", "contrast", "children"]);

  margin = (0, _Container.compileMargin)(theme.spacing, _objectSpread(_objectSpread({}, _primitiveUiSpec.Container.normalizeMargin(theme.text.margin)), _primitiveUiSpec.Container.normalizeMargin(margin)));

  if (contrast) {
    theme.text.color = theme.text.contrast.color;
  } // Lazy


  if (!children) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_LinePlaceholder["default"], _objectSpread({
      margin: margin
    }, props));
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_primitiveUi.Text, _objectSpread(_objectSpread({
    margin: margin,
    padding: (0, _Container.compilePadding)(theme.spacing, padding),
    color: theme.text.color,
    size: theme.text.size
  }, props), {}, {
    children: children
  }));
};

Text.propTypes = Props;
var TextWithTheme = (0, _style.withTheme)(Text);
exports.Text = TextWithTheme;

var BannerText = function BannerText(_ref2) {
  var theme = _ref2.theme,
      children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["theme", "children"]);

  theme = _objectSpread(_objectSpread({}, theme), {}, {
    text: _objectSpread({}, theme.banner_text)
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Text, _objectSpread(_objectSpread({
    theme: theme
  }, props), {}, {
    children: children
  }));
};

BannerText.propTypes = Props;
var BannerTextWithTheme = (0, _style.withTheme)(BannerText);
exports.BannerText = BannerTextWithTheme;

var TitleText = function TitleText(_ref3) {
  var theme = _ref3.theme,
      children = _ref3.children,
      props = _objectWithoutProperties(_ref3, ["theme", "children"]);

  theme = _objectSpread(_objectSpread({}, theme), {}, {
    text: _objectSpread({}, theme.title_text)
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Text, _objectSpread(_objectSpread({
    theme: theme
  }, props), {}, {
    children: children
  }));
};

TitleText.propTypes = Props;
var TitleTextWithTheme = (0, _style.withTheme)(TitleText);
exports.TitleText = TitleTextWithTheme;

var SecondaryText = function SecondaryText(_ref4) {
  var theme = _ref4.theme,
      children = _ref4.children,
      props = _objectWithoutProperties(_ref4, ["theme", "children"]);

  theme = _objectSpread(_objectSpread({}, theme), {}, {
    text: _objectSpread({}, theme.secondary_text)
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Text, _objectSpread(_objectSpread({
    theme: theme
  }, props), {}, {
    children: children
  }));
};

SecondaryText.propTypes = Props;
var SecondaryTextWithTheme = (0, _style.withTheme)(SecondaryText);
exports.SecondaryText = SecondaryTextWithTheme;