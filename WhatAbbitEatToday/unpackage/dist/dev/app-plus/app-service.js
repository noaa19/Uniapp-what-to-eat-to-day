(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!*************************************************!*\
  !*** D:/forfun/Almost-Lottery抽奖转盘示例(2)/main.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 17));
var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 32));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

_vue.default.config.productionTip = false;

_App.default.mpType = 'app';

var app = new _vue.default(_objectSpread({},
_App.default));

app.$mount();

/***/ }),
/* 1 */
/*!****************************************************!*\
  !*** D:/forfun/Almost-Lottery抽奖转盘示例(2)/pages.json ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}


if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 2).default);});
__definePage('pages/index/food', function () {return Vue.extend(__webpack_require__(/*! pages/index/food.vue?mpType=page */ 21).default);});
__definePage('pages/index/menu', function () {return Vue.extend(__webpack_require__(/*! pages/index/menu.vue?mpType=page */ 26).default);});

/***/ }),
/* 2 */
/*!***************************************************************************!*\
  !*** D:/forfun/Almost-Lottery抽奖转盘示例(2)/pages/index/index.vue?mpType=page ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page */ 3);
/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 19);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);

var renderjs




/* normalize component */

var component = Object(_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2be84a3c",
  null,
  false,
  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/index/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 3 */
/*!*********************************************************************************************************************!*\
  !*** D:/forfun/Almost-Lottery抽奖转盘示例(2)/pages/index/index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/forfun/Almost-Lottery抽奖转盘示例(2)/pages/index/index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    almostLottery: __webpack_require__(/*! @/uni_modules/almost-lottery/components/almost-lottery/almost-lottery.vue */ 5)
      .default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "almost-lottery"), attrs: { _i: 0 } },
    [
      _c("view", [
        _c(
          "view",
          {
            staticClass: _vm._$s(2, "sc", "almost-lottery__head"),
            attrs: { _i: 2 }
          },
          [
            _c(
              "view",
              {
                class: _vm._$s(3, "c", [
                  "action",
                  _vm.isApple && "action-shadow"
                ]),
                attrs: { _i: 3 }
              },
              [
                _c("text", {
                  staticClass: _vm._$s(4, "sc", "gold"),
                  attrs: { _i: 4 }
                }),
                _c(
                  "text",
                  {
                    staticClass: _vm._$s(5, "sc", "content"),
                    attrs: { _i: 5 }
                  },
                  [
                    _c(
                      "text",
                      {
                        staticClass: _vm._$s(6, "sc", "num"),
                        attrs: { _i: 6 }
                      },
                      [_vm._v(_vm._$s(6, "t0-0", _vm._s(_vm.eatToday)))]
                    )
                  ]
                )
              ]
            )
          ]
        ),
        _c(
          "view",
          {
            staticClass: _vm._$s(7, "sc", "almost-lottery__wheel"),
            attrs: { _i: 7 }
          },
          [
            _c("view"),
            _c(
              "view",
              [
                _vm._$s(10, "i", _vm.prizeList.length)
                  ? _c("almost-lottery", {
                      attrs: {
                        redrawSign: _vm.redrawSign,
                        "lottery-size": _vm.lotteryConfig.lotterySize,
                        "action-size": _vm.lotteryConfig.actionSize,
                        "ring-count": 13,
                        duration: 5,
                        "img-circled": true,
                        canvasCached: true,
                        "prize-list": _vm.prizeList,
                        "prize-index": _vm.prizeIndex,
                        _i: 10
                      },
                      on: {
                        "reset-index": function($event) {
                          _vm.prizeIndex = -1
                        },
                        "draw-start": _vm.handleDrawStart,
                        "draw-end": _vm.handleDrawEnd,
                        finish: _vm.handleDrawFinish
                      }
                    })
                  : _vm._e()
              ],
              1
            ),
            _c("view")
          ]
        ),
        _c(
          "view",
          {
            staticClass: _vm._$s(12, "sc", "almost-lottery__head"),
            attrs: { _i: 12 }
          },
          [
            _c("view", [
              _c(
                "view",
                {
                  class: _vm._$s(14, "c", [
                    "action action_",
                    _vm.isApple && "action-shadow"
                  ]),
                  attrs: { _i: 14 },
                  on: {
                    click: function($event) {
                      return _vm.showPage(1)
                    }
                  }
                },
                [
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(15, "sc", "content"),
                      attrs: { _i: 15 }
                    },
                    [
                      _c(
                        "text",
                        {
                          staticClass: _vm._$s(16, "sc", "count"),
                          attrs: { _i: 16 }
                        },
                        [
                          _vm._v(
                            _vm._$s(16, "t0-0", _vm._s(_vm.foodList.length))
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            ]),
            _c("view", [
              _c(
                "view",
                {
                  class: _vm._$s(18, "c", [
                    "action action_",
                    _vm.isApple && "action-shadow"
                  ]),
                  attrs: { _i: 18 },
                  on: {
                    click: function($event) {
                      return _vm.showPage(2)
                    }
                  }
                },
                [
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(19, "sc", "content"),
                      attrs: { _i: 19 }
                    },
                    [
                      _c(
                        "text",
                        {
                          staticClass: _vm._$s(20, "sc", "count"),
                          attrs: { _i: 20 }
                        },
                        [
                          _vm._v(
                            _vm._$s(20, "t0-0", _vm._s(_vm.menuList.length))
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            ])
          ]
        )
      ]),
      _c(
        "view",
        {
          staticClass: _vm._$s(21, "sc", "mainDiv"),
          style: _vm._$s(21, "s", { marginTop: _vm.windowHeight * -1 + "rpx" }),
          attrs: { _i: 21 }
        },
        [
          _c("view", {
            staticClass: _vm._$s(22, "sc", "bgDiv"),
            attrs: { _i: 22 }
          }),
          _c("view", {
            staticClass: _vm._$s(23, "sc", "bgDiv"),
            attrs: { _i: 23 }
          }),
          _c("view", {
            staticClass: _vm._$s(24, "sc", "bgDiv"),
            attrs: { _i: 24 }
          }),
          _c("view", {
            staticClass: _vm._$s(25, "sc", "bgDiv"),
            attrs: { _i: 25 }
          }),
          _c("view", {
            staticClass: _vm._$s(26, "sc", "bgDiv"),
            attrs: { _i: 26 }
          })
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!*****************************************************************************************************************!*\
  !*** D:/forfun/Almost-Lottery抽奖转盘示例(2)/uni_modules/almost-lottery/components/almost-lottery/almost-lottery.vue ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _almost_lottery_vue_vue_type_template_id_34b92f46_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./almost-lottery.vue?vue&type=template&id=34b92f46&scoped=true& */ 6);
/* harmony import */ var _almost_lottery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./almost-lottery.vue?vue&type=script&lang=js& */ 8);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _almost_lottery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _almost_lottery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);

var renderjs




/* normalize component */

var component = Object(_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _almost_lottery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _almost_lottery_vue_vue_type_template_id_34b92f46_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _almost_lottery_vue_vue_type_template_id_34b92f46_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "34b92f46",
  null,
  false,
  _almost_lottery_vue_vue_type_template_id_34b92f46_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "uni_modules/almost-lottery/components/almost-lottery/almost-lottery.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 6 */
/*!************************************************************************************************************************************************************!*\
  !*** D:/forfun/Almost-Lottery抽奖转盘示例(2)/uni_modules/almost-lottery/components/almost-lottery/almost-lottery.vue?vue&type=template&id=34b92f46&scoped=true& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_almost_lottery_vue_vue_type_template_id_34b92f46_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./almost-lottery.vue?vue&type=template&id=34b92f46&scoped=true& */ 7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_almost_lottery_vue_vue_type_template_id_34b92f46_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_almost_lottery_vue_vue_type_template_id_34b92f46_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_almost_lottery_vue_vue_type_template_id_34b92f46_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_almost_lottery_vue_vue_type_template_id_34b92f46_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 7 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/forfun/Almost-Lottery抽奖转盘示例(2)/uni_modules/almost-lottery/components/almost-lottery/almost-lottery.vue?vue&type=template&id=34b92f46&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "almost-lottery"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        {
          staticClass: _vm._$s(1, "sc", "almost-lottery__wrap"),
          style: _vm._$s(1, "s", {
            width: _vm.lotterySize + "rpx",
            height: _vm.lotterySize + "rpx"
          }),
          attrs: { _i: 1 }
        },
        [
          _c("view", {
            staticClass: _vm._$s(2, "sc", "lottery-action"),
            style: _vm._$s(2, "s", {
              width: _vm.actionSize + "rpx",
              height: _vm.actionSize + "rpx",
              left: _vm.canvasMarginOutside + "rpx"
            }),
            attrs: { _i: 2 }
          }),
          _c("view", {
            staticClass: _vm._$s(3, "sc", "str-margin-outside"),
            style: _vm._$s(3, "s", { left: _vm.strMarginOutside + "rpx" }),
            attrs: { _i: 3 }
          }),
          _c("view", {
            staticClass: _vm._$s(4, "sc", "img-margin-str"),
            style: _vm._$s(4, "s", { left: _vm.imgMarginStr + "rpx" }),
            attrs: { _i: 4 }
          }),
          _c("view", {
            staticClass: _vm._$s(5, "sc", "img-size"),
            style: _vm._$s(5, "s", {
              width: _vm.imgWidth + "rpx",
              height: _vm.imgHeight + "rpx"
            }),
            attrs: { _i: 5 }
          }),
          _vm._$s(6, "i", _vm.lotteryImg)
            ? [
                _c("image", {
                  staticClass: _vm._$s(7, "sc", "almost-lottery__bg"),
                  style: _vm._$s(7, "s", {
                    width: _vm.lotteryPxSize + "px",
                    height: _vm.lotteryPxSize + "px"
                  }),
                  attrs: { src: _vm._$s(7, "a-src", _vm.lotteryBg), _i: 7 }
                }),
                _c("image", {
                  staticClass: _vm._$s(8, "sc", "almost-lottery__canvas-img"),
                  style: _vm._$s(8, "s", {
                    width: _vm.canvasImgPxSize + "px",
                    height: _vm.canvasImgPxSize + "px",
                    left: _vm.canvasImgToLeftPx + "px",
                    top: _vm.canvasImgToLeftPx + "px",
                    transform:
                      "rotate(" + (_vm.canvasAngle + _vm.targetAngle) + "deg)",
                    transitionDuration: _vm.transitionDuration + "s"
                  }),
                  attrs: { src: _vm._$s(8, "a-src", _vm.lotteryImg), _i: 8 }
                }),
                _c("image", {
                  staticClass: _vm._$s(9, "sc", "almost-lottery__action-bg"),
                  style: _vm._$s(9, "s", {
                    width: _vm.actionPxSize + "px",
                    height: _vm.actionPxSize + "px",
                    left: _vm.actionBgToLeftPx + "px",
                    top: _vm.actionBgToLeftPx + "px",
                    transform:
                      "rotate(" +
                      (_vm.actionAngle + _vm.targetActionAngle) +
                      "deg)",
                    transitionDuration: _vm.transitionDuration + "s"
                  }),
                  attrs: { src: _vm._$s(9, "a-src", _vm.actionBg), _i: 9 },
                  on: { click: _vm.handleActionStart }
                })
              ]
            : _vm._e()
        ],
        2
      ),
      _c(
        "text",
        {
          staticClass: _vm._$s(10, "sc", "almost-lottery__measureText"),
          style: _vm._$s(10, "s", { fontSize: _vm.higtFontSize + "px" }),
          attrs: { _i: 10 }
        },
        [_vm._v(_vm._$s(10, "t0-0", _vm._s(_vm.measureText)))]
      ),
      _c("canvas", {
        class: _vm._$s(11, "c", _vm.className),
        style: _vm._$s(11, "s", {
          width: _vm.higtCanvasSize + "px",
          height: _vm.higtCanvasSize + "px"
        }),
        attrs: {
          "canvas-id": _vm._$s(11, "a-canvas-id", _vm.canvasId),
          width: _vm._$s(11, "a-width", _vm.higtCanvasSize),
          height: _vm._$s(11, "a-height", _vm.higtCanvasSize),
          _i: 11
        }
      })
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 8 */
/*!******************************************************************************************************************************************!*\
  !*** D:/forfun/Almost-Lottery抽奖转盘示例(2)/uni_modules/almost-lottery/components/almost-lottery/almost-lottery.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_almost_lottery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./almost-lottery.vue?vue&type=script&lang=js& */ 9);
/* harmony import */ var _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_almost_lottery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_almost_lottery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_almost_lottery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_almost_lottery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_almost_lottery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 9 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/forfun/Almost-Lottery抽奖转盘示例(2)/uni_modules/almost-lottery/components/almost-lottery/almost-lottery.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 11));



















































var _almostUtils = __webpack_require__(/*! @/uni_modules/almost-lottery/utils/almost-utils.js */ 14);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var _default2 =









{
  name: 'AlmostLottery',
  props: {
    // 设计稿的像素比基准值
    pixelRatio: {
      type: Number,
      default: 2 },

    // canvas 标识
    canvasId: {
      type: String,
      default: 'almostLottery' },

    // 抽奖转盘的整体尺寸
    lotterySize: {
      type: Number,
      default: 600 },

    // 抽奖按钮的尺寸
    actionSize: {
      type: Number,
      default: 200 },

    // canvas边缘距离转盘边缘的距离
    canvasMarginOutside: {
      type: Number,
      default: 90 },

    // 奖品列表
    prizeList: {
      type: Array,
      required: true,
      validator: function validator(value) {
        return value.length > 1;
      } },

    // 中奖奖品在列表中的下标
    prizeIndex: {
      type: Number,
      required: true },

    redrawSign: {
      type: Number,
      required: true },

    // 奖品区块对应背景颜色
    colors: {
      type: Array,
      default: function _default() {return [
        '#FFD9D9',
        '#f8d4de',
        '#FFFFFF',
        '#f8d4de',
        '#FFFFFF',
        '#f8d4de',
        '#FFFFFF',
        '#f8d4de',
        '#FFFFFF',
        '#f8d4de',
        '#FFFFFF',
        '#f8d4de',
        '#FFFFFF',
        '#f8d4de',
        '#FFFFFF',
        '#f8d4de',
        '#FFFFFF',
        '#f8d4de',
        '#FFFFFF',
        '#f8d4de',
        '#FFFFFF',
        '#f8d4de',
        '#FFFFFF',
        '#f8d4de',
        '#FFFFFF',
        '#f8d4de',
        '#FFFFFF',
        '#f8d4de',
        '#FFFFFF'];} },


    // 转盘外环背景图
    lotteryBg: {
      type: String,
      default: '/uni_modules/almost-lottery/static/almost-lottery/almost-lottery__bg3x.png' },

    // 抽奖按钮背景图
    actionBg: {
      type: String,
      default: '/uni_modules/almost-lottery/static/almost-lottery/icecream.png' },

    // 是否绘制奖品名称
    prizeNameDrawed: {
      type: Boolean,
      default: true },

    // 是否开启奖品区块描边
    stroked: {
      type: Boolean,
      default: false },

    // 描边颜色
    strokeColor: {
      type: String,
      default: '#f1a6bd' },

    // 旋转的类型
    rotateType: {
      type: String,
      default: 'roulette' },

    // 旋转动画时间 单位s
    duration: {
      type: Number,
      default: 10 },

    // 旋转的圈数
    ringCount: {
      type: Number,
      default: 30 },

    // 指针位置
    pointerPosition: {
      type: String,
      default: 'edge',
      validator: function validator(value) {
        return value === 'edge' || value === 'middle';
      } },

    // 文字方向
    strDirection: {
      type: String,
      default: 'horizontal',
      validator: function validator(value) {
        return value === 'horizontal' || value === 'vertical';
      } },

    // 字体颜色
    strFontColors: {
      type: Array,
      default: function _default() {return [
        '#f1a6bd',
        '#FFFFFF',
        '#f1a6bd',
        '#FFFFFF',
        '#f1a6bd',
        '#FFFFFF',
        '#f1a6bd',
        '#FFFFFF',
        '#f1a6bd',
        '#FFFFFF',
        '#f1a6bd',
        '#FFFFFF',
        '#f1a6bd',
        '#FFFFFF',
        '#f1a6bd',
        '#FFFFFF',
        '#f1a6bd',
        '#FFFFFF',
        '#f1a6bd',
        '#FFFFFF',
        '#f1a6bd',
        '#FFFFFF',
        '#f1a6bd',
        '#FFFFFF',
        '#f1a6bd',
        '#FFFFFF',
        '#f1a6bd',
        '#FFFFFF',
        '#f1a6bd',
        '#FFFFFF'];} },


    // 文字的大小
    strFontSize: {
      type: Number,
      default: 30 },

    // 奖品文字距离边缘的距离
    strMarginOutside: {
      type: Number,
      default: 50 },

    // 奖品图片距离奖品文字的距离
    imgMarginStr: {
      type: Number,
      default: 20 },

    // 奖品文字多行情况下的行高
    strLineHeight: {
      type: Number,
      default: 1.2 },

    // 奖品文字总长度限制
    strMaxLen: {
      type: Number,
      default: 12 },

    // 奖品文字多行情况下第一行文字长度
    strLineLen: {
      type: Number,
      default: 6 },

    // 奖品图片的宽
    imgWidth: {
      type: Number,
      default: 50 },

    // 奖品图片的高
    imgHeight: {
      type: Number,
      default: 50 },

    // 是否绘制奖品图片
    imgDrawed: {
      type: Boolean,
      default: true },

    // 奖品图片是否裁切为圆形
    imgCircled: {
      type: Boolean,
      default: false },

    // 转盘绘制成功的提示
    successMsg: {
      type: String,
      default: '奖品准备就绪，快来参与抽奖吧' },

    // 转盘绘制失败的提示
    failMsg: {
      type: String,
      default: '奖品仍在准备中，请稍后再来...' },

    // 是否开启画板的缓存
    canvasCached: {
      type: Boolean,
      default: false } },


  data: function data() {
    return {
      // 画板className
      className: 'almost-lottery__canvas',
      // 高清固定 2 倍，不再从 system 中动态获取，因为 h5、app-vue 中单个尺寸过大时存在 iOS/Safari 无法绘制的问题，且 2 倍基本也可以解决模糊的问题
      systemPixelRatio: 2,
      // 抽奖转盘的整体px尺寸
      lotteryPxSize: 0,
      // 画板的px尺寸
      canvasImgPxSize: 0,
      // 抽奖按钮的px尺寸
      actionPxSize: 0,
      // 奖品文字距离转盘边缘的距离
      strMarginPxOutside: 0,
      // 奖品图片相对奖品文字的距离
      imgMarginPxStr: 0,
      // 奖品图片的宽、高
      imgPxWidth: 0,
      imgPxHeight: 0,
      // 画板导出的图片
      lotteryImg: '',
      // 旋转到奖品目标需要的角度
      targetAngle: 0,
      targetActionAngle: 0,
      // 旋转动画时间 单位 s
      transitionDuration: 0,
      // 是否正在旋转
      isRotate: false,
      // 当前停留在那个奖品的序号
      stayIndex: 0,
      // 当前中奖奖品的序号
      targetIndex: 0,
      // 是否存在可用的缓存转盘图
      isCacheImg: false,
      oldLotteryImg: '',
      // 解决 app 不支持 measureText 的问题
      // app 已在 2.9.3 的版本中提供了对 measureText 的支持，将在后续版本逐渐稳定后移除相关兼容代码
      measureText: '' };

  },
  computed: {
    // 高清尺寸
    higtCanvasSize: function higtCanvasSize() {
      return this.canvasImgPxSize * this.systemPixelRatio;
    },
    // 高清字体
    higtFontSize: function higtFontSize() {
      return Math.round(this.strFontSize / this.pixelRatio) * this.systemPixelRatio;
    },
    // 高清行高
    higtHeightMultiple: function higtHeightMultiple() {
      return Math.round(this.strFontSize / this.pixelRatio) * this.strLineHeight * this.systemPixelRatio;
    },
    canvasImgToLeftPx: function canvasImgToLeftPx() {
      return (this.lotteryPxSize - this.canvasImgPxSize) / 2;
    },
    actionBgToLeftPx: function actionBgToLeftPx() {
      return (this.lotteryPxSize - this.actionPxSize) / 2;
    },
    // 根据奖品列表计算 canvas 旋转角度
    canvasAngle: function canvasAngle() {
      var result = 0;

      var prizeCount = this.prizeList.length;
      var prizeClip = 360 / prizeCount;
      var diffNum = 90 / prizeClip;
      if (this.pointerPosition === 'edge' || this.rotateType === 'pointer') {
        result = -(prizeClip * diffNum);
      } else {
        result = -(prizeClip * diffNum + prizeClip / 2);
      }
      return result;
    },
    actionAngle: function actionAngle() {
      return 0;
    },
    // 外圆的半径
    outsideRadius: function outsideRadius() {
      return this.higtCanvasSize / 2;
    },
    // 内圆的半径
    insideRadius: function insideRadius() {
      return 0.1 * this.systemPixelRatio;
    },
    // 文字距离边缘的距离
    textRadius: function textRadius() {
      return this.strMarginPxOutside * this.systemPixelRatio || this.higtFontSize / 2;
    },
    // 根据画板的宽度计算奖品文字与中心点的距离
    textDistance: function textDistance() {
      var textZeroY = Math.round(this.outsideRadius - this.insideRadius / 2);
      return textZeroY - this.textRadius;
    } },

  watch: {
    // 监听获奖序号的变动
    prizeIndex: function prizeIndex(newVal, oldVal) {
      __f__("log", "新:" + newVal + "---旧:" + oldVal, " at uni_modules/almost-lottery/components/almost-lottery/almost-lottery.vue:398");
      if (newVal > -1) {
        this.targetIndex = newVal;
        this.onRotateStart();
      } else {
        __f__("info", '旋转结束，prizeIndex 已重置', " at uni_modules/almost-lottery/components/almost-lottery/almost-lottery.vue:403");
      }
    },

    redrawSign: function redrawSign(newVal, oldVal) {
      this.beforeInit();
    } },

  methods: {
    // 开始旋转
    onRotateStart: function onRotateStart() {var _this = this;
      if (this.isRotate) {
        return;
      }
      this.isRotate = true;
      // 奖品总数
      var prizeCount = this.prizeList.length;
      var baseAngle = 360 / prizeCount;
      var angles = 0;

      if (this.rotateType === 'pointer') {
        if (this.targetActionAngle === 0) {
          // 第一次旋转
          angles = (this.targetIndex - this.stayIndex) * baseAngle + baseAngle / 2 - this.actionAngle;
        } else {
          // 后续旋转
          // 后续继续旋转 就只需要计算停留的位置与目标位置的角度
          angles = (this.targetIndex - this.stayIndex) * baseAngle;
        }

        // 更新目前序号
        this.stayIndex = this.targetIndex;
        // 转 8 圈，圈数越多，转的越快
        this.targetActionAngle += angles + 360 * this.ringCount;
        __f__("log", 'targetActionAngle', this.targetActionAngle, " at uni_modules/almost-lottery/components/almost-lottery/almost-lottery.vue:437");
      } else {
        if (this.targetAngle === 0) {
          // 第一次旋转
          // 因为第一个奖品是从0°开始的，即水平向右方向
          // 第一次旋转角度 = 270度 - (停留的序号-目标序号) * 每个奖品区间角度 - 每个奖品区间角度的一半 - canvas自身旋转的度数
          angles = 270 - (this.targetIndex - this.stayIndex) * baseAngle - baseAngle / 2 - this.canvasAngle;
        } else {
          // 后续旋转
          // 后续继续旋转 就只需要计算停留的位置与目标位置的角度
          angles = -(this.targetIndex - this.stayIndex) * baseAngle;
        }

        // 更新目前序号
        this.stayIndex = this.targetIndex;
        // 转 8 圈，圈数越多，转的越快
        this.targetAngle += angles + 360 * this.ringCount;
      }

      // 计算转盘结束的时间，预加一些延迟确保转盘停止后触发结束事件
      var endTime = this.transitionDuration * 1000 + 100;
      var endTimer = setTimeout(function () {
        clearTimeout(endTimer);
        endTimer = null;

        _this.isRotate = false;
        _this.$emit('draw-end');
      }, endTime);

      var resetPrizeTimer = setTimeout(function () {
        clearTimeout(resetPrizeTimer);
        resetPrizeTimer = null;

        // 每次抽奖结束后都要重置父级组件的 prizeIndex
        _this.$emit('reset-index');
      }, endTime + 50);
    },
    // 点击 开始抽奖 按钮
    handleActionStart: function handleActionStart() {
      if (!this.lotteryImg) {
        return;
      }
      if (this.isRotate) {
        return;
      }
      this.$emit('draw-start');
    },
    // 渲染转盘
    onCreateCanvas: function onCreateCanvas() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var canvasId, ctx, canvasW, canvasH, prizeCount, baseAngle, i, prizeItem, angle, translateX, translateY, rewardName, realLen, isLineBreak, textCount, tempTxt, rewardNames, j, _j, tempStrSize, tempStrWidth, textWidth, _tempStrWidth, _tempStrSize, _tempStrWidth2, _textWidth, _tempStrWidth3, _rewardNames, _j2, _tempStrSize2, _tempStrWidth4, _textWidth2, _tempStrWidth5, reg, platformTips, res, tempFilePath, prizeImageX, prizeImageY, prizeImageW, prizeImageH;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                // 获取 canvas 画布
                canvasId = _this2.canvasId;
                ctx = uni.createCanvasContext(canvasId, _this2);

                // canvas 的宽高
                canvasW = _this2.higtCanvasSize;
                canvasH = _this2.higtCanvasSize;

                // 根据奖品个数计算 角度
                prizeCount = _this2.prizeList.length;
                baseAngle = Math.PI * 2 / prizeCount;

                // 设置字体
                ctx.setFontSize(_this2.higtFontSize);

                // 注意，开始画的位置是从0°角的位置开始画的。也就是水平向右的方向。
                // 画具体内容
                i = 0;case 8:if (!(i < prizeCount)) {_context.next = 125;break;}
                prizeItem = _this2.prizeList[i];
                // 当前角度
                angle = i * baseAngle;

                // 保存当前画布的状态
                ctx.save();

                // x => 圆弧对应的圆心横坐标 x
                // y => 圆弧对应的圆心横坐标 y
                // radius => 圆弧的半径大小
                // startAngle => 圆弧开始的角度，单位是弧度
                // endAngle => 圆弧结束的角度，单位是弧度
                // anticlockwise(可选) => 绘制方向，true 为逆时针，false 为顺时针

                ctx.beginPath();
                // 外圆
                ctx.arc(canvasW * 0.5, canvasH * 0.5, _this2.outsideRadius, angle, angle + baseAngle, false);
                // 内圆
                ctx.arc(canvasW * 0.5, canvasH * 0.5, _this2.insideRadius, angle + baseAngle, angle, true);

                // 每个奖品区块背景填充颜色
                if (_this2.colors.length === 2) {
                  ctx.setFillStyle(_this2.colors[i % 2]);
                } else {
                  ctx.setFillStyle(_this2.colors[i]);
                }
                // 填充颜色
                ctx.fill();

                // 开启描边
                if (_this2.stroked) {
                  // 设置描边颜色
                  ctx.setStrokeStyle("".concat(_this2.strokeColor));
                  // 描边
                  ctx.stroke();
                }

                // 开始绘制奖品内容
                // 重新映射画布上的 (0,0) 位置
                translateX = canvasW * 0.5 + Math.cos(angle + baseAngle / 2) * _this2.textDistance;
                translateY = canvasH * 0.5 + Math.sin(angle + baseAngle / 2) * _this2.textDistance;
                ctx.translate(translateX, translateY);

                // 绘制奖品名称
                rewardName = _this2.strLimit(prizeItem.prizeName);

                // 设置文字颜色
                if (_this2.strFontColors.length === 1) {
                  ctx.setFillStyle(_this2.strFontColors[0]);
                } else if (_this2.strFontColors.length === 2) {
                  ctx.setFillStyle(_this2.strFontColors[i % 2]);
                } else {
                  ctx.setFillStyle(_this2.strFontColors[i]);
                }

                // rotate方法旋转当前的绘图，因为文字是和当前扇形中心线垂直的
                ctx.rotate(angle + baseAngle / 2 + Math.PI / 2);

                // 设置文本位置并处理换行
                if (!(_this2.strDirection === 'horizontal')) {_context.next = 70;break;}if (!(

                rewardName && _this2.prizeNameDrawed)) {_context.next = 68;break;}
                realLen = (0, _almostUtils.clacTextLen)(rewardName).realLen;
                isLineBreak = realLen > _this2.strLineLen;if (!
                isLineBreak) {_context.next = 54;break;}
                // 获得多行文本数组
                textCount = 0;
                tempTxt = '';
                rewardNames = [];
                for (j = 0; j < rewardName.length; j++) {
                  textCount += (0, _almostUtils.clacTextLen)(rewardName[j]).byteLen;
                  tempTxt += rewardName[j];

                  if (textCount === _this2.strLineLen * 2) {
                    rewardNames.push(tempTxt);
                    textCount = 0;
                    tempTxt = '';
                  } else {
                    if (rewardName.length - 1 === j) {
                      rewardNames.push(tempTxt);
                      textCount = 0;
                      tempTxt = '';
                    }
                  }
                }

                // 循环文本数组，计算每一行的文本宽度
                _j = 0;case 34:if (!(_j < rewardNames.length)) {_context.next = 52;break;}if (!(
                ctx.measureText && ctx.measureText(rewardNames[_j]).width > 0)) {_context.next = 41;break;}
                // 文本的宽度信息
                tempStrSize = ctx.measureText(rewardNames[_j]);
                tempStrWidth = -(tempStrSize.width / 2).toFixed(2);
                ctx.fillText(rewardNames[_j], tempStrWidth, _j * _this2.higtHeightMultiple);_context.next = 49;break;case 41:

                _this2.measureText = rewardNames[_j];

                // 等待页面重新渲染
                _context.next = 44;return _this2.$nextTick();case 44:_context.next = 46;return (

                  _this2.getTextWidth());case 46:textWidth = _context.sent;
                _tempStrWidth = -(textWidth / 2).toFixed(2);
                ctx.fillText(rewardNames[_j], _tempStrWidth, _j * _this2.higtHeightMultiple);
                // console.log(rewardNames[j], textWidth, j)
              case 49:_j++;_context.next = 34;break;case 52:_context.next = 68;break;case 54:if (!(


                ctx.measureText && ctx.measureText(rewardName).width > 0)) {_context.next = 60;break;}
                // 文本的宽度信息
                _tempStrSize = ctx.measureText(rewardName);
                _tempStrWidth2 = -(_tempStrSize.width / 2).toFixed(2);
                ctx.fillText(rewardName, _tempStrWidth2, 0);_context.next = 68;break;case 60:

                _this2.measureText = rewardName;

                // 等待页面重新渲染
                _context.next = 63;return _this2.$nextTick();case 63:_context.next = 65;return (

                  _this2.getTextWidth());case 65:_textWidth = _context.sent;
                _tempStrWidth3 = -(_textWidth / 2).toFixed(2);
                ctx.fillText(rewardName, _tempStrWidth3, 0);case 68:_context.next = 90;break;case 70:




                _rewardNames = rewardName.split('');
                _j2 = 0;case 72:if (!(_j2 < _rewardNames.length)) {_context.next = 90;break;}if (!(
                ctx.measureText && ctx.measureText(_rewardNames[_j2]).width > 0)) {_context.next = 79;break;}
                // 文本的宽度信息
                _tempStrSize2 = ctx.measureText(_rewardNames[_j2]);
                _tempStrWidth4 = -(_tempStrSize2.width / 2).toFixed(2);
                ctx.fillText(_rewardNames[_j2], _tempStrWidth4, _j2 * _this2.higtHeightMultiple);_context.next = 87;break;case 79:

                _this2.measureText = _rewardNames[_j2];

                // 等待页面重新渲染
                _context.next = 82;return _this2.$nextTick();case 82:_context.next = 84;return (

                  _this2.getTextWidth());case 84:_textWidth2 = _context.sent;
                _tempStrWidth5 = -(_textWidth2 / 2).toFixed(2);
                ctx.fillText(_rewardNames[_j2], _tempStrWidth5, _j2 * _this2.higtHeightMultiple);
                // console.log(rewardNames[j], textWidth, i)
              case 87:_j2++;_context.next = 72;break;case 90:if (!(





                _this2.imgDrawed && prizeItem.prizeImage && _this2.strDirection !== 'vertical')) {_context.next = 121;break;}
                // App-Android平台 系统 webview 更新到 Chrome84+ 后 canvas 组件绘制本地图像 uni.canvasToTempFilePath 会报错
                // 统一将图片处理成 base64
                // https://ask.dcloud.net.cn/question/103303
                reg = /^(https|http)/g;
                // 处理远程图片
                if (!reg.test(prizeItem.prizeImage)) {_context.next = 110;break;}
                platformTips = '';

                platformTips = '';







                __f__("warn", "###\u5F53\u524D\u6570\u636E\u5217\u8868\u4E2D\u7684\u5956\u54C1\u56FE\u7247\u4E3A\u7F51\u7EDC\u56FE\u7247\uFF0C".concat(platformTips, "\u5F00\u59CB\u5C1D\u8BD5\u4E0B\u8F7D\u56FE\u7247...###"), " at uni_modules/almost-lottery/components/almost-lottery/almost-lottery.vue:668");_context.next = 98;return (
                  (0, _almostUtils.downloadFile)(prizeItem.prizeImage));case 98:res = _context.sent;
                __f__("log", '处理远程图片', res, " at uni_modules/almost-lottery/components/almost-lottery/almost-lottery.vue:670");if (!
                res.ok) {_context.next = 107;break;}
                tempFilePath = res.tempFilePath;_context.next = 104;return (

                  (0, _almostUtils.pathToBase64)(tempFilePath));case 104:prizeItem.prizeImage = _context.sent;_context.next = 108;break;case 107:





                _this2.handlePrizeImgSuc({
                  ok: false,
                  data: res.data,
                  msg: res.msg });case 108:_context.next = 116;break;case 110:if (!(





                prizeItem.prizeImage.indexOf(';base64,') === -1)) {_context.next = 116;break;}
                __f__("log", '开始处理本地图片', prizeItem.prizeImage, " at uni_modules/almost-lottery/components/almost-lottery/almost-lottery.vue:690");_context.next = 114;return (
                  (0, _almostUtils.pathToBase64)(prizeItem.prizeImage));case 114:prizeItem.prizeImage = _context.sent;
                __f__("log", '处理本地图片结束', prizeItem.prizeImage, " at uni_modules/almost-lottery/components/almost-lottery/almost-lottery.vue:692");case 116:













                prizeImageX = -(_this2.imgPxWidth * _this2.systemPixelRatio / 2);
                prizeImageY = _this2.imgMarginPxStr * _this2.systemPixelRatio;
                prizeImageW = _this2.imgPxWidth * _this2.systemPixelRatio;
                prizeImageH = _this2.imgPxHeight * _this2.systemPixelRatio;
                if (_this2.imgCircled) {
                  // 重新设置每个圆形的背景色
                  if (_this2.colors.length === 2) {
                    ctx.setFillStyle(_this2.colors[i % 2]);
                  } else {
                    ctx.setFillStyle(_this2.colors[i]);
                  }
                  (0, _almostUtils.circleImg)(ctx, prizeItem.prizeImage, prizeImageX, prizeImageY, prizeImageW, prizeImageH);
                } else {
                  ctx.drawImage(prizeItem.prizeImage, prizeImageX, prizeImageY, prizeImageW, prizeImageH);
                }case 121:


                ctx.restore();case 122:i++;_context.next = 8;break;case 125:


                // 保存绘图并导出图片
                ctx.draw(true, function () {
                  var drawTimer = setTimeout(function () {
                    clearTimeout(drawTimer);
                    drawTimer = null;
























                    uni.canvasToTempFilePath({
                      canvasId: _this2.canvasId,
                      destWidth: _this2.higtCanvasSize,
                      destHeight: _this2.higtCanvasSize,
                      success: function success(res) {
                        // 在 H5 平台下，tempFilePath 为 base64
                        // console.log(res.tempFilePath)
                        _this2.handlePrizeImg({
                          ok: true,
                          data: res.tempFilePath,
                          msg: '画布导出生成图片成功' });

                      },
                      fail: function fail(err) {
                        _this2.handlePrizeImg({
                          ok: false,
                          data: err,
                          msg: '画布导出生成图片失败' });

                      } },
                    _this2);

                  }, 500);
                });case 126:case "end":return _context.stop();}}}, _callee);}))();
    },
    // 处理导出的图片
    handlePrizeImg: function handlePrizeImg(res) {var _this3 = this;
      if (res.ok) {
        var data = res.data;

        if (!this.canvasCached) {
          this.lotteryImg = data;
          this.handlePrizeImgSuc(res);
          return;
        }


        if (this.isCacheImg) {
          uni.getSavedFileList({
            success: function success(sucRes) {
              var fileList = sucRes.fileList;
              // console.log('getSavedFileList Cached', fileList)

              var cached = false;

              if (fileList.length) {
                for (var i = 0; i < fileList.length; i++) {
                  var item = fileList[i];
                  if (item.filePath === data) {
                    cached = true;
                    _this3.lotteryImg = data;

                    __f__("info", '经查，本地缓存中存在的转盘图可用，本次将不再绘制转盘', " at uni_modules/almost-lottery/components/almost-lottery/almost-lottery.vue:807");
                    _this3.handlePrizeImgSuc(res);
                    break;
                  }
                }
              }

              if (!cached) {
                __f__("info", '经查，本地缓存中存在的转盘图不可用，需要重新初始化转盘绘制', " at uni_modules/almost-lottery/components/almost-lottery/almost-lottery.vue:815");
                _this3.initCanvasDraw();
              }
            },
            fail: function fail(err) {
              _this3.initCanvasDraw();
            } });

        } else {
          uni.saveFile({
            tempFilePath: data,
            success: function success(sucRes) {
              var filePath = sucRes.savedFilePath;
              // console.log('saveFile', filePath)
              (0, _almostUtils.setStore)("".concat(_this3.canvasId, "LotteryImg"), filePath);
              _this3.lotteryImg = filePath;
              _this3.handlePrizeImgSuc({
                ok: true,
                data: filePath,
                msg: '画布导出生成图片成功' });

            },
            fail: function fail(err) {
              _this3.handlePrizeImg({
                ok: false,
                data: err,
                msg: '画布导出生成图片失败' });

            } });

        }










      } else {
        __f__("error", res.msg, res, " at uni_modules/almost-lottery/components/almost-lottery/almost-lottery.vue:857");






      }
    },
    // 处理图片完成
    handlePrizeImgSuc: function handlePrizeImgSuc(res) {
    },
    // 兼容 app 端不支持 ctx.measureText
    // 已知问题：初始绘制时，低端安卓机 平均耗时 2s
    // hbx 2.8.12+ 已在 app 端支持
    getTextWidth: function getTextWidth() {
      __f__("warn", '正在采用兼容方式获取文本的 size 信息', " at uni_modules/almost-lottery/components/almost-lottery/almost-lottery.vue:873");
      var query = uni.createSelectorQuery().in(this);
      var nodesRef = query.select('.almost-lottery__measureText');
      return new Promise(function (resolve, reject) {
        nodesRef.fields({
          size: true },
        function (res) {
          resolve(res.width);
        }).exec();
      });
    },
    // 处理文字溢出
    strLimit: function strLimit(value) {
      var maxLength = this.strMaxLen;
      if (!value || !maxLength) return value;
      return (0, _almostUtils.clacTextLen)(value).realLen > maxLength ? value.slice(0, maxLength - 1) + '..' : value;
    },
    // 检查本地缓存中是否存在转盘图
    checkCacheImg: function checkCacheImg() {
      __f__("log", '检查本地缓存中是否存在转盘图', " at uni_modules/almost-lottery/components/almost-lottery/almost-lottery.vue:892");
      // 检查是否已有缓存的转盘图
      // 检查是否与本次奖品数据相同
      this.oldLotteryImg = (0, _almostUtils.getStore)("".concat(this.canvasId, "LotteryImg"));
      var oldPrizeList = (0, _almostUtils.getStore)("".concat(this.canvasId, "PrizeList"));
      var newPrizeList = JSON.stringify(this.prizeList);
      if (this.oldLotteryImg) {
        if (oldPrizeList === newPrizeList) {
          __f__("log", "\u7ECF\u67E5\uFF0C\u672C\u5730\u7F13\u5B58\u4E2D\u5B58\u5728\u8F6C\u76D8\u56FE => ".concat(this.oldLotteryImg), " at uni_modules/almost-lottery/components/almost-lottery/almost-lottery.vue:900");
          this.isCacheImg = true;

          __f__("log", '需要继续判断这张缓存图是否可用', " at uni_modules/almost-lottery/components/almost-lottery/almost-lottery.vue:903");
          this.handlePrizeImg({
            ok: true,
            data: this.oldLotteryImg,
            msg: '画布导出生成图片成功' });

          return;
        }
      }

      __f__("log", '经查，本地缓存中不存在转盘图', " at uni_modules/almost-lottery/components/almost-lottery/almost-lottery.vue:913");
      this.initCanvasDraw();
    },
    // 初始化绘制
    initCanvasDraw: function initCanvasDraw() {
      __f__("log", '开始初始化转盘绘制', " at uni_modules/almost-lottery/components/almost-lottery/almost-lottery.vue:918");
      this.isCacheImg = false;
      this.lotteryImg = '';
      (0, _almostUtils.clearStore)("".concat(this.canvasId, "LotteryImg"));
      (0, _almostUtils.setStore)("".concat(this.canvasId, "PrizeList"), this.prizeList);
      this.onCreateCanvas();
    },
    // 预处理初始化
    beforeInit: function beforeInit() {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var query, lotterySize, actionSize, strMarginSize, imgMarginStr, imgSize, stoTimer;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                query = uni.createSelectorQuery().in(_this4);
                // 处理 rpx 自适应尺寸
                _context2.next = 3;return new Promise(function (resolve) {
                  query.select('.almost-lottery__wrap').boundingClientRect(function (rects) {
                    resolve(rects);
                    // console.log('处理 lottery rpx 的自适应', rects)
                  }).exec();
                });case 3:lotterySize = _context2.sent;_context2.next = 6;return (
                  new Promise(function (resolve) {
                    query.select('.lottery-action').boundingClientRect(function (rects) {
                      resolve(rects);
                      // console.log('处理 action rpx 的自适应', rects)
                    }).exec();
                  }));case 6:actionSize = _context2.sent;_context2.next = 9;return (
                  new Promise(function (resolve) {
                    query.select('.str-margin-outside').boundingClientRect(function (rects) {
                      resolve(rects);
                      // console.log('处理 str-margin-outside rpx 的自适应', rects)
                    }).exec();
                  }));case 9:strMarginSize = _context2.sent;_context2.next = 12;return (
                  new Promise(function (resolve) {
                    query.select('.img-margin-str').boundingClientRect(function (rects) {
                      resolve(rects);
                      // console.log('处理 img-margin-str rpx 的自适应', rects)
                    }).exec();
                  }));case 12:imgMarginStr = _context2.sent;_context2.next = 15;return (
                  new Promise(function (resolve) {
                    query.select('.img-size').boundingClientRect(function (rects) {
                      resolve(rects);
                      // console.log('处理 img-size rpx 的自适应', rects)
                    }).exec();
                  }));case 15:imgSize = _context2.sent;

                _this4.lotteryPxSize = Math.floor(lotterySize.width);
                _this4.canvasImgPxSize = _this4.lotteryPxSize - Math.floor(actionSize.left) + Math.floor(lotterySize.left);
                _this4.actionPxSize = Math.floor(actionSize.width);

                _this4.strMarginPxOutside = Math.floor(strMarginSize.left) - Math.floor(lotterySize.left);
                _this4.imgMarginPxStr = Math.floor(imgMarginStr.left) - Math.floor(lotterySize.left);
                _this4.imgPxWidth = Math.floor(imgSize.width);
                _this4.imgPxHeight = Math.floor(imgSize.height);

                // console.log(this.lotteryPxSize, this.canvasImgPxSize, this.actionPxSize)

                stoTimer = setTimeout(function () {
                  clearTimeout(stoTimer);
                  stoTimer = null;

                  // 判断画板是否设置缓存
                  if (_this4.canvasCached) {
                    _this4.checkCacheImg();
                  } else {
                    _this4.initCanvasDraw();
                  }
                  _this4.transitionDuration = _this4.duration;
                }, 50);case 24:case "end":return _context2.stop();}}}, _callee2);}))();
    } },

  mounted: function mounted() {var _this5 = this;
    this.$nextTick(function () {
      var delay = 50;

      // 小程序平台需要更多的延时才能获取到准确的元素 Size 信息
      //



      var stoTimer = setTimeout(function () {
        clearTimeout(stoTimer);
        stoTimer = null;

        _this5.beforeInit();
      }, delay);
    });
  } };exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)["default"]))

