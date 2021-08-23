/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_pizza1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/pizza1.png */ "./src/images/pizza1.png");
/* harmony import */ var _images_pizza2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/pizza2.png */ "./src/images/pizza2.png");
/* harmony import */ var _images_pizza3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/pizza3.png */ "./src/images/pizza3.png");
/* harmony import */ var _images_pizza4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/pizza4.png */ "./src/images/pizza4.png");
/* harmony import */ var _images_pizza5_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/pizza5.png */ "./src/images/pizza5.png");
/* harmony import */ var _images_pizza6_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/pizza6.png */ "./src/images/pizza6.png");
/* harmony import */ var _images_pizza7_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/pizza7.png */ "./src/images/pizza7.png");
/* harmony import */ var _images_pizza8_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/pizza8.png */ "./src/images/pizza8.png");












function displayMenu(navContent) {
    navContent.style.cssText = 'display: flex; justify-content: space-evenly; flex-wrap: wrap';
    
    // 1st food container
    const foodContainer1 = document.createElement('div');
    foodContainer1.classList.add('foodContainer');
    
    const p1 = new Image(130);
    p1.src = _images_pizza1_png__WEBPACK_IMPORTED_MODULE_0__;
    p1.classList.add('pizzaImages');

    const pizzaType1 = document.createElement('div');
    pizzaType1.innerHTML = `Sacilia <em style = 'font-weight: normal; font-size: 20px;'>$12</em>`;
    pizzaType1.classList.add('pizzaType');

    const ingredient1 = document.createElement('p');
    ingredient1.classList.add('ingredients');
    ingredient1.textContent = 'Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil';

    foodContainer1.append(p1);
    foodContainer1.appendChild(pizzaType1);
    foodContainer1.appendChild(ingredient1);
    // end of 1st food container

    // 2nd food container
    const foodContainer2 = document.createElement('div');
    foodContainer2.classList.add('foodContainer');

    const p2 = new Image(130);
    p2.src = _images_pizza2_png__WEBPACK_IMPORTED_MODULE_1__;
    p2.classList.add('pizzaImages');

    const pizzaType2 = document.createElement('div');
    pizzaType2.innerHTML = `Gamberi <em style = 'font-weight: normal; font-size: 20px;'>$11</em>`;
    pizzaType2.classList.add('pizzaType');

    const ingredient2 = document.createElement('p');
    ingredient2.classList.add('ingredients');
    ingredient2.textContent = 'Tomato sauce, Mozarella, Shrimp, Feta cheese, Olives, Basil';

    foodContainer2.appendChild(p2);
    foodContainer2.appendChild(pizzaType2);
    foodContainer2.appendChild(ingredient2);
    // end of 2nd food container

    // 3rd food container
    const foodContainer3 = document.createElement('div');
    foodContainer3.classList.add('foodContainer');

    const p3 = new Image(130);
    p3.src = _images_pizza3_png__WEBPACK_IMPORTED_MODULE_2__;
    p3.classList.add('pizzaImages');

    const pizzaType3 = document.createElement('div');
    pizzaType3.innerHTML = `Pepe <em style = 'font-weight: normal; font-size: 20px;'>$11</em>`;
    pizzaType3.classList.add('pizzaType');

    const ingredient3 = document.createElement('p');
    ingredient3.classList.add('ingredients');
    ingredient3.textContent = 'Tomato sauce, Mozarella, Chilli flakes, Olives, Basil';

    foodContainer3.appendChild(p3);
    foodContainer3.appendChild(pizzaType3);
    foodContainer3.appendChild(ingredient3);
    // end of 3rd food container

    // 4th food container
    const foodContainer4 = document.createElement('div');
    foodContainer4.classList.add('foodContainer');

    const p4 = new Image(130);
    p4.src = _images_pizza4_png__WEBPACK_IMPORTED_MODULE_3__;
    p4.classList.add('pizzaImages');

    const pizzaType4 = document.createElement('div');
    pizzaType4.innerHTML = `Hawaiian <em style = 'font-weight: normal; font-size: 20px;'>$13</em>`;
    pizzaType4.classList.add('pizzaType');

    const ingredient4 = document.createElement('p');
    ingredient4.classList.add('ingredients');
    ingredient4.textContent = 'Tomato sauce, Bacon, Pinapple, Olives, Basil';

    foodContainer4.appendChild(p4);
    foodContainer4.appendChild(pizzaType4);
    foodContainer4.appendChild(ingredient4);
    // end of 4th food container

    // 5th food container
    const foodContainer5 = document.createElement('div');
    foodContainer5.classList.add('foodContainer');

    const p5 = new Image(130);
    p5.src = _images_pizza5_png__WEBPACK_IMPORTED_MODULE_4__;
    p5.classList.add('pizzaImages');

    const pizzaType5 = document.createElement('div');
    pizzaType5.innerHTML = `Colorato <em style = 'font-weight: normal; font-size: 20px;'>$10</em>`;
    pizzaType5.classList.add('pizzaType');

    const ingredient5 = document.createElement('p');
    ingredient5.classList.add('ingredients');
    ingredient5.textContent = 'Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil';

    foodContainer5.appendChild(p5);
    foodContainer5.appendChild(pizzaType5);
    foodContainer5.appendChild(ingredient5);
    // end of 5th food container

    // 6th food container
    const foodContainer6 = document.createElement('div');
    foodContainer6.classList.add('foodContainer');

    const p6 = new Image(130);
    p6.src = _images_pizza6_png__WEBPACK_IMPORTED_MODULE_5__;
    p6.classList.add('pizzaImages');

    const pizzaType6 = document.createElement('div');
    pizzaType6.innerHTML = `Pomodoro <em style = 'font-weight: normal; font-size: 20px;'>$16</em>`;
    pizzaType6.classList.add('pizzaType');

    const ingredient6 = document.createElement('p');
    ingredient6.classList.add('ingredients');
    ingredient6.textContent = 'Tomato sauce, Mozarella, Tomato, Onion, Feta Cheese, Chilli peppers';

    foodContainer6.appendChild(p6);
    foodContainer6.appendChild(pizzaType6);
    foodContainer6.appendChild(ingredient6);
    // end of 6th food container

    // 7th food container
    const foodContainer7 = document.createElement('div');
    foodContainer7.classList.add('foodContainer');

    const p7 = new Image(130);
    p7.src = _images_pizza7_png__WEBPACK_IMPORTED_MODULE_6__;
    p7.classList.add('pizzaImages');

    const pizzaType7 = document.createElement('div');
    pizzaType7.innerHTML = `Crema <em style = 'font-weight: normal; font-size: 20px;'>$15</em>`;
    pizzaType7.classList.add('pizzaType');

    const ingredient7 = document.createElement('p');
    ingredient7.classList.add('ingredients');
    ingredient7.textContent = 'White sauce, Mozarella, Shrimp, Salmon, Pineapple, Olives, Basil';

    foodContainer7.appendChild(p7);
    foodContainer7.appendChild(pizzaType7);
    foodContainer7.appendChild(ingredient7);
    // end of 7th food container

    // 8th food container
    const foodContainer8 = document.createElement('div');
    foodContainer8.classList.add('foodContainer');

    const p8 = new Image(130);
    p8.src = _images_pizza8_png__WEBPACK_IMPORTED_MODULE_7__;
    p8.classList.add('pizzaImages');

    const pizzaType8 = document.createElement('div');
    pizzaType8.innerHTML = `Carne <em style = 'font-weight: normal; font-size: 20px;'>$14</em>`;
    pizzaType8.classList.add('pizzaType');

    const ingredient8 = document.createElement('p');
    ingredient8.classList.add('ingredients');
    ingredient8.textContent = 'Tomato sauce, Mozarella, Homade sausage, Bacon, Garlic, Pepper, Chilli';

    foodContainer8.appendChild(p8);
    foodContainer8.appendChild(pizzaType8);
    foodContainer8.appendChild(ingredient8);
    // end of 8th food container

    navContent.appendChild(foodContainer1);
    navContent.appendChild(foodContainer2);
    navContent.appendChild(foodContainer3);
    navContent.appendChild(foodContainer4);
    navContent.appendChild(foodContainer5);
    navContent.appendChild(foodContainer6);
    navContent.appendChild(foodContainer7);
    navContent.appendChild(foodContainer8);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMenu);

