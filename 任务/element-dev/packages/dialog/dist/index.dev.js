"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _component = _interopRequireDefault(require("./src/component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* istanbul ignore next */
_component["default"].install = function (Vue) {
  Vue.component(_component["default"].name, _component["default"]);
};

var _default = _component["default"];
exports["default"] = _default;