/***/ }),
/* 10 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 11 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 12);

/***/ }),
/* 12 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 13);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 13 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 14 */
/*!******************************************************************************************!*\
  !*** D:/forfun/Almost-Lottery抽奖转盘示例(2)/uni_modules/almost-lottery/utils/almost-utils.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__, wx) {Object.defineProperty(exports, "__esModule", { value: true });exports.base64ToPath = exports.pathToBase64 = exports.clearCacheFile = exports.downloadFile = exports.clacTextLen = exports.circleImg = exports.clearStore = exports.getStore = exports.setStore = void 0; /**
                                                                                                                                                                                                                                                                                       * 存储 localStorage 数据
                                                                                                                                                                                                                                                                                       * @param {String} name - 缓存数据的标识
                                                                                                                                                                                                                                                                                       * @param {any} content - 缓存的数据内容
                                                                                                                                                                                                                                                                                       */
var setStore = function setStore(name, content) {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  uni.setStorageSync(name, content);
};

/**
    * 获取 localStorage 数据
    * @param {String} name - 缓存数据的标识
    */exports.setStore = setStore;
var getStore = function getStore(name) {
  if (!name) return;
  return uni.getStorageSync(name);
};

/**
    * 清除 localStorage 数据
    * @param {String} name - 缓存数据的标识
    */exports.getStore = getStore;
