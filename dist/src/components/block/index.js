"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\ndisplay: flex;\nflex: 1 1 auto;\n", "\n", "\n", "\n", "\n", "\nflex-direction: ", ";\njustify-content: ", ";\nalign-items: ", ";\nalign-self: ", ";\n", "\n", "\n", "\n"]);

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
  return p.withBorder && 'border: 1px solid rgba(15, 15, 15, 0.9);';
});

var _default = Block;
exports.default = _default;

//# sourceMappingURL=index.js.map