"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var LoaderList = (0, _react.memo)(function (_ref) {
  var ui = _ref.ui,
      criteria = _ref.criteria,
      onCollect = _ref.onCollect;

  // Store items, until onEnrich is finished
  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      tmp = _useState2[0],
      setTmp = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      items = _useState4[0],
      setItems = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      skip = _useState6[0],
      setSkip = _useState6[1];

  var _useState7 = (0, _react.useState)({
    progress: false,
    done: false
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      execution = _useState8[0],
      setExecution = _useState8[1];

  (0, _react.useEffect)(function () {
    setTmp(null);
    setItems(null);
    setSkip(0);
  }, [criteria]);
  (0, _react.useEffect)(function () {
    setTmp(null);
    setExecution(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        progress: false
      });
    });
  }, [items]);
  (0, _react.useEffect)(function () {
    setExecution(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        progress: true
      });
    });
    onCollect(criteria.query, skip, criteria.limit).then(function (_ref2) {
      var items = _ref2.items,
          onEnrich = _ref2.onEnrich;
      setTmp(items);

      if (items.length === 0) {
        setItems(function (prev) {
          if (prev === null) {
            return items;
          }

          return prev.concat(items);
        });
        setExecution(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            done: true
          });
        });
        return;
      }

      if (!onEnrich) {
        onEnrich = /*#__PURE__*/function () {
          var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(items) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    return _context.abrupt("return", items);

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function onEnrich(_x) {
            return _ref3.apply(this, arguments);
          };
        }();
      }

      onEnrich(items).then(function (items) {
        setItems(function (prev) {
          if (prev === null) {
            return items;
          }

          return prev.concat(items);
        });
      })["catch"](console.error);
    });
  }, [skip, criteria]);

  if (tmp === null && items === null) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(ui.layout, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ui.loading, {})
    });
  }

  if ((tmp && tmp.length || 0) + (items && items.length || 0) === 0) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(ui.layout, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ui.empty, {})
    });
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(ui.layout, {
    children: [items && /*#__PURE__*/(0, _jsxRuntime.jsx)(ShowItems, {
      ui: {
        item: ui.item
      },
      items: items
    }), tmp && /*#__PURE__*/(0, _jsxRuntime.jsx)(ShowItems, {
      ui: {
        item: ui.item
      },
      items: tmp
    }), execution.progress === true ? /*#__PURE__*/(0, _jsxRuntime.jsx)(ui.loading, {}) : execution.done === false ? /*#__PURE__*/(0, _jsxRuntime.jsx)(ui.more, {
      onClick: function onClick() {
        setSkip(function (prev) {
          return prev + criteria.limit;
        });
      }
    }) : null]
  });
}, function (prev, next) {
  return JSON.stringify(prev.criteria) === JSON.stringify(next.criteria);
});
LoaderList.propTypes = {
  ui: _propTypes["default"].shape({
    layout: _propTypes["default"].func.isRequired,
    empty: _propTypes["default"].func.isRequired,
    loading: _propTypes["default"].oneOfType([_propTypes["default"].func.isRequired, _propTypes["default"].object.isRequired]),
    more: _propTypes["default"].oneOfType([_propTypes["default"].func.isRequired, _propTypes["default"].object.isRequired]),
    item: _propTypes["default"].func.isRequired
  }).isRequired,
  criteria: _propTypes["default"].shape({
    query: _propTypes["default"].object,
    limit: _propTypes["default"].number.isRequired
  }).isRequired,
  onCollect: _propTypes["default"].func.isRequired // (query, skip, limit) => (items, onEnrich)

};
var ShowItems = (0, _react.memo)(function (_ref4) {
  var ui = _ref4.ui,
      items = _ref4.items;
  return items.map(function (item, i) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(ui.item, _objectSpread(_objectSpread({}, item), {}, {
      map: {
        i: i,
        length: items.length
      }
    }), i);
  });
}, function (prev, next) {
  return JSON.stringify(prev.items) === JSON.stringify(next.items);
});
var _default = LoaderList;
exports["default"] = _default;