var clearStore = function clearStore(name) {
  if (name) {
    uni.removeStorageSync(name);
  } else {
    __f__("log", '清理本地全部缓存', " at uni_modules/almost-lottery/utils/almost-utils.js:31");
    uni.clearStorageSync();
  }
};

/**
    * 绘制圆形
    * @param {String} ctx - 图片网络地址
    * @param {String} img - 图片地址
    * @param {String} x - x 轴偏移量
    * @param {String} y - y 轴偏移量
    * @param {String} w - 宽
    * @param {String} h - 高
   */exports.clearStore = clearStore;
var circleImg = function circleImg(ctx, img, x, y, w, h) {
  var r = Math.floor(w / 2);
  var cx = x + r;
  var cy = y + r;

  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.clip();
  ctx.drawImage(img, x, y, w, h);
  ctx.restore();
};

/**
    * 计算文本的长度
    * @param {String} text - 文本内容
    */exports.circleImg = circleImg;
var clacTextLen = function clacTextLen(text) {
  if (!text) return { byteLen: 0, realLen: 0 };
  text += '';
  var clacLen = 0;
  for (var i = 0; i < text.length; i++) {
    if (text.charCodeAt(i) < 0 || text.charCodeAt(i) > 255) {
      clacLen += 2;
    } else {
      clacLen += 1;
    }
  }
  // console.log(`当前文本 ${text} 的长度为 ${clacLen / 2}`)
  return {
    byteLen: clacLen,
    realLen: clacLen / 2 };

};

