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

/***/ "./src/displayselection.js":
/*!*********************************!*\
  !*** ./src/displayselection.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayselection)\n/* harmony export */ });\n/** displayselection creates the display page*/\nfunction displayselection() {\n  const mdpheadernav = document.getElementById('mdpheadernav');\n  mdpheadernav.replaceChildren();\n  const displaysel = document.createElement('button');\n  displaysel.id = 'dissel';\n  displaysel.innerText = 'DISPLAY SELECTION';\n  displaysel.classList.add('buttonhover', 'navbutton', 'active');\n  mdpheadernav.appendChild(displaysel);\n  const printsel = document.createElement('button');\n  printsel.id = 'printsel';\n  printsel.innerText = 'PRINT SELECTION';\n  printsel.classList.add('buttonhover', 'navbutton');\n  mdpheadernav.appendChild(printsel);\n  const datasel = document.createElement('button');\n  datasel.id = 'datasel';\n  datasel.innerText = 'DATALINK SELECTION';\n  datasel.classList.add('buttonhover', 'navbutton');\n  mdpheadernav.appendChild(datasel);\n  const ersel = document.createElement('button');\n  ersel.id = 'ersel';\n  ersel.innerText = 'ERASE SELECTION';\n  ersel.classList.add('buttonhover', 'navbutton');\n  mdpheadernav.appendChild(ersel);\n  /** newtext creates a div containing\n   * @param {var} a is id\n   * @param {var} b innertext */\n  function newtext(a, b) {\n    const newtext = document.createElement('div');\n    newtext.id = a;\n    newtext.classList.add('bluef', 'dsfont');\n    newtext.innerText = b;\n    disselcont.appendChild(newtext);\n  }\n  /** creates a blank div to fill grid spaces */\n  function filler() {\n    const filler = document.createElement('div');\n    disselcont.appendChild(filler);\n  }\n\n  /** newtext creates a div containing\n   * @param {var} a innertext\n   * @param {var} b id */\n  function displaybutton(a, b) {\n    const displaybutton = document.createElement('button');\n    displaybutton.classList.add('navbutton', 'buttonhover', 'dsbutton');\n    displaybutton.innerText = a;\n    displaybutton.id = b;\n    disselcont.appendChild(displaybutton);\n  }\n\n  const mdpcont = document.getElementById('mdpdisplaycontainer');\n  mdpcont.replaceChildren();\n  const disselcont = document.createElement('div');\n  disselcont.id = 'displayselcontainer';\n  mdpcont.appendChild(disselcont);\n\n  // ids are grid location column/row for css placement\n  newtext('ds11', 'ATA');\n  newtext('ds21', 'SYSTEM');\n  newtext('ds31', 'REAL');\n  newtext('ds41', 'MANUAL');\n  newtext('ds51', 'AUTO');\n  newtext('ds12', '21');\n  newtext('ds22', 'AIR CONDITIONING');\n  displaybutton('DISPLAY', 'dsac');\n  filler();\n  filler();\n  newtext('ds13', '27');\n  newtext('ds23', 'FLIGHT CONTROL');\n  displaybutton('DISPLAY', 'dsfc');\n  filler();\n  filler();\n  newtext('ds14', '27');\n  newtext('ds24', 'SMYD');\n  displaybutton('DISPLAY', 'dssmyd');\n  filler();\n  filler();\n  newtext('ds15', '31');\n  newtext('ds25', 'MDS');\n  displaybutton('DISPLAY', 'dsmds');\n  filler();\n  filler();\n  newtext('ds16', '32');\n  newtext('ds26', 'PSEU');\n  displaybutton('DISPLAY');\n  filler();\n  filler();\n  newtext('ds17', '36');\n  newtext('ds27', 'AIR SUPPLY');\n  displaybutton('DISPLAY', 'dsas');\n  filler();\n  filler();\n  newtext('ds18', '49');\n  newtext('ds28', 'APU');\n  displaybutton('DISPLAY', 'dsapu');\n  filler();\n  filler();\n  newtext('ds19', '71');\n  newtext('ds29', 'PERFORMANCE');\n  displaybutton('DISPLAY', 'dsperf');\n  filler();\n  displaybutton('SHOW LIST');\n  newtext('ds110', '71');\n  newtext('ds210', 'EPCS');\n  displaybutton('DISPLAY', 'dsepcs');\n  filler();\n  displaybutton('SHOW LIST');\n  newtext('ds111', '71');\n  newtext('ds211', 'ENGINE 1 EXCEEDANCE');\n  filler();\n  filler();\n  filler();\n  newtext('ds112', '71');\n  newtext('ds212', 'ENGINE 2 EXCEEDANCE');\n  filler();\n  filler();\n  filler();\n}\n\n\n//# sourceURL=webpack://maxons/./src/displayselection.js?");

/***/ }),

