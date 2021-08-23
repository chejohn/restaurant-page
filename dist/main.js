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
    firstMessage.textContent = 'The best pizza in New York City';

    const secondMessage = document.createElement('div');
    secondMessage.classList.add('message');
    secondMessage.textContent = 'Made with passion since 1908';

    const personPic = new Image(350);
    personPic.src = _images_personPic_jpeg__WEBPACK_IMPORTED_MODULE_1__;
    personPic.classList.add('message');
    personPic.id = 'personPic';

    const thirdMessage = document.createElement('div');
    thirdMessage.classList.add('message');
    thirdMessage.textContent = 'Visit us or order online!';

    navContent.appendChild(firstMessage);
    navContent.appendChild(secondMessage);
    navContent.appendChild(personPic)
    navContent.appendChild(thirdMessage);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDhDQUFXO0FBQ2Y7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHlKQUF5SixtREFBSSxDQUFDOztBQUU5SjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmltcG9ydCBwaXp6YTEgZnJvbSAnLi9pbWFnZXMvcGl6emExLnBuZyc7XG5pbXBvcnQgcGl6emEyIGZyb20gJy4vaW1hZ2VzL3BpenphMi5wbmcnO1xuaW1wb3J0IHBpenphMyBmcm9tICcuL2ltYWdlcy9waXp6YTMucG5nJztcbmltcG9ydCBwaXp6YTQgZnJvbSAnLi9pbWFnZXMvcGl6emE0LnBuZyc7XG5pbXBvcnQgcGl6emE1IGZyb20gJy4vaW1hZ2VzL3BpenphNS5wbmcnO1xuaW1wb3J0IHBpenphNiBmcm9tICcuL2ltYWdlcy9waXp6YTYucG5nJztcbmltcG9ydCBwaXp6YTcgZnJvbSAnLi9pbWFnZXMvcGl6emE3LnBuZyc7XG5pbXBvcnQgcGl6emE4IGZyb20gJy4vaW1hZ2VzL3BpenphOC5wbmcnO1xuXG5cbmZ1bmN0aW9uIGRpc3BsYXlNZW51KG5hdkNvbnRlbnQpIHtcbiAgICAvLyAxc3QgZm9vZCBjb250YWluZXJcbiAgICBjb25zdCBmb29kQ29udGFpbmVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb2RDb250YWluZXIxLmNsYXNzTGlzdC5hZGQoJ2Zvb2RDb250YWluZXInKTtcbiAgICBcbiAgICBjb25zdCBwMSA9IG5ldyBJbWFnZSgxMzApO1xuICAgIHAxLnNyYyA9IHBpenphMTtcbiAgICBwMS5jbGFzc0xpc3QuYWRkKCdwaXp6YUltYWdlcycpO1xuXG4gICAgY29uc3QgcGl6emFUeXBlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBpenphVHlwZTEuaW5uZXJIVE1MID0gYFNhY2lsaWEgPGVtIHN0eWxlID0gJ2ZvbnQtd2VpZ2h0OiBub3JtYWw7IGZvbnQtc2l6ZTogMjBweDsnPiQxMjwvZW0+YDtcbiAgICBwaXp6YVR5cGUxLmNsYXNzTGlzdC5hZGQoJ3BpenphVHlwZScpO1xuXG4gICAgY29uc3QgaW5ncmVkaWVudDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaW5ncmVkaWVudDEuY2xhc3NMaXN0LmFkZCgnaW5ncmVkaWVudHMnKTtcbiAgICBpbmdyZWRpZW50MS50ZXh0Q29udGVudCA9ICdUb21hdG8gc2F1Y2UsIE1vemFyZWxsYSwgVG9tYXRvLCBIb21lbWFkZSBzYXVzYWdlLCBHYXJsaWMsIEJhc2lsJztcblxuICAgIGZvb2RDb250YWluZXIxLmFwcGVuZChwMSk7XG4gICAgZm9vZENvbnRhaW5lcjEuYXBwZW5kQ2hpbGQocGl6emFUeXBlMSk7XG4gICAgZm9vZENvbnRhaW5lcjEuYXBwZW5kQ2hpbGQoaW5ncmVkaWVudDEpO1xuICAgIC8vIGVuZCBvZiAxc3QgZm9vZCBjb250YWluZXJcblxuICAgIC8vIDJuZCBmb29kIGNvbnRhaW5lclxuICAgIGNvbnN0IGZvb2RDb250YWluZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vZENvbnRhaW5lcjIuY2xhc3NMaXN0LmFkZCgnZm9vZENvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgcDIgPSBuZXcgSW1hZ2UoMTMwKTtcbiAgICBwMi5zcmMgPSBwaXp6YTI7XG4gICAgcDIuY2xhc3NMaXN0LmFkZCgncGl6emFJbWFnZXMnKTtcblxuICAgIGNvbnN0IHBpenphVHlwZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwaXp6YVR5cGUyLmlubmVySFRNTCA9IGBHYW1iZXJpIDxlbSBzdHlsZSA9ICdmb250LXdlaWdodDogbm9ybWFsOyBmb250LXNpemU6IDIwcHg7Jz4kMTE8L2VtPmA7XG4gICAgcGl6emFUeXBlMi5jbGFzc0xpc3QuYWRkKCdwaXp6YVR5cGUnKTtcblxuICAgIGNvbnN0IGluZ3JlZGllbnQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGluZ3JlZGllbnQyLmNsYXNzTGlzdC5hZGQoJ2luZ3JlZGllbnRzJyk7XG4gICAgaW5ncmVkaWVudDIudGV4dENvbnRlbnQgPSAnVG9tYXRvIHNhdWNlLCBNb3phcmVsbGEsIFNocmltcCwgRmV0YSBjaGVlc2UsIE9saXZlcywgQmFzaWwnO1xuXG4gICAgZm9vZENvbnRhaW5lcjIuYXBwZW5kQ2hpbGQocDIpO1xuICAgIGZvb2RDb250YWluZXIyLmFwcGVuZENoaWxkKHBpenphVHlwZTIpO1xuICAgIGZvb2RDb250YWluZXIyLmFwcGVuZENoaWxkKGluZ3JlZGllbnQyKTtcbiAgICAvLyBlbmQgb2YgMm5kIGZvb2QgY29udGFpbmVyXG5cbiAgICAvLyAzcmQgZm9vZCBjb250YWluZXJcbiAgICBjb25zdCBmb29kQ29udGFpbmVyMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb2RDb250YWluZXIzLmNsYXNzTGlzdC5hZGQoJ2Zvb2RDb250YWluZXInKTtcblxuICAgIGNvbnN0IHAzID0gbmV3IEltYWdlKDEzMCk7XG4gICAgcDMuc3JjID0gcGl6emEzO1xuICAgIHAzLmNsYXNzTGlzdC5hZGQoJ3BpenphSW1hZ2VzJyk7XG5cbiAgICBjb25zdCBwaXp6YVR5cGUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGl6emFUeXBlMy5pbm5lckhUTUwgPSBgUGVwZSA8ZW0gc3R5bGUgPSAnZm9udC13ZWlnaHQ6IG5vcm1hbDsgZm9udC1zaXplOiAyMHB4Oyc+JDExPC9lbT5gO1xuICAgIHBpenphVHlwZTMuY2xhc3NMaXN0LmFkZCgncGl6emFUeXBlJyk7XG5cbiAgICBjb25zdCBpbmdyZWRpZW50MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpbmdyZWRpZW50My5jbGFzc0xpc3QuYWRkKCdpbmdyZWRpZW50cycpO1xuICAgIGluZ3JlZGllbnQzLnRleHRDb250ZW50ID0gJ1RvbWF0byBzYXVjZSwgTW96YXJlbGxhLCBDaGlsbGkgZmxha2VzLCBPbGl2ZXMsIEJhc2lsJztcblxuICAgIGZvb2RDb250YWluZXIzLmFwcGVuZENoaWxkKHAzKTtcbiAgICBmb29kQ29udGFpbmVyMy5hcHBlbmRDaGlsZChwaXp6YVR5cGUzKTtcbiAgICBmb29kQ29udGFpbmVyMy5hcHBlbmRDaGlsZChpbmdyZWRpZW50Myk7XG4gICAgLy8gZW5kIG9mIDNyZCBmb29kIGNvbnRhaW5lclxuXG4gICAgLy8gNHRoIGZvb2QgY29udGFpbmVyXG4gICAgY29uc3QgZm9vZENvbnRhaW5lcjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb29kQ29udGFpbmVyNC5jbGFzc0xpc3QuYWRkKCdmb29kQ29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBwNCA9IG5ldyBJbWFnZSgxMzApO1xuICAgIHA0LnNyYyA9IHBpenphNDtcbiAgICBwNC5jbGFzc0xpc3QuYWRkKCdwaXp6YUltYWdlcycpO1xuXG4gICAgY29uc3QgcGl6emFUeXBlNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBpenphVHlwZTQuaW5uZXJIVE1MID0gYEhhd2FpaWFuIDxlbSBzdHlsZSA9ICdmb250LXdlaWdodDogbm9ybWFsOyBmb250LXNpemU6IDIwcHg7Jz4kMTM8L2VtPmA7XG4gICAgcGl6emFUeXBlNC5jbGFzc0xpc3QuYWRkKCdwaXp6YVR5cGUnKTtcblxuICAgIGNvbnN0IGluZ3JlZGllbnQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGluZ3JlZGllbnQ0LmNsYXNzTGlzdC5hZGQoJ2luZ3JlZGllbnRzJyk7XG4gICAgaW5ncmVkaWVudDQudGV4dENvbnRlbnQgPSAnVG9tYXRvIHNhdWNlLCBCYWNvbiwgUGluYXBwbGUsIE9saXZlcywgQmFzaWwnO1xuXG4gICAgZm9vZENvbnRhaW5lcjQuYXBwZW5kQ2hpbGQocDQpO1xuICAgIGZvb2RDb250YWluZXI0LmFwcGVuZENoaWxkKHBpenphVHlwZTQpO1xuICAgIGZvb2RDb250YWluZXI0LmFwcGVuZENoaWxkKGluZ3JlZGllbnQ0KTtcbiAgICAvLyBlbmQgb2YgNHRoIGZvb2QgY29udGFpbmVyXG5cbiAgICAvLyA1dGggZm9vZCBjb250YWluZXJcbiAgICBjb25zdCBmb29kQ29udGFpbmVyNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb2RDb250YWluZXI1LmNsYXNzTGlzdC5hZGQoJ2Zvb2RDb250YWluZXInKTtcblxuICAgIGNvbnN0IHA1ID0gbmV3IEltYWdlKDEzMCk7XG4gICAgcDUuc3JjID0gcGl6emE1O1xuICAgIHA1LmNsYXNzTGlzdC5hZGQoJ3BpenphSW1hZ2VzJyk7XG5cbiAgICBjb25zdCBwaXp6YVR5cGU1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGl6emFUeXBlNS5pbm5lckhUTUwgPSBgQ29sb3JhdG8gPGVtIHN0eWxlID0gJ2ZvbnQtd2VpZ2h0OiBub3JtYWw7IGZvbnQtc2l6ZTogMjBweDsnPiQxMDwvZW0+YDtcbiAgICBwaXp6YVR5cGU1LmNsYXNzTGlzdC5hZGQoJ3BpenphVHlwZScpO1xuXG4gICAgY29uc3QgaW5ncmVkaWVudDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaW5ncmVkaWVudDUuY2xhc3NMaXN0LmFkZCgnaW5ncmVkaWVudHMnKTtcbiAgICBpbmdyZWRpZW50NS50ZXh0Q29udGVudCA9ICdUb21hdG8gc2F1Y2UsIE1vemFyZWxsYSwgT25pb24sIFBlcHBlciwgQ2hhbXBpZ25vbnMsIEJhc2lsJztcblxuICAgIGZvb2RDb250YWluZXI1LmFwcGVuZENoaWxkKHA1KTtcbiAgICBmb29kQ29udGFpbmVyNS5hcHBlbmRDaGlsZChwaXp6YVR5cGU1KTtcbiAgICBmb29kQ29udGFpbmVyNS5hcHBlbmRDaGlsZChpbmdyZWRpZW50NSk7XG4gICAgLy8gZW5kIG9mIDV0aCBmb29kIGNvbnRhaW5lclxuXG4gICAgLy8gNnRoIGZvb2QgY29udGFpbmVyXG4gICAgY29uc3QgZm9vZENvbnRhaW5lcjYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb29kQ29udGFpbmVyNi5jbGFzc0xpc3QuYWRkKCdmb29kQ29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBwNiA9IG5ldyBJbWFnZSgxMzApO1xuICAgIHA2LnNyYyA9IHBpenphNjtcbiAgICBwNi5jbGFzc0xpc3QuYWRkKCdwaXp6YUltYWdlcycpO1xuXG4gICAgY29uc3QgcGl6emFUeXBlNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBpenphVHlwZTYuaW5uZXJIVE1MID0gYFBvbW9kb3JvIDxlbSBzdHlsZSA9ICdmb250LXdlaWdodDogbm9ybWFsOyBmb250LXNpemU6IDIwcHg7Jz4kMTY8L2VtPmA7XG4gICAgcGl6emFUeXBlNi5jbGFzc0xpc3QuYWRkKCdwaXp6YVR5cGUnKTtcblxuICAgIGNvbnN0IGluZ3JlZGllbnQ2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGluZ3JlZGllbnQ2LmNsYXNzTGlzdC5hZGQoJ2luZ3JlZGllbnRzJyk7XG4gICAgaW5ncmVkaWVudDYudGV4dENvbnRlbnQgPSAnVG9tYXRvIHNhdWNlLCBNb3phcmVsbGEsIFRvbWF0bywgT25pb24sIEZldGEgQ2hlZXNlLCBDaGlsbGkgcGVwcGVycyc7XG5cbiAgICBmb29kQ29udGFpbmVyNi5hcHBlbmRDaGlsZChwNik7XG4gICAgZm9vZENvbnRhaW5lcjYuYXBwZW5kQ2hpbGQocGl6emFUeXBlNik7XG4gICAgZm9vZENvbnRhaW5lcjYuYXBwZW5kQ2hpbGQoaW5ncmVkaWVudDYpO1xuICAgIC8vIGVuZCBvZiA2dGggZm9vZCBjb250YWluZXJcblxuICAgIC8vIDd0aCBmb29kIGNvbnRhaW5lclxuICAgIGNvbnN0IGZvb2RDb250YWluZXI3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vZENvbnRhaW5lcjcuY2xhc3NMaXN0LmFkZCgnZm9vZENvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgcDcgPSBuZXcgSW1hZ2UoMTMwKTtcbiAgICBwNy5zcmMgPSBwaXp6YTc7XG4gICAgcDcuY2xhc3NMaXN0LmFkZCgncGl6emFJbWFnZXMnKTtcblxuICAgIGNvbnN0IHBpenphVHlwZTcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwaXp6YVR5cGU3LmlubmVySFRNTCA9IGBDcmVtYSA8ZW0gc3R5bGUgPSAnZm9udC13ZWlnaHQ6IG5vcm1hbDsgZm9udC1zaXplOiAyMHB4Oyc+JDE1PC9lbT5gO1xuICAgIHBpenphVHlwZTcuY2xhc3NMaXN0LmFkZCgncGl6emFUeXBlJyk7XG5cbiAgICBjb25zdCBpbmdyZWRpZW50NyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpbmdyZWRpZW50Ny5jbGFzc0xpc3QuYWRkKCdpbmdyZWRpZW50cycpO1xuICAgIGluZ3JlZGllbnQ3LnRleHRDb250ZW50ID0gJ1doaXRlIHNhdWNlLCBNb3phcmVsbGEsIFNocmltcCwgU2FsbW9uLCBQaW5lYXBwbGUsIE9saXZlcywgQmFzaWwnO1xuXG4gICAgZm9vZENvbnRhaW5lcjcuYXBwZW5kQ2hpbGQocDcpO1xuICAgIGZvb2RDb250YWluZXI3LmFwcGVuZENoaWxkKHBpenphVHlwZTcpO1xuICAgIGZvb2RDb250YWluZXI3LmFwcGVuZENoaWxkKGluZ3JlZGllbnQ3KTtcbiAgICAvLyBlbmQgb2YgN3RoIGZvb2QgY29udGFpbmVyXG5cbiAgICAvLyA4dGggZm9vZCBjb250YWluZXJcbiAgICBjb25zdCBmb29kQ29udGFpbmVyOCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb2RDb250YWluZXI4LmNsYXNzTGlzdC5hZGQoJ2Zvb2RDb250YWluZXInKTtcblxuICAgIGNvbnN0IHA4ID0gbmV3IEltYWdlKDEzMCk7XG4gICAgcDguc3JjID0gcGl6emE4O1xuICAgIHA4LmNsYXNzTGlzdC5hZGQoJ3BpenphSW1hZ2VzJyk7XG5cbiAgICBjb25zdCBwaXp6YVR5cGU4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGl6emFUeXBlOC5pbm5lckhUTUwgPSBgQ2FybmUgPGVtIHN0eWxlID0gJ2ZvbnQtd2VpZ2h0OiBub3JtYWw7IGZvbnQtc2l6ZTogMjBweDsnPiQxNDwvZW0+YDtcbiAgICBwaXp6YVR5cGU4LmNsYXNzTGlzdC5hZGQoJ3BpenphVHlwZScpO1xuXG4gICAgY29uc3QgaW5ncmVkaWVudDggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaW5ncmVkaWVudDguY2xhc3NMaXN0LmFkZCgnaW5ncmVkaWVudHMnKTtcbiAgICBpbmdyZWRpZW50OC50ZXh0Q29udGVudCA9ICdUb21hdG8gc2F1Y2UsIE1vemFyZWxsYSwgSG9tYWRlIHNhdXNhZ2UsIEJhY29uLCBHYXJsaWMsIFBlcHBlciwgQ2hpbGxpJztcblxuICAgIGZvb2RDb250YWluZXI4LmFwcGVuZENoaWxkKHA4KTtcbiAgICBmb29kQ29udGFpbmVyOC5hcHBlbmRDaGlsZChwaXp6YVR5cGU4KTtcbiAgICBmb29kQ29udGFpbmVyOC5hcHBlbmRDaGlsZChpbmdyZWRpZW50OCk7XG4gICAgLy8gZW5kIG9mIDh0aCBmb29kIGNvbnRhaW5lclxuXG4gICAgbmF2Q29udGVudC5hcHBlbmRDaGlsZChmb29kQ29udGFpbmVyMSk7XG4gICAgbmF2Q29udGVudC5hcHBlbmRDaGlsZChmb29kQ29udGFpbmVyMik7XG4gICAgbmF2Q29udGVudC5hcHBlbmRDaGlsZChmb29kQ29udGFpbmVyMyk7XG4gICAgbmF2Q29udGVudC5hcHBlbmRDaGlsZChmb29kQ29udGFpbmVyNCk7XG4gICAgbmF2Q29udGVudC5hcHBlbmRDaGlsZChmb29kQ29udGFpbmVyNSk7XG4gICAgbmF2Q29udGVudC5hcHBlbmRDaGlsZChmb29kQ29udGFpbmVyNik7XG4gICAgbmF2Q29udGVudC5hcHBlbmRDaGlsZChmb29kQ29udGFpbmVyNyk7XG4gICAgbmF2Q29udGVudC5hcHBlbmRDaGlsZChmb29kQ29udGFpbmVyOCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlNZW51OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIlxuaW1wb3J0IExvZ28gZnJvbSAnLi9pbWFnZXMvZ2l0SHViTG9nby5wbmcnO1xuaW1wb3J0IHBlcnNvblBpY3R1cmUgZnJvbSAnLi9pbWFnZXMvcGVyc29uUGljLmpwZWcnO1xuaW1wb3J0IGRpc3BsYXlNZW51IGZyb20gJy4vbWVudSc7XG5cblxuZnVuY3Rpb24gZGlzcGxheUhvbWUobmF2Q29udGVudCkge1xuICAgIGNvbnN0IGZpcnN0TWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZpcnN0TWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdtZXNzYWdlJyk7XG4gICAgZmlyc3RNZXNzYWdlLnRleHRDb250ZW50ID0gJ1RoZSBiZXN0IHBpenphIGluIE5ldyBZb3JrIENpdHknO1xuXG4gICAgY29uc3Qgc2Vjb25kTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlY29uZE1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnbWVzc2FnZScpO1xuICAgIHNlY29uZE1lc3NhZ2UudGV4dENvbnRlbnQgPSAnTWFkZSB3aXRoIHBhc3Npb24gc2luY2UgMTkwOCc7XG5cbiAgICBjb25zdCBwZXJzb25QaWMgPSBuZXcgSW1hZ2UoMzUwKTtcbiAgICBwZXJzb25QaWMuc3JjID0gcGVyc29uUGljdHVyZTtcbiAgICBwZXJzb25QaWMuY2xhc3NMaXN0LmFkZCgnbWVzc2FnZScpO1xuICAgIHBlcnNvblBpYy5pZCA9ICdwZXJzb25QaWMnO1xuXG4gICAgY29uc3QgdGhpcmRNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcmRNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2UnKTtcbiAgICB0aGlyZE1lc3NhZ2UudGV4dENvbnRlbnQgPSAnVmlzaXQgdXMgb3Igb3JkZXIgb25saW5lISc7XG5cbiAgICBuYXZDb250ZW50LmFwcGVuZENoaWxkKGZpcnN0TWVzc2FnZSk7XG4gICAgbmF2Q29udGVudC5hcHBlbmRDaGlsZChzZWNvbmRNZXNzYWdlKTtcbiAgICBuYXZDb250ZW50LmFwcGVuZENoaWxkKHBlcnNvblBpYylcbiAgICBuYXZDb250ZW50LmFwcGVuZENoaWxkKHRoaXJkTWVzc2FnZSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUZW1wbGF0ZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBcbiAgICBjb25zdCBuYXZQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdlBhbmVsLmlkID0gJ25hdlBhbmVsJztcblxuICAgIGNvbnN0IGJ1c2luZXNzTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1c2luZXNzTmFtZS5pZCA9ICdidXNpbmVzc05hbWUnO1xuICAgIGJ1c2luZXNzTmFtZS50ZXh0Q29udGVudCA9ICdNb3p6YWZpYXRvJztcblxuICAgIGNvbnN0IGJ0dG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidHRuQ29udGFpbmVyLmlkID0gJ2J0dG5Db250YWluZXInO1xuICAgIFxuICAgIGNvbnN0IGJ0dG4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnR0bjEudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgYnR0bjEuY2xhc3NMaXN0LmFkZCgnYnR0bnMnLCAnc2VsZWN0ZWQnKTtcblxuICAgIGNvbnN0IGJ0dG4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnR0bjIudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gICAgYnR0bjIuY2xhc3NMaXN0LmFkZCgnYnR0bnMnKTtcblxuICAgIGNvbnN0IGJ0dG4zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnR0bjMudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG4gICAgYnR0bjMuY2xhc3NMaXN0LmFkZCgnYnR0bnMnKTtcblxuICAgIGJ0dG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnR0bjEpO1xuICAgIGJ0dG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnR0bjIpO1xuICAgIGJ0dG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnR0bjMpO1xuXG4gICAgbmF2UGFuZWwuYXBwZW5kQ2hpbGQoYnVzaW5lc3NOYW1lKTtcbiAgICBuYXZQYW5lbC5hcHBlbmRDaGlsZChidHRuQ29udGFpbmVyKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2UGFuZWwpO1xuXG4gICAgY29uc3QgbmF2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdkNvbnRlbnQuaWQgPSAnbmF2Q29udGVudCc7XG5cbiAgICAvL3RhYiBzcGVjaWZpYyBjb2RlIGdvZXMgaGVyZVxuICAgIGRpc3BsYXlNZW51KG5hdkNvbnRlbnQpO1xuICAgIC8vIHRhYiBzcGVjaWZpYyBjb2RlIGVuZHMgaGVyZVxuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuYXZDb250ZW50KTtcblxuICAgIGNvbnN0IGdpdEh1YkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBnaXRIdWJJbmZvLmlkID0gJ2dpdEh1YkluZm8nO1xuICAgIGdpdEh1YkluZm8uaW5uZXJIVE1MID0gYENvcHlyaWdodCDCqSAyMDIxIGNow6lqb2huIDxhIGhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL2NoZWpvaG4nIHRhcmdldCA9ICdfYmxhbmsnPjxpbWcgd2lkdGggPSAnMTYgaWQgPSAnZ2l0SHViTG9nbycgc3JjID0gJHtMb2dvfT48L2E+YDtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ2l0SHViSW5mbyk7XG4gIFxuICAgIHJldHVybiBjb250ZW50O1xufVxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpc3BsYXlUZW1wbGF0ZSgpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==