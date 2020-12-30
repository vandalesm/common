"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nborder: none;\nbackground-color: rgba(15, 15, 15, 0.9);\ncolor: white;\nfont-size: 0.9rem;\ntext-transform: uppercase;\npadding: 10px;\nborder-radius: 3px;\nwidth: 100px;\nfont-family: monospace;\n", "\n", "\n", "\n", "\n", "\n", "\n&:hover {\n    cursor: pointer;\n    background-color: rgba(15, 15, 15, 0.85);\n}\n&:focus {\n    outline: none;\n}\n&:active {\n    font-size: 0.89rem;\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents.default.button(_templateObject(), function (p) {
  return p.xsmall && 'width: 70px;';
}, function (p) {
  return p.small && 'width: 100px;';
}, function (p) {
  return p.xmedium && 'width: 170px;';
}, function (p) {
  return p.medium && 'width: 200px;';
}, function (p) {
  return p.large && 'width: 300px;';
}, function (p) {
  return p.autoWidth && 'width: auto;';
});

var _default = Button;
exports.default = _default;

//# sourceMappingURL=index.js.map