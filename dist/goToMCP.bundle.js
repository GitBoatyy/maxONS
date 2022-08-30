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

/***/ "./src/maintctrlpgs.js":
/*!*****************************!*\
  !*** ./src/maintctrlpgs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ goToMCP)\n/* harmony export */ });\nfunction goToMCP() {\n    function displaybutton(a, b) {\n      const displaybutton = document.createElement(\"button\");\n      displaybutton.id = b;\n      displaybutton.classList.add(\"navbutton\", \"buttonhover\", \"mcpbutton\");\n      displaybutton.innerText = a;\n      mcpdisplaycontainer.appendChild(displaybutton);\n    }\n    const displaycontainer = document.getElementById(\"displaycontainer\");\n    displaycontainer.replaceChildren();\n    const navbar = document.createElement(\"div\");\n    navbar.id = \"headernav\";\n    displaycontainer.appendChild(navbar);\n    const sysbutt = document.createElement(\"button\");\n    sysbutt.classList.add(\"buttonhover\", \"navbutton\");\n    sysbutt.id = \"sysmenu\";\n    sysbutt.innerText = \"SYS MENU\";\n    navbar.appendChild(sysbutt);\n    const statusbutt = document.createElement(\"button\");\n    statusbutt.classList.add(\"buttonhover\", \"navbutton\");\n    statusbutt.id = \"status\";\n    statusbutt.innerText = \"STATUS\";\n    navbar.appendChild(statusbutt);\n    const MDP = document.createElement(\"button\");\n    MDP.classList.add(\"buttonhover\", \"navbutton\");\n    MDP.id = \"MDP\";\n    MDP.innerText = \"MAINT DATA PGS\";\n    navbar.appendChild(MDP);\n    const MCP = document.createElement(\"button\");\n    MCP.classList.add(\"buttonhover\", \"navbutton\", \"active\");\n    MCP.id = \"MCP\";\n    MCP.innerText = \"MAINT CTRL PGS\";\n    navbar.appendChild(MCP);\n    const obmaint = document.createElement(\"button\");\n    obmaint.classList.add(\"buttonhover\", \"navbutton\");\n    obmaint.id = \"obmaint\";\n    obmaint.innerText = \"ONBD MAINT\";\n    navbar.appendChild(obmaint);\n    const mcpdisplaycontainer = document.createElement(\"div\");\n    mcpdisplaycontainer.id = \"mcddiscont\";\n    displaycontainer.appendChild(mcpdisplaycontainer);\n    displaybutton(\"AIRPLANCE CONFIG DATA (ACD)\", \"acd\");\n    displaybutton(\"MISC SYSTEM CTRLS (MSC)\", \"msc\");\n    displaybutton(\"LATCHED MESSAGE ERASE\", \"msgerase\");\n    displaybutton(\"MAINT LIGHT\", \"maintlight\");\n  }\n  \n\n//# sourceURL=webpack://maxons/./src/maintctrlpgs.js?");

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
/******/ 	__webpack_modules__["./src/maintctrlpgs.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;