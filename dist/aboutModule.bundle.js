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

/***/ "./src/scripts/about.js":
/*!******************************!*\
  !*** ./src/scripts/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ aboutModule)\n/* harmony export */ });\nconst RESTAURANT_NAME = 'NgocLe'\r\nconst ESTABLISHED_YEAR = 2014\r\nconst LOCATION = 'District 1, HCMC, Viet Nam'\r\nconst FOUNDER = 'Ngoc Le'\r\n\r\nconst createSection = (index, content) => {\r\n    const div = document.createElement('div');\r\n    div.className = 'section';\r\n    div.id = `section-${index}`;\r\n\r\n    const heading = document.createElement('h2');\r\n    const contentText = document.createElement('p');\r\n\r\n    heading.innerText = content.heading;\r\n    contentText.innerText = content.content;\r\n\r\n    div.appendChild(heading);\r\n    div.appendChild(contentText);\r\n\r\n    return div;\r\n}\r\n\r\nfunction aboutModule() {\r\n    const div = document.createElement('div');\r\n    const pageName = document.createElement('h1');\r\n    pageName.innerText = 'ABOUT';\r\n    div.appendChild(pageName);\r\n\r\n    const welcomeText = document.createElement('h1');\r\n    welcomeText.innerText = `Welcome to ${RESTAURANT_NAME}!\\nAt ${RESTAURANT_NAME}, we are passionate about bringing people together through the love of food. Established in ${ESTABLISHED_YEAR}, our restaurant has become a beloved destination for locals and visitors alike in ${LOCATION}.`;\r\n    \r\n    div.appendChild(createSection(1,{\r\n        heading: 'Our Story',\r\n        content: `${RESTAURANT_NAME} was founded by ${FOUNDER}, who have a deep-rooted passion for Italian cuisine. Inspired by their grandmother's traditional recipes from Tuscany, we set out to create a dining experience that combines authentic flavors with a modern twist.\r\n\\nFrom our humble beginnings, we have grown into a vibrant community hub where friends and families gather to enjoy delicious meals and create lasting memories.`\r\n    }));\r\n    div.appendChild(createSection(2,{\r\n        heading: 'Our Mission',\r\n        content: `Our mission is to provide exceptional food and service in a warm and   welcoming environment. We believe that every meal should be a celebration, and we strive to make each dining experience memorable. We are committed to using only the        freshest, locally sourced ingredients to create dishes that not only taste great but also reflect our love for Italian cuisine.`\r\n    }));\r\n    div.appendChild(createSection(3,{\r\n        heading: 'Meet Our Team',\r\n        content: `Our talented team is the heart of Bella Cucina. Led by our head chef,        Marco Bellini, who brings over 15 years of culinary experience, our kitchen staff is dedicated to crafting each dish with care and creativity.\\nOur front-of-house team is equally passionate about providing outstanding service, ensuring that every guest feels like part of our family. Together, we work hard to create a dining experience that exceeds your expectations.`\r\n    }));\r\n\r\n    return div;\r\n}\n\n//# sourceURL=webpack://odin_restaurant-page/./src/scripts/about.js?");

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
/******/ 	__webpack_modules__["./src/scripts/about.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;