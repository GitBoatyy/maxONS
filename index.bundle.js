/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* styles for 737MAX ONS trainer */\\nbody{\\n  margin: 0%;\\n}\\n.header{\\n        position: fixed;\\n        display: flex;\\n        align-items: center;\\n        justify-content: center;\\n        top: 0;\\n        width: 100%;\\n        color: white;\\n        height: 10vh;\\n        background-color: rgb(0, 0, 0, 0.8);\\n        font-size: 24px;\\n}\\n\\n.invisible{\\n  visibility: hidden;\\n}\\n\\n.app{\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    margin-top: 10vh;\\n\\n}\\n\\n#mfpanel{\\n    position: fixed;\\n    top: 10vh;\\n    display:grid;\\n    grid-template-columns: 1fr 1fr;\\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;\\n    background-color: rgb(104, 94, 94);\\n    padding: 10px;\\n    border-radius: 10px;\\n    margin: 1%;\\n    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;\\n}\\n\\n#showmfpanel{\\n    position: fixed;\\n    background-color: rgb(104, 94, 94);\\n    border-radius: 10px;\\n    top: 0;\\n    margin: 1%;\\n    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;\\n}\\n\\n#showmfpanel > button{\\n  background-color: black;\\n  color: white;\\n  margin: 10px;\\n  border-radius: 10px;\\n  box-shadow: 0 0 0 5px #000000,\\n  inset 0 0 0 1px #fff;\\n  width: 20px;\\n  text-align: center;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  transform: rotate(90deg);\\n\\n}\\n\\n#mfpanel > button{\\n    background-color: black;\\n    color: white;\\n    margin: 10px;\\n    border-radius: 10px;\\n    box-shadow: 0 0 0 5px #000000,\\n    inset 0 0 0 1px #fff;\\n    width: 60px;\\n    text-align: center;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n}\\n\\n\\n#ENG{\\n    font-size:large ;\\n}\\n#SYS{\\n    font-size:large ;\\n}\\n#INFO{\\n    font-size:large ;\\n}\\n#CR{\\n    font-size:large ;\\n}\\n#dArrow {\\n    font-size: 30px;\\n    grid-column-start: 1;\\n    grid-column-end: 3;\\n    justify-self: center;\\n}\\n\\n\\n\\n#MFD{\\n    grid-column-start: 1;\\n    grid-column-end:  3;\\n  display: flex;\\n  flex-direction: row;\\n}\\n#MFD:before, #MFD:after{\\n  content: \\\"\\\";\\n  flex: 1 1;\\n  border-bottom: 2px solid;\\n  margin: auto;\\n  border-color: white;\\n}\\n#MFD:before {\\n  margin-right: 10px\\n}\\n#MFD:after {\\n  margin-left: 10px\\n}\\n#MFD h3 {\\n    background-color: rgb(104, 94, 94);\\n    color: white;\\n    text-align: center;\\n}\\n\\n#ENGTFR{\\n    grid-column-start: 1;\\n    grid-column-end:  3;\\n    grid-row-start: 4;\\n    grid-row-end: 5;\\n  display: flex;\\n  flex-direction: row;\\n}\\n\\n#ENGTFR:before, #ENGTFR:after{\\n  content: \\\"\\\";\\n  flex: 1 1;\\n  border-bottom: 2px solid;\\n  margin: auto;\\n  border-color: white;\\n}\\n#ENGTFR:before {\\n  margin-right: 10px\\n}\\n#ENGTFR:after {\\n  margin-left: 10px\\n}\\n#ENGTFR h3 {\\n    background-color: rgb(104, 94, 94);\\n    color: white;\\n    text-align: center;\\n}\\n\\n#displaycontainer{\\n  background-color:black ;\\n  width: 70vh;\\n  height: 85vh;\\n  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;\\n\\n}\\n\\n#maintheader{\\n  position: relative;\\n  right: 0;\\n  width: 100%;\\n  height: 6%;\\n}\\n\\n#maintbutton{\\n  position:absolute ;\\n  background-color: rgb(112, 112, 112);\\n  color: white;\\n  font-weight: bold;\\n  top: 0;\\n  right: 0;\\n  height:100% ;\\n  width: 25%;\\n}\\n\\n\\n#headernav{\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\\n  grid-template-rows: 1;\\n}\\n\\n.navbutton{\\n  background-color: rgb(112, 112, 112);\\n  color: white;\\n  font-weight: bold;\\n  top: 0;\\n  right: 0;\\n  height:100% ;\\n  width: 100%;\\n}\\n.navbutton .active{\\n  background-color: green;\\n}\\n.buttonhover:hover{\\n  border-color: rgb(255, 76, 243);\\n  border-width: 2px;\\n}\\n\\n.active{\\n  background-color: rgb(54, 214, 54);\\n  \\n}\\n\\n#statuscont{\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  border: 2px solid #16f8fb;\\n  border-radius: 2%;\\n  height: 85%;\\n  width: 90%;\\n  margin: 5%;\\n}\\n\\n#statusmsg{\\n  display: flex;\\n  background-color: black;\\n  margin-top: -2%;\\n  padding-left: 1%;\\n  padding-right: 1%;\\n  width: 39%;\\n  align-self: center;\\n  justify-content: center;\\n  flex-wrap: nowrap;\\n}\\n\\n#statusexamples{\\n  display: grid;\\n  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;\\n  height: 30%;\\n  width: 100%;\\n  padding-left: 3%;\\n}\\n\\n\\n.bluef{\\n  color: #16f8fb;\\n}\\n\\n.whitef{\\n  color: white;\\n}\\n\\n#hyddisplay{\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  border: 2px solid #16f8fb;\\n  border-radius: 5%;\\n  height: 20%;\\n  width: 50%;\\n  margin-left: 25%;\\n  margin-top: 15%;\\n}\\n\\n#hydtitle{\\n  display: flex;\\n  background-color: black;\\n  margin-top: -4%;\\n  padding-left: 2%;\\n  padding-right: 1%;\\n  width: 40%;\\n}\\n\\n#hydcontainer{\\ndisplay: grid;\\ngrid-template-columns: 1fr 1fr 1fr;\\ngrid-template-rows: 1fr 1fr 1fr;\\nwidth: 100%;\\nheight: 100%;\\npadding-left: 5%;\\n}\\n#a{\\n  display: flex;\\n  align-self: end;\\n}\\n#b{\\n  display: flex;\\n  align-self: end;\\n}\\n\\n\\n\\n\\n\\n\\n/*footer*/\\n.footer {\\n    position: fixed;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    bottom: 0;\\n    width: 100%;\\n    color: white;\\n    height: 5vh;\\n    min-height: 36.75px;\\n    background-color: rgb(0, 0, 0, 0.8);\\n  }\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://maxons/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://maxons/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://maxons/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://maxons/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://maxons/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://maxons/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://maxons/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://maxons/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://maxons/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://maxons/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/hidedisplay.js":
/*!****************************!*\
  !*** ./src/hidedisplay.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ hidedisplay)\n/* harmony export */ });\n\n\nfunction hidedisplay(){\n    const mfpanel = document.getElementById('mfpanel')\n    document.body.removeChild(mfpanel)\n    const showmfpanel = document.createElement('div')\n    showmfpanel.id = 'showmfpanel'\n    showmfpanel.classList.add('side')\n    document.body.appendChild(showmfpanel)\n    const show = document.createElement('button')\n    show.id = 'showmf'\n    show.innerText = '\\u25B2'\n    showmfpanel.appendChild(show)\n}\n\n//# sourceURL=webpack://maxons/./src/hidedisplay.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _mfpanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mfpanel */ \"./src/mfpanel.js\");\n/* harmony import */ var _maintbutton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maintbutton */ \"./src/maintbutton.js\");\n/* harmony import */ var _maintbuttonfunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maintbuttonfunction */ \"./src/maintbuttonfunction.js\");\n/* harmony import */ var _hidedisplay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hidedisplay */ \"./src/hidedisplay.js\");\n//TO UPDATE GITHUB PAGES RUN CMD\n// git subtree push --prefix dist origin gh-pages \n\n//JS for 737MAX ONS trainer\n\n\n\n\n\n\n(0,_mfpanel__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n\n//MFP button interactions\nconst engbutton = document.getElementById('ENG')\nconst sysbutton = document.getElementById('SYS')\nconst infobutton = document.getElementById('INFO')\nconst crbutton = document.getElementById('CR')\nconst displaycontainer = document.getElementById('displaycontainer')\nconst maintbutton = document.getElementById('maintbutton')\nconst headernav = document.getElementById('headernav')\n\nfunction crinfo(){\n    alert('This button is only equiped on aircraft that have Fail Operational autopilots. C/R (Clear/Recal) button is used to recall fault details in the event of a degraded autoland status')\n}\n\n\ndocument.addEventListener( \"click\", someListener );\n\nfunction someListener(event){\n    var element = event.target;\n    if(element.id == 'SYS'){//creates and clears displaycontainer and maint button\n        (0,_maintbutton__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n        ;(0,_hidedisplay__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n    }else if(element.id == 'maintbutton'){ //clears displaycontainer and goes to default status page\n        (0,_maintbuttonfunction__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n    }else if(element.id == 'sysmenu'){\n        (0,_maintbutton__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n    } else if(element.id == 'showmf'){\n        (0,_mfpanel__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n    }\n}\ncrbutton.addEventListener('click' , crinfo)\n\n\n\n\n\n//# sourceURL=webpack://maxons/./src/index.js?");