/***/ }),

/***/ "./src/images/gitHubLogo.png":
/*!***********************************!*\
  !*** ./src/images/gitHubLogo.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "266ca63177bca6f330a7.png";

/***/ }),

/***/ "./src/images/personPic.jpeg":
/*!***********************************!*\
  !*** ./src/images/personPic.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "60662ab94471abcde0fe.jpeg";

/***/ }),

/***/ "./src/images/pizza1.png":
/*!*******************************!*\
  !*** ./src/images/pizza1.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4f1a48a94a2ff7cfbbe3.png";

/***/ }),

/***/ "./src/images/pizza2.png":
/*!*******************************!*\
  !*** ./src/images/pizza2.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "39cec0b6bfec797325ef.png";

/***/ }),

/***/ "./src/images/pizza3.png":
/*!*******************************!*\
  !*** ./src/images/pizza3.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c8c231f8597e0da675e.png";

/***/ }),

/***/ "./src/images/pizza4.png":
/*!*******************************!*\
  !*** ./src/images/pizza4.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "34362ada84919363d765.png";

/***/ }),

/***/ "./src/images/pizza5.png":
/*!*******************************!*\
  !*** ./src/images/pizza5.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "16638ff23489422a5d03.png";

/***/ }),

/***/ "./src/images/pizza6.png":
/*!*******************************!*\
  !*** ./src/images/pizza6.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1896a43718b529295942.png";

/***/ }),

