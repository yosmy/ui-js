"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _style = require("@yosmy/style");

var _Container = _interopRequireDefault(require("./Container"));

var _LinePlaceholder = _interopRequireDefault(require("./LinePlaceholder"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LoaderListLoading = function LoaderListLoading() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Container["default"], {
    margin: {
      top: 2
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Container["default"], {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_LinePlaceholder["default"], {})
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container["default"], {
      margin: {
        top: 1
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_LinePlaceholder["default"], {})
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container["default"], {
      margin: {
        top: 1
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_LinePlaceholder["default"], {})
    })]
  });
};

var _default = (0, _style.withTheme)(LoaderListLoading);

exports["default"] = _default;