/***/ }),

/***/ "./src/maintbutton.js":
/*!****************************!*\
  !*** ./src/maintbutton.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ makedisplay)\n/* harmony export */ });\n//function to create display container black background with maintenance button to engage ONS\n\n\n\n\nfunction makedisplay(){\n    const appcontainer = document.getElementById('app')\n    appcontainer.replaceChildren()\n    const display = document.createElement('div')\n    display.id = 'displaycontainer'\n    const maintheader = document.createElement('div')   \n    maintheader.id = 'maintheader'\n    const maintbutton = document.createElement('button')\n    maintbutton.classList.add('buttonhover')\n    maintbutton.id = 'maintbutton'\n    maintbutton.innerText = 'MAINT'\n    const hyddisplay = document.createElement('div')\n    hyddisplay.id = 'hyddisplay'\n    hyddisplay.classList.add('bluef')\n    const hydtitle = document.createElement('div')\n    hydtitle.id = 'hydtitle'\n    hydtitle.classList.add('bluef')\n    hydtitle.innerText = 'HYDRAULIC'\n    const hydcontainer = document.createElement('div')\n    hydcontainer.id = 'hydcontainer'\n    const a = document.createElement('div')\n    a.classList.add('bluef')\n    a.id = 'a'\n    a.innerText = 'A'\n    const b = document.createElement('div')\n    b.classList.add('bluef')\n    b.id = 'b'\n    b.innerText = 'B'\n    const qty = document.createElement('div')\n    qty.id = 'qty'\n    qty.classList.add('bluef')\n    qty.innerText = 'QTY%'\n    const press = document.createElement('div')\n    press.id = 'press'\n    press.classList.add('bluef')\n    press.innerText = 'PRESS'\n    const qty1 = document.createElement('div')\n    qty1.id = 'qty1'\n    qty1.classList.add('whitef')\n    qty1.innerText = '100'\n    const qty2 = document.createElement('div')\n    qty2.id = 'qty2'\n    qty2.innerText = '100'\n    qty2.classList.add('whitef')\n    const press1 = document.createElement('div')\n    press1.id = 'press1'\n    press1.innerText = '3300'\n    press1.classList.add('whitef')\n    const press2 = document.createElement('div')\n    press2.id = 'press2'\n    press2.innerText = '3300'\n    press2.classList.add('whitef')\n    const ediv = document.createElement('div')\n    ediv.innerText = ''\n    appcontainer.appendChild(display)\n    display.appendChild(maintheader)\n    maintheader.appendChild(maintbutton)\n    display.appendChild(hyddisplay)\n    hyddisplay.appendChild(hydtitle)\n    hyddisplay.appendChild(hydcontainer)\n    hydcontainer.appendChild(ediv)\n    hydcontainer.appendChild(a)\n    hydcontainer.appendChild(b)\n    hydcontainer.appendChild(qty)\n    hydcontainer.appendChild(qty1)\n    hydcontainer.appendChild(qty2)\n    hydcontainer.appendChild(press)\n    hydcontainer.appendChild(press1)\n    hydcontainer.appendChild(press2)\n}\n\n//# sourceURL=webpack://maxons/./src/maintbutton.js?");

