"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _block = _interopRequireDefault(require("../block"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\njustify-content: center;\nalign-items: center;\nwidth: 100%;\nheight: ", "px;\nfont-size: 1rem;\nfont-family: monospace;\nposition: relative;\n", "\n&:hover {\n  cursor: pointer;\n  color: ", ";\n  ", ";\n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nflex: 1 1 auto;\nflex-direction: ", ";\nbackground-color: ", ";\ncolor: ", ";\nborder-radius: ", "px;\n", ";\n", ";\n"]);

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

ButtonGroup.propTypes = {
  data: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.string.isRequired,
    name: _propTypes.default.string.isRequired,
    action: _propTypes.default.func
  })),
  orientation: _propTypes.default.oneOf(['row', 'column']),
  defaultSelectedId: _propTypes.default.string
};
ButtonGroup.defaultProps = {
  data: [{
    id: 'test1',
    name: 'Test One',
    action: function action() {
      return console.log('test1');
    }
  }, {
    id: 'test2',
    name: 'Test Two',
    action: function action() {
      return console.log('test2');
    }
  }, {
    id: 'test3',
    name: 'Test Three',
    action: function action() {
      return console.log('test3');
    }
  }],
  orientation: 'column',
  defaultSelectedId: 'test2'
};

function ButtonGroup(_ref) {
  var data = _ref.data,
      orientation = _ref.orientation,
      defaultSelectedId = _ref.defaultSelectedId;

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      item = _useState2[0],
      setItem = _useState2[1];

  (0, _react.useEffect)(function () {
    var item = data.find(function (f) {
      return f.id === defaultSelectedId;
    });
    setItem(item);
  }, [defaultSelectedId, data]);
  (0, _react.useEffect)(function () {
    item && item.action && item.action(item);
  }, [item]);
  return /*#__PURE__*/_react.default.createElement(Group, {
    length: data.length,
    orientation: orientation
  }, data.map(function (v, i) {
    return /*#__PURE__*/_react.default.createElement(Button, {
      key: i,
      active: v.id === item.id,
      onClick: function onClick() {
        return setItem(v);
      }
    }, v.name);
  }));
}

var _default = ButtonGroup;
exports.default = _default;
var Group = (0, _styledComponents.default)(_block.default)(_templateObject(), function (p) {
  return p.orientation;
}, _constants.colors.bgColorTransparent1, _constants.colors.textColorTransparent1, _constants.dim.radius, function (p) {
  return p.orientation === 'column' ? "padding: 10px 0;" : "padding: 0 10px;";
}, function (p) {
  return p.orientation === 'column' ? "height: ".concat(p.length * _constants.dim.height, "px") : "min-height: ".concat(_constants.dim.height, "px");
});
var Button = (0, _styledComponents.default)(_block.default)(_templateObject2(), _constants.dim.height, function (p) {
  return p.active && "\n  background-color: ".concat(_constants.colors.bgColorOpaque, ";\n  color: ").concat(_constants.colors.textColorOpaque, ";\n  font-size: 1.1rem;\n  z-index: 1;\n  &:before {\n      content: '';\n      position: absolute;\n      top: -3px;\n      bottom: -3px;\n      left: -3px;\n      right: -3px;\n      border-radius: ").concat(_constants.dim.radius, "px;\n      border: 5px solid ").concat(_constants.colors.bgColorOpaque, ";\n  }\n");
}, _constants.colors.textColorOpaque, function (p) {
  return !p.active && 'background-color: ' + _constants.colors.bgColorHighlight;
});

//# sourceMappingURL=index.js.map