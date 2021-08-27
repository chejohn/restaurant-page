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
    
    navContent.style.cssText = 'display: flex; flex-flow: column wrap; text-align: left;';

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
    form.id = 'form';
    
    const nameInputContainer = document.createElement('div');
    nameInputContainer.className = 'inputContainer';

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.classList.add('inputs');
    nameInput.required = true;

    const namePlaceHolder = document.createElement('span');
    namePlaceHolder.textContent = 'Name';
    namePlaceHolder.className = 'placeHolder';
    
    nameInputContainer.appendChild(nameInput);
    nameInputContainer.appendChild(namePlaceHolder);

    const emailInputContainer = document.createElement('div');
    emailInputContainer.className = 'inputContainer';

    const emailInput = document.createElement('input');
    emailInput.type = 'text';
    emailInput.classList.add('inputs');
    emailInput.required = true;

    const emailPlaceHolder = document.createElement('span');
    emailPlaceHolder.textContent = 'Email';
    emailPlaceHolder.className = 'placeHolder';

    emailInputContainer.appendChild(emailInput);
    emailInputContainer.appendChild(emailPlaceHolder);
    
    const messageInputContainer = document.createElement('div');
    messageInputContainer.className = 'inputContainer';

    const messageInput = document.createElement('input');
    messageInput.type = 'text';
    messageInput.classList.add('inputs');
    messageInput.id = 'messageInput';
    messageInput.required = true;

    const messagePlaceHolder = document.createElement('span');
    messagePlaceHolder.textContent = 'Type your message...';
    messagePlaceHolder.className = 'placeHolder';

    messageInputContainer.appendChild(messageInput);
    messageInputContainer.appendChild(messagePlaceHolder);

    const sumbitBttn = document.createElement('input');
    sumbitBttn.type = 'submit';
    sumbitBttn.textContent = 'Submit';

    const googleMap = document.createElement('div');
    googleMap.id = 'googleMap';
    googleMap.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d230072.34070543136!2d-122.57584769360217!3d37.915143392193094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m3!3m2!1d37.778067899999996!2d-122.4512183!4m5!1s0x808580bb058365f7%3A0xfd5ee1b75e539d41!2smcdonald&#39;s%20san%20francisco!3m2!1d37.779871299999996!2d-122.4317172!5e0!3m2!1sen!2sus!4v1629916332314!5m2!1sen!2sus" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;


    form.appendChild(nameInputContainer);
    form.appendChild(emailInputContainer);
    form.appendChild(messageInputContainer);
    form.appendChild(sumbitBttn);

    navContent.appendChild(address);
    navContent.appendChild(timeOpen);
    navContent.appendChild(phoneNum);
    navContent.appendChild(messageUs);
    navContent.appendChild(form);
    navContent.appendChild(googleMap);

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
/* harmony import */ var _images_personPic_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/personPic.jpeg */ "./src/images/personPic.jpeg");