/***/ }),

/***/ "./src/maintbuttonfunction.js":
/*!************************************!*\
  !*** ./src/maintbuttonfunction.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ goToStatus)\n/* harmony export */ });\n//main button to generate first MDS/ONS screen. Defaults to status \n\nfunction goToStatus(){\n    const displaycontainer = document.getElementById('displaycontainer')\n    displaycontainer.replaceChildren()\n    const navbar = document.createElement('div')\n    navbar.id = 'headernav'\n    displaycontainer.appendChild(navbar)\n    const sysbutt = document.createElement('button')\n    sysbutt.classList.add('buttonhover', 'navbutton')\n    sysbutt.id = 'sysmenu'\n    sysbutt.innerText = 'SYS MENU'\n    navbar.appendChild(sysbutt)\n    const statusbutt = document.createElement('button')\n    statusbutt.classList.add('buttonhover', 'navbutton', 'active')\n    statusbutt.id = 'status'\n    statusbutt.innerText = 'STATUS'\n    navbar.appendChild(statusbutt)\n    const MDP = document.createElement('button')\n    MDP.classList.add('buttonhover', 'navbutton')\n    MDP.id = 'MDP'\n    MDP.innerText = 'MAINT DATA PGS'\n    navbar.appendChild(MDP)\n    const MCP = document.createElement('button')\n    MCP.classList.add('buttonhover', 'navbutton')\n    MCP.id = 'MCP'\n    MCP.innerText = 'MAINT CTRL PGS'\n    navbar.appendChild(MCP)\n    const obmaint = document.createElement('button')\n    obmaint.classList.add('buttonhover', 'navbutton')\n    obmaint.id = 'obmaint'\n    obmaint.innerText = 'ONBD MAINT'\n    navbar.appendChild(obmaint)\n    const statuscont = document.createElement('div')\n    statuscont.id = \"statuscont\"\n    statuscont.classList.add('bluef')\n    displaycontainer.appendChild(statuscont)\n    const statusmsg = document.createElement('div')\n    statusmsg.classList.add('bluef')\n    statusmsg.id = 'statusmsg'\n    statusmsg.innerText = 'STATUS MESSAGES'\n    statuscont.appendChild(statusmsg)\n    const statusex = document.createElement('div')\n    statusex.classList.add('whitef')\n    statusex.id = 'statusexamples'\n    statuscont.appendChild(statusex)\n    const example = document.createElement('div')\n    example.classList.add('whitef')\n    example.innerText = 'ENG LPTACC VALVE L'\n    statusex.appendChild(example)\n    const example2 = document.createElement('div')\n    example2.innerText = 'APU DOOR'\n    statusex.appendChild(example2)\n    const example3 = document.createElement('div')\n    example3.innerText = 'PSEU COMM'\n    statusex.appendChild(example3)\n    const example4 = document.createElement('div')\n    example4.innerText = 'DISPLAYS CONFIG DATA'\n    statusex.appendChild(example4)\n    const example5 = document.createElement('div')\n    example5.innerText = 'DPC1'\n    statusex.appendChild(example5)\n\n}\n\n//# sourceURL=webpack://maxons/./src/maintbuttonfunction.js?");

