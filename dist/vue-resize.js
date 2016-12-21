!function(root,factory){"object"==typeof exports&&"object"==typeof module?module.exports=factory():"function"==typeof define&&define.amd?define([],factory):"object"==typeof exports?exports.VueResize=factory():root.VueResize=factory()}(this,function(){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.i=function(value){return value},__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=4)}([function(module,exports,__webpack_require__){var __vue_exports__,__vue_options__;__webpack_require__(2),__vue_exports__=__webpack_require__(1);var __vue_template__=__webpack_require__(3);__vue_options__=__vue_exports__=__vue_exports__||{},"object"!=typeof __vue_exports__.default&&"function"!=typeof __vue_exports__.default||(__vue_options__=__vue_exports__=__vue_exports__.default),"function"==typeof __vue_options__&&(__vue_options__=__vue_options__.options),__vue_options__.render=__vue_template__.render,__vue_options__.staticRenderFns=__vue_template__.staticRenderFns,__vue_options__._scopeId="data-v-c7b3205a",module.exports=__vue_exports__},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={name:"resize-observer",methods:{notify:function(){this.$emit("notify")},addResizeHandlers:function(){var iframe=this.$el,w=iframe.contentWindow;iframe.addEventListener("load",this.refreshResizeHandlers),w&&(w.addEventListener("resize",this.notify),w.addEventListener("close",this.removeResizeHandlers))},removeResizeHandlers:function(){var iframe=this.$el,w=iframe.contentWindow;iframe.removeEventListener("load",this.refreshResizeHandlers),w&&(w.removeEventListener("resize",this.notify),w.removeEventListener("close",this.removeResizeHandlers))},refreshResizeHandlers:function(){this.removeResizeHandlers(),this.addResizeHandlers(),this.notify()}},mounted:function(){this.addResizeHandlers()}}},function(module,exports){},function(module,exports){module.exports={render:function(){var _vm=this,_c=(_vm.$createElement,_vm._c);return _c("iframe",{staticClass:"resize-observer",attrs:{tabindex:"-1"}})},staticRenderFns:[]}},function(module,exports,__webpack_require__){"use strict";function install(Vue){Vue.component("resize-observer",__WEBPACK_IMPORTED_MODULE_0__components_ResizeObserver_vue___default.a)}var __WEBPACK_IMPORTED_MODULE_0__components_ResizeObserver_vue__=__webpack_require__(0),__WEBPACK_IMPORTED_MODULE_0__components_ResizeObserver_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_ResizeObserver_vue__);Object.defineProperty(exports,"__esModule",{value:!0}),exports.install=install,__webpack_require__.d(exports,"ResizeObserver",function(){return ResizeObserver});var ResizeObserver=__WEBPACK_IMPORTED_MODULE_0__components_ResizeObserver_vue___default.a;exports.default={version:"0.0.1",install:install}}])});