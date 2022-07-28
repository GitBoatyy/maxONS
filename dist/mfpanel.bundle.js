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

/***/ "./src/mfpanel.js":
/*!************************!*\
  !*** ./src/mfpanel.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createMFP)\n/* harmony export */ });\n// js for multi-function panel MAX ONS\nfunction createMFP(){\n    const makediv = document.createElement('div')\n    makediv.id = 'mfpanel'\n    document.body.appendChild(makediv)\n    const MFDdiv = document.createElement('div')\n    MFDdiv.id = 'MFD'\n    MFDdiv.innerHTML = \"<h3> MFD <h3>\"\n    makediv.appendChild(MFDdiv)\n    const ENGTFR = document.createElement('div')\n    ENGTFR.id = 'ENGTFR'\n    ENGTFR.innerHTML = \"<h3> ENG TFR <h3>\"\n    makediv.appendChild(ENGTFR)\n    //buttons\n    function makebutton(id, text){\n        let mfdbutton = document.createElement('button')\n        mfdbutton.id = id\n        mfdbutton.innerText = text\n        makediv.appendChild(mfdbutton)\n    }\n\n    makebutton('ENG', 'ENG')\n    makebutton('SYS', 'SYS')\n    makebutton('INFO', 'INFO')\n    makebutton('CR', 'C/R')\n    makebutton('dArrow', '\\u2B0C')\n}\n\n//# sourceURL=webpack://maxons/./src/mfpanel.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/mfpanel.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;