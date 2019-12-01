"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _style = require("@yosmy/style");

var _Container = _interopRequireDefault(require("./Container"));

var _Button = require("./Button");

var _Text = require("./Text");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LoaderListMore = function LoaderListMore(_ref) {
  var onClick = _ref.onClick;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container["default"], {
    flow: "row",
    align: {
      main: "center"
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.PrimaryButton, {
      margin: {
        top: 2
      },
      onClick: onClick,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Text.Text, {
        children: "Mostrar m\xE1s"
      })
    })
  });
};

var _default = (0, _style.withTheme)(LoaderListMore);

exports["default"] = _default;