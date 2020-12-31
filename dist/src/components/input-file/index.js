"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../constants");

var _block = _interopRequireDefault(require("../block"));

var _md = require("react-icons/md");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\noverflow: hidden;\ndisplay: inline-block;\ntext-overflow: ellipsis;\nwhite-space: nowrap;\nfont-size: 1rem;\nfont-family: monospace;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\nborder: none;\nbackground-color: ", ";\ncolor: ", ";\nborder-radius: ", "px;\nwidth: ", "px;\nmax-width: ", "px;\nmin-height: ", "px;\nmax-height: ", "px;\noverflow: hidden;\ndisplay: flex;\nalign-items: center;\nwhite-space: nowrap;\npadding: 5px 15px;\nbox-sizing: border-box;\ncursor: pointer;\n&:hover {\n    color: ", ";\n    background-color: ", ";\n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nwidth: 0.1px;\nheight: 0.1px;\nopacity: 0;\noverflow: hidden;\nposition: absolute;\nz-index: -1;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

InputFile.propTypes = {
  label: _propTypes.default.string,
  width: _propTypes.default.number,
  onChange: _propTypes.default.func
};
InputFile.defaultProps = {
  label: 'Select a file ...',
  width: 200
};

function InputFile(props) {
  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      event = _useState2[0],
      setEvent = _useState2[1];

  var getLabel = function getLabel() {
    var files = event && event.target ? event.target.files : undefined;
    var fileCount = files ? files.length : 0;
    if (fileCount > 1) return files.length + ' files selected';else if (fileCount === 1) return files[0].name;else return props.label;
  };

  var handleOnChange = function handleOnChange(e) {
    if (e && e.target && e.target.files.length > 0) {
      setEvent(e);
    }
  };

  (0, _react.useEffect)(function () {
    props.onChange && event && event.target && props.onChange(event);
  }, [event, props]);
  return /*#__PURE__*/_react.default.createElement(_block.default, null, /*#__PURE__*/_react.default.createElement(StyledLabel, {
    htmlFor: "file",
    width: props.width
  }, /*#__PURE__*/_react.default.createElement(_md.MdOpenInBrowser, {
    style: {
      fontSize: '1.5rem',
      paddingRight: '5px',
      minWidth: '25px'
    }
  }), /*#__PURE__*/_react.default.createElement(StyledSpan, null, getLabel())), /*#__PURE__*/_react.default.createElement(StyledInput, _extends({
    type: "file",
    name: "file",
    id: "file"
  }, props, {
    onChange: function onChange(e) {
      return handleOnChange(e);
    }
  })));
}

var _default = InputFile;
exports.default = _default;

var StyledInput = _styledComponents.default.input(_templateObject());

var StyledLabel = _styledComponents.default.label(_templateObject2(), _constants.colors.bgColorTransparent1, _constants.colors.textColorTransparent1, _constants.dim.radius, function (p) {
  return p.width;
}, function (p) {
  return p.width;
}, _constants.dim.height, _constants.dim.height, _constants.colors.textColorOpaque, _constants.colors.bgColorTransparent2);

var StyledSpan = _styledComponents.default.span(_templateObject3());

//# sourceMappingURL=index.js.map