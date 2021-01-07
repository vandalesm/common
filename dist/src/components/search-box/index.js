"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("../constants");

var _block = _interopRequireDefault(require("../block"));

var _md = require("react-icons/md");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\nbackground-color: transparent;\nborder: none;\nwidth: ", "px;\nmax-width: ", "px;\nfont-size: 0.9rem;\npadding: 5px 0;\n&:focus {\n    outline: none;\n    border: none;\n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nborder: 1px solid rgba(155, 155, 155, 0.2);\nbackground-color: rgba(155, 155, 155, 0.1);\nborder-radius: ", "px;\nmax-width: ", "px;\npadding: 0 5px;\noverflow: hidden;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

SearchBox.propTypes = {
  width: _propTypes.default.number,
  placeholder: _propTypes.default.string,
  onSearch: _propTypes.default.func
};
SearchBox.defaultProps = {
  width: 200,
  placeholder: 'Search'
};

function SearchBox(props) {
  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      keyword = _useState2[0],
      setKeyword = _useState2[1];

  var handleOnKeyDown = function handleOnKeyDown(e) {
    if (e.keyCode === 13) {
      props.onSearch && keyword && props.onSearch(keyword);
    }
  };

  return /*#__PURE__*/_react.default.createElement(Container, {
    justifyStart: true,
    alignItemsCenter: true,
    width: props.width
  }, /*#__PURE__*/_react.default.createElement(_md.MdSearch, {
    style: {
      minWidth: '25px',
      fontSize: '1.2rem',
      color: 'rgba(155, 155, 155, 1)'
    }
  }), /*#__PURE__*/_react.default.createElement(StyledInput, {
    type: "text",
    width: props.width,
    placeholder: props.placeholder,
    onChange: function onChange(e) {
      return setKeyword(e.target.value);
    },
    onKeyDown: function onKeyDown(e) {
      return handleOnKeyDown(e);
    }
  }));
}

var _default = SearchBox;
exports.default = _default;
var Container = (0, _styledComponents.default)(_block.default)(_templateObject(), _constants.dim.height / 2, function (p) {
  return p.width;
});

var StyledInput = _styledComponents.default.input(_templateObject2(), function (p) {
  return p.width - 30;
}, function (p) {
  return p.width - 30;
});

//# sourceMappingURL=index.js.map