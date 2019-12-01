"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabButton = exports.WarningButton = exports.DangerButton = exports.TertiaryButton = exports.SecondaryButton = exports.PrimaryButton = exports.ThemedButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _primitiveUiSpec = require("@yosmy/primitive-ui-spec");

var _primitiveUi = require("@yosmy/primitive-ui");

var _style = require("@yosmy/style");

var _Container = require("./Container");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Button = function Button(_ref) {
  var theme = _ref.theme,
      margin = _ref.margin,
      padding = _ref.padding,
      border = _ref.border,
      contrast = _ref.contrast,
      progress = _ref.progress,
      _onClick = _ref.onClick,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["theme", "margin", "padding", "border", "contrast", "progress", "onClick", "children"]);

  margin = (0, _Container.compileMargin)(theme.spacing, _objectSpread(_objectSpread({}, theme.button.margin), _primitiveUiSpec.Container.normalizeMargin(margin)));
  padding = (0, _Container.compilePadding)(theme.spacing, _objectSpread(_objectSpread({}, theme.button.padding), _primitiveUiSpec.Container.normalizePadding(padding)));
  border = border || theme.button.border;

  if (progress) {
    children = putProgress(theme, children);
  }

  if (contrast) {
    theme.button.color = theme.button.contrast.color;
  }

  children = addColor(children, theme.button.color);
  children = addMargin(children, theme);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_primitiveUi.Button, _objectSpread(_objectSpread({
    margin: margin,
    padding: padding,
    border: border,
    background: theme.button.background,
    onClick: function onClick() {
      // It is still an onClick function but do nothing
      if (progress) {
        return;
      }

      _onClick();
    }
  }, props), {}, {
    children: children
  }));
};

exports.ThemedButton = Button;
Button.propTypes = {
  contrast: _propTypes["default"].bool,
  margin: _primitiveUiSpec.Container.MarginProp,
  padding: _primitiveUiSpec.Container.PaddingProp,
  progress: _propTypes["default"].bool,
  onClick: _primitiveUiSpec.Container.OnClickProp.isRequired
};

var isIcon = function isIcon(elem) {
  return !elem.props.children;
};

var putProgress = function putProgress(theme, children) {
  var progress = /*#__PURE__*/(0, _jsxRuntime.jsx)(_primitiveUi.Progress, {
    size: 10
  });

  var count = _react["default"].Children.count(children);

  switch (count) {
    case 1:
      if (isIcon(children)) {
        children = progress;
      } else {
        children = [children, /*#__PURE__*/(0, _jsxRuntime.jsx)(_primitiveUi.Progress, {
          color: theme.button.color,
          style: {
            position: "absolute",
            top: theme.spacing(theme.button.padding.top) + theme.button.progress.top,
            right: theme.spacing(2)
          }
        })];
      }

      break;

    case 2:
      children = _react["default"].Children.map(children, function (child) {
        if (isIcon(child)) {
          return progress;
        }

        return child;
      });
      break;

    default:
      throw new Error("Too many components inside a button");
  }

  return children;
};

var addColor = function addColor(children, color) {
  return _react["default"].Children.map(children, function (child, i) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(child.type, _objectSpread({
      color: color
    }, child.props), i);
  });
};

var addMargin = function addMargin(children) {
  var count = _react["default"].Children.count(children);

  if (count !== 2) {
    return children;
  }

  return _react["default"].Children.map(children, function (child, i) {
    if (isIcon(child)) {
      return child;
    }

    return /*#__PURE__*/(0, _jsxRuntime.jsx)(child.type, _objectSpread({
      margin: {
        left: i === 1 ? 1 : 0,
        right: i === 0 ? 1 : 0
      }
    }, child.props), i);
  });
};

