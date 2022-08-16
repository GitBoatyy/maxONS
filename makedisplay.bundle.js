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

/***/ "./src/maintbutton.js":
/*!****************************!*\
  !*** ./src/maintbutton.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ makedisplay)\n/* harmony export */ });\n//function to create display container black background with maintenance button to engage ONS\n\n\n\n\nfunction makedisplay(){\n    const appcontainer = document.getElementById('app')\n    appcontainer.replaceChildren()\n    const display = document.createElement('div')\n    display.id = 'displaycontainer'\n    const maintheader = document.createElement('div')   \n    maintheader.id = 'maintheader'\n    const maintbutton = document.createElement('button')\n    maintbutton.classList.add('buttonhover')\n    maintbutton.id = 'maintbutton'\n    maintbutton.innerText = 'MAINT'\n    const hyddisplay = document.createElement('div')\n    hyddisplay.id = 'hyddisplay'\n    hyddisplay.classList.add('bluef')\n    const hydtitle = document.createElement('div')\n    hydtitle.id = 'hydtitle'\n    hydtitle.classList.add('bluef')\n    hydtitle.innerText = 'HYDRAULIC'\n    const hydcontainer = document.createElement('div')\n    hydcontainer.id = 'hydcontainer'\n    const a = document.createElement('div')\n    a.classList.add('bluef')\n    a.id = 'a'\n    a.innerText = 'A'\n    const b = document.createElement('div')\n    b.classList.add('bluef')\n    b.id = 'b'\n    b.innerText = 'B'\n    const qty = document.createElement('div')\n    qty.id = 'qty'\n    qty.classList.add('bluef')\n    qty.innerText = 'QTY%'\n    const press = document.createElement('div')\n    press.id = 'press'\n    press.classList.add('bluef')\n    press.innerText = 'PRESS'\n    const qty1 = document.createElement('div')\n    qty1.id = 'qty1'\n    qty1.classList.add('whitef')\n    qty1.innerText = '100'\n    const qty2 = document.createElement('div')\n    qty2.id = 'qty2'\n    qty2.innerText = '100'\n    qty2.classList.add('whitef')\n    const press1 = document.createElement('div')\n    press1.id = 'press1'\n    press1.innerText = '3300'\n    press1.classList.add('whitef')\n    const press2 = document.createElement('div')\n    press2.id = 'press2'\n    press2.innerText = '3300'\n    press2.classList.add('whitef')\n    const ediv = document.createElement('div')\n    ediv.innerText = ''\n    appcontainer.appendChild(display)\n    display.appendChild(maintheader)\n    maintheader.appendChild(maintbutton)\n    display.appendChild(hyddisplay)\n    hyddisplay.appendChild(hydtitle)\n    hyddisplay.appendChild(hydcontainer)\n    hydcontainer.appendChild(ediv)\n    hydcontainer.appendChild(a)\n    hydcontainer.appendChild(b)\n    hydcontainer.appendChild(qty)\n    hydcontainer.appendChild(qty1)\n    hydcontainer.appendChild(qty2)\n    hydcontainer.appendChild(press)\n    hydcontainer.appendChild(press1)\n    hydcontainer.appendChild(press2)\n}\n\n//# sourceURL=webpack://maxons/./src/maintbutton.js?");

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
/******/ 	__webpack_modules__["./src/maintbutton.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;