/**
    * 下载文件，并返回临时路径
    * @return {String}  临时路径
    * @param {String} fileUrl - 网络地址
   */exports.clacTextLen = clacTextLen;
var downloadFile = function downloadFile(fileUrl) {
  return new Promise(function (resolve) {
    uni.downloadFile({
      url: fileUrl,
      success: function success(res) {
        resolve({
          ok: true,
          data: res.errMsg,
          tempFilePath: res.tempFilePath });

      },
      fail: function fail(err) {
        resolve({
          ok: false,
          data: err.errMsg,
          msg: '图片下载失败' });

      } });

  });
};

/**
    * 清理应用已缓存的文件
   */exports.downloadFile = downloadFile;
var clearCacheFile = function clearCacheFile() {

  uni.getSavedFileList({
    success: function success(res) {
      var fileList = res.fileList;
      if (fileList.length) {
        for (var i = 0; i < fileList.length; i++) {
          uni.removeSavedFile({
            filePath: fileList[i].filePath,
            complete: function complete() {
              __f__("log", '清除缓存已完成', " at uni_modules/almost-lottery/utils/almost-utils.js:121");
            } });

        }
      }
    },
    fail: function fail(err) {
      __f__("log", 'getSavedFileList Fail', " at uni_modules/almost-lottery/utils/almost-utils.js:128");
    } });


};



// 图像转换工具，可用于图像和base64的转换
// https://ext.dcloud.net.cn/plugin?id=123
exports.clearCacheFile = clearCacheFile;var getLocalFilePath = function getLocalFilePath(path) {
  if (
  path.indexOf('_www') === 0 ||
  path.indexOf('_doc') === 0 ||
  path.indexOf('_documents') === 0 ||
  path.indexOf('_downloads') === 0)
  return path;

  if (path.indexOf('/storage/emulated/0/') === 0) return path;

  if (path.indexOf('/storage/sdcard0/') === 0) return path;

  if (path.indexOf('/var/mobile/') === 0) return path;

  if (path.indexOf('file://') === 0) return path;

  if (path.indexOf('/') === 0) {
    // ios 无法获取本地路径
    var localFilePath = plus.os.name === 'iOS' ? path : plus.io.convertLocalFileSystemURL(path);
    if (localFilePath !== path) {
      return localFilePath;
    } else {
      path = path.substring(1);
    }
  }

  return '_www/' + path;
};

var pathToBase64 = function pathToBase64(path) {
  return new Promise(function (resolve, reject) {
    if (typeof window === 'object' && 'document' in window) {
      if (typeof FileReader === 'function') {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', path, true);
        xhr.responseType = 'blob';
        xhr.onload = function () {
          if (this.status === 200) {
            var fileReader = new FileReader();
            fileReader.onload = function (e) {
              resolve(e.target.result);
            };
            fileReader.onerror = reject;
            fileReader.readAsDataURL(this.response);
          }
        };
        xhr.onerror = reject;
        xhr.send();
        return;
      }
      var canvas = document.createElement('canvas');
      var c2x = canvas.getContext('2d');
      var img = new Image();
      img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        c2x.drawImage(img, 0, 0);
        resolve(canvas.toDataURL());
        canvas.height = canvas.width = 0;
      };
      img.onerror = reject;
      img.src = path;
      return;
    }

    if (typeof plus === 'object') {
      var tempPath = getLocalFilePath(path);
      plus.io.resolveLocalFileSystemURL(tempPath, function (entry) {
        entry.file(function (file) {
          var fileReader = new plus.io.FileReader();
          fileReader.onload = function (data) {
            resolve(data.target.result);
          };
          fileReader.onerror = function (error) {
            __f__("log", error, " at uni_modules/almost-lottery/utils/almost-utils.js:212");
            reject(error);
          };
          fileReader.readAsDataURL(file);
        }, function (error) {
          reject(error);
        });
      }, function (error) {
        reject(error);
      });
      return;
    }

    if (typeof wx === 'object' && wx.canIUse('getFileSystemManager')) {
      wx.getFileSystemManager().readFile({
        filePath: path,
        encoding: 'base64',
        success: function success(res) {
          resolve('data:image/png;base64,' + res.data);
        },
        fail: function fail(error) {
          reject(error);
        } });

      return;
    }
    reject(new Error('not support'));
  });
};exports.pathToBase64 = pathToBase64;

var base64ToPath = function base64ToPath(base64) {
  return new Promise(function (resolve, reject) {
    if (typeof window === 'object' && 'document' in window) {
      base64 = base64.split(',');
      var type = base64[0].match(/:(.*?);/)[1];
      var str = atob(base64[1]);
      var n = str.length;
      var array = new Uint8Array(n);
      while (n--) {
        array[n] = str.charCodeAt(n);
      }
      return resolve((window.URL || window.webkitURL).createObjectURL(new Blob([array], {
        type: type })));

    }
    var extName = base64.match(/data\:\S+\/(\S+);/);
    if (extName) {
      extName = extName[1];
    } else {
      reject(new Error('base64 error'));
    }
    var fileName = Date.now() + '.' + extName;
    if (typeof plus === 'object') {
      var bitmap = new plus.nativeObj.Bitmap('bitmap' + Date.now());
      bitmap.loadBase64Data(base64, function () {
        var filePath = '_doc/uniapp_temp/' + fileName;
        bitmap.save(filePath, {}, function () {
          bitmap.clear();
          resolve(filePath);
        }, function (error) {
          bitmap.clear();
          reject(error);
        });
      }, function (error) {
        bitmap.clear();
        reject(error);
      });
      return;
    }
    if (typeof wx === 'object' && wx.canIUse('getFileSystemManager')) {
      var filePath = wx.env.USER_DATA_PATH + '/' + fileName;
      wx.getFileSystemManager().writeFile({
        filePath: filePath,
        data: base64.replace(/^data:\S+\/\S+;base64,/, ''),
        encoding: 'base64',
        success: function success() {
          resolve(filePath);
        },
        fail: function fail(error) {
          reject(error);
        } });

      return;
    }
    reject(new Error('not support'));
  });
};exports.base64ToPath = base64ToPath;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)["default"], __webpack_require__(/*! @dcloudio/uni-mp-weixin/dist/mp.js */ 15)["default"]))