/***/ "./src/maintdatapgs.js":
/*!*****************************!*\
  !*** ./src/maintdatapgs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ goToMDP)\n/* harmony export */ });\n/* harmony import */ var _displayselection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayselection */ \"./src/displayselection.js\");\n\n\nfunction goToMDP() {\n  const displaycontainer = document.getElementById(\"displaycontainer\");\n  displaycontainer.replaceChildren();\n  const navbar = document.createElement(\"div\");\n  navbar.id = \"headernav\";\n  displaycontainer.appendChild(navbar);\n  const sysbutt = document.createElement(\"button\");\n  sysbutt.classList.add(\"buttonhover\", \"navbutton\");\n  sysbutt.id = \"sysmenu\";\n  sysbutt.innerText = \"SYS MENU\";\n  navbar.appendChild(sysbutt);\n  const statusbutt = document.createElement(\"button\");\n  statusbutt.classList.add(\"buttonhover\", \"navbutton\");\n  statusbutt.id = \"status\";\n  statusbutt.innerText = \"STATUS\";\n  navbar.appendChild(statusbutt);\n  const MDP = document.createElement(\"button\");\n  MDP.classList.add(\"buttonhover\", \"navbutton\", \"active\");\n  MDP.id = \"MDP\";\n  MDP.innerText = \"MAINT DATA PGS\";\n  navbar.appendChild(MDP);\n  const MCP = document.createElement(\"button\");\n  MCP.classList.add(\"buttonhover\", \"navbutton\");\n  MCP.id = \"MCP\";\n  MCP.innerText = \"MAINT CTRL PGS\";\n  navbar.appendChild(MCP);\n  const obmaint = document.createElement(\"button\");\n  obmaint.classList.add(\"buttonhover\", \"navbutton\");\n  obmaint.id = \"obmaint\";\n  obmaint.innerText = \"ONBD MAINT\";\n  navbar.appendChild(obmaint);\n  const mdpheadernav = document.createElement(\"div\");\n  mdpheadernav.id = \"mdpheadernav\";\n  displaycontainer.appendChild(mdpheadernav);\n  const displaysel = document.createElement(\"button\");\n  displaysel.id = \"dissel\";\n  displaysel.innerText = \"DISPLAY SELECTION\";\n  displaysel.classList.add(\"buttonhover\", \"navbutton\", \"active\");\n  mdpheadernav.appendChild(displaysel);\n  const printsel = document.createElement(\"button\");\n  printsel.id = \"printsel\";\n  printsel.innerText = \"PRINT SELECTION\";\n  printsel.classList.add(\"buttonhover\", \"navbutton\");\n  mdpheadernav.appendChild(printsel);\n  const datasel = document.createElement(\"button\");\n  datasel.id = \"datasel\";\n  datasel.innerText = \"DATALINK SELECTION\";\n  datasel.classList.add(\"buttonhover\", \"navbutton\");\n  mdpheadernav.appendChild(datasel);\n  const ersel = document.createElement(\"button\");\n  ersel.id = \"ersel\";\n  ersel.innerText = \"ERASE SELECTION\";\n  ersel.classList.add(\"buttonhover\", \"navbutton\");\n  mdpheadernav.appendChild(ersel);\n  const mdpcont = document.createElement(\"div\");\n  mdpcont.id = \"mdpdisplaycontainer\";\n  displaycontainer.appendChild(mdpcont);\n\n  (0,_displayselection__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n\n//# sourceURL=webpack://maxons/./src/maintdatapgs.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/maintdatapgs.js");
/******/ 	
/******/ })()
;