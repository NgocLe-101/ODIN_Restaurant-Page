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

/***/ "./src/scripts/menu.js":
/*!*****************************!*\
  !*** ./src/scripts/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuModule)\n/* harmony export */ });\nconst RESTAURANT_NAME = 'NgocLe'\r\n\r\nconst createMenuElement = (info) => {\r\n    const div = document.createElement('div');\r\n    Object.entries(info).forEach(([key,value]) => {\r\n        const sectionDiv = document.createElement('div');\r\n        sectionDiv.className = 'section-container';\r\n        const header = document.createElement('h2');\r\n        header.innerText = key;\r\n        const dishDiv = document.createElement('div');\r\n        value.forEach(dish => {\r\n            const div = document.createElement('div');\r\n            div.className = 'dish-decript';\r\n            const dishName = document.createElement('h3');\r\n            const description = document.createElement('p');\r\n            const price = document.createElement('h3');\r\n\r\n            dishName.innerText = dish.name;\r\n            description.innerText = dish.description;\r\n            price.innerText = `Price: \\$${dish.price}`;\r\n            div.appendChild(dishName);\r\n            div.appendChild(description);\r\n            div.appendChild(price);\r\n            dishDiv.appendChild(div);\r\n        });\r\n        sectionDiv.appendChild(header);\r\n        sectionDiv.appendChild(dishDiv);\r\n        div.appendChild(sectionDiv);\r\n    });\r\n    return div;\r\n}\r\n\r\nconst dishInfos = {\r\n    'Appetizers': [\r\n        {\r\n            name: 'Bruschetta',\r\n            description: 'Toasted bread topped with fresh tomatoes, basil, and mozzarella.',\r\n            price: 8.00\r\n        },\r\n        {\r\n            name: 'Stuffed Mushrooms',\r\n            description: 'Mushrooms filled with a savory blend of cheese, herbs, and breadcrumbs.',\r\n            price: 10.00\r\n        },\r\n        {\r\n            name: 'Calamari Fritti',\r\n            description: 'Crispy fried calamari served with marinara sauce.',\r\n            price: 12.00\r\n        },  \r\n    ],\r\n    'Main Courses':[\r\n        {\r\n            name: 'Grilled Salmon',\r\n            description: 'Fresh salmon fillet grilled to perfection, served with seasonal vegetables.',\r\n            price: 22.00\r\n        },\r\n        {\r\n            name: 'Pasta Primavera',\r\n            description: 'A medley of fresh vegetables tossed with pasta in a light garlic sauce.',\r\n            price: 18.00\r\n        },\r\n        {\r\n            name: 'Ribeye Steak',\r\n            description: 'Juicy ribeye steak cooked to your liking, served with mashed potatoes and asparagus.',\r\n            price: 28.00\r\n        }, \r\n    ],\r\n    'Desserts': [\r\n        {\r\n            name: 'Tiramisu',\r\n            description: 'Classic Italian dessert made with coffee-soaked ladyfingers and mascarpone cheese.',\r\n            price: 7.00\r\n        },\r\n        {\r\n            name: 'Chocolate Lava Cake',\r\n            description: 'Warm chocolate cake with a gooey center, served with vanilla ice cream.',\r\n            price: 9.00\r\n        },\r\n    ],\r\n    'Beverages': [\r\n        {\r\n            name: 'House Wine',\r\n            description: 'A selection of red and white wines by the glass.',\r\n            price: 7.00\r\n        },\r\n        {\r\n            name: 'Craft Beer',\r\n            description: 'Local craft beers on tap.',\r\n            price: 6.00\r\n        },\r\n        {\r\n            name: 'Soft Drinks',\r\n            description: 'A variety of sodas and juices.',\r\n            price: 3.00\r\n        }, \r\n    ]\r\n}\r\n\r\nfunction menuModule() {\r\n    const div = document.createElement('div');\r\n    const pageName = document.createElement('h1');\r\n    pageName.innerText = 'MENU';\r\n    div.appendChild(pageName);\r\n\r\n    const welcomeText = document.createElement('h3');\r\n    welcomeText.innerText = `Welcome to ${RESTAURANT_NAME} Menu\\nAt ${RESTAURANT_NAME}, we take pride in offering a diverse selection of dishes made from the finest ingredients. Explore our menu below and discover your new favorite meal!`;\r\n    \r\n    const dishInfoContent = createMenuElement(dishInfos);\r\n    div.appendChild(welcomeText);\r\n    div.appendChild(dishInfoContent);\r\n\r\n    return div;\r\n}\n\n//# sourceURL=webpack://odin_restaurant-page/./src/scripts/menu.js?");

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
/******/ 	__webpack_modules__["./src/scripts/menu.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;