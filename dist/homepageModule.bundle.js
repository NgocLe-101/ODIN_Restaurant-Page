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

/***/ "./src/scripts/homepage.js":
/*!*********************************!*\
  !*** ./src/scripts/homepage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homepageModule)\n/* harmony export */ });\n/* harmony import */ var _assets_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/restaurant.jpg */ \"./src/assets/restaurant.jpg\");\n\r\n\r\nfunction homepageModule() {\r\n    const div = document.createElement('div');\r\n    const pageName = document.createElement('h1');\r\n    pageName.innerText = 'HOMEPAGE';\r\n    div.appendChild(pageName);\r\n    const img = new Image();\r\n    img.src = _assets_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n    div.appendChild(img);\r\n\r\n    const restaurantName = 'NgocLe';\r\n    const restaurantLocation = 'District 1, HCMC, Viet Nam'\r\n    const h1 = document.createElement('h1');\r\n    h1.innerText = `Welcome to ${restaurantName}!`;\r\n    const p_1 = document.createElement('p');\r\n    const p_2 = document.createElement('p');\r\n    const p_3 = document.createElement('p');\r\n\r\n    p_1.innerHTML = `At <strong>${restaurantName}</strong>, we believe that dining is not just about food; it's about creating unforgettable experiences. Nestled in the heart of <strong>${restaurantLocation}</strong>, our restaurant offers a warm and inviting atmosphere where friends and family can gather to enjoy exquisite dishes crafted from the freshest ingredients.`;\r\n\r\n    p_2.innerText = `Our talented chefs are dedicated to bringing you a menu that celebrates Pho, Bun Bo Hue, Banh Mi,... featuring both classic favorites and innovative creations. Whether you're here for a casual lunch, a romantic dinner, or a special celebration, we promise to provide exceptional service and a memorable dining experience.`;\r\n\r\n    p_3.innerText = `Join us today and discover why ${restaurantName} is the perfect place for food lovers!`;\r\n\r\n    div.appendChild(h1);\r\n    div.appendChild(p_1);\r\n    div.appendChild(p_2);\r\n    div.appendChild(p_3);\r\n    return div;\r\n};\n\n//# sourceURL=webpack://odin_restaurant-page/./src/scripts/homepage.js?");

/***/ }),

/***/ "./src/assets/restaurant.jpg":
/*!***********************************!*\
  !*** ./src/assets/restaurant.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"00bb28b21c7f0de31419.jpg\";\n\n//# sourceURL=webpack://odin_restaurant-page/./src/assets/restaurant.jpg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/homepage.js");
/******/ 	
/******/ })()
;