/***/ }),

/***/ "./src/mfpanel.js":
/*!************************!*\
  !*** ./src/mfpanel.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createMFP)\n/* harmony export */ });\n// js for multi-function panel MAX ONS\nfunction createMFP(){\n    const makediv = document.createElement('div')\n    makediv.id = 'mfpanel'\n    makediv.classList.add('side')\n    document.body.appendChild(makediv)\n    const MFDdiv = document.createElement('div')\n    MFDdiv.id = 'MFD'\n    MFDdiv.innerHTML = \"<h3> MFD <h3>\"\n    makediv.appendChild(MFDdiv)\n    const ENGTFR = document.createElement('div')\n    ENGTFR.id = 'ENGTFR'\n    ENGTFR.innerHTML = \"<h3> ENG TFR <h3>\"\n    makediv.appendChild(ENGTFR)\n    //buttons\n    function makebutton(id, text){\n        let mfdbutton = document.createElement('button')\n        mfdbutton.id = id\n        mfdbutton.innerText = text\n        makediv.appendChild(mfdbutton)\n    }\n\n    makebutton('ENG', 'ENG')\n    makebutton('SYS', 'SYS')\n    makebutton('INFO', 'INFO')\n    makebutton('CR', 'C/R')\n    makebutton('dArrow', '\\u2B0C')\n}\n\n//# sourceURL=webpack://maxons/./src/mfpanel.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;