function displayHome(navContent) {
    
    const firstMessage = document.createElement('div');
    firstMessage.classList.add('message');
    firstMessage.textContent = 'The best pizza in New York City';

    const secondMessage = document.createElement('div');
    secondMessage.classList.add('message');
    secondMessage.textContent = 'Made with passion since 1908';

    const personPic = new Image(350);
    personPic.src = _images_personPic_jpeg__WEBPACK_IMPORTED_MODULE_0__;
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











// try condensing this code into a food-container function

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

function createFoodContainer() {
    
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
    bttn1.classList.add('bttns');

    const bttn2 = document.createElement('button');
    bttn2.textContent = 'Menu';
    bttn2.classList.add('bttns');

    const bttn3 = document.createElement('button');
    bttn3.textContent = 'Contact';
    bttn3.classList.add('bttns', 'selected');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdk0xQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkMkM7QUFDUztBQUNuQjtBQUNBO0FBQ007O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUksOENBQVc7QUFDZjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EseUpBQXlKLG1EQUFJLENBQUM7O0FBRTlKO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5mdW5jdGlvbiBkaXNwbGF5Q29udGFjdChuYXZDb250ZW50KSB7XG4gICAgXG4gICAgbmF2Q29udGVudC5zdHlsZS5jc3NUZXh0ID0gJ2Rpc3BsYXk6IGZsZXg7IGZsZXgtZmxvdzogY29sdW1uIHdyYXA7IHRleHQtYWxpZ246IGxlZnQ7JztcblxuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWRkcmVzcy5jbGFzc0xpc3QuYWRkKCdjb250YWN0SW5mbycpO1xuICAgIGFkZHJlc3MuaWQgPSAnYWRkcmVzcyc7XG4gICAgYWRkcmVzcy50ZXh0Q29udGVudCA9ICcxMDM0IE9ha3dvb2QgQXZlIFNhbiBEaWVnbywgQ0EgMzI4OTknO1xuXG4gICAgY29uc3QgdGltZU9wZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGltZU9wZW4uY2xhc3NMaXN0LmFkZCgnY29udGFjdEluZm8nKTtcbiAgICB0aW1lT3Blbi5pZCA9ICd0aW1lT3Blbic7XG4gICAgdGltZU9wZW4udGV4dENvbnRlbnQgPSAnTW9uLUZyaTogOGFtLThwbSwgRnJpLVN1bjogOGFtLTExcG0nO1xuXG4gICAgY29uc3QgcGhvbmVOdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGhvbmVOdW0uY2xhc3NMaXN0LmFkZCgnY29udGFjdEluZm8nKTtcbiAgICBwaG9uZU51bS5pZCA9ICdwaG9uZU51bSc7XG4gICAgcGhvbmVOdW0udGV4dENvbnRlbnQgPSAnKDIyMiktODg4LTc3Nyc7XG5cbiAgICBjb25zdCBtZXNzYWdlVXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbWVzc2FnZVVzLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RJbmZvJyk7XG4gICAgbWVzc2FnZVVzLmlkID0gJ21lc3NhZ2VVcyc7XG4gICAgbWVzc2FnZVVzLnRleHRDb250ZW50ID0gJ01lc3NhZ2UgdXMnO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLmlkID0gJ2Zvcm0nO1xuICAgIFxuICAgIGNvbnN0IG5hbWVJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hbWVJbnB1dENvbnRhaW5lci5jbGFzc05hbWUgPSAnaW5wdXRDb250YWluZXInO1xuXG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBuYW1lSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICBuYW1lSW5wdXQuY2xhc3NMaXN0LmFkZCgnaW5wdXRzJyk7XG4gICAgbmFtZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcblxuICAgIGNvbnN0IG5hbWVQbGFjZUhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBuYW1lUGxhY2VIb2xkZXIudGV4dENvbnRlbnQgPSAnTmFtZSc7XG4gICAgbmFtZVBsYWNlSG9sZGVyLmNsYXNzTmFtZSA9ICdwbGFjZUhvbGRlcic7XG4gICAgXG4gICAgbmFtZUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG4gICAgbmFtZUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVQbGFjZUhvbGRlcik7XG5cbiAgICBjb25zdCBlbWFpbElucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZW1haWxJbnB1dENvbnRhaW5lci5jbGFzc05hbWUgPSAnaW5wdXRDb250YWluZXInO1xuXG4gICAgY29uc3QgZW1haWxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZW1haWxJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIGVtYWlsSW5wdXQuY2xhc3NMaXN0LmFkZCgnaW5wdXRzJyk7XG4gICAgZW1haWxJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICBjb25zdCBlbWFpbFBsYWNlSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGVtYWlsUGxhY2VIb2xkZXIudGV4dENvbnRlbnQgPSAnRW1haWwnO1xuICAgIGVtYWlsUGxhY2VIb2xkZXIuY2xhc3NOYW1lID0gJ3BsYWNlSG9sZGVyJztcblxuICAgIGVtYWlsSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1haWxJbnB1dCk7XG4gICAgZW1haWxJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChlbWFpbFBsYWNlSG9sZGVyKTtcbiAgICBcbiAgICBjb25zdCBtZXNzYWdlSW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZXNzYWdlSW5wdXRDb250YWluZXIuY2xhc3NOYW1lID0gJ2lucHV0Q29udGFpbmVyJztcblxuICAgIGNvbnN0IG1lc3NhZ2VJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbWVzc2FnZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgbWVzc2FnZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0cycpO1xuICAgIG1lc3NhZ2VJbnB1dC5pZCA9ICdtZXNzYWdlSW5wdXQnO1xuICAgIG1lc3NhZ2VJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICBjb25zdCBtZXNzYWdlUGxhY2VIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbWVzc2FnZVBsYWNlSG9sZGVyLnRleHRDb250ZW50ID0gJ1R5cGUgeW91ciBtZXNzYWdlLi4uJztcbiAgICBtZXNzYWdlUGxhY2VIb2xkZXIuY2xhc3NOYW1lID0gJ3BsYWNlSG9sZGVyJztcblxuICAgIG1lc3NhZ2VJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlSW5wdXQpO1xuICAgIG1lc3NhZ2VJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlUGxhY2VIb2xkZXIpO1xuXG4gICAgY29uc3Qgc3VtYml0QnR0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgc3VtYml0QnR0bi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgc3VtYml0QnR0bi50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuXG4gICAgY29uc3QgZ29vZ2xlTWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ29vZ2xlTWFwLmlkID0gJ2dvb2dsZU1hcCc7XG4gICAgZ29vZ2xlTWFwLmlubmVySFRNTCA9IGA8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0yNiExbTEyITFtMyExZDIzMDA3Mi4zNDA3MDU0MzEzNiEyZC0xMjIuNTc1ODQ3NjkzNjAyMTchM2QzNy45MTUxNDMzOTIxOTMwOTQhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITRtMTEhM2UwITRtMyEzbTIhMWQzNy43NzgwNjc4OTk5OTk5OTYhMmQtMTIyLjQ1MTIxODMhNG01ITFzMHg4MDg1ODBiYjA1ODM2NWY3JTNBMHhmZDVlZTFiNzVlNTM5ZDQxITJzbWNkb25hbGQmIzM5O3MlMjBzYW4lMjBmcmFuY2lzY28hM20yITFkMzcuNzc5ODcxMjk5OTk5OTk2ITJkLTEyMi40MzE3MTcyITVlMCEzbTIhMXNlbiEyc3VzITR2MTYyOTkxNjMzMjMxNCE1bTIhMXNlbiEyc3VzXCIgc3R5bGU9XCJib3JkZXI6MDtcIiBhbGxvd2Z1bGxzY3JlZW49XCJcIiBsb2FkaW5nPVwibGF6eVwiPjwvaWZyYW1lPmA7XG5cblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobmFtZUlucHV0Q29udGFpbmVyKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGVtYWlsSW5wdXRDb250YWluZXIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobWVzc2FnZUlucHV0Q29udGFpbmVyKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1bWJpdEJ0dG4pO1xuXG4gICAgbmF2Q29udGVudC5hcHBlbmRDaGlsZChhZGRyZXNzKTtcbiAgICBuYXZDb250ZW50LmFwcGVuZENoaWxkKHRpbWVPcGVuKTtcbiAgICBuYXZDb250ZW50LmFwcGVuZENoaWxkKHBob25lTnVtKTtcbiAgICBuYXZDb250ZW50LmFwcGVuZENoaWxkKG1lc3NhZ2VVcyk7XG4gICAgbmF2Q29udGVudC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICBuYXZDb250ZW50LmFwcGVuZENoaWxkKGdvb2dsZU1hcCk7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUNvbnRhY3QiLCJcbmltcG9ydCBwZXJzb25QaWN0dXJlIGZyb20gJy4vaW1hZ2VzL3BlcnNvblBpYy5qcGVnJztcblxuZnVuY3Rpb24gZGlzcGxheUhvbWUobmF2Q29udGVudCkge1xuICAgIFxuICAgIGNvbnN0IGZpcnN0TWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZpcnN0TWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdtZXNzYWdlJyk7XG4gICAgZmlyc3RNZXNzYWdlLnRleHRDb250ZW50ID0gJ1RoZSBiZXN0IHBpenphIGluIE5ldyBZb3JrIENpdHknO1xuXG4gICAgY29uc3Qgc2Vjb25kTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlY29uZE1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnbWVzc2FnZScpO1xuICAgIHNlY29uZE1lc3NhZ2UudGV4dENvbnRlbnQgPSAnTWFkZSB3aXRoIHBhc3Npb24gc2luY2UgMTkwOCc7XG5cbiAgICBjb25zdCBwZXJzb25QaWMgPSBuZXcgSW1hZ2UoMzUwKTtcbiAgICBwZXJzb25QaWMuc3JjID0gcGVyc29uUGljdHVyZTtcbiAgICBwZXJzb25QaWMuY2xhc3NMaXN0LmFkZCgnbWVzc2FnZScpO1xuICAgIHBlcnNvblBpYy5pZCA9ICdwZXJzb25QaWMnO1xuXG4gICAgY29uc3QgdGhpcmRNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcmRNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2UnKTtcbiAgICB0aGlyZE1lc3NhZ2UudGV4dENvbnRlbnQgPSAnVmlzaXQgdXMgb3Igb3JkZXIgb25saW5lISc7XG5cbiAgICBuYXZDb250ZW50LmFwcGVuZENoaWxkKGZpcnN0TWVzc2FnZSk7XG4gICAgbmF2Q29udGVudC5hcHBlbmRDaGlsZChzZWNvbmRNZXNzYWdlKTtcbiAgICBuYXZDb250ZW50LmFwcGVuZENoaWxkKHBlcnNvblBpYylcbiAgICBuYXZDb250ZW50LmFwcGVuZENoaWxkKHRoaXJkTWVzc2FnZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlIb21lOyIsIlxuXG5pbXBvcnQgcGl6emExIGZyb20gJy4vaW1hZ2VzL3BpenphMS5wbmcnO1xuaW1wb3J0IHBpenphMiBmcm9tICcuL2ltYWdlcy9waXp6YTIucG5nJztcbmltcG9ydCBwaXp6YTMgZnJvbSAnLi9pbWFnZXMvcGl6emEzLnBuZyc7XG5pbXBvcnQgcGl6emE0IGZyb20gJy4vaW1hZ2VzL3BpenphNC5wbmcnO1xuaW1wb3J0IHBpenphNSBmcm9tICcuL2ltYWdlcy9waXp6YTUucG5nJztcbmltcG9ydCBwaXp6YTYgZnJvbSAnLi9pbWFnZXMvcGl6emE2LnBuZyc7XG5pbXBvcnQgcGl6emE3IGZyb20gJy4vaW1hZ2VzL3BpenphNy5wbmcnO1xuaW1wb3J0IHBpenphOCBmcm9tICcuL2ltYWdlcy9waXp6YTgucG5nJztcblxuLy8gdHJ5IGNvbmRlbnNpbmcgdGhpcyBjb2RlIGludG8gYSBmb29kLWNvbnRhaW5lciBmdW5jdGlvblxuXG5mdW5jdGlvbiBkaXNwbGF5TWVudShuYXZDb250ZW50KSB7XG4gICAgXG4gICAgbmF2Q29udGVudC5zdHlsZS5jc3NUZXh0ID0gJ2Rpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5OyBmbGV4LXdyYXA6IHdyYXAnO1xuICAgIFxuICAgIC8vIDFzdCBmb29kIGNvbnRhaW5lclxuICAgIGNvbnN0IGZvb2RDb250YWluZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vZENvbnRhaW5lcjEuY2xhc3NMaXN0LmFkZCgnZm9vZENvbnRhaW5lcicpO1xuICAgIFxuICAgIGNvbnN0IHAxID0gbmV3IEltYWdlKDEzMCk7XG4gICAgcDEuc3JjID0gcGl6emExO1xuICAgIHAxLmNsYXNzTGlzdC5hZGQoJ3BpenphSW1hZ2VzJyk7XG5cbiAgICBjb25zdCBwaXp6YVR5cGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGl6emFUeXBlMS5pbm5lckhUTUwgPSBgU2FjaWxpYSA8ZW0gc3R5bGUgPSAnZm9udC13ZWlnaHQ6IG5vcm1hbDsgZm9udC1zaXplOiAyMHB4Oyc+JDEyPC9lbT5gO1xuICAgIHBpenphVHlwZTEuY2xhc3NMaXN0LmFkZCgncGl6emFUeXBlJyk7XG5cbiAgICBjb25zdCBpbmdyZWRpZW50MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpbmdyZWRpZW50MS5jbGFzc0xpc3QuYWRkKCdpbmdyZWRpZW50cycpO1xuICAgIGluZ3JlZGllbnQxLnRleHRDb250ZW50ID0gJ1RvbWF0byBzYXVjZSwgTW96YXJlbGxhLCBUb21hdG8sIEhvbWVtYWRlIHNhdXNhZ2UsIEdhcmxpYywgQmFzaWwnO1xuXG4gICAgZm9vZENvbnRhaW5lcjEuYXBwZW5kKHAxKTtcbiAgICBmb29kQ29udGFpbmVyMS5hcHBlbmRDaGlsZChwaXp6YVR5cGUxKTtcbiAgICBmb29kQ29udGFpbmVyMS5hcHBlbmRDaGlsZChpbmdyZWRpZW50MSk7XG4gICAgLy8gZW5kIG9mIDFzdCBmb29kIGNvbnRhaW5lclxuXG4gICAgLy8gMm5kIGZvb2QgY29udGFpbmVyXG4gICAgY29uc3QgZm9vZENvbnRhaW5lcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb29kQ29udGFpbmVyMi5jbGFzc0xpc3QuYWRkKCdmb29kQ29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBwMiA9IG5ldyBJbWFnZSgxMzApO1xuICAgIHAyLnNyYyA9IHBpenphMjtcbiAgICBwMi5jbGFzc0xpc3QuYWRkKCdwaXp6YUltYWdlcycpO1xuXG4gICAgY29uc3QgcGl6emFUeXBlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBpenphVHlwZTIuaW5uZXJIVE1MID0gYEdhbWJlcmkgPGVtIHN0eWxlID0gJ2ZvbnQtd2VpZ2h0OiBub3JtYWw7IGZvbnQtc2l6ZTogMjBweDsnPiQxMTwvZW0+YDtcbiAgICBwaXp6YVR5cGUyLmNsYXNzTGlzdC5hZGQoJ3BpenphVHlwZScpO1xuXG4gICAgY29uc3QgaW5ncmVkaWVudDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaW5ncmVkaWVudDIuY2xhc3NMaXN0LmFkZCgnaW5ncmVkaWVudHMnKTtcbiAgICBpbmdyZWRpZW50Mi50ZXh0Q29udGVudCA9ICdUb21hdG8gc2F1Y2UsIE1vemFyZWxsYSwgU2hyaW1wLCBGZXRhIGNoZWVzZSwgT2xpdmVzLCBCYXNpbCc7XG5cbiAgICBmb29kQ29udGFpbmVyMi5hcHBlbmRDaGlsZChwMik7XG4gICAgZm9vZENvbnRhaW5lcjIuYXBwZW5kQ2hpbGQocGl6emFUeXBlMik7XG4gICAgZm9vZENvbnRhaW5lcjIuYXBwZW5kQ2hpbGQoaW5ncmVkaWVudDIpO1xuICAgIC8vIGVuZCBvZiAybmQgZm9vZCBjb250YWluZXJcblxuICAgIC8vIDNyZCBmb29kIGNvbnRhaW5lclxuICAgIGNvbnN0IGZvb2RDb250YWluZXIzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vZENvbnRhaW5lcjMuY2xhc3NMaXN0LmFkZCgnZm9vZENvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgcDMgPSBuZXcgSW1hZ2UoMTMwKTtcbiAgICBwMy5zcmMgPSBwaXp6YTM7XG4gICAgcDMuY2xhc3NMaXN0LmFkZCgncGl6emFJbWFnZXMnKTtcblxuICAgIGNvbnN0IHBpenphVHlwZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwaXp6YVR5cGUzLmlubmVySFRNTCA9IGBQZXBlIDxlbSBzdHlsZSA9ICdmb250LXdlaWdodDogbm9ybWFsOyBmb250LXNpemU6IDIwcHg7Jz4kMTE8L2VtPmA7XG4gICAgcGl6emFUeXBlMy5jbGFzc0xpc3QuYWRkKCdwaXp6YVR5cGUnKTtcblxuICAgIGNvbnN0IGluZ3JlZGllbnQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGluZ3JlZGllbnQzLmNsYXNzTGlzdC5hZGQoJ2luZ3JlZGllbnRzJyk7XG4gICAgaW5ncmVkaWVudDMudGV4dENvbnRlbnQgPSAnVG9tYXRvIHNhdWNlLCBNb3phcmVsbGEsIENoaWxsaSBmbGFrZXMsIE9saXZlcywgQmFzaWwnO1xuXG4gICAgZm9vZENvbnRhaW5lcjMuYXBwZW5kQ2hpbGQocDMpO1xuICAgIGZvb2RDb250YWluZXIzLmFwcGVuZENoaWxkKHBpenphVHlwZTMpO1xuICAgIGZvb2RDb250YWluZXIzLmFwcGVuZENoaWxkKGluZ3JlZGllbnQzKTtcbiAgICAvLyBlbmQgb2YgM3JkIGZvb2QgY29udGFpbmVyXG5cbiAgICAvLyA0dGggZm9vZCBjb250YWluZXJcbiAgICBjb25zdCBmb29kQ29udGFpbmVyNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb2RDb250YWluZXI0LmNsYXNzTGlzdC5hZGQoJ2Zvb2RDb250YWluZXInKTtcblxuICAgIGNvbnN0IHA0ID0gbmV3IEltYWdlKDEzMCk7XG4gICAgcDQuc3JjID0gcGl6emE0O1xuICAgIHA0LmNsYXNzTGlzdC5hZGQoJ3BpenphSW1hZ2VzJyk7XG5cbiAgICBjb25zdCBwaXp6YVR5cGU0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGl6emFUeXBlNC5pbm5lckhUTUwgPSBgSGF3YWlpYW4gPGVtIHN0eWxlID0gJ2ZvbnQtd2VpZ2h0OiBub3JtYWw7IGZvbnQtc2l6ZTogMjBweDsnPiQxMzwvZW0+YDtcbiAgICBwaXp6YVR5cGU0LmNsYXNzTGlzdC5hZGQoJ3BpenphVHlwZScpO1xuXG4gICAgY29uc3QgaW5ncmVkaWVudDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaW5ncmVkaWVudDQuY2xhc3NMaXN0LmFkZCgnaW5ncmVkaWVudHMnKTtcbiAgICBpbmdyZWRpZW50NC50ZXh0Q29udGVudCA9ICdUb21hdG8gc2F1Y2UsIEJhY29uLCBQaW5hcHBsZSwgT2xpdmVzLCBCYXNpbCc7XG5cbiAgICBmb29kQ29udGFpbmVyNC5hcHBlbmRDaGlsZChwNCk7XG4gICAgZm9vZENvbnRhaW5lcjQuYXBwZW5kQ2hpbGQocGl6emFUeXBlNCk7XG4gICAgZm9vZENvbnRhaW5lcjQuYXBwZW5kQ2hpbGQoaW5ncmVkaWVudDQpO1xuICAgIC8vIGVuZCBvZiA0dGggZm9vZCBjb250YWluZXJcblxuICAgIC8vIDV0aCBmb29kIGNvbnRhaW5lclxuICAgIGNvbnN0IGZvb2RDb250YWluZXI1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vZENvbnRhaW5lcjUuY2xhc3NMaXN0LmFkZCgnZm9vZENvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgcDUgPSBuZXcgSW1hZ2UoMTMwKTtcbiAgICBwNS5zcmMgPSBwaXp6YTU7XG4gICAgcDUuY2xhc3NMaXN0LmFkZCgncGl6emFJbWFnZXMnKTtcblxuICAgIGNvbnN0IHBpenphVHlwZTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwaXp6YVR5cGU1LmlubmVySFRNTCA9IGBDb2xvcmF0byA8ZW0gc3R5bGUgPSAnZm9udC13ZWlnaHQ6IG5vcm1hbDsgZm9udC1zaXplOiAyMHB4Oyc+JDEwPC9lbT5gO1xuICAgIHBpenphVHlwZTUuY2xhc3NMaXN0LmFkZCgncGl6emFUeXBlJyk7XG5cbiAgICBjb25zdCBpbmdyZWRpZW50NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpbmdyZWRpZW50NS5jbGFzc0xpc3QuYWRkKCdpbmdyZWRpZW50cycpO1xuICAgIGluZ3JlZGllbnQ1LnRleHRDb250ZW50ID0gJ1RvbWF0byBzYXVjZSwgTW96YXJlbGxhLCBPbmlvbiwgUGVwcGVyLCBDaGFtcGlnbm9ucywgQmFzaWwnO1xuXG4gICAgZm9vZENvbnRhaW5lcjUuYXBwZW5kQ2hpbGQocDUpO1xuICAgIGZvb2RDb250YWluZXI1LmFwcGVuZENoaWxkKHBpenphVHlwZTUpO1xuICAgIGZvb2RDb250YWluZXI1LmFwcGVuZENoaWxkKGluZ3JlZGllbnQ1KTtcbiAgICAvLyBlbmQgb2YgNXRoIGZvb2QgY29udGFpbmVyXG5cbiAgICAvLyA2dGggZm9vZCBjb250YWluZXJcbiAgICBjb25zdCBmb29kQ29udGFpbmVyNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb2RDb250YWluZXI2LmNsYXNzTGlzdC5hZGQoJ2Zvb2RDb250YWluZXInKTtcblxuICAgIGNvbnN0IHA2ID0gbmV3IEltYWdlKDEzMCk7XG4gICAgcDYuc3JjID0gcGl6emE2O1xuICAgIHA2LmNsYXNzTGlzdC5hZGQoJ3BpenphSW1hZ2VzJyk7XG5cbiAgICBjb25zdCBwaXp6YVR5cGU2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGl6emFUeXBlNi5pbm5lckhUTUwgPSBgUG9tb2Rvcm8gPGVtIHN0eWxlID0gJ2ZvbnQtd2VpZ2h0OiBub3JtYWw7IGZvbnQtc2l6ZTogMjBweDsnPiQxNjwvZW0+YDtcbiAgICBwaXp6YVR5cGU2LmNsYXNzTGlzdC5hZGQoJ3BpenphVHlwZScpO1xuXG4gICAgY29uc3QgaW5ncmVkaWVudDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaW5ncmVkaWVudDYuY2xhc3NMaXN0LmFkZCgnaW5ncmVkaWVudHMnKTtcbiAgICBpbmdyZWRpZW50Ni50ZXh0Q29udGVudCA9ICdUb21hdG8gc2F1Y2UsIE1vemFyZWxsYSwgVG9tYXRvLCBPbmlvbiwgRmV0YSBDaGVlc2UsIENoaWxsaSBwZXBwZXJzJztcblxuICAgIGZvb2RDb250YWluZXI2LmFwcGVuZENoaWxkKHA2KTtcbiAgICBmb29kQ29udGFpbmVyNi5hcHBlbmRDaGlsZChwaXp6YVR5cGU2KTtcbiAgICBmb29kQ29udGFpbmVyNi5hcHBlbmRDaGlsZChpbmdyZWRpZW50Nik7XG4gICAgLy8gZW5kIG9mIDZ0aCBmb29kIGNvbnRhaW5lclxuXG4gICAgLy8gN3RoIGZvb2QgY29udGFpbmVyXG4gICAgY29uc3QgZm9vZENvbnRhaW5lcjcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb29kQ29udGFpbmVyNy5jbGFzc0xpc3QuYWRkKCdmb29kQ29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBwNyA9IG5ldyBJbWFnZSgxMzApO1xuICAgIHA3LnNyYyA9IHBpenphNztcbiAgICBwNy5jbGFzc0xpc3QuYWRkKCdwaXp6YUltYWdlcycpO1xuXG4gICAgY29uc3QgcGl6emFUeXBlNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBpenphVHlwZTcuaW5uZXJIVE1MID0gYENyZW1hIDxlbSBzdHlsZSA9ICdmb250LXdlaWdodDogbm9ybWFsOyBmb250LXNpemU6IDIwcHg7Jz4kMTU8L2VtPmA7XG4gICAgcGl6emFUeXBlNy5jbGFzc0xpc3QuYWRkKCdwaXp6YVR5cGUnKTtcblxuICAgIGNvbnN0IGluZ3JlZGllbnQ3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGluZ3JlZGllbnQ3LmNsYXNzTGlzdC5hZGQoJ2luZ3JlZGllbnRzJyk7XG4gICAgaW5ncmVkaWVudDcudGV4dENvbnRlbnQgPSAnV2hpdGUgc2F1Y2UsIE1vemFyZWxsYSwgU2hyaW1wLCBTYWxtb24sIFBpbmVhcHBsZSwgT2xpdmVzLCBCYXNpbCc7XG5cbiAgICBmb29kQ29udGFpbmVyNy5hcHBlbmRDaGlsZChwNyk7XG4gICAgZm9vZENvbnRhaW5lcjcuYXBwZW5kQ2hpbGQocGl6emFUeXBlNyk7XG4gICAgZm9vZENvbnRhaW5lcjcuYXBwZW5kQ2hpbGQoaW5ncmVkaWVudDcpO1xuICAgIC8vIGVuZCBvZiA3dGggZm9vZCBjb250YWluZXJcblxuICAgIC8vIDh0aCBmb29kIGNvbnRhaW5lclxuICAgIGNvbnN0IGZvb2RDb250YWluZXI4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vZENvbnRhaW5lcjguY2xhc3NMaXN0LmFkZCgnZm9vZENvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgcDggPSBuZXcgSW1hZ2UoMTMwKTtcbiAgICBwOC5zcmMgPSBwaXp6YTg7XG4gICAgcDguY2xhc3NMaXN0LmFkZCgncGl6emFJbWFnZXMnKTtcblxuICAgIGNvbnN0IHBpenphVHlwZTggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwaXp6YVR5cGU4LmlubmVySFRNTCA9IGBDYXJuZSA8ZW0gc3R5bGUgPSAnZm9udC13ZWlnaHQ6IG5vcm1hbDsgZm9udC1zaXplOiAyMHB4Oyc+JDE0PC9lbT5gO1xuICAgIHBpenphVHlwZTguY2xhc3NMaXN0LmFkZCgncGl6emFUeXBlJyk7XG5cbiAgICBjb25zdCBpbmdyZWRpZW50OCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpbmdyZWRpZW50OC5jbGFzc0xpc3QuYWRkKCdpbmdyZWRpZW50cycpO1xuICAgIGluZ3JlZGllbnQ4LnRleHRDb250ZW50ID0gJ1RvbWF0byBzYXVjZSwgTW96YXJlbGxhLCBIb21hZGUgc2F1c2FnZSwgQmFjb24sIEdhcmxpYywgUGVwcGVyLCBDaGlsbGknO1xuXG4gICAgZm9vZENvbnRhaW5lcjguYXBwZW5kQ2hpbGQocDgpO1xuICAgIGZvb2RDb250YWluZXI4LmFwcGVuZENoaWxkKHBpenphVHlwZTgpO1xuICAgIGZvb2RDb250YWluZXI4LmFwcGVuZENoaWxkKGluZ3JlZGllbnQ4KTtcbiAgICAvLyBlbmQgb2YgOHRoIGZvb2QgY29udGFpbmVyXG5cbiAgICBuYXZDb250ZW50LmFwcGVuZENoaWxkKGZvb2RDb250YWluZXIxKTtcbiAgICBuYXZDb250ZW50LmFwcGVuZENoaWxkKGZvb2RDb250YWluZXIyKTtcbiAgICBuYXZDb250ZW50LmFwcGVuZENoaWxkKGZvb2RDb250YWluZXIzKTtcbiAgICBuYXZDb250ZW50LmFwcGVuZENoaWxkKGZvb2RDb250YWluZXI0KTtcbiAgICBuYXZDb250ZW50LmFwcGVuZENoaWxkKGZvb2RDb250YWluZXI1KTtcbiAgICBuYXZDb250ZW50LmFwcGVuZENoaWxkKGZvb2RDb250YWluZXI2KTtcbiAgICBuYXZDb250ZW50LmFwcGVuZENoaWxkKGZvb2RDb250YWluZXI3KTtcbiAgICBuYXZDb250ZW50LmFwcGVuZENoaWxkKGZvb2RDb250YWluZXI4KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vZENvbnRhaW5lcigpIHtcbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheU1lbnU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiXG5pbXBvcnQgTG9nbyBmcm9tICcuL2ltYWdlcy9naXRIdWJMb2dvLnBuZyc7XG5pbXBvcnQgcGVyc29uUGljdHVyZSBmcm9tICcuL2ltYWdlcy9wZXJzb25QaWMuanBlZyc7XG5pbXBvcnQgZGlzcGxheU1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBkaXNwbGF5SG9tZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IGRpc3BsYXlDb250YWN0IGZyb20gJy4vY29udGFjdCc7XG5cbmZ1bmN0aW9uIGRpc3BsYXlUZW1wbGF0ZSgpIHtcbiAgICBcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBcbiAgICBjb25zdCBuYXZQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdlBhbmVsLmlkID0gJ25hdlBhbmVsJztcblxuICAgIGNvbnN0IGJ1c2luZXNzTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1c2luZXNzTmFtZS5pZCA9ICdidXNpbmVzc05hbWUnO1xuICAgIGJ1c2luZXNzTmFtZS50ZXh0Q29udGVudCA9ICdNb3p6YWZpYXRvJztcblxuICAgIGNvbnN0IGJ0dG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidHRuQ29udGFpbmVyLmlkID0gJ2J0dG5Db250YWluZXInO1xuICAgIFxuICAgIGNvbnN0IGJ0dG4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnR0bjEudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgYnR0bjEuY2xhc3NMaXN0LmFkZCgnYnR0bnMnKTtcblxuICAgIGNvbnN0IGJ0dG4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnR0bjIudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gICAgYnR0bjIuY2xhc3NMaXN0LmFkZCgnYnR0bnMnKTtcblxuICAgIGNvbnN0IGJ0dG4zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnR0bjMudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG4gICAgYnR0bjMuY2xhc3NMaXN0LmFkZCgnYnR0bnMnLCAnc2VsZWN0ZWQnKTtcblxuICAgIGJ0dG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnR0bjEpO1xuICAgIGJ0dG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnR0bjIpO1xuICAgIGJ0dG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnR0bjMpO1xuXG4gICAgbmF2UGFuZWwuYXBwZW5kQ2hpbGQoYnVzaW5lc3NOYW1lKTtcbiAgICBuYXZQYW5lbC5hcHBlbmRDaGlsZChidHRuQ29udGFpbmVyKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2UGFuZWwpO1xuXG4gICAgY29uc3QgbmF2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdkNvbnRlbnQuaWQgPSAnbmF2Q29udGVudCc7XG5cbiAgICAvL3RhYiBzcGVjaWZpYyBjb2RlIGdvZXMgaGVyZVxuICAgIGRpc3BsYXlNZW51KG5hdkNvbnRlbnQpO1xuICAgIC8vIHRhYiBzcGVjaWZpYyBjb2RlIGVuZHMgaGVyZVxuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuYXZDb250ZW50KTtcblxuICAgIGNvbnN0IGdpdEh1YkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBnaXRIdWJJbmZvLmlkID0gJ2dpdEh1YkluZm8nO1xuICAgIGdpdEh1YkluZm8uaW5uZXJIVE1MID0gYENvcHlyaWdodCDCqSAyMDIxIGNow6lqb2huIDxhIGhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL2NoZWpvaG4nIHRhcmdldCA9ICdfYmxhbmsnPjxpbWcgd2lkdGggPSAnMTYgaWQgPSAnZ2l0SHViTG9nbycgc3JjID0gJHtMb2dvfT48L2E+YDtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ2l0SHViSW5mbyk7XG4gIFxuICAgIHJldHVybiBjb250ZW50O1xufVxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpc3BsYXlUZW1wbGF0ZSgpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==