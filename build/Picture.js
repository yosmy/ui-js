"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PictureProps = exports.Picture = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _platform = _interopRequireDefault(require("@yosmy/platform"));

var _primitiveUiSpec = require("@yosmy/primitive-ui-spec");

var _CirclePlaceholder = _interopRequireDefault(require("./CirclePlaceholder"));

var _Image = _interopRequireDefault(require("./Image"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Picture = function Picture(_ref) {
  var margin = _ref.margin,
      source = _ref.source,
      size = _ref.size,
      resize = _ref.resize,
      rounded = _ref.rounded,
      onClick = _ref.onClick;
  size = buildSize(size);

  if (source === null) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_CirclePlaceholder["default"], {
      margin: margin,
      size: size
    });
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Image["default"], {
    margin: margin,
    border: {
      radius: rounded ? _platform["default"].select({
        "ios": size / 2,
        "android": size
      }) : undefined
    },
    source: source,
    resize: resize,
    width: size,
    height: size,
    onClick: onClick
  });
};

exports.Picture = Picture;
var Props = {
  margin: _primitiveUiSpec.Container.MarginProp,
  source: _primitiveUiSpec.Image.SourceProp,
  resize: _primitiveUiSpec.Image.ResizeProp,
  rounded: _propTypes["default"].bool,
  size: _propTypes["default"].oneOf(["sm", "md", "lg", "xl"]),
  onClick: _propTypes["default"].func
};
exports.PictureProps = Props;
Picture.propTypes = Props;
Picture.defaultProps = {
  rounded: true,
  resize: "cover"
};

var buildSize = function buildSize(size) {
  // https://github.com/react-native-elements/react-native-elements/blob/next/src/avatar/Avatar.js#L21
  switch (size) {
    case "sm":
      size = 34;
      break;

    case "md":
      size = 50;
      break;

    case "lg":
      size = 75;
      break;

    case "xl":
    case undefined:
      size = 150;
      break;

    default:
      throw new Error("Invalid size \"".concat(size, "\""));
  }

  return size;
};