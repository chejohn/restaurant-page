/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });



function displayContact(navContent) {
    navContent.style.cssText = 'display: flex; flex-flow: column wrap;';
    const address = document.createElement('p');
    address.classList.add('contactInfo');
    address.id = 'address';
    address.textContent = '1034 Oakwood Ave San Diego, CA 32899';

    const timeOpen = document.createElement('p');
    timeOpen.classList.add('contactInfo');
    timeOpen.id = 'timeOpen';
    timeOpen.textContent = 'Mon-Fri: 8am-8pm, Fri-Sun: 8am-11pm';

    const phoneNum = document.createElement('p');
    phoneNum.classList.add('contactInfo');
    phoneNum.id = 'phoneNum';
    phoneNum.textContent = '(222)-888-777';

    const messageUs = document.createElement('p');
    messageUs.classList.add('contactInfo');
    messageUs.id = 'messageUs';
    messageUs.textContent = 'Message us';

    const form = document.createElement('form');
    form.autocomplete = 'off';
    
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Full Name';
    nameInput.classList.add('inputs');

    const emailInput = document.createElement('input');
    emailInput.type = 'text'
    emailInput.placeholder = 'Email';
    emailInput.classList.add('inputs');

    const messageInput = document.createElement('input');
    messageInput.type = 'text';
    messageInput.placeholder = 'Type your message...';
    messageInput.classList.add('inputs');

    const sumbitBttn = document.createElement('input');
    sumbitBttn.type = 'submit';
    sumbitBttn.textContent = 'Submit';

    form.appendChild(nameInput);
    form.appendChild(emailInput);
    form.appendChild(messageInput);
    form.appendChild(sumbitBttn);

    navContent.appendChild(address);
    navContent.appendChild(timeOpen);
    navContent.appendChild(phoneNum);
    navContent.appendChild(messageUs);
    navContent.appendChild(form);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayContact);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

function displayHome(navContent) {
    const firstMessage = document.createElement('div');
    firstMessage.classList.add('message');
    firstMessage.textContent = 'The best pizza in New York City';

    const secondMessage = document.createElement('div');
    secondMessage.classList.add('message');
    secondMessage.textContent = 'Made with passion since 1908';

    const personPic = new Image(350);
    personPic.src = personPicture;
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayHome);