var PrimaryButton = function PrimaryButton(_ref2) {
  var theme = _ref2.theme,
      props = _objectWithoutProperties(_ref2, ["theme"]);

  theme = _objectSpread(_objectSpread({}, theme), {}, {
    button: _objectSpread(_objectSpread(_objectSpread({}, theme.button), theme.primary_button), {}, {
      border: _objectSpread(_objectSpread({}, theme.button.border), theme.primary_button.border)
    })
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Button, _objectSpread({
    theme: theme
  }, props));
};

var PrimaryButtonWithTheme = (0, _style.withTheme)(PrimaryButton);
exports.PrimaryButton = PrimaryButtonWithTheme;

var SecondaryButton = function SecondaryButton(_ref3) {
  var theme = _ref3.theme,
      props = _objectWithoutProperties(_ref3, ["theme"]);

  theme = _objectSpread(_objectSpread({}, theme), {}, {
    button: _objectSpread(_objectSpread(_objectSpread({}, theme.button), theme.secondary_button), {}, {
      border: _objectSpread(_objectSpread({}, theme.button.border), theme.secondary_button.border)
    })
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Button, _objectSpread({
    theme: theme
  }, props));
};

var SecondaryButtonWithTheme = (0, _style.withTheme)(SecondaryButton);
exports.SecondaryButton = SecondaryButtonWithTheme;

var TertiaryButton = function TertiaryButton(_ref4) {
  var theme = _ref4.theme,
      props = _objectWithoutProperties(_ref4, ["theme"]);

  theme = _objectSpread(_objectSpread({}, theme), {}, {
    button: _objectSpread(_objectSpread(_objectSpread({}, theme.button), theme.tertiary_button), {}, {
      border: _objectSpread(_objectSpread({}, theme.button.border), theme.tertiary_button.border)
    })
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Button, _objectSpread({
    theme: theme
  }, props));
};

var TertiaryButtonWithTheme = (0, _style.withTheme)(TertiaryButton);
exports.TertiaryButton = TertiaryButtonWithTheme;

var WarningButton = function WarningButton(_ref5) {
  var theme = _ref5.theme,
      props = _objectWithoutProperties(_ref5, ["theme"]);

  theme = _objectSpread(_objectSpread({}, theme), {}, {
    button: _objectSpread(_objectSpread(_objectSpread({}, theme.button), theme.warning_button), {}, {
      border: _objectSpread(_objectSpread({}, theme.button.border), theme.warning_button.border)
    })
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Button, _objectSpread({
    theme: theme
  }, props));
};

var WarningButtonWithTheme = (0, _style.withTheme)(WarningButton);
exports.WarningButton = WarningButtonWithTheme;

var DangerButton = function DangerButton(_ref6) {
  var theme = _ref6.theme,
      props = _objectWithoutProperties(_ref6, ["theme"]);

  theme = _objectSpread(_objectSpread({}, theme), {}, {
    button: _objectSpread(_objectSpread(_objectSpread({}, theme.button), theme.danger_button), {}, {
      border: _objectSpread(_objectSpread({}, theme.button.border), theme.danger_button.border)
    })
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Button, _objectSpread({
    theme: theme
  }, props));
};

var DangerButtonWithTheme = (0, _style.withTheme)(DangerButton);
exports.DangerButton = DangerButtonWithTheme;

var TabButton = function TabButton(_ref7) {
  var theme = _ref7.theme,
      first = _ref7.first,
      last = _ref7.last,
      props = _objectWithoutProperties(_ref7, ["theme", "first", "last"]);

  theme = _objectSpread(_objectSpread({}, theme), {}, {
    button: _objectSpread(_objectSpread(_objectSpread({}, theme.button), theme.tab_button), {}, {
      border: _objectSpread(_objectSpread(_objectSpread({}, theme.button.border), theme.tab_button.border), {}, {
        left: !first ? {
          width: 1,
          color: theme.tab_button.border.color
        } : undefined
      }),
      padding: {
        left: !first ? theme.tab_button.padding.left : undefined,
        right: !last ? theme.tab_button.padding.right : undefined
      }
    })
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Button, _objectSpread({
    theme: theme,
    align: {
      main: "flex-start"
    }
  }, props));
};

var TabButtonWithTheme = (0, _style.withTheme)(TabButton);
exports.TabButton = TabButtonWithTheme;