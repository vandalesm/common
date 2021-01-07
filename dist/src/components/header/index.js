"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _block = _interopRequireDefault(require("../block"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nmin-height: ", "px;\nmax-height: ", "px;\nborder-bottom: 1px solid white;\npadding: 5px 10px;\nposition: fixed;\ntop: 0;\nleft: 0;\nright: 0;\nbottom: 0;\nz-index: 999;\nbackground-color: ", ";\nbox-shadow: 0 8px 12px -5px ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function Header(props) {
  return /*#__PURE__*/_react.default.createElement(Container, {
    justifyBetween: true,
    alignItemsCenter: true
  }, props.children);
}

var _default = Header;
exports.default = _default;
var Container = (0, _styledComponents.default)(_block.default)(_templateObject(), _constants.dim.headerHeight, _constants.dim.headerHeight, _constants.colors.headerColor, _constants.colors.bgColorTransparent4);

//# sourceMappingURL=index.js.map