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

/***/ "./src/maintbuttonfunction.js":
/*!************************************!*\
  !*** ./src/maintbuttonfunction.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ goToStatus)\n/* harmony export */ });\n//main button to generate first MDS/ONS screen. Defaults to status \n\nfunction goToStatus(){\n    const displaycontainer = document.getElementById('displaycontainer')\n    displaycontainer.replaceChildren()\n    const navbar = document.createElement('div')\n    navbar.id = 'headernav'\n    displaycontainer.appendChild(navbar)\n    const sysbutt = document.createElement('button')\n    sysbutt.classList.add('buttonhover', 'navbutton')\n    sysbutt.id = 'sysmenu'\n    sysbutt.innerText = 'SYS MENU'\n    navbar.appendChild(sysbutt)\n    const statusbutt = document.createElement('button')\n    statusbutt.classList.add('buttonhover', 'navbutton', 'active')\n    statusbutt.id = 'status'\n    statusbutt.innerText = 'STATUS'\n    navbar.appendChild(statusbutt)\n    const MDP = document.createElement('button')\n    MDP.classList.add('buttonhover', 'navbutton')\n    MDP.id = 'MDP'\n    MDP.innerText = 'MAINT DATA PGS'\n    navbar.appendChild(MDP)\n    const MCP = document.createElement('button')\n    MCP.classList.add('buttonhover', 'navbutton')\n    MCP.id = 'MCP'\n    MCP.innerText = 'MAINT CTRL PGS'\n    navbar.appendChild(MCP)\n    const obmaint = document.createElement('button')\n    obmaint.classList.add('buttonhover', 'navbutton')\n    obmaint.id = 'obmaint'\n    obmaint.innerText = 'ONBD MAINT'\n    navbar.appendChild(obmaint)\n    const statuscont = document.createElement('div')\n    statuscont.id = \"statuscont\"\n    statuscont.classList.add('bluef')\n    displaycontainer.appendChild(statuscont)\n    const statusmsg = document.createElement('div')\n    statusmsg.classList.add('bluef')\n    statusmsg.id = 'statusmsg'\n    statusmsg.innerText = 'STATUS MESSAGES'\n    statuscont.appendChild(statusmsg)\n    const statusex = document.createElement('div')\n    statusex.classList.add('whitef')\n    statusex.id = 'statusexamples'\n    statuscont.appendChild(statusex)\n    const example = document.createElement('div')\n    example.classList.add('whitef')\n    example.innerText = 'ENG LPTACC VALVE L'\n    statusex.appendChild(example)\n    const example2 = document.createElement('div')\n    example2.innerText = 'APU DOOR'\n    statusex.appendChild(example2)\n    const example3 = document.createElement('div')\n    example3.innerText = 'PSEU COMM'\n    statusex.appendChild(example3)\n    const example4 = document.createElement('div')\n    example4.innerText = 'DISPLAYS CONFIG DATA'\n    statusex.appendChild(example4)\n    const example5 = document.createElement('div')\n    example5.innerText = 'DPC1'\n    statusex.appendChild(example5)\n\n}\n\n//# sourceURL=webpack://maxons/./src/maintbuttonfunction.js?");

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
/******/ 	__webpack_modules__["./src/maintbuttonfunction.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;