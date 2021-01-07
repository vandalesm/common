"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\ndisplay: flex;\nflex: 1 1 auto;\n", "\n", "\n", "\n", "\n", "\nflex-direction: ", ";\njustify-content: ", ";\nalign-items: ", ";\nalign-self: ", ";\n", "\n", "\n", "\n", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Block = _styledComponents.default.div(_templateObject(), function (p) {
  return p.noGrow && 'flex: 0 0 auto;';
}, function (p) {
  return p.baseWidth && 'flex-basis: ' + p.baseWidth + ';';
}, function (p) {
  return p.baseWidth && 'width: ' + p.baseWidth + ';';
}, function (p) {
  return p.withWrap && 'flex-wrap: wrap;';
}, function (p) {
  return p.withClip && 'overflow: hidden;';
}, function (p) {
  return p.column ? 'column' : 'row';
}, function (p) {
  return p.justifyCenter ? 'center' : p.justifyStart ? 'flex-start' : p.justifyEnd ? 'flex-end' : p.justifyAround ? 'space-around' : p.justifyBetween ? 'space-between' : 'inherit';
}, function (p) {
  return p.alignItemsCenter ? 'center' : p.alignItemsStart ? 'flex-start' : p.alignItemsEnd ? 'flex-end' : p.alignItemsStretch ? 'stretch' : p.alignItemsBaseline ? 'baseline' : 'inherit';
}, function (p) {
  return p.alignSelfCenter ? 'center' : p.alignSelfStart ? 'flex-start' : p.alignSelfEnd ? 'flex-end' : p.alignSelfStretch ? 'stretch' : p.alignSelfBaseline ? 'baseline' : 'auto';
}, function (p) {
  return p.withMargin && 'margin: 10px;';
}, function (p) {
  return p.withPadding && 'padding: 10px;';
}, function (p) {
  return p.withBorder && 'border: 1px solid ' + _constants.colors.bgColorTransparent1 + ';';
}, function (p) {
  return p.withHeader && 'margin-top: ' + (_constants.dim.headerHeight + 15) + 'px;';
});

Block.propTypes = {
  noGrow: _propTypes.default.any,
  baseWidth: _propTypes.default.string,
  withWrap: _propTypes.default.any,
  withClip: _propTypes.default.any,
  direction: _propTypes.default.oneOf(['column', 'row']),
  justifyCenter: _propTypes.default.any,
  justifyStart: _propTypes.default.any,
  justifyEnd: _propTypes.default.any,
  justifyAround: _propTypes.default.any,
  justifyBetween: _propTypes.default.any,
  alignItemsCenter: _propTypes.default.any,
  alignItemsStart: _propTypes.default.any,
  alignItemsEnd: _propTypes.default.any,
  alignItemsStretch: _propTypes.default.any,
  alignItemsBaseline: _propTypes.default.any,
  alignSelfCenter: _propTypes.default.any,
  alignSelfStart: _propTypes.default.any,
  alignSelfEnd: _propTypes.default.any,
  alignSelfStretch: _propTypes.default.any,
  alignSelfBaseline: _propTypes.default.any,
  withMargin: _propTypes.default.any,
  withPadding: _propTypes.default.any,
  withBorder: _propTypes.default.any,
  withHeader: _propTypes.default.any
};
Block.defaultProps = {
  withHeader: false
};
var _default = Block;
exports.default = _default;

//# sourceMappingURL=index.js.map