/***/ "./src/images/pizza7.png":
/*!*******************************!*\
  !*** ./src/images/pizza7.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f7f675715f467c0f08f3.png";

/***/ }),

/***/ "./src/images/pizza8.png":
/*!*******************************!*\
  !*** ./src/images/pizza8.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e8bf9bfdca8c5e63f3aa.png";

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_gitHubLogo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/gitHubLogo.png */ "./src/images/gitHubLogo.png");
/* harmony import */ var _images_personPic_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/personPic.jpeg */ "./src/images/personPic.jpeg");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");






function displayHome(navContent) {
    const firstMessage = document.createElement('div');
    firstMessage.classList.add('message');
    firstMessage.id = 'firstMessage';
    firstMessage.textContent = 'The best pizza in New York City Made with passion since 1908';

    const personPic = new Image(350);
    personPic.src = _images_personPic_jpeg__WEBPACK_IMPORTED_MODULE_1__;
    personPic.classList.add('message');
    personPic.id = 'personPic';

    const secondMessage = document.createElement('div');
    secondMessage.classList.add('message');
    secondMessage.textContent = 'Visit us or order online!';

    navContent.appendChild(firstMessage);
    navContent.appendChild(personPic)
    navContent.appendChild(secondMessage);
}

function displayTemplate() {
    const content = document.getElementById('content');
    
    const navPanel = document.createElement('div');
    navPanel.id = 'navPanel';

    const businessName = document.createElement('div');
    businessName.id = 'businessName';
    businessName.textContent = 'Mozzafiato';

    const bttnContainer = document.createElement('div');
    bttnContainer.id = 'bttnContainer';
    
    const bttn1 = document.createElement('button');
    bttn1.textContent = 'Home';
    bttn1.classList.add('bttns', 'selected');

    const bttn2 = document.createElement('button');
    bttn2.textContent = 'Menu';
    bttn2.classList.add('bttns');

    const bttn3 = document.createElement('button');
    bttn3.textContent = 'Contact';
    bttn3.classList.add('bttns');

    bttnContainer.appendChild(bttn1);
    bttnContainer.appendChild(bttn2);
    bttnContainer.appendChild(bttn3);

    navPanel.appendChild(businessName);
    navPanel.appendChild(bttnContainer);

    content.appendChild(navPanel);

    const navContent = document.createElement('div');
    navContent.id = 'navContent';

    //tab specific code goes here
    (0,_menu__WEBPACK_IMPORTED_MODULE_2__.default)(navContent);
    // tab specific code ends here

    content.appendChild(navContent);

    const gitHubInfo = document.createElement('div');
    gitHubInfo.id = 'gitHubInfo';
    gitHubInfo.innerHTML = `Copyright © 2021 chéjohn <a href = 'https://github.com/chejohn' target = '_blank'><img width = '16 id = 'gitHubLogo' src = ${_images_gitHubLogo_png__WEBPACK_IMPORTED_MODULE_0__}></a>`;

    content.appendChild(gitHubInfo);
  
    return content;
}

