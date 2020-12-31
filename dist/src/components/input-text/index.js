"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nborder: 1px solid ", ";\nborder-radius: ", "px;\nmax-height: ", "px;\npadding: 5px;\nmargin: 0;\nfont-size: 0.9rem;\n&:focus {\n    outline: none;\n    box-shadow: 0 0 3px 0px ", "; \n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function InputText(props) {
  return /*#__PURE__*/React.createElement(StyledInput, _extends({
    type: "text"
  }, props));
}

var _default = InputText;
exports.default = _default;

var StyledInput = _styledComponents.default.input(_templateObject(), _constants.colors.bgColorOpaque, _constants.dim.radius, _constants.dim.height, _constants.colors.bgColorTransparent3);

//# sourceMappingURL=index.js.map