/***/ }),
/* 15 */
/*!*********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/mp.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.Behavior = Behavior;exports.Component = Component;exports.Page = Page;exports.nextTick = exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 17));var _PROP_DEFAULT_VALUES;function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}

function parseData(data, vueComponentOptions) {
  if (!data) {
    return;
  }
  vueComponentOptions.mpOptions.data = data;
}

function parseComponents(vueComponentOptions) {
  vueComponentOptions.components = global.__wxVueOptions.components;
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var SOURCE_KEY = '__data__';

var COMPONENT_LIFECYCLE = {
  created: 'onServiceCreated',
  attached: 'onServiceAttached',
  ready: 'mounted',
  moved: 'moved',
  detached: 'destroyed' };


var COMPONENT_LIFECYCLE_KEYS = Object.keys(COMPONENT_LIFECYCLE);

var PAGE_LIFETIMES = {
  show: 'onPageShow',
  hide: 'onPageHide',
  resize: 'onPageResize' };


var PAGE_LIFETIMES_KEYS = Object.keys(PAGE_LIFETIMES);

var PAGE_LIFECYCLE = [
'onLoad',
'onShow',
'onReady',
'onHide',
'onUnload',
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function parsePageMethods(mpComponentOptions, vueComponentOptions) {
  var methods = Object.create(null);
  Object.keys(mpComponentOptions).forEach(function (key) {
    var value = mpComponentOptions[key];
    if (isFn(value) && PAGE_LIFECYCLE.indexOf(key) === -1) {
      methods[key] = value;
    }
  });
  vueComponentOptions.methods = methods;
}

function parsePageLifecycle(mpComponentOptions, vueComponentOptions) {
  Object.keys(mpComponentOptions).forEach(function (key) {
    if (PAGE_LIFECYCLE.indexOf(key) !== -1) {
      vueComponentOptions[key] = mpComponentOptions[key];
    }
  });
}

function parsePage(mpComponentOptions) {
  var vueComponentOptions = {
    mixins: [],
    mpOptions: {} };


  parseComponents(vueComponentOptions);

  parseData(mpComponentOptions.data, vueComponentOptions);

  parsePageMethods(mpComponentOptions, vueComponentOptions);
  parsePageLifecycle(mpComponentOptions, vueComponentOptions);

  return vueComponentOptions;
}

function parseProperties(properties, vueComponentOptions) {
  if (!properties) {
    return;
  }
  vueComponentOptions.mpOptions.properties = properties;
}

function parseOptions(options, vueComponentOptions) {
  if (!options) {
    return;
  }
  vueComponentOptions.mpOptions.options = options;
}

function parseMethods(methods, vueComponentOptions) {
  if (!methods) {
    return;
  }
  if (methods.$emit) {
    console.warn('Method "$emit" conflicts with an existing Vue instance method');
    delete methods.$emit;
  }
  vueComponentOptions.methods = methods;
}

function parseLifecycle(mpComponentOptions, vueComponentOptions) {
  COMPONENT_LIFECYCLE_KEYS.forEach(function (name) {
    if (hasOwn(mpComponentOptions, name)) {
      (vueComponentOptions[COMPONENT_LIFECYCLE[name]] || (vueComponentOptions[COMPONENT_LIFECYCLE[name]] = [])).
      push(mpComponentOptions[name]);
    }
  });
}

var mpBehaviors = {
  'wx://form-field': {},
  'wx://component-export': {} };


function callDefinitionFilter(mpComponentOptions) {var

  behaviors =

  mpComponentOptions.behaviors,definitionFilter = mpComponentOptions.definitionFilter;

  var behaviorDefinitionFilters = [];

  if (Array.isArray(behaviors)) {
    behaviors.forEach(function (behavior) {
      behavior = typeof behavior === 'string' ? mpBehaviors[behavior] : behavior;
      if (behavior.definitionFilter) {
        behaviorDefinitionFilters.push(behavior.definitionFilter);
        behavior.definitionFilter.call(null, mpComponentOptions, []);
      }
    });
  }

  if (isFn(definitionFilter)) {
    return function (defFields) {
      definitionFilter(defFields, behaviorDefinitionFilters);
    };
  }
}

function parseDefinitionFilter(mpComponentOptions, vueComponentOptions) {
  callDefinitionFilter(mpComponentOptions);
}

function parseBehavior(behavior) {var

  data =



  behavior.data,methods = behavior.methods,behaviors = behavior.behaviors,properties = behavior.properties;

  var vueComponentOptions = {
    watch: {},
    mpOptions: {
      mpObservers: [] } };



  parseData(data, vueComponentOptions);
  parseMethods(methods, vueComponentOptions);
  parseBehaviors(behaviors, vueComponentOptions);
  parseProperties(properties, vueComponentOptions);

  parseLifecycle(behavior, vueComponentOptions);
  parseDefinitionFilter(behavior);

  return vueComponentOptions;
}

var BEHAVIORS = {
  'wx://form-field': {
    beforeCreate: function beforeCreate() {
      var mpOptions = this.$options.mpOptions;
      if (!mpOptions.properties) {
        mpOptions.properties = Object.create(null);
      }

      var props = mpOptions.properties;
      // TODO form submit,reset
      if (!hasOwn(props, 'name')) {
        props.name = {
          type: String };

      }
      if (!hasOwn(props, 'value')) {
        props.value = {
          type: String // 默认类型调整为 String,否则默认值为 null,导致一些自定义 input 显示不正确
        };
      }
    } } };



function parseBehaviors(behaviors, vueComponentOptions) {
  if (!behaviors) {
    return;
  }
  behaviors.forEach(function (behavior) {
    if (typeof behavior === 'string') {
      BEHAVIORS[behavior] && vueComponentOptions.mixins.push(BEHAVIORS[behavior]);
    } else {
      vueComponentOptions.mixins.push(parseBehavior(behavior));
    }
  });
}

function parseSinglePath(path) {
  return path.split('.');
}

function parseMultiPaths(paths) {
  return paths.split(',').map(function (path) {return parseSinglePath(path);});
}

function parseObservers(observers, vueComponentOptions) {
  if (!observers) {
    return;
  }var


  mpObservers =
  vueComponentOptions.mpOptions.mpObservers;

  Object.keys(observers).forEach(function (path) {
    mpObservers.push({
      paths: parseMultiPaths(path),
      observer: observers[path] });

  });
}

function relative(from, to) {
  if (to.indexOf('/') === 0) {
    from = '';
  }
  var fromArr = from.split('/');
  var toArr = to.split('/');
  fromArr.pop();
  while (toArr.length) {
    var part = toArr.shift();
    if (part !== '' && part !== '.') {
      if (part !== '..') {
        fromArr.push(part);
      } else {
        fromArr.pop();
      }
    }
  }
  return fromArr.join('/');
}

function parseRelations(relations, vueComponentOptions) {
  if (!relations) {
    return;
  }
  Object.keys(relations).forEach(function (name) {
    var relation = relations[name];
    relation.name = name;
    relation.target = relation.target ? String(relation.target) : relative(global.__wxRoute, name);
  });
  vueComponentOptions.mpOptions.relations = relations;
}

function parseExternalClasses(externalClasses, vueComponentOptions) {
  if (!externalClasses) {
    return;
  }
  if (!Array.isArray(externalClasses)) {
    externalClasses = [externalClasses];
  }
  vueComponentOptions.mpOptions.externalClasses = externalClasses;
  if (!vueComponentOptions.mpOptions.properties) {
    vueComponentOptions.mpOptions.properties = Object.create(null);
  }
  externalClasses.forEach(function (externalClass) {
    vueComponentOptions.mpOptions.properties[camelize(externalClass)] = {
      type: String,
      value: '' };

  });
}

function parseLifetimes(lifetimes, vueComponentOptions) {
  if (!lifetimes) {
    return;
  }
  parseLifecycle(lifetimes, vueComponentOptions);
}

function parsePageLifetimes(pageLifetimes, vueComponentOptions) {
  if (!pageLifetimes) {
    return;
  }
  PAGE_LIFETIMES_KEYS.forEach(function (key) {
    var lifetimeFn = pageLifetimes[key];
    isFn(lifetimeFn) && (vueComponentOptions[PAGE_LIFETIMES[key]] = lifetimeFn);
  });
}

function parseComponent(mpComponentOptions) {var

  data =









  mpComponentOptions.data,options = mpComponentOptions.options,methods = mpComponentOptions.methods,behaviors = mpComponentOptions.behaviors,lifetimes = mpComponentOptions.lifetimes,observers = mpComponentOptions.observers,relations = mpComponentOptions.relations,properties = mpComponentOptions.properties,pageLifetimes = mpComponentOptions.pageLifetimes,externalClasses = mpComponentOptions.externalClasses;

  var vueComponentOptions = {
    mixins: [],
    props: {},
    watch: {},
    mpOptions: {
      mpObservers: [] } };



  parseComponents(vueComponentOptions);

  parseData(data, vueComponentOptions);
  parseOptions(options, vueComponentOptions);
  parseMethods(methods, vueComponentOptions);
  parseBehaviors(behaviors, vueComponentOptions);
  parseLifetimes(lifetimes, vueComponentOptions);
  parseObservers(observers, vueComponentOptions);
  parseRelations(relations, vueComponentOptions);
  parseProperties(properties, vueComponentOptions);
  parsePageLifetimes(pageLifetimes, vueComponentOptions);
  parseExternalClasses(externalClasses, vueComponentOptions);

  parseLifecycle(mpComponentOptions, vueComponentOptions);
  parseDefinitionFilter(mpComponentOptions);

  return vueComponentOptions;
}

function initRelationHandlers(type, handler, target, ctx) {
  if (!handler) {
    return;
  }
  var name = "_$".concat(type, "Handlers");
  (ctx[name] || (ctx[name] = [])).push(function () {
    handler.call(ctx, target);
  });
}

function initLinkedHandlers(relation, target, ctx) {
  var type = 'linked';
  var name = relation.name;
  var relationNodes = ctx._$relationNodes || (ctx._$relationNodes = Object.create(null));
  (relationNodes[name] || (relationNodes[name] = [])).push(target);
  initRelationHandlers(type, relation[type], target, ctx);
}

function initUnlinkedHandlers(relation, target, ctx) {
  var type = 'unlinked';
  initRelationHandlers(type, relation[type], target, ctx);
}

function findParentRelation(parentVm, target, type) {
  var relations = parentVm &&
  parentVm.$options.mpOptions &&
  parentVm.$options.mpOptions.relations;

  if (!relations) {
    return [];
  }
  var name = Object.keys(relations).find(function (name) {
    var relation = relations[name];
    return relation.target === target && relation.type === type;
  });
  if (!name) {
    return [];
  }
  return [relations[name], parentVm];
}

function initParentRelation(vm, childRelation, match) {var _match =
  match(vm, vm.$options.mpOptions.path),_match2 = _slicedToArray(_match, 2),parentRelation = _match2[0],parentVm = _match2[1];
  if (!parentRelation) {
    return;
  }

  initLinkedHandlers(parentRelation, vm, parentVm);
  initLinkedHandlers(childRelation, parentVm, vm);

  initUnlinkedHandlers(parentRelation, vm, parentVm);
  initUnlinkedHandlers(childRelation, parentVm, vm);
}

function initRelation(relation, vm) {
  var type = relation.type;
  if (type === 'parent') {
    initParentRelation(vm, relation, function matchParent(vm, target) {
      return findParentRelation(vm.$parent, target, 'child');
    });
  } else if (type === 'ancestor') {
    initParentRelation(vm, relation, function matchAncestor(vm, target) {
      var $parent = vm.$parent;
      while ($parent) {
        var ret = findParentRelation($parent, target, 'descendant');
        if (ret.length) {
          return ret;
        }
        $parent = $parent.$parent;
      }
      return [];
    });
  }
}

function initRelations(vm) {var _ref =


  vm.$options.mpOptions || {},relations = _ref.relations;
  if (!relations) {
    return;
  }
  Object.keys(relations).forEach(function (name) {
    initRelation(relations[name], vm);
  });
}

function handleRelations(vm, type) {
  // TODO 需要移除 relationNodes
  var handlers = vm["_$".concat(type, "Handlers")];
  if (!handlers) {
    return;
  }
  handlers.forEach(function (handler) {return handler();});
}

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop };


function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function setDataByExprPath(exprPath, value, data) {
  var keys = exprPath.replace(/\[(\d+?)\]/g, '.$1').split('.');
  keys.reduce(function (obj, key, idx) {
    if (idx === keys.length - 1) {
      obj[key] = value;
    } else {
      if (typeof obj[key] === 'undefined') {
        obj[key] = {};
      }
      return obj[key];
    }
  }, data);
  return keys.length === 1;
}

function setData(data, callback) {var _this = this;
  if (!isPlainObject(data)) {
    return;
  }
  Object.keys(data).forEach(function (key) {
    if (setDataByExprPath(key, data[key], _this.data)) {
      !hasOwn(_this, key) && proxy(_this, SOURCE_KEY, key);
    }
  });
  this.$forceUpdate();
  isFn(callback) && this.$nextTick(callback);
}

/**
   * https://github.com/swan-team/swan-js/blob/61e2a63f7aa576b5daafbe77fdfa7c65b977060c/src/utils/index.js
   */

var _toString$1 = Object.prototype.toString;
/**
                                              * 深度assign的函数
                                              * @param {Object} targetObject 要被拷贝的目标对象
                                              * @param {Object} originObject 拷贝的源对象
                                              * @return {Object} merge后的对象
                                              */
var deepAssign = function deepAssign() {var targetObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var originObject = arguments.length > 1 ? arguments[1] : undefined;
  var originType = _toString$1.call(originObject);
  if (originType === '[object Array]') {
    targetObject = originObject.slice(0);
    return targetObject;
  } else if (originType === '[object Object]') {
    for (var key in originObject) {
      targetObject[key] = deepAssign(targetObject[key], originObject[key]);
    }
    return targetObject;
  } else if (originType === '[object Date]') {
    return new Date(originObject.getTime());
  } else if (originType === '[object RegExp]') {
    var target = String(originObject);
    var lastIndex = target.lastIndexOf('/');
    return new RegExp(target.slice(1, lastIndex), target.slice(lastIndex + 1));
  }
  return originObject;
};

/**
    * 深度拷贝逻辑，不同于lodash等库，但是与微信一致
    * @param {*} [originObj] 原对象
    * @return {Object|Array} 拷贝结果
    */
var deepClone = function deepClone(originObj) {
  return deepAssign(_toString$1.call(originObj) === '[object Array]' ? [] : {}, originObj);
};

var PROP_DEFAULT_VALUES = (_PROP_DEFAULT_VALUES = {}, _defineProperty(_PROP_DEFAULT_VALUES,
String, ''), _defineProperty(_PROP_DEFAULT_VALUES,
Number, 0), _defineProperty(_PROP_DEFAULT_VALUES,
Boolean, false), _defineProperty(_PROP_DEFAULT_VALUES,
Object, null), _defineProperty(_PROP_DEFAULT_VALUES,
Array, []), _defineProperty(_PROP_DEFAULT_VALUES,
null, null), _PROP_DEFAULT_VALUES);


function getDefaultVal(propType) {
  return PROP_DEFAULT_VALUES[propType];
}

function getPropertyVal(options) {
  if (isPlainObject(options)) {
    if (hasOwn(options, 'value')) {
      return options.value;
    }
    return getDefaultVal(options.type);
  }
  return getDefaultVal(options);
}

function getType(propOptions) {
  return isPlainObject(propOptions) ? propOptions.type : propOptions;
}

function validateProp(key, propsOptions, propsData, vm) {
  var value = propsData[key];
  if (value !== undefined) {
    var propOptions = propsOptions[key];
    var type = getType(propOptions);
    value = formatVal(value, type);
    var observer = propOptions && propOptions.observer;
    if (observer) {
      // 初始化时,异步触发 observer,否则 observer 中无法访问 methods 或其他
      setTimeout(function () {
        observe(observer, vm, value);
      }, 4);
    }
    return value;
  }
  return getPropertyVal(propsOptions[key]);
}

function formatVal(val, type) {
  if (type === Boolean) {
    return !!val;
  } else if (type === String) {
    return String(val);
  }
  return val;
}

function observe(observer, vm, newVal, oldVal) {
  try {
    if (typeof observer === 'function') {
      observer.call(vm, newVal, oldVal);
    } else if (typeof observer === 'string' &&
    typeof vm[observer] === 'function')
    {
      vm[observer](newVal, oldVal);
    }
  } catch (err) {
    console.error("execute observer ".concat(observer, " callback fail! err: ").concat(err));
  }
}

