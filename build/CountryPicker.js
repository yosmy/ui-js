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

var _Button = require("./Button");

var _Text = require("./Text");

var _BufferList = _interopRequireDefault(require("./BufferList"));

var _Input = _interopRequireDefault(require("./Input"));

var _Icon = require("./Icon");

var _Modal = _interopRequireDefault(require("./Modal"));

var _Container = _interopRequireDefault(require("./Container"));

var _Flag = _interopRequireDefault(require("./Flag"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var names = {
  "AF": "Afganist\xE1n",
  "AL": "Albania",
  "DE": "Alemania",
  "AD": "Andorra",
  "AO": "Angola",
  "AI": "Anguila",
  "AQ": "Ant\xE1rtida",
  "AG": "Antigua y Barbuda",
  "SA": "Arabia Saud\xED",
  "DZ": "Argelia",
  "AR": "Argentina",
  "AM": "Armenia",
  "AW": "Aruba",
  "AU": "Australia",
  "AT": "Austria",
  "AZ": "Azerbaiy\xE1n",
  "BS": "Bahamas",
  "BD": "Banglad\xE9s",
  "BB": "Barbados",
  "BH": "Bar\xE9in",
  "BE": "B\xE9lgica",
  "BZ": "Belice",
  "BJ": "Ben\xEDn",
  "BM": "Bermudas",
  "BY": "Bielorrusia",
  "BO": "Bolivia",
  "BA": "Bosnia y Herzegovina",
  "BW": "Botsuana",
  "BR": "Brasil",
  "BN": "Brun\xE9i",
  "BG": "Bulgaria",
  "BF": "Burkina Faso",
  "BI": "Burundi",
  "BT": "But\xE1n",
  "CV": "Cabo Verde",
  "KH": "Camboya",
  "CM": "Camer\xFAn",
  "CA": "Canad\xE1",
  "BQ": "Caribe neerland\xE9s",
  "QA": "Catar",
  "TD": "Chad",
  "CZ": "Chequia",
  "CL": "Chile",
  "CN": "China",
  "CY": "Chipre",
  "VA": "Ciudad del Vaticano",
  "CO": "Colombia",
  "KM": "Comoras",
  "CG": "Congo",
  "KP": "Corea del Norte",
  "KR": "Corea del Sur",
  "CR": "Costa Rica",
  "CI": "C\xF4te d\u2019Ivoire",
  "HR": "Croacia",
  "CU": "Cuba",
  "CW": "Curazao",
  "DK": "Dinamarca",
  "DM": "Dominica",
  "EC": "Ecuador",
  "EG": "Egipto",
  "SV": "El Salvador",
  "AE": "Emiratos \xC1rabes Unidos",
  "ER": "Eritrea",
  "SK": "Eslovaquia",
  "SI": "Eslovenia",
  "ES": "Espa\xF1a",
  "US": "Estados Unidos",
  "EE": "Estonia",
  "SZ": "Esuatini",
  "ET": "Etiop\xEDa",
  "PH": "Filipinas",
  "FI": "Finlandia",
  "FJ": "Fiyi",
  "FR": "Francia",
  "GA": "Gab\xF3n",
  "GM": "Gambia",
  "GE": "Georgia",
  "GH": "Ghana",
  "GI": "Gibraltar",
  "GD": "Granada",
  "GR": "Grecia",
  "GL": "Groenlandia",
  "GP": "Guadalupe",
  "GU": "Guam",
  "GT": "Guatemala",
  "GF": "Guayana Francesa",
  "GG": "Guernsey",
  "GN": "Guinea",
  "GQ": "Guinea Ecuatorial",
  "GW": "Guinea-Bis\xE1u",
  "GY": "Guyana",
  "HT": "Hait\xED",
  "HN": "Honduras",
  "HU": "Hungr\xEDa",
  "IN": "India",
  "ID": "Indonesia",
  "IQ": "Irak",
  "IR": "Ir\xE1n",
  "IE": "Irlanda",
  "IM": "Isla de Man",
  "CX": "Isla de Navidad",
  "NF": "Isla Norfolk",
  "IS": "Islandia",
  "AX": "Islas \xC5land",
  "KY": "Islas Caim\xE1n",
  "CC": "Islas Cocos",
  "CK": "Islas Cook",
  "FO": "Islas Feroe",
  "GS": "Islas Georgia del Sur y Sandwich del Sur",
  "FK": "Islas Malvinas",
  "MP": "Islas Marianas del Norte",
  "MH": "Islas Marshall",
  "UM": "Islas menores alejadas de EE. UU.",
  "PN": "Islas Pitcairn",
  "SB": "Islas Salom\xF3n",
  "TC": "Islas Turcas y Caicos",
  "VG": "Islas V\xEDrgenes Brit\xE1nicas",
  "VI": "Islas V\xEDrgenes de EE. UU.",
  "IL": "Israel",
  "IT": "Italia",
  "JM": "Jamaica",
  "JP": "Jap\xF3n",
  "JE": "Jersey",
  "JO": "Jordania",
  "KZ": "Kazajist\xE1n",
  "KE": "Kenia",
  "KG": "Kirguist\xE1n",
  "KI": "Kiribati",
  "KW": "Kuwait",
  "LA": "Laos",
  "LV": "Letonia",
  "LB": "L\xEDbano",
  "LR": "Liberia",
  "LY": "Libia",
  "LI": "Liechtenstein",
  "LT": "Lituania",
  "LU": "Luxemburgo",
  "MK": "Macedonia",
  "MG": "Madagascar",
  "MY": "Malasia",
  "MW": "Malaui",
  "MV": "Maldivas",
  "ML": "Mali",
  "MT": "Malta",
  "MA": "Marruecos",
  "MQ": "Martinica",
  "MU": "Mauricio",
  "MR": "Mauritania",
  "YT": "Mayotte",
  "MX": "M\xE9xico",
  "FM": "Micronesia",
  "MD": "Moldavia",
  "MC": "M\xF3naco",
  "MN": "Mongolia",
  "ME": "Montenegro",
  "MS": "Montserrat",
  "MZ": "Mozambique",
  "MM": "Myanmar (Birmania)",
  "NA": "Namibia",
  "NR": "Nauru",
  "NP": "Nepal",
  "NI": "Nicaragua",
  "NE": "N\xEDger",
  "NG": "Nigeria",
  "NU": "Niue",
  "NO": "Noruega",
  "NC": "Nueva Caledonia",
  "NZ": "Nueva Zelanda",
  "OM": "Om\xE1n",
  "NL": "Pa\xEDses Bajos",
  "PK": "Pakist\xE1n",
  "PW": "Palaos",
  "PA": "Panam\xE1",
  "PG": "Pap\xFAa Nueva Guinea",
  "PY": "Paraguay",
  "PE": "Per\xFA",
  "PF": "Polinesia Francesa",
  "PL": "Polonia",
  "PT": "Portugal",
  "PR": "Puerto Rico",
  "HK": "RAE de Hong Kong (China)",
  "MO": "RAE de Macao (China)",
  "GB": "Reino Unido",
  "CF": "Rep\xFAblica Centroafricana",
  "CD": "Rep\xFAblica Democr\xE1tica del Congo",
  "DO": "Rep\xFAblica Dominicana",
  "RE": "Reuni\xF3n",
  "RW": "Ruanda",
  "RO": "Ruman\xEDa",
  "RU": "Rusia",
  "EH": "S\xE1hara Occidental",
  "WS": "Samoa",
  "AS": "Samoa Americana",
  "BL": "San Bartolom\xE9",
  "KN": "San Crist\xF3bal y Nieves",
  "SM": "San Marino",
  "MF": "San Mart\xEDn",
  "PM": "San Pedro y Miquel\xF3n",
  "VC": "San Vicente y las Granadinas",
  "SH": "Santa Elena",
  "LC": "Santa Luc\xEDa",
  "ST": "Santo Tom\xE9 y Pr\xEDncipe",
  "SN": "Senegal",
  "RS": "Serbia",
  "SC": "Seychelles",
  "SL": "Sierra Leona",
  "SG": "Singapur",
  "SX": "Sint Maarten",
  "SY": "Siria",
  "SO": "Somalia",
  "LK": "Sri Lanka",
  "ZA": "Sud\xE1frica",
  "SD": "Sud\xE1n",
  "SS": "Sud\xE1n del Sur",
  "SE": "Suecia",
  "CH": "Suiza",
  "SR": "Surinam",
  "SJ": "Svalbard y Jan Mayen",
  "TH": "Tailandia",
  "TW": "Taiw\xE1n",
  "TZ": "Tanzania",
  "TJ": "Tayikist\xE1n",
  "IO": "Territorio Brit\xE1nico del Oc\xE9ano \xCDndico",
  "TF": "Territorios Australes Franceses",
  "PS": "Territorios Palestinos",
  "TL": "Timor-Leste",
  "TG": "Togo",
  "TK": "Tokelau",
  "TO": "Tonga",
  "TT": "Trinidad y Tobago",
  "TN": "T\xFAnez",
  "TM": "Turkmenist\xE1n",
  "TR": "Turqu\xEDa",
  "TV": "Tuvalu",
  "UA": "Ucrania",
  "UG": "Uganda",
  "UY": "Uruguay",
  "UZ": "Uzbekist\xE1n",
  "VU": "Vanuatu",
  "VE": "Venezuela",
  "VN": "Vietnam",
  "WF": "Wallis y Futuna",
  "YE": "Yemen",
  "DJ": "Yibuti",
  "ZM": "Zambia",
  "ZW": "Zimbabue"
}; // Source http://country.io/phone.json
// Fixed: Removed spaces, removed plus sign, unified multiple prefixes

var prefixes = {
  "BD": "880",
  "BE": "32",
  "BF": "226",
  "BG": "359",
  "BA": "387",
  "BB": "1-246",
  "WF": "681",
  "BL": "590",
  "BM": "1-441",
  "BN": "673",
  "BO": "591",
  "BH": "973",
  "BI": "257",
  "BJ": "229",
  "BT": "975",
  "JM": "1-876",
  "BV": "",
  "BW": "267",
  "WS": "685",
  "BQ": "599",
  "BR": "55",
  "BS": "1-242",
  "JE": "44-1534",
  "BY": "375",
  "BZ": "501",
  "RU": "7",
  "RW": "250",
  "RS": "381",
  "TL": "670",
  "RE": "262",
  "TM": "993",
  "TJ": "992",
  "RO": "40",
  "TK": "690",
  "GW": "245",
  "GU": "1-671",
  "GT": "502",
  "GS": "",
  "GR": "30",
  "GQ": "240",
  "GP": "590",
  "JP": "81",
  "GY": "592",
  "GG": "44-1481",
  "GF": "594",
  "GE": "995",
  "GD": "1-473",
  "GB": "44",
  "GA": "241",
  "SV": "503",
  "GN": "224",
  "GM": "220",
  "GL": "299",
  "GI": "350",
  "GH": "233",
  "OM": "968",
  "TN": "216",
  "JO": "962",
  "HR": "385",
  "HT": "509",
  "HU": "36",
  "HK": "852",
  "HN": "504",
  "VE": "58",
  "PR": "1",
  "PS": "970",
  "PW": "680",
  "PT": "351",
  "SJ": "47",
  "PY": "595",
  "IQ": "964",
  "PA": "507",
  "PF": "689",
  "PG": "675",
  "PE": "51",
  "PK": "92",
  "PH": "63",
  "PN": "870",
  "PL": "48",
  "PM": "508",
  "ZM": "260",
  "EH": "212",
  "EE": "372",
  "EG": "20",
  "ZA": "27",
  "EC": "593",
  "IT": "39",
  "VN": "84",
  "SB": "677",
  "ET": "251",
  "SO": "252",
  "ZW": "263",
  "SA": "966",
  "ES": "34",
  "ER": "291",
  "ME": "382",
  "MD": "373",
  "MG": "261",
  "MF": "590",
  "MA": "212",
  "MC": "377",
  "UZ": "998",
  "MM": "95",
  "ML": "223",
  "MO": "853",
  "MN": "976",
  "MH": "692",
  "MK": "389",
  "MU": "230",
  "MT": "356",
  "MW": "265",
  "MV": "960",
  "MQ": "596",
  "MP": "1-670",
  "MS": "1-664",
  "MR": "222",
  "IM": "44-1624",
  "UG": "256",
  "TZ": "255",
  "MY": "60",
  "MX": "52",
  "IL": "972",
  "FR": "33",
  "IO": "246",
  "SH": "290",
  "FI": "358",
  "FJ": "679",
  "FK": "500",
  "FM": "691",
  "FO": "298",
  "NI": "505",
  "NL": "31",
  "NO": "47",
  "NA": "264",
  "VU": "678",
  "NC": "687",
  "NE": "227",
  "NF": "672",
  "NG": "234",
  "NZ": "64",
  "NP": "977",
  "NR": "674",
  "NU": "683",
  "CK": "682",
  "XK": "",
  "CI": "225",
  "CH": "41",
  "CO": "57",
  "CN": "86",
  "CM": "237",
  "CL": "56",
  "CC": "61",
  "CA": "1",
  "CG": "242",
  "CF": "236",
  "CD": "243",
  "CZ": "420",
  "CY": "357",
  "CX": "61",
  "CR": "506",
  "CW": "599",
  "CV": "238",
  "CU": "53",
  "SZ": "268",
  "SY": "963",
  "SX": "599",
  "KG": "996",
  "KE": "254",
  "SS": "211",
  "SR": "597",
  "KI": "686",
  "KH": "855",
  "KN": "1-869",
  "KM": "269",
  "ST": "239",
  "SK": "421",
  "KR": "82",
  "SI": "386",
  "KP": "850",
  "KW": "965",
  "SN": "221",
  "SM": "378",
  "SL": "232",
  "SC": "248",
  "KZ": "7",
  "KY": "1-345",
  "SG": "65",
  "SE": "46",
  "SD": "249",
  "DO": "1",
  "DM": "1-767",
  "DJ": "253",
  "DK": "45",
  "VG": "1-284",
  "DE": "49",
  "YE": "967",
  "DZ": "213",
  "US": "1",
  "UY": "598",
  "YT": "262",
  "UM": "1",
  "LB": "961",
  "LC": "1-758",
  "LA": "856",
  "TV": "688",
  "TW": "886",
  "TT": "1-868",
  "TR": "90",
  "LK": "94",
  "LI": "423",
  "LV": "371",
  "TO": "676",
  "LT": "370",
  "LU": "352",
  "LR": "231",
  "LS": "266",
  "TH": "66",
  "TF": "",
  "TG": "228",
  "TD": "235",
  "TC": "1-649",
  "LY": "218",
  "VA": "379",
  "VC": "1-784",
  "AE": "971",
  "AD": "376",
  "AG": "1-268",
  "AF": "93",
  "AI": "1-264",
  "VI": "1-340",
  "IS": "354",
  "IR": "98",
  "AM": "374",
  "AL": "355",
  "AO": "244",
  "AQ": "",
  "AS": "1-684",
  "AR": "54",
  "AU": "61",
  "AT": "43",
  "AW": "297",
  "IN": "91",
  "AX": "358-18",
  "AZ": "994",
  "IE": "353",
  "ID": "62",
  "UA": "380",
  "QA": "974",
  "MZ": "258"
};

var buildCodes = function buildCodes() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return Object.entries(names).filter(function (country) {
    if (!text) {
      return true;
    }

    return country[1].toLowerCase().indexOf(text.toLowerCase()) !== -1;
  }).map(function (country) {
    return country[0];
  });
};

var buildFavorites = function buildFavorites(favorites) {
  return favorites.map(function (favorite) {
    return buildCodes().find(function (country) {
      return country === favorite;
    });
  });
};

var CountryPicker = function CountryPicker(_ref) {
  var theme = _ref.theme,
      ui = _ref.ui,
      margin = _ref.margin,
      width = _ref.width,
      initialCountry = _ref.country,
      favorites = _ref.favorites,
      more = _ref.more,
      messages = _ref.messages,
      _onSelect = _ref.onSelect;

  var _useState = (0, _react.useState)(initialCountry || null),
      _useState2 = _slicedToArray(_useState, 2),
      country = _useState2[0],
      setCountry = _useState2[1];

  var _useState3 = (0, _react.useState)({
    text: "",
    more: false
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      filter = _useState4[0],
      setFilter = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      select = _useState6[0],
      setSelect = _useState6[1];

  favorites = buildFavorites(favorites);
  (0, _react.useEffect)(function () {
    if (favorites.length === 1) {
      setCountry(favorites[0]);

      _onSelect({
        country: favorites[0],
        prefix: prefixes[favorites[0]]
      });
    }
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react["default"].Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Container["default"], {
      flow: "row",
      align: {
        main: "space-between",
        cross: "center"
      },
      margin: margin,
      width: width,
      border: {
        color: theme.country_picker.border.color,
        bottom: {
          width: theme.country_picker.border.width
        }
      },
      onClick: function onClick() {
        setSelect(true);
      },
      children: [!country ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Text.Text, {
        size: theme.country_picker.size,
        color: theme.country_picker.color,
        children: messages.select
      }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Container["default"], {
        flow: "row",
        align: {
          main: "flex-start",
          cross: "center"
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Flag["default"], {
          country: country,
          size: "md",
          margin: 1
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Text.Text, {
          margin: {
            left: 1
          },
          children: names[country]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.SecondaryButton, {
        margin: {
          left: 1,
          bottom: 1
        },
        onClick: function onClick() {
          setSelect(true);
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.FormIcon, {
          data: ui.icons.actions.down
        })
      })]
    }), select && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Modal["default"], {
      flow: "column",
      align: {
        main: "flex-start",
        cross: "center"
      },
      margin: {
        top: 6,
        bottom: 6,
        left: 1,
        right: 1
      },
      background: theme.modal.background,
      border: theme.modal.border,
      full: true,
      onClose: function onClose() {
        setFilter({
          text: "",
          more: false
        });
        setSelect(false);
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Input["default"], {
        align: {
          main: "center",
          cross: "center",
          self: "stretch"
        },
        margin: {
          top: 1
        },
        padding: {
          left: 2,
          right: 2
        },
        value: filter.text,
        placeholder: "Escribe para buscar",
        onChange: function onChange(value) {
          setFilter(function (prev) {
            return _objectSpread(_objectSpread({}, prev), {}, {
              text: value
            });
          });
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(CountryListWithTheme, {
        align: {
          self: "stretch"
        },
        countries: filter.more || filter.text ? buildCodes(filter.text) : favorites,
        onSelect: function onSelect(country) {
          setFilter({
            text: "",
            more: false
          });
          setSelect(false);
          setCountry(country);

          _onSelect({
            country: country,
            prefix: prefixes[country]
          });
        }
      }), more && !filter.more && /*#__PURE__*/(0, _jsxRuntime.jsx)(CountryItem, {
        align: {
          self: "stretch"
        },
        margin: {
          bottom: 2
        },
        padding: {
          top: 2,
          left: 2,
          right: 2
        } // border={1}
        ,
        flag: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Flag["default"], {
          country: "world"
        }),
        name: "Todos los pa\xEDses",
        onClick: function onClick() {
          setFilter(function (prev) {
            return _objectSpread(_objectSpread({}, prev), {}, {
              more: true
            });
          });
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.TertiaryButton, {
        align: {
          self: "stretch"
        },
        padding: {
          top: 2,
          bottom: 2,
          left: 2,
          right: 2
        },
        border: {
          color: theme.divider.border.color,
          top: {
            width: theme.divider.border.width
          }
        },
        onClick: function onClick() {
          setFilter({
            text: "",
            more: false
          });
          setSelect(false);
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Text.Text, {
          align: {
            main: "center"
          },
          children: "Cerrar"
        })
      })]
    })]
  });
};

CountryPicker.propTypes = {
  ui: _propTypes["default"].shape({
    icons: _propTypes["default"].shape({
      actions: _propTypes["default"].shape({
        down: _propTypes["default"].func.isRequired
      })
    })
  }).isRequired,
  messages: _propTypes["default"].shape({
    select: _propTypes["default"].string.isRequired
  }).isRequired,
  margin: _primitiveUiSpec.Container.MarginProp,
  width: _primitiveUiSpec.Container.WidthProp,
  country: _propTypes["default"].string,
  favorites: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired,
  more: _propTypes["default"].bool,
  onSelect: _propTypes["default"].func.isRequired // ({country, prefix}),

};

var CountryList = function CountryList(_ref2) {
  var theme = _ref2.theme,
      align = _ref2.align,
      margin = _ref2.margin,
      border = _ref2.border,
      countries = _ref2.countries,
      onSelect = _ref2.onSelect;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_BufferList["default"], {
    align: align,
    margin: margin,
    border: border,
    data: countries,
    identifier: function identifier(country) {
      return country;
    },
    init: 10,
    render: function render(_ref3) {
      var country = _ref3.item,
          i = _ref3.index;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(CountryItem, {
        flag: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Flag["default"], {
          country: country
        }),
        name: names[country],
        margin: {
          top: i === 0 ? 2 : undefined,
          bottom: 2
        },
        padding: {
          top: i !== 0 ? 2 : undefined,
          left: 2,
          right: 2
        },
        border: {
          color: theme.divider.border.color,
          top: i !== 0 ? {
            width: theme.divider.border.width
          } : undefined
        },
        onClick: function onClick() {
          onSelect(country);
        }
      });
    }
  });
};

CountryList.propTypes = {
  align: _primitiveUiSpec.Container.AlignProp,
  margin: _primitiveUiSpec.Container.MarginProp,
  countries: _propTypes["default"].arrayOf(_propTypes["default"].string.isRequired).isRequired,
  onSelect: _propTypes["default"].func.isRequired // (country)

};
var CountryListWithTheme = (0, _style.withTheme)(CountryList);

var CountryItem = function CountryItem(_ref4) {
  var align = _ref4.align,
      margin = _ref4.margin,
      padding = _ref4.padding,
      border = _ref4.border,
      flag = _ref4.flag,
      name = _ref4.name,
      onClick = _ref4.onClick,
      props = _objectWithoutProperties(_ref4, ["align", "margin", "padding", "border", "flag", "name", "onClick"]);

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Container["default"], _objectSpread(_objectSpread({}, props), {}, {
    // key
    flow: "row",
    align: _objectSpread({
      main: "flex-start",
      cross: "center"
    }, align),
    margin: margin,
    padding: padding,
    border: border,
    onClick: onClick,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(flag.type, _objectSpread({
      size: "md"
    }, flag.props)), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Text.Text, {
      margin: {
        left: 1
      },
      children: name
    })]
  }));
};

CountryItem.propTypes = {
  margin: _primitiveUiSpec.Container.MarginProp,
  padding: _primitiveUiSpec.Container.PaddingProp,
  border: _primitiveUiSpec.Container.BorderProp,
  flag: _propTypes["default"].object.isRequired,
  name: _propTypes["default"].string.isRequired,
  onClick: _propTypes["default"].func.isRequired
};

var _default = (0, _style.withTheme)(CountryPicker);

exports["default"] = _default;