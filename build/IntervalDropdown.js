"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IntervalProps = exports.IntervalDropdown = exports.resolveInterval = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _primitiveUi = require("@yosmy/primitive-ui");

var _date = require("@yosmy/date");

var _primitiveUiSpec = require("@yosmy/primitive-ui-spec");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var resolveInterval = function resolveInterval(key, timezone) {
  var from, to, group;
  var now = Date.now();

  switch (key) {
    case "last_year":
      // Beginning of last year
      from = (0, _date.subYears)((0, _date.startOfYear)(now), 1);
      from = (0, _date.getTime)(from); // Beginning of current year

      to = (0, _date.addYears)(from, 1);
      to = (0, _date.getTime)(to);
      from = from / 1000;
      to = to / 1000;
      group = "by-month";
      break;

    case "last_month":
      // Beginning of last month
      from = (0, _date.subMonths)((0, _date.startOfMonth)(now), 1);
      from = (0, _date.getTime)(from); // Beginning of current month

      to = (0, _date.addMonths)(from, 1);
      to = (0, _date.getTime)(to);
      from = from / 1000;
      to = to / 1000;
      group = "by-day";
      break;

    case "last_week":
      // Beginning of last week
      from = (0, _date.subWeeks)((0, _date.startOfWeek)(now), 1);
      from = (0, _date.getTime)(from); // Beginning of current week

      to = (0, _date.addWeeks)(from, 1);
      to = (0, _date.getTime)(to);
      from = from / 1000;
      to = to / 1000;
      group = "by-day";
      break;

    case "current_year":
      from = (0, _date.startOfYear)(now);
      from = (0, _date.getTime)(from); // Beginning of next year

      to = (0, _date.addYears)(from, 1);
      to = (0, _date.getTime)(to);
      from = from / 1000;
      to = to / 1000;
      group = "by-month";
      break;

    case "current_month":
      // Beginning of current month
      from = (0, _date.startOfMonth)(now);
      from = (0, _date.getTime)(from); // Beginning of next month

      to = (0, _date.startOfMonth)(now);
      to = (0, _date.addMonths)(to, 1);
      to = (0, _date.getTime)(to);
      from = from / 1000;
      to = to / 1000;
      group = "by-day";
      break;

    case "current_week":
      // Beginning of current week
      from = (0, _date.startOfWeek)(now);
      from = (0, _date.getTime)(from); // Beginning of next week

      to = (0, _date.startOfWeek)(now);
      to = (0, _date.addWeeks)(to, 1);
      to = (0, _date.getTime)(to);
      from = from / 1000;
      to = to / 1000;
      group = "by-day";
      break;

    default:
      throw "Interval not supported";
  }

  return {
    key: key,
    from: from,
    to: to,
    timezone: timezone,
    group: group
  };
};

exports.resolveInterval = resolveInterval;

var IntervalDropdown = function IntervalDropdown(_ref) {
  var margin = _ref.margin,
      value = _ref.value,
      timezone = _ref.timezone,
      _onChange = _ref.onChange;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_primitiveUi.Dropdown, {
    margin: margin,
    label: "Intervalo",
    value: value,
    data: [{
      label: "Año pasado",
      value: "last_year"
    }, {
      label: "Mes pasado",
      value: "last_month"
    }, {
      label: "Semana pasada",
      value: "last_week"
    }, {
      label: "Año actual",
      value: "current_year"
    }, {
      label: "Mes actual",
      value: "current_month"
    }, {
      label: "Semana actual",
      value: "current_week"
    }],
    onChange: function onChange(interval) {
      _onChange(resolveInterval(interval, timezone));
    }
  });
};

exports.IntervalDropdown = IntervalDropdown;

var IntervalProps = _propTypes["default"].shape({
  margin: _primitiveUiSpec.Container.MarginProp,
  from: _propTypes["default"].number.isRequired,
  to: _propTypes["default"].number.isRequired,
  timezone: _propTypes["default"].string.isRequired,
  group: _propTypes["default"].string.isRequired
});

exports.IntervalProps = IntervalProps;