function initProperties(vm, instanceData) {
  var properties = vm.$options.mpOptions.properties;
  if (!properties) {
    return;
  }

  var propsData = deepClone(vm.$options.propsData) || {};var _loop = function _loop(

  key) {
    var observer = isPlainObject(properties[key]) ? properties[key].observer : false;
    var value = validateProp(key, properties, propsData, vm);
    Object.defineProperty(instanceData, key, {
      enumerable: true,
      configurable: true,
      get: function get() {
        return value;
      },
      set: function set(newVal) {
        var oldVal = value;
        /* eslint-disable no-self-compare */
        if (newVal === value || newVal !== newVal && value !== value) {
          return;
        }
        // TODO 临时方案,clone array
        value = Array.isArray(newVal) ? newVal.slice(0) : newVal;
        if (observer) {
          observe(observer, vm, newVal, oldVal);
        }
        // 触发渲染
        vm.$forceUpdate();
      } });};for (var key in properties) {_loop(key);

  }
}

function updateProperties(vm) {
  var properties = vm.$options.mpOptions && vm.$options.mpOptions.properties;
  var propsData = vm.$options.propsData;
  if (propsData && properties) {
    Object.keys(properties).forEach(function (key) {
      if (hasOwn(propsData, key)) {
        vm[key] = formatVal(propsData[key], getType(properties[key]));
      }
    });
  }
}

function initState(vm) {
  var instanceData = JSON.parse(JSON.stringify(vm.$options.mpOptions.data || {}));

  vm[SOURCE_KEY] = instanceData;

  var propertyDefinition = {
    get: function get() {
      return vm[SOURCE_KEY];
    },
    set: function set(value) {
      vm[SOURCE_KEY] = value;
    } };


  Object.defineProperties(vm, {
    data: propertyDefinition,
    properties: propertyDefinition });


  vm.setData = setData;

  initProperties(vm, instanceData);

  Object.keys(instanceData).forEach(function (key) {
    proxy(vm, SOURCE_KEY, key);
  });
}

function initMethods(vm) {
  var oldEmit = vm.$emit;
  vm.triggerEvent = function (eventName, detail, options) {
    var target = {
      dataset: vm.$el.dataset };


    var event = {
      target: target,
      currentTarget: target,
      detail: detail,
      preventDefault: noop,
      stopPropagation: noop };


    oldEmit.call(vm, eventName, event);
  };
  // 主要是Vant 自己封装了 $emit,放到 methods 中会触发 Vue 的警告,索性,框架直接重写该方法
  vm.$emit = function () {
    vm.triggerEvent.apply(vm, arguments);
  };
  vm.getRelationNodes = function (relationKey) {
    // 需要过滤已被销毁的vm
    /* eslint-disable  no-mixed-operators */
    return (vm._$relationNodes && vm._$relationNodes[relationKey] || []).filter(function (vm) {return !vm._isDestroyed;});
  };

  vm._$updateProperties = updateProperties;
}

function handleObservers(vm) {
  var watch = vm.$options.watch;
  if (!watch) {
    return;
  }
  Object.keys(watch).forEach(function (name) {
    var observer = watch[name];
    if (observer.mounted) {
      var val = vm[name];
      var handler = observer.handler;
      if (typeof handler === 'string') {
        handler = vm[handler];
      }
      handler && handler.call(vm, val, val);
    }
  });
}

var polyfill = {
  beforeCreate: function beforeCreate() {
    // 取消 development 时的 Proxy,避免小程序组件模板中使用尚未定义的属性告警
    this._renderProxy = this;

    this._$self = this;
    this._$noop = noop;
  },
  created: function created() {// properties 中可能会访问 methods,故需要在 created 中初始化
    initState(this);
    initMethods(this);
    initRelations(this);
  },
  mounted: function mounted() {
    handleObservers(this);
  },
  destroyed: function destroyed() {
    handleRelations(this, 'unlinked');
  } };


global.__wxRoute = '';
global.__wxComponents = Object.create(null);
global.__wxVueOptions = Object.create(null);

function Page(options) {
  var pageOptions = parsePage(options);
  pageOptions.mixins.unshift(polyfill);
  pageOptions.mpOptions.path = global.__wxRoute;
  global.__wxComponents[global.__wxRoute] = pageOptions;
}

function initRelationsHandler(vueComponentOptions) {
  // linked 需要在当前组件 attached 之后再执行
  if (!vueComponentOptions.onServiceAttached) {
    vueComponentOptions.onServiceAttached = [];
  }
  vueComponentOptions.onServiceAttached.push(function onServiceAttached() {
    handleRelations(this, 'linked');
  });
}

function Component(options) {
  var componentOptions = parseComponent(options);
  componentOptions.mixins.unshift(polyfill);
  componentOptions.mpOptions.path = global.__wxRoute;
  initRelationsHandler(componentOptions);
  global.__wxComponents[global.__wxRoute] = componentOptions;
}

function Behavior(options) {
  return options;
}

var nextTick = _vue.default.nextTick;exports.nextTick = nextTick;

var index = uni.__$wx__;var _default =

index;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 16)))

/***/ }),
/* 16 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 17 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 18 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 19 */
/*!***************************************************************************************************!*\
  !*** D:/forfun/Almost-Lottery抽奖转盘示例(2)/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 20);
/* harmony import */ var _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 20 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/forfun/Almost-Lottery抽奖转盘示例(2)/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;



























































var _almostLottery = _interopRequireDefault(__webpack_require__(/*! @/uni_modules/almost-lottery/components/almost-lottery/almost-lottery.vue */ 5));
var _almostUtils = __webpack_require__(/*! @/uni_modules/almost-lottery/utils/almost-utils.js */ 14);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}var _default =



{
  name: 'Home',
  components: {
    AlmostLottery: _almostLottery.default },

  data: function data() {
    return {

      redrawSign: '', // 重绘转盘的信号量

      windowHeight: '', // 窗口高度
      eatToday: '', // 抽选结果
      foodList: [], // 食物仓库
      menuList: [], // 菜单仓库


      // 开启调试模式
      isDev: true,

      // 以下是转盘配置相关数据
      lotteryConfig: {
        // 抽奖转盘的整体尺寸，单位rpx
        lotterySize: 600,
        // 抽奖按钮的尺寸，单位rpx
        actionSize: 200 },


      // 以下是奖品配置数据
      // 奖品数据
      prizeList: [],
      // 中奖下标
      prizeIndex: -1,
      // 是否正在抽奖中，避免重复触发
      prizeing: false };

  },
  computed: {
    isApple: function isApple() {
      return uni.getSystemInfoSync().platform === 'ios';
    } },

  methods: {

    handleDrawFinish: function handleDrawFinish() {

    },

    initFoodData: function initFoodData() {
      var this_ = this;
      // 获取食物仓库
      uni.getStorage({
        key: 'foodList',
        success: function success(res) {
          if (res && res.data) {
            this_.foodList = JSON.parse(res.data);
          }
        } });

    },

    /**
        *  页面跳转
        */
    showPage: function showPage(type) {
      if (type == 1) {
        uni.navigateTo({
          url: 'food' });

      } else if (type == 2) {
        uni.navigateTo({
          url: 'menu' });

      }
    },

    handleInitCanvas: function handleInitCanvas() {
      (0, _almostUtils.clearCacheFile)();
      (0, _almostUtils.clearStore)();
      this.prizeList = [];
      this.getPrizeList();
    },


    checkPrizeList: function checkPrizeList() {
      var this_ = this;
      var res = uni.getStorageSync('menuList');
      var isData = false;
      this_.prizeList = [];
      if (res) {
        this_.menuList = JSON.parse(res);
        for (var i = 0; i < this_.menuList.length; i++) {
          if (this_.menuList[i].choose == true) {
            if (this_.menuList[i].foods.length > 0) {
              isData = true;
            }
          }
        }
      }
      if (!isData) {
        if (this.menuList.length == 0) {
          this.menuList = [{
            id: '1',
            name: '默认菜单',
            foods: ['烧鸭', '烧鸡', '烤兔腿', '水煮鱼', '羊肉汤', '肉夹馍', '卤肉饭', '猪脚饭'],
            choose: true }];

        }
      }
      uni.setStorageSync('menuList', JSON.stringify(this.menuList));
    },

    getPrizeList: function getPrizeList() {
      var this_ = this;
      this.checkPrizeList();
      var res = uni.getStorageSync('menuList');
      if (!res) return;
      res = JSON.parse(res);
      this_.prizeList = [];
      this_.menuList = res;
      for (var i = 0; i < this_.menuList.length; i++) {
        if (this_.menuList[i].choose == true) {
          if (this_.menuList[i].foods.length > 0) {
            for (var a = 0; a < this_.menuList[i].foods.length; a++) {
              this_.prizeList.push({
                prizeId: a,
                prizeName: this_.menuList[i].foods[a] });

            }
          }
        }
      }
    },
    handleDrawStart: function handleDrawStart() {
      // if (this.prizeing){
      // 	console.log("死于this.prizeing 为true")
      // 	return
      // } 
      this.prizeing = true;
      this.tryLotteryDraw();
    },
    tryLotteryDraw: function tryLotteryDraw() {
      this.remoteGetPrizeIndex();
    },
    remoteGetPrizeIndex: function remoteGetPrizeIndex() {
      var list = _toConsumableArray(this.prizeList);
      var prizeId = Math.floor(Math.random() * list.length + 1);
      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        if (item.prizeId === prizeId) {
          // 中奖下标
          this.prizeIndex = i;
          break;
        }
      }
    },


    // 本次抽奖结束
    handleDrawEnd: function handleDrawEnd() {var _this = this;
      // 旋转结束后，开始处理拿到结果后的逻辑
      var prizeName = this.prizeList[this.prizeIndex].prizeName;
      this.eatToday = prizeName;
      this.prizeIndex = -1;
      var tipContent = '';
      if (prizeName.includes("兔")) {
        tipContent = '兔兔那么可爱，怎么可以吃兔兔！坏蛋！';
      }
      if (prizeName.includes("羊")) {
        tipContent = '好耶，吃掉懒羊羊！';
      }
      if (prizeName.includes("鱼")) {
        tipContent = '吃鱼肉！喝鱼血！鱼皮剥下来做大衣！';
      }
      if (prizeName.includes("鸡")) {
        tipContent = '？网络上的烧鸡还不能满足你吗？';
      }
      if (prizeName.includes("脑花")) {
        tipContent = '不会吧不会吧不会有人吃脑花吧。';
      }
      if (prizeName.includes("哈密瓜")) {
        tipContent = '哈密瓜是地球的珍宝。';
      }
      if (prizeName.includes("卤肉饭")) {
        tipContent = '？你居然还吃卤肉饭。';
      }
      if (prizeName.includes("嘉然")) {
        tipContent = '呵呵，露出真面露了吧。';
      }
      if (prizeName.includes("答辩")) {
        tipContent = '我没意见。';
      }
      var time = new Date().getTime() + '';
      if (time.charAt(time.length - 1) == '1') {
        tipContent = '好吃，多吃点！';
      }
      if (time.charAt(time.length - 1) == '2') {
        tipContent = '吃吧，不会长胖的！';
      }
      if (time.charAt(time.length - 1) == '0') {
        tipContent = '喜欢，可以给阿兔也买一份吗?';
      }
      if (tipContent != '') {
        uni.showModal({
          content: tipContent,
          showCancel: false,
          confirmColor: '#f1a6bd',
          confirmText: "爱吃",
          complete: function complete() {
            _this.prizeing = false;
          } });

      } else {
        this.prizeing = false;
      }
      this.prizeing = false;
    } },

  onLoad: function onLoad() {},
  onUnload: function onUnload() {
    uni.hideLoading();
  },
  onShow: function onShow() {
    var self = this;
    uni.getSystemInfo({
      success: function success(res) {
        self.windowHeight = res.windowHeight * (750 / res.windowWidth); //将px 转换rpx
      } });

    this.redrawSign = new Date().getTime();
    this.initFoodData();
    this.getPrizeList();
  } };exports.default = _default;

/***/ }),
/* 21 */
/*!**************************************************************************!*\
  !*** D:/forfun/Almost-Lottery抽奖转盘示例(2)/pages/index/food.vue?mpType=page ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _food_vue_vue_type_template_id_5a140a84_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food.vue?vue&type=template&id=5a140a84&scoped=true&mpType=page */ 22);
/* harmony import */ var _food_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food.vue?vue&type=script&lang=js&mpType=page */ 24);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _food_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _food_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);

var renderjs




/* normalize component */