/***/ }),

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
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/contact.js");







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
    (0,_contact__WEBPACK_IMPORTED_MODULE_4__.default)(navContent);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZDJDO0FBQ1M7QUFDbkI7QUFDQTtBQUNNOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxpREFBYztBQUNsQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EseUpBQXlKLG1EQUFJLENBQUM7O0FBRTlKO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5mdW5jdGlvbiBkaXNwbGF5Q29udGFjdChuYXZDb250ZW50KSB7XG4gICAgbmF2Q29udGVudC5zdHlsZS5jc3NUZXh0ID0gJ2Rpc3BsYXk6IGZsZXg7IGZsZXgtZmxvdzogY29sdW1uIHdyYXA7JztcbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGFkZHJlc3MuY2xhc3NMaXN0LmFkZCgnY29udGFjdEluZm8nKTtcbiAgICBhZGRyZXNzLmlkID0gJ2FkZHJlc3MnO1xuICAgIGFkZHJlc3MudGV4dENvbnRlbnQgPSAnMTAzNCBPYWt3b29kIEF2ZSBTYW4gRGllZ28sIENBIDMyODk5JztcblxuICAgIGNvbnN0IHRpbWVPcGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRpbWVPcGVuLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RJbmZvJyk7XG4gICAgdGltZU9wZW4uaWQgPSAndGltZU9wZW4nO1xuICAgIHRpbWVPcGVuLnRleHRDb250ZW50ID0gJ01vbi1Gcmk6IDhhbS04cG0sIEZyaS1TdW46IDhhbS0xMXBtJztcblxuICAgIGNvbnN0IHBob25lTnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBob25lTnVtLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RJbmZvJyk7XG4gICAgcGhvbmVOdW0uaWQgPSAncGhvbmVOdW0nO1xuICAgIHBob25lTnVtLnRleHRDb250ZW50ID0gJygyMjIpLTg4OC03NzcnO1xuXG4gICAgY29uc3QgbWVzc2FnZVVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1lc3NhZ2VVcy5jbGFzc0xpc3QuYWRkKCdjb250YWN0SW5mbycpO1xuICAgIG1lc3NhZ2VVcy5pZCA9ICdtZXNzYWdlVXMnO1xuICAgIG1lc3NhZ2VVcy50ZXh0Q29udGVudCA9ICdNZXNzYWdlIHVzJztcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5hdXRvY29tcGxldGUgPSAnb2ZmJztcbiAgICBcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG5hbWVJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIG5hbWVJbnB1dC5wbGFjZWhvbGRlciA9ICdGdWxsIE5hbWUnO1xuICAgIG5hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnB1dHMnKTtcblxuICAgIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGVtYWlsSW5wdXQudHlwZSA9ICd0ZXh0J1xuICAgIGVtYWlsSW5wdXQucGxhY2Vob2xkZXIgPSAnRW1haWwnO1xuICAgIGVtYWlsSW5wdXQuY2xhc3NMaXN0LmFkZCgnaW5wdXRzJyk7XG5cbiAgICBjb25zdCBtZXNzYWdlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG1lc3NhZ2VJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIG1lc3NhZ2VJbnB1dC5wbGFjZWhvbGRlciA9ICdUeXBlIHlvdXIgbWVzc2FnZS4uLic7XG4gICAgbWVzc2FnZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0cycpO1xuXG4gICAgY29uc3Qgc3VtYml0QnR0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgc3VtYml0QnR0bi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgc3VtYml0QnR0bi50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZW1haWxJbnB1dCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChtZXNzYWdlSW5wdXQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VtYml0QnR0bik7XG5cbiAgICBuYXZDb250ZW50LmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuICAgIG5hdkNvbnRlbnQuYXBwZW5kQ2hpbGQodGltZU9wZW4pO1xuICAgIG5hdkNvbnRlbnQuYXBwZW5kQ2hpbGQocGhvbmVOdW0pO1xuICAgIG5hdkNvbnRlbnQuYXBwZW5kQ2hpbGQobWVzc2FnZVVzKTtcbiAgICBuYXZDb250ZW50LmFwcGVuZENoaWxkKGZvcm0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5Q29udGFjdCIsIlxuZnVuY3Rpb24gZGlzcGxheUhvbWUobmF2Q29udGVudCkge1xuICAgIGNvbnN0IGZpcnN0TWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZpcnN0TWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdtZXNzYWdlJyk7XG4gICAgZmlyc3RNZXNzYWdlLnRleHRDb250ZW50ID0gJ1RoZSBiZXN0IHBpenphIGluIE5ldyBZb3JrIENpdHknO1xuXG4gICAgY29uc3Qgc2Vjb25kTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlY29uZE1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnbWVzc2FnZScpO1xuICAgIHNlY29uZE1lc3NhZ2UudGV4dENvbnRlbnQgPSAnTWFkZSB3aXRoIHBhc3Npb24gc2luY2UgMTkwOCc7XG5cbiAgICBjb25zdCBwZXJzb25QaWMgPSBuZXcgSW1hZ2UoMzUwKTtcbiAgICBwZXJzb25QaWMuc3JjID0gcGVyc29uUGljdHVyZTtcbiAgICBwZXJzb25QaWMuY2xhc3NMaXN0LmFkZCgnbWVzc2FnZScpO1xuICAgIHBlcnNvblBpYy5pZCA9ICdwZXJzb25QaWMnO1xuXG4gICAgY29uc3QgdGhpcmRNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcmRNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2UnKTtcbiAgICB0aGlyZE1lc3NhZ2UudGV4dENvbnRlbnQgPSAnVmlzaXQgdXMgb3Igb3JkZXIgb25saW5lISc7XG5cbiAgICBuYXZDb250ZW50LmFwcGVuZENoaWxkKGZpcnN0TWVzc2FnZSk7XG4gICAgbmF2Q29udGVudC5hcHBlbmRDaGlsZChzZWNvbmRNZXNzYWdlKTtcbiAgICBuYXZDb250ZW50LmFwcGVuZENoaWxkKHBlcnNvblBpYylcbiAgICBuYXZDb250ZW50LmFwcGVuZENoaWxkKHRoaXJkTWVzc2FnZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlIb21lIiwiXG5cbmltcG9ydCBwaXp6YTEgZnJvbSAnLi9pbWFnZXMvcGl6emExLnBuZyc7XG5pbXBvcnQgcGl6emEyIGZyb20gJy4vaW1hZ2VzL3BpenphMi5wbmcnO1xuaW1wb3J0IHBpenphMyBmcm9tICcuL2ltYWdlcy9waXp6YTMucG5nJztcbmltcG9ydCBwaXp6YTQgZnJvbSAnLi9pbWFnZXMvcGl6emE0LnBuZyc7XG5pbXBvcnQgcGl6emE1IGZyb20gJy4vaW1hZ2VzL3BpenphNS5wbmcnO1xuaW1wb3J0IHBpenphNiBmcm9tICcuL2ltYWdlcy9waXp6YTYucG5nJztcbmltcG9ydCBwaXp6YTcgZnJvbSAnLi9pbWFnZXMvcGl6emE3LnBuZyc7XG5pbXBvcnQgcGl6emE4IGZyb20gJy4vaW1hZ2VzL3BpenphOC5wbmcnO1xuXG5cbmZ1bmN0aW9uIGRpc3BsYXlNZW51KG5hdkNvbnRlbnQpIHtcbiAgICBuYXZDb250ZW50LnN0eWxlLmNzc1RleHQgPSAnZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7IGZsZXgtd3JhcDogd3JhcCc7XG4gICAgXG4gICAgLy8gMXN0IGZvb2QgY29udGFpbmVyXG4gICAgY29uc3QgZm9vZENvbnRhaW5lcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb29kQ29udGFpbmVyMS5jbGFzc0xpc3QuYWRkKCdmb29kQ29udGFpbmVyJyk7XG4gICAgXG4gICAgY29uc3QgcDEgPSBuZXcgSW1hZ2UoMTMwKTtcbiAgICBwMS5zcmMgPSBwaXp6YTE7XG4gICAgcDEuY2xhc3NMaXN0LmFkZCgncGl6emFJbWFnZXMnKTtcblxuICAgIGNvbnN0IHBpenphVHlwZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwaXp6YVR5cGUxLmlubmVySFRNTCA9IGBTYWNpbGlhIDxlbSBzdHlsZSA9ICdmb250LXdlaWdodDogbm9ybWFsOyBmb250LXNpemU6IDIwcHg7Jz4kMTI8L2VtPmA7XG4gICAgcGl6emFUeXBlMS5jbGFzc0xpc3QuYWRkKCdwaXp6YVR5cGUnKTtcblxuICAgIGNvbnN0IGluZ3JlZGllbnQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGluZ3JlZGllbnQxLmNsYXNzTGlzdC5hZGQoJ2luZ3JlZGllbnRzJyk7XG4gICAgaW5ncmVkaWVudDEudGV4dENvbnRlbnQgPSAnVG9tYXRvIHNhdWNlLCBNb3phcmVsbGEsIFRvbWF0bywgSG9tZW1hZGUgc2F1c2FnZSwgR2FybGljLCBCYXNpbCc7XG5cbiAgICBmb29kQ29udGFpbmVyMS5hcHBlbmQocDEpO1xuICAgIGZvb2RDb250YWluZXIxLmFwcGVuZENoaWxkKHBpenphVHlwZTEpO1xuICAgIGZvb2RDb250YWluZXIxLmFwcGVuZENoaWxkKGluZ3JlZGllbnQxKTtcbiAgICAvLyBlbmQgb2YgMXN0IGZvb2QgY29udGFpbmVyXG5cbiAgICAvLyAybmQgZm9vZCBjb250YWluZXJcbiAgICBjb25zdCBmb29kQ29udGFpbmVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb2RDb250YWluZXIyLmNsYXNzTGlzdC5hZGQoJ2Zvb2RDb250YWluZXInKTtcblxuICAgIGNvbnN0IHAyID0gbmV3IEltYWdlKDEzMCk7XG4gICAgcDIuc3JjID0gcGl6emEyO1xuICAgIHAyLmNsYXNzTGlzdC5hZGQoJ3BpenphSW1hZ2VzJyk7XG5cbiAgICBjb25zdCBwaXp6YVR5cGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGl6emFUeXBlMi5pbm5lckhUTUwgPSBgR2FtYmVyaSA8ZW0gc3R5bGUgPSAnZm9udC13ZWlnaHQ6IG5vcm1hbDsgZm9udC1zaXplOiAyMHB4Oyc+JDExPC9lbT5gO1xuICAgIHBpenphVHlwZTIuY2xhc3NMaXN0LmFkZCgncGl6emFUeXBlJyk7XG5cbiAgICBjb25zdCBpbmdyZWRpZW50MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpbmdyZWRpZW50Mi5jbGFzc0xpc3QuYWRkKCdpbmdyZWRpZW50cycpO1xuICAgIGluZ3JlZGllbnQyLnRleHRDb250ZW50ID0gJ1RvbWF0byBzYXVjZSwgTW96YXJlbGxhLCBTaHJpbXAsIEZldGEgY2hlZXNlLCBPbGl2ZXMsIEJhc2lsJztcblxuICAgIGZvb2RDb250YWluZXIyLmFwcGVuZENoaWxkKHAyKTtcbiAgICBmb29kQ29udGFpbmVyMi5hcHBlbmRDaGlsZChwaXp6YVR5cGUyKTtcbiAgICBmb29kQ29udGFpbmVyMi5hcHBlbmRDaGlsZChpbmdyZWRpZW50Mik7XG4gICAgLy8gZW5kIG9mIDJuZCBmb29kIGNvbnRhaW5lclxuXG4gICAgLy8gM3JkIGZvb2QgY29udGFpbmVyXG4gICAgY29uc3QgZm9vZENvbnRhaW5lcjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb29kQ29udGFpbmVyMy5jbGFzc0xpc3QuYWRkKCdmb29kQ29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBwMyA9IG5ldyBJbWFnZSgxMzApO1xuICAgIHAzLnNyYyA9IHBpenphMztcbiAgICBwMy5jbGFzc0xpc3QuYWRkKCdwaXp6YUltYWdlcycpO1xuXG4gICAgY29uc3QgcGl6emFUeXBlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBpenphVHlwZTMuaW5uZXJIVE1MID0gYFBlcGUgPGVtIHN0eWxlID0gJ2ZvbnQtd2VpZ2h0OiBub3JtYWw7IGZvbnQtc2l6ZTogMjBweDsnPiQxMTwvZW0+YDtcbiAgICBwaXp6YVR5cGUzLmNsYXNzTGlzdC5hZGQoJ3BpenphVHlwZScpO1xuXG4gICAgY29uc3QgaW5ncmVkaWVudDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaW5ncmVkaWVudDMuY2xhc3NMaXN0LmFkZCgnaW5ncmVkaWVudHMnKTtcbiAgICBpbmdyZWRpZW50My50ZXh0Q29udGVudCA9ICdUb21hdG8gc2F1Y2UsIE1vemFyZWxsYSwgQ2hpbGxpIGZsYWtlcywgT2xpdmVzLCBCYXNpbCc7XG5cbiAgICBmb29kQ29udGFpbmVyMy5hcHBlbmRDaGlsZChwMyk7XG4gICAgZm9vZENvbnRhaW5lcjMuYXBwZW5kQ2hpbGQocGl6emFUeXBlMyk7XG4gICAgZm9vZENvbnRhaW5lcjMuYXBwZW5kQ2hpbGQoaW5ncmVkaWVudDMpO1xuICAgIC8vIGVuZCBvZiAzcmQgZm9vZCBjb250YWluZXJcblxuICAgIC8vIDR0aCBmb29kIGNvbnRhaW5lclxuICAgIGNvbnN0IGZvb2RDb250YWluZXI0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vZENvbnRhaW5lcjQuY2xhc3NMaXN0LmFkZCgnZm9vZENvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgcDQgPSBuZXcgSW1hZ2UoMTMwKTtcbiAgICBwNC5zcmMgPSBwaXp6YTQ7XG4gICAgcDQuY2xhc3NMaXN0LmFkZCgncGl6emFJbWFnZXMnKTtcblxuICAgIGNvbnN0IHBpenphVHlwZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwaXp6YVR5cGU0LmlubmVySFRNTCA9IGBIYXdhaWlhbiA8ZW0gc3R5bGUgPSAnZm9udC13ZWlnaHQ6IG5vcm1hbDsgZm9udC1zaXplOiAyMHB4Oyc+JDEzPC9lbT5gO1xuICAgIHBpenphVHlwZTQuY2xhc3NMaXN0LmFkZCgncGl6emFUeXBlJyk7XG5cbiAgICBjb25zdCBpbmdyZWRpZW50NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpbmdyZWRpZW50NC5jbGFzc0xpc3QuYWRkKCdpbmdyZWRpZW50cycpO1xuICAgIGluZ3JlZGllbnQ0LnRleHRDb250ZW50ID0gJ1RvbWF0byBzYXVjZSwgQmFjb24sIFBpbmFwcGxlLCBPbGl2ZXMsIEJhc2lsJztcblxuICAgIGZvb2RDb250YWluZXI0LmFwcGVuZENoaWxkKHA0KTtcbiAgICBmb29kQ29udGFpbmVyNC5hcHBlbmRDaGlsZChwaXp6YVR5cGU0KTtcbiAgICBmb29kQ29udGFpbmVyNC5hcHBlbmRDaGlsZChpbmdyZWRpZW50NCk7XG4gICAgLy8gZW5kIG9mIDR0aCBmb29kIGNvbnRhaW5lclxuXG4gICAgLy8gNXRoIGZvb2QgY29udGFpbmVyXG4gICAgY29uc3QgZm9vZENvbnRhaW5lcjUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb29kQ29udGFpbmVyNS5jbGFzc0xpc3QuYWRkKCdmb29kQ29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBwNSA9IG5ldyBJbWFnZSgxMzApO1xuICAgIHA1LnNyYyA9IHBpenphNTtcbiAgICBwNS5jbGFzc0xpc3QuYWRkKCdwaXp6YUltYWdlcycpO1xuXG4gICAgY29uc3QgcGl6emFUeXBlNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBpenphVHlwZTUuaW5uZXJIVE1MID0gYENvbG9yYXRvIDxlbSBzdHlsZSA9ICdmb250LXdlaWdodDogbm9ybWFsOyBmb250LXNpemU6IDIwcHg7Jz4kMTA8L2VtPmA7XG4gICAgcGl6emFUeXBlNS5jbGFzc0xpc3QuYWRkKCdwaXp6YVR5cGUnKTtcblxuICAgIGNvbnN0IGluZ3JlZGllbnQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGluZ3JlZGllbnQ1LmNsYXNzTGlzdC5hZGQoJ2luZ3JlZGllbnRzJyk7XG4gICAgaW5ncmVkaWVudDUudGV4dENvbnRlbnQgPSAnVG9tYXRvIHNhdWNlLCBNb3phcmVsbGEsIE9uaW9uLCBQZXBwZXIsIENoYW1waWdub25zLCBCYXNpbCc7XG5cbiAgICBmb29kQ29udGFpbmVyNS5hcHBlbmRDaGlsZChwNSk7XG4gICAgZm9vZENvbnRhaW5lcjUuYXBwZW5kQ2hpbGQocGl6emFUeXBlNSk7XG4gICAgZm9vZENvbnRhaW5lcjUuYXBwZW5kQ2hpbGQoaW5ncmVkaWVudDUpO1xuICAgIC8vIGVuZCBvZiA1dGggZm9vZCBjb250YWluZXJcblxuICAgIC8vIDZ0aCBmb29kIGNvbnRhaW5lclxuICAgIGNvbnN0IGZvb2RDb250YWluZXI2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vZENvbnRhaW5lcjYuY2xhc3NMaXN0LmFkZCgnZm9vZENvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgcDYgPSBuZXcgSW1hZ2UoMTMwKTtcbiAgICBwNi5zcmMgPSBwaXp6YTY7XG4gICAgcDYuY2xhc3NMaXN0LmFkZCgncGl6emFJbWFnZXMnKTtcblxuICAgIGNvbnN0IHBpenphVHlwZTYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwaXp6YVR5cGU2LmlubmVySFRNTCA9IGBQb21vZG9ybyA8ZW0gc3R5bGUgPSAnZm9udC13ZWlnaHQ6IG5vcm1hbDsgZm9udC1zaXplOiAyMHB4Oyc+JDE2PC9lbT5gO1xuICAgIHBpenphVHlwZTYuY2xhc3NMaXN0LmFkZCgncGl6emFUeXBlJyk7XG5cbiAgICBjb25zdCBpbmdyZWRpZW50NiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpbmdyZWRpZW50Ni5jbGFzc0xpc3QuYWRkKCdpbmdyZWRpZW50cycpO1xuICAgIGluZ3JlZGllbnQ2LnRleHRDb250ZW50ID0gJ1RvbWF0byBzYXVjZSwgTW96YXJlbGxhLCBUb21hdG8sIE9uaW9uLCBGZXRhIENoZWVzZSwgQ2hpbGxpIHBlcHBlcnMnO1xuXG4gICAgZm9vZENvbnRhaW5lcjYuYXBwZW5kQ2hpbGQocDYpO1xuICAgIGZvb2RDb250YWluZXI2LmFwcGVuZENoaWxkKHBpenphVHlwZTYpO1xuICAgIGZvb2RDb250YWluZXI2LmFwcGVuZENoaWxkKGluZ3JlZGllbnQ2KTtcbiAgICAvLyBlbmQgb2YgNnRoIGZvb2QgY29udGFpbmVyXG5cbiAgICAvLyA3dGggZm9vZCBjb250YWluZXJcbiAgICBjb25zdCBmb29kQ29udGFpbmVyNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb2RDb250YWluZXI3LmNsYXNzTGlzdC5hZGQoJ2Zvb2RDb250YWluZXInKTtcblxuICAgIGNvbnN0IHA3ID0gbmV3IEltYWdlKDEzMCk7XG4gICAgcDcuc3JjID0gcGl6emE3O1xuICAgIHA3LmNsYXNzTGlzdC5hZGQoJ3BpenphSW1hZ2VzJyk7XG5cbiAgICBjb25zdCBwaXp6YVR5cGU3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGl6emFUeXBlNy5pbm5lckhUTUwgPSBgQ3JlbWEgPGVtIHN0eWxlID0gJ2ZvbnQtd2VpZ2h0OiBub3JtYWw7IGZvbnQtc2l6ZTogMjBweDsnPiQxNTwvZW0+YDtcbiAgICBwaXp6YVR5cGU3LmNsYXNzTGlzdC5hZGQoJ3BpenphVHlwZScpO1xuXG4gICAgY29uc3QgaW5ncmVkaWVudDcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaW5ncmVkaWVudDcuY2xhc3NMaXN0LmFkZCgnaW5ncmVkaWVudHMnKTtcbiAgICBpbmdyZWRpZW50Ny50ZXh0Q29udGVudCA9ICdXaGl0ZSBzYXVjZSwgTW96YXJlbGxhLCBTaHJpbXAsIFNhbG1vbiwgUGluZWFwcGxlLCBPbGl2ZXMsIEJhc2lsJztcblxuICAgIGZvb2RDb250YWluZXI3LmFwcGVuZENoaWxkKHA3KTtcbiAgICBmb29kQ29udGFpbmVyNy5hcHBlbmRDaGlsZChwaXp6YVR5cGU3KTtcbiAgICBmb29kQ29udGFpbmVyNy5hcHBlbmRDaGlsZChpbmdyZWRpZW50Nyk7XG4gICAgLy8gZW5kIG9mIDd0aCBmb29kIGNvbnRhaW5lclxuXG4gICAgLy8gOHRoIGZvb2QgY29udGFpbmVyXG4gICAgY29uc3QgZm9vZENvbnRhaW5lcjggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb29kQ29udGFpbmVyOC5jbGFzc0xpc3QuYWRkKCdmb29kQ29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBwOCA9IG5ldyBJbWFnZSgxMzApO1xuICAgIHA4LnNyYyA9IHBpenphODtcbiAgICBwOC5jbGFzc0xpc3QuYWRkKCdwaXp6YUltYWdlcycpO1xuXG4gICAgY29uc3QgcGl6emFUeXBlOCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBpenphVHlwZTguaW5uZXJIVE1MID0gYENhcm5lIDxlbSBzdHlsZSA9ICdmb250LXdlaWdodDogbm9ybWFsOyBmb250LXNpemU6IDIwcHg7Jz4kMTQ8L2VtPmA7XG4gICAgcGl6emFUeXBlOC5jbGFzc0xpc3QuYWRkKCdwaXp6YVR5cGUnKTtcblxuICAgIGNvbnN0IGluZ3JlZGllbnQ4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGluZ3JlZGllbnQ4LmNsYXNzTGlzdC5hZGQoJ2luZ3JlZGllbnRzJyk7XG4gICAgaW5ncmVkaWVudDgudGV4dENvbnRlbnQgPSAnVG9tYXRvIHNhdWNlLCBNb3phcmVsbGEsIEhvbWFkZSBzYXVzYWdlLCBCYWNvbiwgR2FybGljLCBQZXBwZXIsIENoaWxsaSc7XG5cbiAgICBmb29kQ29udGFpbmVyOC5hcHBlbmRDaGlsZChwOCk7XG4gICAgZm9vZENvbnRhaW5lcjguYXBwZW5kQ2hpbGQocGl6emFUeXBlOCk7XG4gICAgZm9vZENvbnRhaW5lcjguYXBwZW5kQ2hpbGQoaW5ncmVkaWVudDgpO1xuICAgIC8vIGVuZCBvZiA4dGggZm9vZCBjb250YWluZXJcblxuICAgIG5hdkNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vZENvbnRhaW5lcjEpO1xuICAgIG5hdkNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vZENvbnRhaW5lcjIpO1xuICAgIG5hdkNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vZENvbnRhaW5lcjMpO1xuICAgIG5hdkNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vZENvbnRhaW5lcjQpO1xuICAgIG5hdkNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vZENvbnRhaW5lcjUpO1xuICAgIG5hdkNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vZENvbnRhaW5lcjYpO1xuICAgIG5hdkNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vZENvbnRhaW5lcjcpO1xuICAgIG5hdkNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vZENvbnRhaW5lcjgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5TWVudTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJcbmltcG9ydCBMb2dvIGZyb20gJy4vaW1hZ2VzL2dpdEh1YkxvZ28ucG5nJztcbmltcG9ydCBwZXJzb25QaWN0dXJlIGZyb20gJy4vaW1hZ2VzL3BlcnNvblBpYy5qcGVnJztcbmltcG9ydCBkaXNwbGF5TWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IGRpc3BsYXlIb21lIGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgZGlzcGxheUNvbnRhY3QgZnJvbSAnLi9jb250YWN0JztcblxuZnVuY3Rpb24gZGlzcGxheVRlbXBsYXRlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIFxuICAgIGNvbnN0IG5hdlBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2UGFuZWwuaWQgPSAnbmF2UGFuZWwnO1xuXG4gICAgY29uc3QgYnVzaW5lc3NOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnVzaW5lc3NOYW1lLmlkID0gJ2J1c2luZXNzTmFtZSc7XG4gICAgYnVzaW5lc3NOYW1lLnRleHRDb250ZW50ID0gJ01venphZmlhdG8nO1xuXG4gICAgY29uc3QgYnR0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ0dG5Db250YWluZXIuaWQgPSAnYnR0bkNvbnRhaW5lcic7XG4gICAgXG4gICAgY29uc3QgYnR0bjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidHRuMS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICBidHRuMS5jbGFzc0xpc3QuYWRkKCdidHRucycsICdzZWxlY3RlZCcpO1xuXG4gICAgY29uc3QgYnR0bjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidHRuMi50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICBidHRuMi5jbGFzc0xpc3QuYWRkKCdidHRucycpO1xuXG4gICAgY29uc3QgYnR0bjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidHRuMy50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgICBidHRuMy5jbGFzc0xpc3QuYWRkKCdidHRucycpO1xuXG4gICAgYnR0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChidHRuMSk7XG4gICAgYnR0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChidHRuMik7XG4gICAgYnR0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChidHRuMyk7XG5cbiAgICBuYXZQYW5lbC5hcHBlbmRDaGlsZChidXNpbmVzc05hbWUpO1xuICAgIG5hdlBhbmVsLmFwcGVuZENoaWxkKGJ0dG5Db250YWluZXIpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuYXZQYW5lbCk7XG5cbiAgICBjb25zdCBuYXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2Q29udGVudC5pZCA9ICduYXZDb250ZW50JztcblxuICAgIC8vdGFiIHNwZWNpZmljIGNvZGUgZ29lcyBoZXJlXG4gICAgZGlzcGxheUNvbnRhY3QobmF2Q29udGVudCk7XG4gICAgLy8gdGFiIHNwZWNpZmljIGNvZGUgZW5kcyBoZXJlXG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdkNvbnRlbnQpO1xuXG4gICAgY29uc3QgZ2l0SHViSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdpdEh1YkluZm8uaWQgPSAnZ2l0SHViSW5mbyc7XG4gICAgZ2l0SHViSW5mby5pbm5lckhUTUwgPSBgQ29weXJpZ2h0IMKpIDIwMjEgY2jDqWpvaG4gPGEgaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vY2hlam9obicgdGFyZ2V0ID0gJ19ibGFuayc+PGltZyB3aWR0aCA9ICcxNiBpZCA9ICdnaXRIdWJMb2dvJyBzcmMgPSAke0xvZ299PjwvYT5gO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChnaXRIdWJJbmZvKTtcbiAgXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGlzcGxheVRlbXBsYXRlKCkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9