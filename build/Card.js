"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WarningCard = exports.Card = void 0;

var _react = _interopRequireDefault(require("react"));

var _style = require("@yosmy/style");

var _primitiveUiSpec = require("@yosmy/primitive-ui-spec");

var _Container = _interopRequireDefault(require("./Container"));

var _Text = require("./Text");

var _Progress = _interopRequireDefault(require("./Progress"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Props = {
  flow: _primitiveUiSpec.Container.FlowProp,
  align: _primitiveUiSpec.Container.AlignProp,
  margin: _primitiveUiSpec.Container.MarginProp,
  padding: _primitiveUiSpec.Container.PaddingProp
};

var Card = function Card(_ref) {
  var theme = _ref.theme,
      flow = _ref.flow,
      align = _ref.align,
      margin = _ref.margin,
      padding = _ref.padding,
      title = _ref.title,
      actions = _ref.actions,
      progress = _ref.progress,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["theme", "flow", "align", "margin", "padding", "title", "actions", "progress", "children"]);

  margin = _objectSpread(_objectSpread({}, theme.card.margin), _primitiveUiSpec.Container.normalizeMargin(margin));
  padding = _objectSpread(_objectSpread({}, theme.card.padding), _primitiveUiSpec.Container.normalizePadding(padding));
  actions = renderActions(theme, actions);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Container["default"], _objectSpread(_objectSpread({
    margin: margin,
    background: theme.card.background,
    shadow: theme.card.shadow // gradient={theme.card.gradient}
    ,
    border: theme.card.border
  }, props), {}, {
    children: [title && renderTitle(theme, padding, title, progress), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container["default"], {
      flow: flow,
      align: align,
      padding: padding,
      children: children
    }), actions && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container["default"], {
      flow: "row",
      align: {
        main: "flex-start",
        cross: "flex-start"
      },
      children: actions
    })]
  }));
};

Card.propTypes = Props;

var renderTitle = function renderTitle(theme, padding, title, progress) {
  var p = padding && padding.top ? padding.top : 0;
  var color = theme.card.title && theme.card.title.color ? theme.card.title.color : undefined;
  var background = theme.card.title && theme.card.title.background ? theme.card.title.background : undefined;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Container["default"], {
    flow: "row",
    align: {
      main: "center",
      cross: "center"
    },
    padding: {
      top: p,
      bottom: p,
      left: p,
      right: p
    },
    background: background,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Text.TitleText, {
      color: color,
      children: title
    }), progress && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Progress["default"], {
      style: {
        position: "absolute",
        top: theme.spacing(2) + 5,
        right: theme.spacing(2) + 5
      }
    })]
  });
};

var renderActions = function renderActions(theme, actions) {
  if (!actions) {
    return actions;
  }

  actions = actions.map(function (action, i) {
    // Margin in all but the first
    var margin = i !== 0 ? {
      left: 1
    } : undefined;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(action.type, _objectSpread({
      margin: margin
    }, action.props), i);
  });
  actions = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container["default"], {
    flow: "row",
    align: {
      main: "flex-start",
      cross: "center"
    },
    margin: {
      top: 2
    },
    children: actions
  });
  return actions;
};

var CardWithTheme = (0, _style.withTheme)(Card);
exports.Card = CardWithTheme;

var WarningCard = function WarningCard(_ref2) {
  var theme = _ref2.theme,
      props = _objectWithoutProperties(_ref2, ["theme"]);

  theme = _objectSpread(_objectSpread({}, theme), {}, {
    card: _objectSpread(_objectSpread(_objectSpread({}, theme.card), theme.warning_card), {}, {
      border: _objectSpread(_objectSpread({}, theme.card.border), theme.warning_card.border),
      title: _objectSpread(_objectSpread({}, theme.card.title), theme.warning_card.title)
    })
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Card, _objectSpread({
    theme: theme
  }, props));
};

WarningCard.propTypes = Props;
var WarningCardWithTheme = (0, _style.withTheme)(WarningCard);
exports.WarningCard = WarningCardWithTheme;