var component = Object(_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _food_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _food_vue_vue_type_template_id_5a140a84_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _food_vue_vue_type_template_id_5a140a84_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5a140a84",
  null,
  false,
  _food_vue_vue_type_template_id_5a140a84_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/index/food.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 22 */
/*!********************************************************************************************************************!*\
  !*** D:/forfun/Almost-Lottery抽奖转盘示例(2)/pages/index/food.vue?vue&type=template&id=5a140a84&scoped=true&mpType=page ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_food_vue_vue_type_template_id_5a140a84_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./food.vue?vue&type=template&id=5a140a84&scoped=true&mpType=page */ 23);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_food_vue_vue_type_template_id_5a140a84_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_food_vue_vue_type_template_id_5a140a84_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_food_vue_vue_type_template_id_5a140a84_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_food_vue_vue_type_template_id_5a140a84_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 23 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/forfun/Almost-Lottery抽奖转盘示例(2)/pages/index/food.vue?vue&type=template&id=5a140a84&scoped=true&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "almost-lottery"), attrs: { _i: 0 } },
    [
      _c("view", [
        _c("view", [
          _c(
            "view",
            {
              staticClass: _vm._$s(3, "sc", "almost-lottery__head"),
              attrs: { _i: 3 }
            },
            [
              _c(
                "view",
                {
                  class: _vm._$s(4, "c", [
                    "action action__",
                    _vm.isApple && "action-shadow"
                  ]),
                  attrs: { _i: 4 }
                },
                [
                  _c("text", {
                    staticClass: _vm._$s(5, "sc", "gold"),
                    attrs: { _i: 5 }
                  }),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(6, "sc", "content"),
                      attrs: { _i: 6 }
                    },
                    [
                      _c(
                        "text",
                        {
                          staticClass: _vm._$s(7, "sc", "count"),
                          attrs: { _i: 7 }
                        },
                        [
                          _vm._v(
                            _vm._$s(7, "t0-0", _vm._s(_vm.foodList.length))
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            ]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(8, "sc", "almost-lottery__wheel"),
              attrs: { _i: 8 }
            },
            [
              _c("view", [
                _c("view", [
                  _c("view", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.inputFood,
                          expression: "inputFood"
                        }
                      ],
                      staticClass: _vm._$s(12, "sc", "uni-input"),
                      attrs: { _i: 12 },
                      domProps: {
                        value: _vm._$s(12, "v-model", _vm.inputFood)
                      },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.inputFood = $event.target.value
                        }
                      }
                    })
                  ]),
                  _c("view", [
                    _c(
                      "view",
                      {
                        class: _vm._$s(14, "c", [
                          "smallBtn",
                          _vm.isApple && "action-shadow"
                        ]),
                        attrs: { _i: 14 },
                        on: {
                          click: function($event) {
                            return _vm.addFood()
                          }
                        }
                      },
                      [
                        _c("text", {
                          staticClass: _vm._$s(15, "sc", "content"),
                          attrs: { _i: 15 }
                        })
                      ]
                    )
                  ])
                ]),
                _c("view", [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(17, "sc", "foodDiv"),
                      attrs: { _i: 17 }
                    },
                    _vm._l(
                      _vm._$s(18, "f", { forItems: _vm.foodList }),
                      function(item, $10, $20, $30) {
                        return _c(
                          "view",
                          {
                            key: _vm._$s(18, "f", {
                              forIndex: $20,
                              key: 18 + "-" + $30
                            }),
                            class: _vm._$s("18-" + $30, "c", [
                              "foodBtn",
                              _vm.isApple && "action-shadow"
                            ]),
                            attrs: { _i: "18-" + $30 }
                          },
                          [
                            _c(
                              "text",
                              {
                                staticClass: _vm._$s(
                                  "19-" + $30,
                                  "sc",
                                  "foodContent"
                                ),
                                attrs: { _i: "19-" + $30 }
                              },
                              [
                                _vm._v(
                                  _vm._$s("19-" + $30, "t0-0", _vm._s(item))
                                )
                              ]
                            ),
                            _c("text", {
                              staticClass: _vm._$s(
                                "20-" + $30,
                                "sc",
                                "closeBtn"
                              ),
                              attrs: { _i: "20-" + $30 },
                              on: {
                                click: function($event) {
                                  return _vm.delFood(item)
                                }
                              }
                            })
                          ]
                        )
                      }
                    ),
                    0
                  )
                ])
              ])
            ]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(21, "sc", "almost-lottery__head"),
              attrs: { _i: 21 }
            },
            [
              _c("view", [
                _c(
                  "view",
                  {
                    class: _vm._$s(23, "c", [
                      "action action_",
                      _vm.isApple && "action-shadow"
                    ]),
                    attrs: { _i: 23 },
                    on: {
                      click: function($event) {
                        return _vm.returnIndex()
                      }
                    }
                  },
                  [
                    _c("text", {
                      staticClass: _vm._$s(24, "sc", "content"),
                      attrs: { _i: 24 }
                    })
                  ]
                )
              ]),
              _c("view", [
                _c(
                  "view",
                  {
                    class: _vm._$s(26, "c", [
                      "action action_",
                      _vm.isApple && "action-shadow"
                    ]),
                    attrs: { _i: 26 },
                    on: {
                      click: function($event) {
                        return _vm.saveFood()
                      }
                    }
                  },
                  [
                    _c("text", {
                      staticClass: _vm._$s(27, "sc", "content"),
                      attrs: { _i: 27 }
                    })
                  ]
                )
              ])
            ]
          )
        ])
      ]),
      _c(
        "view",
        {
          staticClass: _vm._$s(28, "sc", "mainDiv"),
          style: _vm._$s(28, "s", { marginTop: _vm.windowHeight * -1 + "rpx" }),
          attrs: { _i: 28 }
        },
        [
          _c("view", {
            staticClass: _vm._$s(29, "sc", "bgDiv"),
            attrs: { _i: 29 }
          }),
          _c("view", {
            staticClass: _vm._$s(30, "sc", "bgDiv"),
            attrs: { _i: 30 }
          }),
          _c("view", {
            staticClass: _vm._$s(31, "sc", "bgDiv"),
            attrs: { _i: 31 }
          }),
          _c("view", {
            staticClass: _vm._$s(32, "sc", "bgDiv"),
            attrs: { _i: 32 }
          }),
          _c("view", {
            staticClass: _vm._$s(33, "sc", "bgDiv"),
            attrs: { _i: 33 }
          })
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 24 */
/*!**************************************************************************************************!*\
  !*** D:/forfun/Almost-Lottery抽奖转盘示例(2)/pages/index/food.vue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_food_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./food.vue?vue&type=script&lang=js&mpType=page */ 25);
/* harmony import */ var _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_food_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_food_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_food_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_food_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_food_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 25 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/forfun/Almost-Lottery抽奖转盘示例(2)/pages/index/food.vue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  name: 'food',
  components: {},
  data: function data() {
    return {
      windowHeight: '', // 窗口高度
      inputFood: '', // 输入框的新食物
      foodList: [], // 食物仓库
      originFoodList: [] // 原先的食物仓库
    };

  },
  computed: {
    isApple: function isApple() {
      return uni.getSystemInfoSync().platform === 'ios';
    } },

  methods: {
    /**
              *  返回首页
              */
    returnIndex: function returnIndex() {
      uni.navigateBack();
    },

    /**
        *  从本地储存里获取食物
        */
    getFood: function getFood() {
      var this_ = this;
      var res = uni.getStorageSync('foodList');
      if (res) {
        this_.foodList = JSON.parse(res);
        this_.originFoodList = this_.foodList.concat([]);
        this_.countFood = this_.foodList.length;
      }
      // 默认食物
      // if(this_.foodList.length == 0){
      // 	this_.foodList = ['烧鸭','烧鸡','烤兔腿','肯德基','水煮鱼','羊肉汤','肉夹馍','红烧肉','卤肉饭','猪脚饭']
      // }
    },

    /**
        *  保存食物
        */
    saveFood: function saveFood() {
      var this_ = this;

      // 找出被删除的食物
      var delList = [];
      for (var i = 0; i < this.originFoodList.length; i++) {
        if (!this.foodList.includes(this.originFoodList[i])) {
          delList.push(this.originFoodList[i]);
        }
      }

      // 在之前的菜单中删除这些食物
      uni.getStorage({
        key: 'menuList',
        success: function success(res) {
          if (res && res.data) {
            var menuList = JSON.parse(res.data);
            for (var i = 0; i < menuList.length; i++) {
              var list = [];
              for (var j = 0; j < menuList[i].foods.length; j++) {
                if (!delList.includes(menuList[i].foods[j])) {
                  list.push(menuList[i].foods[j]);
                }
              }
              menuList[i].foods = list;
            }
            uni.setStorage({
              key: 'menuList',
              data: JSON.stringify(menuList),
              success: function success() {
              } });

          }
        } });


      uni.setStorage({
        key: 'foodList',
        data: JSON.stringify(this_.foodList),
        success: function success() {
          this_.returnIndex();
        } });

    },

    /**
        *  删除食物
        */
    delFood: function delFood(item) {
      __f__("log", "需要删除的是:" + item, " at pages/index/food.vue:180");
      var list = [];
      for (var i = 0; i < this.foodList.length; i++) {
        if (this.foodList[i] != item) {
          list.push(this.foodList[i]);
        }
      }
      this.foodList = list;
    },

    /**
        *  添加食物
        */
    addFood: function addFood() {var _this = this;
      this.inputFood = this.inputFood.trim();
      if (this.inputFood != '') {
        var isExist = false;
        for (var i = 0; i < this.foodList.length; i++) {
          if (this.foodList[i] == this.inputFood) {
            isExist = true;
          }
        }
        if (isExist) {
          // 食物已经存在
          var this_ = this;
          uni.showModal({
            content: '已经添加过 [' + this_.inputFood + '] 啦！',
            showCancel: false,
            confirmColor: '#f1a6bd',
            confirmText: "好的",
            complete: function complete() {
              _this.inputFood = '';
            } });

        } else {
          this.foodList.push(this.inputFood);
          this.inputFood = '';
        }
      }
    } },


  onLoad: function onLoad() {

  },
  onUnload: function onUnload() {},
  onShow: function onShow() {
    var self = this;
    uni.getSystemInfo({
      success: function success(res) {
        self.windowHeight = res.windowHeight * (750 / res.windowWidth); //将px 转换rpx
      } });

    this.getFood();
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)["default"]))

/***/ }),
/* 26 */
/*!**************************************************************************!*\
  !*** D:/forfun/Almost-Lottery抽奖转盘示例(2)/pages/index/menu.vue?mpType=page ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_vue_vue_type_template_id_3d8ef185_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.vue?vue&type=template&id=3d8ef185&scoped=true&mpType=page */ 27);
/* harmony import */ var _menu_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.vue?vue&type=script&lang=js&mpType=page */ 30);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _menu_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _menu_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);

var renderjs




/* normalize component */