document.body.appendChild(displayTemplate());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDhDQUFXO0FBQ2Y7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHlKQUF5SixtREFBSSxDQUFDOztBQUU5SjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmltcG9ydCBwaXp6YTEgZnJvbSAnLi9pbWFnZXMvcGl6emExLnBuZyc7XG5pbXBvcnQgcGl6emEyIGZyb20gJy4vaW1hZ2VzL3BpenphMi5wbmcnO1xuaW1wb3J0IHBpenphMyBmcm9tICcuL2ltYWdlcy9waXp6YTMucG5nJztcbmltcG9ydCBwaXp6YTQgZnJvbSAnLi9pbWFnZXMvcGl6emE0LnBuZyc7XG5pbXBvcnQgcGl6emE1IGZyb20gJy4vaW1hZ2VzL3BpenphNS5wbmcnO1xuaW1wb3J0IHBpenphNiBmcm9tICcuL2ltYWdlcy9waXp6YTYucG5nJztcbmltcG9ydCBwaXp6YTcgZnJvbSAnLi9pbWFnZXMvcGl6emE3LnBuZyc7XG5pbXBvcnQgcGl6emE4IGZyb20gJy4vaW1hZ2VzL3BpenphOC5wbmcnO1xuXG5cbmZ1bmN0aW9uIGRpc3BsYXlNZW51KG5hdkNvbnRlbnQpIHtcbiAgICBuYXZDb250ZW50LnN0eWxlLmNzc1RleHQgPSAnZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7IGZsZXgtd3JhcDogd3JhcCc7XG4gICAgXG4gICAgLy8gMXN0IGZvb2QgY29udGFpbmVyXG4gICAgY29uc3QgZm9vZENvbnRhaW5lcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb29kQ29udGFpbmVyMS5jbGFzc0xpc3QuYWRkKCdmb29kQ29udGFpbmVyJyk7XG4gICAgXG4gICAgY29uc3QgcDEgPSBuZXcgSW1hZ2UoMTMwKTtcbiAgICBwMS5zcmMgPSBwaXp6YTE7XG4gICAgcDEuY2xhc3NMaXN0LmFkZCgncGl6emFJbWFnZXMnKTtcblxuICAgIGNvbnN0IHBpenphVHlwZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwaXp6YVR5cGUxLmlubmVySFRNTCA9IGBTYWNpbGlhIDxlbSBzdHlsZSA9ICdmb250LXdlaWdodDogbm9ybWFsOyBmb250LXNpemU6IDIwcHg7Jz4kMTI8L2VtPmA7XG4gICAgcGl6emFUeXBlMS5jbGFzc0xpc3QuYWRkKCdwaXp6YVR5cGUnKTtcblxuICAgIGNvbnN0IGluZ3JlZGllbnQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGluZ3JlZGllbnQxLmNsYXNzTGlzdC5hZGQoJ2luZ3JlZGllbnRzJyk7XG4gICAgaW5ncmVkaWVudDEudGV4dENvbnRlbnQgPSAnVG9tYXRvIHNhdWNlLCBNb3phcmVsbGEsIFRvbWF0bywgSG9tZW1hZGUgc2F1c2FnZSwgR2FybGljLCBCYXNpbCc7XG5cbiAgICBmb29kQ29udGFpbmVyMS5hcHBlbmQocDEpO1xuICAgIGZvb2RDb250YWluZXIxLmFwcGVuZENoaWxkKHBpenphVHlwZTEpO1xuICAgIGZvb2RDb250YWluZXIxLmFwcGVuZENoaWxkKGluZ3JlZGllbnQxKTtcbiAgICAvLyBlbmQgb2YgMXN0IGZvb2QgY29udGFpbmVyXG5cbiAgICAvLyAybmQgZm9vZCBjb250YWluZXJcbiAgICBjb25zdCBmb29kQ29udGFpbmVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb2RDb250YWluZXIyLmNsYXNzTGlzdC5hZGQoJ2Zvb2RDb250YWluZXInKTtcblxuICAgIGNvbnN0IHAyID0gbmV3IEltYWdlKDEzMCk7XG4gICAgcDIuc3JjID0gcGl6emEyO1xuICAgIHAyLmNsYXNzTGlzdC5hZGQoJ3BpenphSW1hZ2VzJyk7XG5cbiAgICBjb25zdCBwaXp6YVR5cGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGl6emFUeXBlMi5pbm5lckhUTUwgPSBgR2FtYmVyaSA8ZW0gc3R5bGUgPSAnZm9udC13ZWlnaHQ6IG5vcm1hbDsgZm9udC1zaXplOiAyMHB4Oyc+JDExPC9lbT5gO1xuICAgIHBpenphVHlwZTIuY2xhc3NMaXN0LmFkZCgncGl6emFUeXBlJyk7XG5cbiAgICBjb25zdCBpbmdyZWRpZW50MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpbmdyZWRpZW50Mi5jbGFzc0xpc3QuYWRkKCdpbmdyZWRpZW50cycpO1xuICAgIGluZ3JlZGllbnQyLnRleHRDb250ZW50ID0gJ1RvbWF0byBzYXVjZSwgTW96YXJlbGxhLCBTaHJpbXAsIEZldGEgY2hlZXNlLCBPbGl2ZXMsIEJhc2lsJztcblxuICAgIGZvb2RDb250YWluZXIyLmFwcGVuZENoaWxkKHAyKTtcbiAgICBmb29kQ29udGFpbmVyMi5hcHBlbmRDaGlsZChwaXp6YVR5cGUyKTtcbiAgICBmb29kQ29udGFpbmVyMi5hcHBlbmRDaGlsZChpbmdyZWRpZW50Mik7XG4gICAgLy8gZW5kIG9mIDJuZCBmb29kIGNvbnRhaW5lclxuXG4gICAgLy8gM3JkIGZvb2QgY29udGFpbmVyXG4gICAgY29uc3QgZm9vZENvbnRhaW5lcjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb29kQ29udGFpbmVyMy5jbGFzc0xpc3QuYWRkKCdmb29kQ29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBwMyA9IG5ldyBJbWFnZSgxMzApO1xuICAgIHAzLnNyYyA9IHBpenphMztcbiAgICBwMy5jbGFzc0xpc3QuYWRkKCdwaXp6YUltYWdlcycpO1xuXG4gICAgY29uc3QgcGl6emFUeXBlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBpenphVHlwZTMuaW5uZXJIVE1MID0gYFBlcGUgPGVtIHN0eWxlID0gJ2ZvbnQtd2VpZ2h0OiBub3JtYWw7IGZvbnQtc2l6ZTogMjBweDsnPiQxMTwvZW0+YDtcbiAgICBwaXp6YVR5cGUzLmNsYXNzTGlzdC5hZGQoJ3BpenphVHlwZScpO1xuXG4gICAgY29uc3QgaW5ncmVkaWVudDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaW5ncmVkaWVudDMuY2xhc3NMaXN0LmFkZCgnaW5ncmVkaWVudHMnKTtcbiAgICBpbmdyZWRpZW50My50ZXh0Q29udGVudCA9ICdUb21hdG8gc2F1Y2UsIE1vemFyZWxsYSwgQ2hpbGxpIGZsYWtlcywgT2xpdmVzLCBCYXNpbCc7XG5cbiAgICBmb29kQ29udGFpbmVyMy5hcHBlbmRDaGlsZChwMyk7XG4gICAgZm9vZENvbnRhaW5lcjMuYXBwZW5kQ2hpbGQocGl6emFUeXBlMyk7XG4gICAgZm9vZENvbnRhaW5lcjMuYXBwZW5kQ2hpbGQoaW5ncmVkaWVudDMpO1xuICAgIC8vIGVuZCBvZiAzcmQgZm9vZCBjb250YWluZXJcblxuICAgIC8vIDR0aCBmb29kIGNvbnRhaW5lclxuICAgIGNvbnN0IGZvb2RDb250YWluZXI0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vZENvbnRhaW5lcjQuY2xhc3NMaXN0LmFkZCgnZm9vZENvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgcDQgPSBuZXcgSW1hZ2UoMTMwKTtcbiAgICBwNC5zcmMgPSBwaXp6YTQ7XG4gICAgcDQuY2xhc3NMaXN0LmFkZCgncGl6emFJbWFnZXMnKTtcblxuICAgIGNvbnN0IHBpenphVHlwZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwaXp6YVR5cGU0LmlubmVySFRNTCA9IGBIYXdhaWlhbiA8ZW0gc3R5bGUgPSAnZm9udC13ZWlnaHQ6IG5vcm1hbDsgZm9udC1zaXplOiAyMHB4Oyc+JDEzPC9lbT5gO1xuICAgIHBpenphVHlwZTQuY2xhc3NMaXN0LmFkZCgncGl6emFUeXBlJyk7XG5cbiAgICBjb25zdCBpbmdyZWRpZW50NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpbmdyZWRpZW50NC5jbGFzc0xpc3QuYWRkKCdpbmdyZWRpZW50cycpO1xuICAgIGluZ3JlZGllbnQ0LnRleHRDb250ZW50ID0gJ1RvbWF0byBzYXVjZSwgQmFjb24sIFBpbmFwcGxlLCBPbGl2ZXMsIEJhc2lsJztcblxuICAgIGZvb2RDb250YWluZXI0LmFwcGVuZENoaWxkKHA0KTtcbiAgICBmb29kQ29udGFpbmVyNC5hcHBlbmRDaGlsZChwaXp6YVR5cGU0KTtcbiAgICBmb29kQ29udGFpbmVyNC5hcHBlbmRDaGlsZChpbmdyZWRpZW50NCk7XG4gICAgLy8gZW5kIG9mIDR0aCBmb29kIGNvbnRhaW5lclxuXG4gICAgLy8gNXRoIGZvb2QgY29udGFpbmVyXG4gICAgY29uc3QgZm9vZENvbnRhaW5lcjUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb29kQ29udGFpbmVyNS5jbGFzc0xpc3QuYWRkKCdmb29kQ29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBwNSA9IG5ldyBJbWFnZSgxMzApO1xuICAgIHA1LnNyYyA9IHBpenphNTtcbiAgICBwNS5jbGFzc0xpc3QuYWRkKCdwaXp6YUltYWdlcycpO1xuXG4gICAgY29uc3QgcGl6emFUeXBlNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBpenphVHlwZTUuaW5uZXJIVE1MID0gYENvbG9yYXRvIDxlbSBzdHlsZSA9ICdmb250LXdlaWdodDogbm9ybWFsOyBmb250LXNpemU6IDIwcHg7Jz4kMTA8L2VtPmA7XG4gICAgcGl6emFUeXBlNS5jbGFzc0xpc3QuYWRkKCdwaXp6YVR5cGUnKTtcblxuICAgIGNvbnN0IGluZ3JlZGllbnQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGluZ3JlZGllbnQ1LmNsYXNzTGlzdC5hZGQoJ2luZ3JlZGllbnRzJyk7XG4gICAgaW5ncmVkaWVudDUudGV4dENvbnRlbnQgPSAnVG9tYXRvIHNhdWNlLCBNb3phcmVsbGEsIE9uaW9uLCBQZXBwZXIsIENoYW1waWdub25zLCBCYXNpbCc7XG5cbiAgICBmb29kQ29udGFpbmVyNS5hcHBlbmRDaGlsZChwNSk7XG4gICAgZm9vZENvbnRhaW5lcjUuYXBwZW5kQ2hpbGQocGl6emFUeXBlNSk7XG4gICAgZm9vZENvbnRhaW5lcjUuYXBwZW5kQ2hpbGQoaW5ncmVkaWVudDUpO1xuICAgIC8vIGVuZCBvZiA1dGggZm9vZCBjb250YWluZXJcblxuICAgIC8vIDZ0aCBmb29kIGNvbnRhaW5lclxuICAgIGNvbnN0IGZvb2RDb250YWluZXI2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vZENvbnRhaW5lcjYuY2xhc3NMaXN0LmFkZCgnZm9vZENvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgcDYgPSBuZXcgSW1hZ2UoMTMwKTtcbiAgICBwNi5zcmMgPSBwaXp6YTY7XG4gICAgcDYuY2xhc3NMaXN0LmFkZCgncGl6emFJbWFnZXMnKTtcblxuICAgIGNvbnN0IHBpenphVHlwZTYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwaXp6YVR5cGU2LmlubmVySFRNTCA9IGBQb21vZG9ybyA8ZW0gc3R5bGUgPSAnZm9udC13ZWlnaHQ6IG5vcm1hbDsgZm9udC1zaXplOiAyMHB4Oyc+JDE2PC9lbT5gO1xuICAgIHBpenphVHlwZTYuY2xhc3NMaXN0LmFkZCgncGl6emFUeXBlJyk7XG5cbiAgICBjb25zdCBpbmdyZWRpZW50NiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpbmdyZWRpZW50Ni5jbGFzc0xpc3QuYWRkKCdpbmdyZWRpZW50cycpO1xuICAgIGluZ3JlZGllbnQ2LnRleHRDb250ZW50ID0gJ1RvbWF0byBzYXVjZSwgTW96YXJlbGxhLCBUb21hdG8sIE9uaW9uLCBGZXRhIENoZWVzZSwgQ2hpbGxpIHBlcHBlcnMnO1xuXG4gICAgZm9vZENvbnRhaW5lcjYuYXBwZW5kQ2hpbGQocDYpO1xuICAgIGZvb2RDb250YWluZXI2LmFwcGVuZENoaWxkKHBpenphVHlwZTYpO1xuICAgIGZvb2RDb250YWluZXI2LmFwcGVuZENoaWxkKGluZ3JlZGllbnQ2KTtcbiAgICAvLyBlbmQgb2YgNnRoIGZvb2QgY29udGFpbmVyXG5cbiAgICAvLyA3dGggZm9vZCBjb250YWluZXJcbiAgICBjb25zdCBmb29kQ29udGFpbmVyNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb2RDb250YWluZXI3LmNsYXNzTGlzdC5hZGQoJ2Zvb2RDb250YWluZXInKTtcblxuICAgIGNvbnN0IHA3ID0gbmV3IEltYWdlKDEzMCk7XG4gICAgcDcuc3JjID0gcGl6emE3O1xuICAgIHA3LmNsYXNzTGlzdC5hZGQoJ3BpenphSW1hZ2VzJyk7XG5cbiAgICBjb25zdCBwaXp6YVR5cGU3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGl6emFUeXBlNy5pbm5lckhUTUwgPSBgQ3JlbWEgPGVtIHN0eWxlID0gJ2ZvbnQtd2VpZ2h0OiBub3JtYWw7IGZvbnQtc2l6ZTogMjBweDsnPiQxNTwvZW0+YDtcbiAgICBwaXp6YVR5cGU3LmNsYXNzTGlzdC5hZGQoJ3BpenphVHlwZScpO1xuXG4gICAgY29uc3QgaW5ncmVkaWVudDcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaW5ncmVkaWVudDcuY2xhc3NMaXN0LmFkZCgnaW5ncmVkaWVudHMnKTtcbiAgICBpbmdyZWRpZW50Ny50ZXh0Q29udGVudCA9ICdXaGl0ZSBzYXVjZSwgTW96YXJlbGxhLCBTaHJpbXAsIFNhbG1vbiwgUGluZWFwcGxlLCBPbGl2ZXMsIEJhc2lsJztcblxuICAgIGZvb2RDb250YWluZXI3LmFwcGVuZENoaWxkKHA3KTtcbiAgICBmb29kQ29udGFpbmVyNy5hcHBlbmRDaGlsZChwaXp6YVR5cGU3KTtcbiAgICBmb29kQ29udGFpbmVyNy5hcHBlbmRDaGlsZChpbmdyZWRpZW50Nyk7XG4gICAgLy8gZW5kIG9mIDd0aCBmb29kIGNvbnRhaW5lclxuXG4gICAgLy8gOHRoIGZvb2QgY29udGFpbmVyXG4gICAgY29uc3QgZm9vZENvbnRhaW5lcjggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb29kQ29udGFpbmVyOC5jbGFzc0xpc3QuYWRkKCdmb29kQ29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBwOCA9IG5ldyBJbWFnZSgxMzApO1xuICAgIHA4LnNyYyA9IHBpenphODtcbiAgICBwOC5jbGFzc0xpc3QuYWRkKCdwaXp6YUltYWdlcycpO1xuXG4gICAgY29uc3QgcGl6emFUeXBlOCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBpenphVHlwZTguaW5uZXJIVE1MID0gYENhcm5lIDxlbSBzdHlsZSA9ICdmb250LXdlaWdodDogbm9ybWFsOyBmb250LXNpemU6IDIwcHg7Jz4kMTQ8L2VtPmA7XG4gICAgcGl6emFUeXBlOC5jbGFzc0xpc3QuYWRkKCdwaXp6YVR5cGUnKTtcblxuICAgIGNvbnN0IGluZ3JlZGllbnQ4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGluZ3JlZGllbnQ4LmNsYXNzTGlzdC5hZGQoJ2luZ3JlZGllbnRzJyk7XG4gICAgaW5ncmVkaWVudDgudGV4dENvbnRlbnQgPSAnVG9tYXRvIHNhdWNlLCBNb3phcmVsbGEsIEhvbWFkZSBzYXVzYWdlLCBCYWNvbiwgR2FybGljLCBQZXBwZXIsIENoaWxsaSc7XG5cbiAgICBmb29kQ29udGFpbmVyOC5hcHBlbmRDaGlsZChwOCk7XG4gICAgZm9vZENvbnRhaW5lcjguYXBwZW5kQ2hpbGQocGl6emFUeXBlOCk7XG4gICAgZm9vZENvbnRhaW5lcjguYXBwZW5kQ2hpbGQoaW5ncmVkaWVudDgpO1xuICAgIC8vIGVuZCBvZiA4dGggZm9vZCBjb250YWluZXJcblxuICAgIG5hdkNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vZENvbnRhaW5lcjEpO1xuICAgIG5hdkNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vZENvbnRhaW5lcjIpO1xuICAgIG5hdkNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vZENvbnRhaW5lcjMpO1xuICAgIG5hdkNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vZENvbnRhaW5lcjQpO1xuICAgIG5hdkNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vZENvbnRhaW5lcjUpO1xuICAgIG5hdkNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vZENvbnRhaW5lcjYpO1xuICAgIG5hdkNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vZENvbnRhaW5lcjcpO1xuICAgIG5hdkNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vZENvbnRhaW5lcjgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5TWVudTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJcbmltcG9ydCBMb2dvIGZyb20gJy4vaW1hZ2VzL2dpdEh1YkxvZ28ucG5nJztcbmltcG9ydCBwZXJzb25QaWN0dXJlIGZyb20gJy4vaW1hZ2VzL3BlcnNvblBpYy5qcGVnJztcbmltcG9ydCBkaXNwbGF5TWVudSBmcm9tICcuL21lbnUnO1xuXG5cbmZ1bmN0aW9uIGRpc3BsYXlIb21lKG5hdkNvbnRlbnQpIHtcbiAgICBjb25zdCBmaXJzdE1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmaXJzdE1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnbWVzc2FnZScpO1xuICAgIGZpcnN0TWVzc2FnZS5pZCA9ICdmaXJzdE1lc3NhZ2UnO1xuICAgIGZpcnN0TWVzc2FnZS50ZXh0Q29udGVudCA9ICdUaGUgYmVzdCBwaXp6YSBpbiBOZXcgWW9yayBDaXR5IE1hZGUgd2l0aCBwYXNzaW9uIHNpbmNlIDE5MDgnO1xuXG4gICAgY29uc3QgcGVyc29uUGljID0gbmV3IEltYWdlKDM1MCk7XG4gICAgcGVyc29uUGljLnNyYyA9IHBlcnNvblBpY3R1cmU7XG4gICAgcGVyc29uUGljLmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2UnKTtcbiAgICBwZXJzb25QaWMuaWQgPSAncGVyc29uUGljJztcblxuICAgIGNvbnN0IHNlY29uZE1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZWNvbmRNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2UnKTtcbiAgICBzZWNvbmRNZXNzYWdlLnRleHRDb250ZW50ID0gJ1Zpc2l0IHVzIG9yIG9yZGVyIG9ubGluZSEnO1xuXG4gICAgbmF2Q29udGVudC5hcHBlbmRDaGlsZChmaXJzdE1lc3NhZ2UpO1xuICAgIG5hdkNvbnRlbnQuYXBwZW5kQ2hpbGQocGVyc29uUGljKVxuICAgIG5hdkNvbnRlbnQuYXBwZW5kQ2hpbGQoc2Vjb25kTWVzc2FnZSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUZW1wbGF0ZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBcbiAgICBjb25zdCBuYXZQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdlBhbmVsLmlkID0gJ25hdlBhbmVsJztcblxuICAgIGNvbnN0IGJ1c2luZXNzTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1c2luZXNzTmFtZS5pZCA9ICdidXNpbmVzc05hbWUnO1xuICAgIGJ1c2luZXNzTmFtZS50ZXh0Q29udGVudCA9ICdNb3p6YWZpYXRvJztcblxuICAgIGNvbnN0IGJ0dG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidHRuQ29udGFpbmVyLmlkID0gJ2J0dG5Db250YWluZXInO1xuICAgIFxuICAgIGNvbnN0IGJ0dG4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnR0bjEudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgYnR0bjEuY2xhc3NMaXN0LmFkZCgnYnR0bnMnLCAnc2VsZWN0ZWQnKTtcblxuICAgIGNvbnN0IGJ0dG4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnR0bjIudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gICAgYnR0bjIuY2xhc3NMaXN0LmFkZCgnYnR0bnMnKTtcblxuICAgIGNvbnN0IGJ0dG4zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnR0bjMudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG4gICAgYnR0bjMuY2xhc3NMaXN0LmFkZCgnYnR0bnMnKTtcblxuICAgIGJ0dG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnR0bjEpO1xuICAgIGJ0dG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnR0bjIpO1xuICAgIGJ0dG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnR0bjMpO1xuXG4gICAgbmF2UGFuZWwuYXBwZW5kQ2hpbGQoYnVzaW5lc3NOYW1lKTtcbiAgICBuYXZQYW5lbC5hcHBlbmRDaGlsZChidHRuQ29udGFpbmVyKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2UGFuZWwpO1xuXG4gICAgY29uc3QgbmF2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdkNvbnRlbnQuaWQgPSAnbmF2Q29udGVudCc7XG5cbiAgICAvL3RhYiBzcGVjaWZpYyBjb2RlIGdvZXMgaGVyZVxuICAgIGRpc3BsYXlNZW51KG5hdkNvbnRlbnQpO1xuICAgIC8vIHRhYiBzcGVjaWZpYyBjb2RlIGVuZHMgaGVyZVxuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuYXZDb250ZW50KTtcblxuICAgIGNvbnN0IGdpdEh1YkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBnaXRIdWJJbmZvLmlkID0gJ2dpdEh1YkluZm8nO1xuICAgIGdpdEh1YkluZm8uaW5uZXJIVE1MID0gYENvcHlyaWdodCDCqSAyMDIxIGNow6lqb2huIDxhIGhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL2NoZWpvaG4nIHRhcmdldCA9ICdfYmxhbmsnPjxpbWcgd2lkdGggPSAnMTYgaWQgPSAnZ2l0SHViTG9nbycgc3JjID0gJHtMb2dvfT48L2E+YDtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ2l0SHViSW5mbyk7XG4gIFxuICAgIHJldHVybiBjb250ZW50O1xufVxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpc3BsYXlUZW1wbGF0ZSgpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==