var component = Object(_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _menu_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _menu_vue_vue_type_template_id_3d8ef185_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _menu_vue_vue_type_template_id_3d8ef185_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3d8ef185",
  null,
  false,
  _menu_vue_vue_type_template_id_3d8ef185_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/index/menu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 27 */
/*!********************************************************************************************************************!*\
  !*** D:/forfun/Almost-Lottery抽奖转盘示例(2)/pages/index/menu.vue?vue&type=template&id=3d8ef185&scoped=true&mpType=page ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_template_id_3d8ef185_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./menu.vue?vue&type=template&id=3d8ef185&scoped=true&mpType=page */ 28);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_template_id_3d8ef185_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_template_id_3d8ef185_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_template_id_3d8ef185_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_template_id_3d8ef185_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 28 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/forfun/Almost-Lottery抽奖转盘示例(2)/pages/index/menu.vue?vue&type=template&id=3d8ef185&scoped=true&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "almost-lottery"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "mainDiv"), attrs: { _i: 1 } },
        [
          _c("view", {
            staticClass: _vm._$s(2, "sc", "bgDiv"),
            attrs: { _i: 2 }
          }),
          _c("view", {
            staticClass: _vm._$s(3, "sc", "bgDiv"),
            attrs: { _i: 3 }
          }),
          _c("view", {
            staticClass: _vm._$s(4, "sc", "bgDiv"),
            attrs: { _i: 4 }
          }),
          _c("view", {
            staticClass: _vm._$s(5, "sc", "bgDiv"),
            attrs: { _i: 5 }
          }),
          _c("view", {
            staticClass: _vm._$s(6, "sc", "bgDiv"),
            attrs: { _i: 6 }
          })
        ]
      ),
      _c(
        "view",
        {
          style: _vm._$s(7, "s", { marginTop: _vm.windowHeight * -1 + "rpx" }),
          attrs: { _i: 7 }
        },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(8, "sc", "almost-lottery__head"),
              attrs: { _i: 8 }
            },
            [
              _c(
                "view",
                {
                  class: _vm._$s(9, "c", [
                    "action action__",
                    _vm.isApple && "action-shadow"
                  ]),
                  attrs: { _i: 9 }
                },
                [
                  _c("text", {
                    staticClass: _vm._$s(10, "sc", "gold"),
                    attrs: { _i: 10 }
                  }),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(11, "sc", "content"),
                      attrs: { _i: 11 }
                    },
                    [
                      _c(
                        "text",
                        {
                          staticClass: _vm._$s(12, "sc", "count"),
                          attrs: { _i: 12 }
                        },
                        [_vm._v(_vm._$s(12, "t0-0", _vm._s(_vm.countMenu)))]
                      )
                    ]
                  )
                ]
              )
            ]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(13, "sc", "almost-lottery__wheel"),
              attrs: { _i: 13 }
            },
            [
              _c(
                "view",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm._$s(14, "v-show", _vm.showFlag == "edit"),
                      expression: "_$s(14,'v-show',showFlag=='edit')"
                    }
                  ],
                  attrs: { _i: 14 }
                },
                [
                  _c("view", [
                    _c("view"),
                    _c("view", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.editMenuName,
                            expression: "editMenuName"
                          }
                        ],
                        staticClass: _vm._$s(18, "sc", "uni-input"),
                        attrs: { _i: 18 },
                        domProps: {
                          value: _vm._$s(18, "v-model", _vm.editMenuName)
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.editMenuName = $event.target.value
                          }
                        }
                      })
                    ])
                  ]),
                  _c("view", [_c("view"), _c("view")]),
                  _c("view", [
                    _c("view", [
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(24, "sc", "foodDiv"),
                          attrs: { _i: 24 }
                        },
                        _vm._l(
                          _vm._$s(25, "f", {
                            forItems: _vm.editFoodListSelect
                          }),
                          function(item, $10, $20, $30) {
                            return _c(
                              "view",
                              {
                                key: _vm._$s(25, "f", {
                                  forIndex: $20,
                                  key: 25 + "-" + $30
                                }),
                                class: _vm._$s("25-" + $30, "c", [
                                  "foodBtn",
                                  _vm.isApple && "action-shadow"
                                ]),
                                attrs: { _i: "25-" + $30 },
                                on: {
                                  click: function($event) {
                                    return _vm.delFood(item)
                                  }
                                }
                              },
                              [
                                _c(
                                  "text",
                                  {
                                    staticClass: _vm._$s(
                                      "26-" + $30,
                                      "sc",
                                      "foodContent"
                                    ),
                                    attrs: { _i: "26-" + $30 }
                                  },
                                  [
                                    _vm._v(
                                      _vm._$s("26-" + $30, "t0-0", _vm._s(item))
                                    )
                                  ]
                                )
                              ]
                            )
                          }
                        ),
                        0
                      )
                    ]),
                    _c("view", [
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(28, "sc", "foodDiv"),
                          attrs: { _i: 28 }
                        },
                        _vm._l(
                          _vm._$s(29, "f", {
                            forItems: _vm.editFoodListUnselect
                          }),
                          function(item, $11, $21, $31) {
                            return _c(
                              "view",
                              {
                                key: _vm._$s(29, "f", {
                                  forIndex: $21,
                                  key: 29 + "-" + $31
                                }),
                                class: _vm._$s("29-" + $31, "c", [
                                  "foodBtn1",
                                  _vm.isApple && "action-shadow"
                                ]),
                                attrs: { _i: "29-" + $31 },
                                on: {
                                  click: function($event) {
                                    return _vm.addFood(item)
                                  }
                                }
                              },
                              [
                                _c(
                                  "text",
                                  {
                                    staticClass: _vm._$s(
                                      "30-" + $31,
                                      "sc",
                                      "foodContent"
                                    ),
                                    attrs: { _i: "30-" + $31 }
                                  },
                                  [
                                    _vm._v(
                                      _vm._$s("30-" + $31, "t0-0", _vm._s(item))
                                    )
                                  ]
                                )
                              ]
                            )
                          }
                        ),
                        0
                      )
                    ])
                  ])
                ]
              ),
              _c(
                "view",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm._$s(31, "v-show", _vm.showFlag == "list"),
                      expression: "_$s(31,'v-show',showFlag=='list')"
                    }
                  ],
                  attrs: { _i: 31 }
                },
                [
                  _c("view", [
                    _c("view", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.inputMenu,
                            expression: "inputMenu"
                          }
                        ],
                        staticClass: _vm._$s(34, "sc", "uni-input"),
                        attrs: { _i: 34 },
                        domProps: {
                          value: _vm._$s(34, "v-model", _vm.inputMenu)
                        },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.inputMenu = $event.target.value
                          }
                        }
                      })
                    ]),
                    _c("view", [
                      _c(
                        "view",
                        {
                          class: _vm._$s(36, "c", [
                            "smallBtn",
                            _vm.isApple && "action-shadow"
                          ]),
                          attrs: { _i: 36 },
                          on: {
                            click: function($event) {
                              return _vm.addMenu()
                            }
                          }
                        },
                        [
                          _c("text", {
                            staticClass: _vm._$s(37, "sc", "content"),
                            attrs: { _i: 37 }
                          })
                        ]
                      )
                    ])
                  ]),
                  _c(
                    "view",
                    _vm._l(
                      _vm._$s(39, "f", { forItems: _vm.menuList }),
                      function(item, $12, $22, $32) {
                        return _c(
                          "view",
                          {
                            key: _vm._$s(39, "f", {
                              forIndex: $22,
                              key: 39 + "-" + $32
                            })
                          },
                          [
                            _c(
                              "view",
                              {
                                class: _vm._$s("40-" + $32, "c", [
                                  item.foods.length == 0
                                    ? "menuBtn_"
                                    : "menuBtn",
                                  _vm.isApple && "action-shadow"
                                ]),
                                attrs: { _i: "40-" + $32 },
                                on: {
                                  click: function($event) {
                                    return _vm.showEdit(item)
                                  }
                                }
                              },
                              [
                                _c(
                                  "text",
                                  {
                                    staticClass: _vm._$s(
                                      "41-" + $32,
                                      "sc",
                                      "foodContent"
                                    ),
                                    attrs: { _i: "41-" + $32 }
                                  },
                                  [
                                    _vm._v(
                                      _vm._$s(
                                        "41-" + $32,
                                        "t0-0",
                                        _vm._s(item.name)
                                      )
                                    ),
                                    _c(
                                      "text",
                                      {
                                        staticClass: _vm._$s(
                                          "42-" + $32,
                                          "sc",
                                          "foodCount"
                                        ),
                                        attrs: { _i: "42-" + $32 }
                                      },
                                      [
                                        _vm._v(
                                          _vm._$s(
                                            "42-" + $32,
                                            "t0-0",
                                            _vm._s(item.foods.length)
                                          )
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ]
                            ),
                            _c(
                              "view",
                              {
                                class: _vm._$s("43-" + $32, "c", [
                                  "delBtn",
                                  _vm.isApple && "action-shadow"
                                ]),
                                attrs: { _i: "43-" + $32 }
                              },
                              [
                                _c("image", {
                                  staticClass: _vm._$s(
                                    "44-" + $32,
                                    "sc",
                                    "rbsImg"
                                  ),
                                  attrs: {
                                    src: _vm._$s(
                                      "44-" + $32,
                                      "a-src",
                                      __webpack_require__(/*! ../../static/rabish.png */ 29)
                                    ),
                                    _i: "44-" + $32
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.delMenu(item.id)
                                    }
                                  }
                                })
                              ]
                            ),
                            _c(
                              "view",
                              {
                                class: _vm._$s("45-" + $32, "c", [
                                  "chooseBtn",
                                  _vm.isApple && "action-shadow"
                                ]),
                                attrs: { _i: "45-" + $32 }
                              },
                              [
                                _c("image", {
                                  staticClass: _vm._$s(
                                    "46-" + $32,
                                    "sc",
                                    "starImg1"
                                  ),
                                  attrs: {
                                    src: _vm._$s(
                                      "46-" + $32,
                                      "a-src",
                                      item.choose
                                        ? "../../static/star1.png"
                                        : "../../static/star2.png"
                                    ),
                                    _i: "46-" + $32
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.chooseMenu(item.id)
                                    }
                                  }
                                })
                              ]
                            )
                          ]
                        )
                      }
                    ),
                    0
                  )
                ]
              )
            ]
          )
        ]
      ),
      _c(
        "view",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm._$s(47, "v-show", _vm.showFlag == "list"),
              expression: "_$s(47,'v-show',showFlag=='list')"
            }
          ],
          staticClass: _vm._$s(47, "sc", "almost-lottery__head"),
          attrs: { _i: 47 }
        },
        [
          _c("view", [
            _c(
              "view",
              {
                class: _vm._$s(49, "c", [
                  "action action1",
                  _vm.isApple && "action-shadow"
                ]),
                attrs: { _i: 49 },
                on: {
                  click: function($event) {
                    return _vm.returnIndex()
                  }
                }
              },
              [
                _c("text", {
                  staticClass: _vm._$s(50, "sc", "content"),
                  attrs: { _i: 50 }
                })
              ]
            )
          ]),
          _c("view", [
            _c(
              "view",
              {
                class: _vm._$s(52, "c", [
                  "action action1",
                  _vm.isApple && "action-shadow"
                ]),
                attrs: { _i: 52 },
                on: {
                  click: function($event) {
                    return _vm.saveMenu()
                  }
                }
              },
              [
                _c("text", {
                  staticClass: _vm._$s(53, "sc", "content"),
                  attrs: { _i: 53 }
                })
              ]
            )
          ])
        ]
      ),
      _c(
        "view",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm._$s(54, "v-show", _vm.showFlag == "edit"),
              expression: "_$s(54,'v-show',showFlag=='edit')"
            }
          ],
          staticClass: _vm._$s(54, "sc", "almost-lottery__head"),
          attrs: { _i: 54 }
        },
        [
          _c("view", [
            _c(
              "view",
              {
                class: _vm._$s(56, "c", [
                  "action action1",
                  _vm.isApple && "action-shadow"
                ]),
                attrs: { _i: 56 },
                on: {
                  click: function($event) {
                    return _vm.returnList()
                  }
                }
              },
              [
                _c("text", {
                  staticClass: _vm._$s(57, "sc", "content"),
                  attrs: { _i: 57 }
                })
              ]
            )
          ]),
          _c("view", [
            _c(
              "view",
              {
                class: _vm._$s(59, "c", [
                  "action action1",
                  _vm.isApple && "action-shadow"
                ]),
                attrs: { _i: 59 },
                on: {
                  click: function($event) {
                    return _vm.saveEdit()
                  }
                }
              },
              [
                _c("text", {
                  staticClass: _vm._$s(60, "sc", "content"),
                  attrs: { _i: 60 }
                })
              ]
            )
          ])
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 29 */
/*!***********************************************************!*\
  !*** D:/forfun/Almost-Lottery抽奖转盘示例(2)/static/rabish.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/rabish.png";

/***/ }),
/* 30 */
/*!**************************************************************************************************!*\
  !*** D:/forfun/Almost-Lottery抽奖转盘示例(2)/pages/index/menu.vue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./menu.vue?vue&type=script&lang=js&mpType=page */ 31);
/* harmony import */ var _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 31 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/forfun/Almost-Lottery抽奖转盘示例(2)/pages/index/menu.vue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  name: 'menucrud',
  components: {},
  data: function data() {
    return {
      windowHeight: '', // 窗口高度
      countMenu: 10, // 菜单总数
      inputMenu: '', // 输入框的菜单
      editMenuName: '', // 修改菜单名字
      editId: '', // 当前正在修改的id
      showFlag: 'list',
      foodList: [], // 所有的食物
      editFoodListSelect: [],
      editFoodListUnselect: [],
      menuList: [] };

  },
  computed: {
    isApple: function isApple() {
      return uni.getSystemInfoSync().platform === 'ios';
    } },

  methods: {

    /**
              *  将食物从待选区域移到已选区域
              */
    addFood: function addFood(item) {
      if (!this.editFoodListSelect.includes(item)) {
        this.editFoodListSelect.push(item);
      }
      var list = [];
      for (var i = 0; i < this.editFoodListUnselect.length; i++) {
        if (this.editFoodListUnselect[i] != item) {
          list.push(this.editFoodListUnselect[i]);
        }
      }
      this.editFoodListUnselect = list;
    },

    /**
        *  将食物从已选区域移到待选区域
        */
    delFood: function delFood(item) {
      this.editFoodListUnselect.push(item);
      var list = [];
      for (var i = 0; i < this.editFoodListSelect.length; i++) {
        if (this.editFoodListSelect[i] != item) {
          list.push(this.editFoodListSelect[i]);
        }
      }
      this.editFoodListSelect = list;
    },

    /**
        *  编辑按钮
        */
    showEdit: function showEdit(item) {
      this.showFlag = 'edit';
      this.editId = item.id;
      this.editMenuName = item.name + "";
      this.editFoodListSelect = item.foods.concat([]);
      var list = [];
      for (var i = 0; i < this.foodList.length; i++) {
        if (!item.foods.includes(this.foodList[i])) {
          list.push(this.foodList[i]);
        }
      }
      this.editFoodListUnselect = list;
    },

    /**
        *  编辑-返回列表
        */
    returnList: function returnList() {
      this.showFlag = 'list';
    },

    /**
        *  编辑-保存修改
        */
    saveEdit: function saveEdit() {
      for (var i = 0; i < this.menuList.length; i++) {
        if (this.menuList[i].id == this.editId) {
          this.menuList[i].name = this.editMenuName;
          this.menuList[i].foods = this.editFoodListSelect;
        }
      }
      this.showFlag = 'list';
    },

    /**
        *  新增菜单
        */
    addMenu: function addMenu() {
      if (this.inputMenu.trim() != '') {
        var data = {};
        data.id = new Date().getTime();
        data.name = this.inputMenu;
        data.choose = false;
        data.foods = [];
        this.menuList.push(data);
      }
      this.inputMenu = '';
    },

    /**
        *  删除菜单
        */
    delMenu: function delMenu(id) {var _this = this;
      uni.showModal({
        content: '确认要删除此菜单吗？',
        showCancel: false,
        confirmColor: '#f1a6bd',
        confirmText: "是的",
        complete: function complete() {
          var list = [];
          for (var i = 0; i < _this.menuList.length; i++) {
            if (_this.menuList[i].id != id) {
              list.push(_this.menuList[i]);
            }
          }
          __f__("log", _this.menuList, " at pages/index/menu.vue:281");
          _this.menuList = list;
        } });

    },

    /**
        *  选择菜单
        */
    chooseMenu: function chooseMenu(id) {
      var len = 0;
      for (var i = 0; i < this.menuList.length; i++) {
        if (this.menuList[i].id == id) {
          len = this.menuList[i].foods.length;
        }
      }
      if (len > 0) {
        for (var i = 0; i < this.menuList.length; i++) {
          if (this.menuList[i].id == id) {
            this.menuList[i].choose = true;
          } else {
            this.menuList[i].choose = false;
          }
        }
      }
    },

    /**
        *  从本地储存里获取食物
        */
    getFood: function getFood() {
      var this_ = this;
      uni.getStorage({
        key: 'foodList',
        success: function success(res) {
          if (res && res.data) {
            this_.foodList = JSON.parse(res.data);
          }
        } });

    },

    /**
        *  从本地获取菜单列表
        */
    getMenu: function getMenu() {
      var res = uni.getStorageSync('menuList');
      if (res) {
        res = JSON.parse(res);
        this.menuList = res;
      }
    },

    /**
        *  保存菜单
        */
    saveMenu: function saveMenu() {
      var this_ = this;
      uni.setStorage({
        key: 'menuList',
        data: JSON.stringify(this_.menuList),
        success: function success() {
          this_.returnIndex();
        } });

    },

    /**
        *  回到首页
        */
    returnIndex: function returnIndex() {
      uni.navigateBack();
    } },


  onLoad: function onLoad() {

  },
  onUnload: function onUnload() {},
  onShow: function onShow() {
    var self = this;
    uni.getSystemInfo({
      success: function success(res) {
        self.windowHeight = res.windowHeight * (750 / res.windowWidth); //将px 转换rpx
      } });

    this.getFood();
    this.getMenu();
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)["default"]))

/***/ }),
/* 32 */
/*!*************************************************!*\
  !*** D:/forfun/Almost-Lottery抽奖转盘示例(2)/App.vue ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 33);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);
var render, staticRenderFns, recyclableRender, components
var renderjs




/* normalize component */

var component = Object(_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null,
  false,
  components,
  renderjs
)

component.options.__file = "App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 33 */
/*!**************************************************************************!*\
  !*** D:/forfun/Almost-Lottery抽奖转盘示例(2)/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../develop/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 34);
/* harmony import */ var _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_develop_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 34 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/forfun/Almost-Lottery抽奖转盘示例(2)/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =
{
  onLaunch: function onLaunch() {
    __f__("log", 'App Launch', " at App.vue:4");
  },
  onShow: function onShow() {
    __f__("log", 'App Show', " at App.vue:7");
  },
  onHide: function onHide() {
    __f__("log", 'App Hide', " at App.vue:10");
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)["default"]))

/***/ })
],[[0,"app-config"]]]);