/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

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

    const address = createContactHeaders('address', '1034 Oakwood Ave San Diego, CA 32899');
    
    const timeOpen = createContactHeaders('timeOpen', 'Mon-Fri: 8am-8pm, Fri-Sun: 8am-11pm');

    const phoneNum = createContactHeaders('phoneNum', '(222)-888-777');
    
    const messageUs = createContactHeaders('messageUs', 'Message us');

    const form = document.createElement('form');
    form.id = 'form';

    const nameInputContainer = createInputContainer('Name');

    const emailInputContainer = createInputContainer('Email');
    
    const messageInputContainer = createInputContainer('Type your message...');

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

function createContactHeaders(idName, headerText) {
    const header = document.createElement('p');
    header.className = 'contactInfo';
    header.id = idName;
    header.textContent = headerText;

    return header;
}

function createInputContainer(inputPlaceHolder) {
    const inputContainer = document.createElement('div');
    inputContainer.className = 'inputContainer';

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'inputs';
    if (inputPlaceHolder === 'Type your message...') input.id = 'messageInput';
    input.required = true;

    const placeHolder = document.createElement('span');
    placeHolder.textContent = inputPlaceHolder;
    placeHolder.className = 'placeHolder';

    inputContainer.appendChild(input);
    inputContainer.appendChild(placeHolder);
    
    return inputContainer;
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
    navContent.style.cssText = 'display: flex; flex-flow: column wrap';
    const firstMessage = createMessage('The best pizza in New York City');

    const secondMessage = createMessage('Made with passion since 1908');

    const personPic = new Image(350);
    personPic.src = _images_personPic_jpeg__WEBPACK_IMPORTED_MODULE_0__;
    personPic.className = 'message';
    personPic.id = 'personPic';
    personPic.style.cssText = 'align-self: center;';

    const thirdMessage = createMessage('Visit us or order online!');

    navContent.appendChild(firstMessage);
    navContent.appendChild(secondMessage);
    navContent.appendChild(personPic);
    navContent.appendChild(thirdMessage);
}

function createMessage(homeMessage) {
    const message = document.createElement('div');
    message.className = 'message';
    message.textContent = homeMessage;
    
    return message;
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
    
    const foodContainer1 = createFoodContainer(_images_pizza1_png__WEBPACK_IMPORTED_MODULE_0__, 'Sacilia', '$12', 'Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil');
    
    const foodContainer2 = createFoodContainer(_images_pizza2_png__WEBPACK_IMPORTED_MODULE_1__, 'Gamberi', '$11', 'Tomato sauce, Mozarella, Shrimp, Feta cheese, Olives, Basil');

    const foodContainer3 = createFoodContainer(_images_pizza3_png__WEBPACK_IMPORTED_MODULE_2__, 'Pepe', '$11', 'Tomato sauce, Mozarella, Chilli flakes, Olives, Basil');

    const foodContainer4 = createFoodContainer(_images_pizza4_png__WEBPACK_IMPORTED_MODULE_3__, 'Hawaiian', '$13', 'Tomato sauce, Bacon, Pinapple, Olives, Basil');

    const foodContainer5 = createFoodContainer(_images_pizza5_png__WEBPACK_IMPORTED_MODULE_4__, 'Colorato', '$10', 'Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil');
    
    const foodContainer6 = createFoodContainer(_images_pizza6_png__WEBPACK_IMPORTED_MODULE_5__, 'Pomodoro', '$16', 'Tomato sauce, Mozarella, Tomato, Onion, Feta Cheese, Chilli peppers');
    
    const foodContainer7 = createFoodContainer(_images_pizza7_png__WEBPACK_IMPORTED_MODULE_6__, 'Crema', '$15', 'White sauce, Mozarella, Shrimp, Salmon, Pineapple, Olives, Basil');

    const foodContainer8 = createFoodContainer(_images_pizza8_png__WEBPACK_IMPORTED_MODULE_7__, 'Carne', '$14', 'Tomato sauce, Mozarella, Homade sausage, Bacon, Garlic, Pepper, Chilli');

    navContent.appendChild(foodContainer1);
    navContent.appendChild(foodContainer2);
    navContent.appendChild(foodContainer3);
    navContent.appendChild(foodContainer4);
    navContent.appendChild(foodContainer5);
    navContent.appendChild(foodContainer6);
    navContent.appendChild(foodContainer7);
    navContent.appendChild(foodContainer8);
}

function createFoodContainer(pizzaImage, pizzaKind, price, ingredientList) {
    const foodContainer = document.createElement('div');
    foodContainer.className = 'foodContainer';

    const pic = new Image(130);
    pic.src = pizzaImage;
    pic.className = 'pizzaImages';

    const pizzaType = document.createElement('div');
    pizzaType.innerHTML = `${pizzaKind} <em style = 'font-weight: normal; font-size: 20px;'>${price}</em>`;
    pizzaType.className = 'pizzaType';

    const ingredients = document.createElement('p');
    ingredients.className = 'ingredients';
    ingredients.textContent = `${ingredientList}`;

    foodContainer.appendChild(pic);
    foodContainer.appendChild(pizzaType);
    foodContainer.appendChild(ingredients);

    return foodContainer;
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
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");







function displayTemplate() {
    
    const content = document.getElementById('content');
    
    const navPanel = document.createElement('div');
    navPanel.id = 'navPanel';

    const businessName = document.createElement('div');
    businessName.id = 'businessName';
    businessName.textContent = 'Mozzafiato';

    const bttnContainer = document.createElement('div');
    bttnContainer.id = 'bttnContainer';

    const bttn1 = createNavBttns('Home');
    
    const bttn2 = createNavBttns('Menu');

    const bttn3 = createNavBttns('Contact');

    bttnContainer.appendChild(bttn1);
    bttnContainer.appendChild(bttn2);
    bttnContainer.appendChild(bttn3);

    navPanel.appendChild(businessName);
    navPanel.appendChild(bttnContainer);

    content.appendChild(navPanel);

    const navContent = document.createElement('div');
    navContent.id = 'navContent';

    content.appendChild(navContent);

    const gitHubInfo = document.createElement('div');
    gitHubInfo.id = 'gitHubInfo';
    gitHubInfo.innerHTML = `Copyright © 2021 chéjohn <a href = 'https://github.com/chejohn' target = '_blank'><img width = '16 id = 'gitHubLogo' src = ${_images_gitHubLogo_png__WEBPACK_IMPORTED_MODULE_0__}></a>`;

    content.appendChild(gitHubInfo);
  
    return navContent;
}

function changeTab() {
    const bttns = navContent.previousElementSibling.childNodes[1].childNodes;

    for (let bttn of bttns) {
        if (bttn.classList.length === 2) {
            bttn.classList.remove('selected');
            this.classList.add('selected');
            break;
        }
    }

    while (navContent.firstChild) {
        navContent.removeChild(navContent.firstChild);
    }

    if (this.textContent === 'Home') (0,_home__WEBPACK_IMPORTED_MODULE_2__.default)(navContent);
    else if (this.textContent === 'Menu') (0,_menu__WEBPACK_IMPORTED_MODULE_1__.default)(navContent);
    else (0,_contact__WEBPACK_IMPORTED_MODULE_3__.default)(navContent);

}

function createNavBttns(bttnText) {
    const button = document.createElement('button');
    button.textContent = bttnText;
    button.className = 'bttns';
    button.addEventListener('click', changeTab)

    if (bttnText == 'Home') button.classList.add('selected');
    return button;
}

const navContent = displayTemplate();
(0,_home__WEBPACK_IMPORTED_MODULE_2__.default)(navContent);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUMsOENBQVc7QUFDaEQsMENBQTBDLDhDQUFXO0FBQ3JELFNBQVMsaURBQWM7O0FBRXZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOENBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzP2UzMjAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJcblxuXG5mdW5jdGlvbiBkaXNwbGF5Q29udGFjdChuYXZDb250ZW50KSB7XG4gICAgXG4gICAgbmF2Q29udGVudC5zdHlsZS5jc3NUZXh0ID0gJ2Rpc3BsYXk6IGZsZXg7IGZsZXgtZmxvdzogY29sdW1uIHdyYXA7IHRleHQtYWxpZ246IGxlZnQ7JztcblxuICAgIGNvbnN0IGFkZHJlc3MgPSBjcmVhdGVDb250YWN0SGVhZGVycygnYWRkcmVzcycsICcxMDM0IE9ha3dvb2QgQXZlIFNhbiBEaWVnbywgQ0EgMzI4OTknKTtcbiAgICBcbiAgICBjb25zdCB0aW1lT3BlbiA9IGNyZWF0ZUNvbnRhY3RIZWFkZXJzKCd0aW1lT3BlbicsICdNb24tRnJpOiA4YW0tOHBtLCBGcmktU3VuOiA4YW0tMTFwbScpO1xuXG4gICAgY29uc3QgcGhvbmVOdW0gPSBjcmVhdGVDb250YWN0SGVhZGVycygncGhvbmVOdW0nLCAnKDIyMiktODg4LTc3NycpO1xuICAgIFxuICAgIGNvbnN0IG1lc3NhZ2VVcyA9IGNyZWF0ZUNvbnRhY3RIZWFkZXJzKCdtZXNzYWdlVXMnLCAnTWVzc2FnZSB1cycpO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLmlkID0gJ2Zvcm0nO1xuXG4gICAgY29uc3QgbmFtZUlucHV0Q29udGFpbmVyID0gY3JlYXRlSW5wdXRDb250YWluZXIoJ05hbWUnKTtcblxuICAgIGNvbnN0IGVtYWlsSW5wdXRDb250YWluZXIgPSBjcmVhdGVJbnB1dENvbnRhaW5lcignRW1haWwnKTtcbiAgICBcbiAgICBjb25zdCBtZXNzYWdlSW5wdXRDb250YWluZXIgPSBjcmVhdGVJbnB1dENvbnRhaW5lcignVHlwZSB5b3VyIG1lc3NhZ2UuLi4nKTtcblxuICAgIGNvbnN0IHN1bWJpdEJ0dG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHN1bWJpdEJ0dG4udHlwZSA9ICdzdWJtaXQnO1xuICAgIHN1bWJpdEJ0dG4udGV4dENvbnRlbnQgPSAnU3VibWl0JztcblxuICAgIGNvbnN0IGdvb2dsZU1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdvb2dsZU1hcC5pZCA9ICdnb29nbGVNYXAnO1xuICAgIGdvb2dsZU1hcC5pbm5lckhUTUwgPSBgPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMjYhMW0xMiExbTMhMWQyMzAwNzIuMzQwNzA1NDMxMzYhMmQtMTIyLjU3NTg0NzY5MzYwMjE3ITNkMzcuOTE1MTQzMzkyMTkzMDk0ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSE0bTExITNlMCE0bTMhM20yITFkMzcuNzc4MDY3ODk5OTk5OTk2ITJkLTEyMi40NTEyMTgzITRtNSExczB4ODA4NTgwYmIwNTgzNjVmNyUzQTB4ZmQ1ZWUxYjc1ZTUzOWQ0MSEyc21jZG9uYWxkJiMzOTtzJTIwc2FuJTIwZnJhbmNpc2NvITNtMiExZDM3Ljc3OTg3MTI5OTk5OTk5NiEyZC0xMjIuNDMxNzE3MiE1ZTAhM20yITFzZW4hMnN1cyE0djE2Mjk5MTYzMzIzMTQhNW0yITFzZW4hMnN1c1wiIHN0eWxlPVwiYm9yZGVyOjA7XCIgYWxsb3dmdWxsc2NyZWVuPVwiXCIgbG9hZGluZz1cImxhenlcIj48L2lmcmFtZT5gO1xuXG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKG5hbWVJbnB1dENvbnRhaW5lcik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChlbWFpbElucHV0Q29udGFpbmVyKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKG1lc3NhZ2VJbnB1dENvbnRhaW5lcik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdW1iaXRCdHRuKTtcblxuICAgIG5hdkNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG4gICAgbmF2Q29udGVudC5hcHBlbmRDaGlsZCh0aW1lT3Blbik7XG4gICAgbmF2Q29udGVudC5hcHBlbmRDaGlsZChwaG9uZU51bSk7XG4gICAgbmF2Q29udGVudC5hcHBlbmRDaGlsZChtZXNzYWdlVXMpO1xuICAgIG5hdkNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgbmF2Q29udGVudC5hcHBlbmRDaGlsZChnb29nbGVNYXApO1xuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RIZWFkZXJzKGlkTmFtZSwgaGVhZGVyVGV4dCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBoZWFkZXIuY2xhc3NOYW1lID0gJ2NvbnRhY3RJbmZvJztcbiAgICBoZWFkZXIuaWQgPSBpZE5hbWU7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gaGVhZGVyVGV4dDtcblxuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUlucHV0Q29udGFpbmVyKGlucHV0UGxhY2VIb2xkZXIpIHtcbiAgICBjb25zdCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlucHV0Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdpbnB1dENvbnRhaW5lcic7XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICBpbnB1dC5jbGFzc05hbWUgPSAnaW5wdXRzJztcbiAgICBpZiAoaW5wdXRQbGFjZUhvbGRlciA9PT0gJ1R5cGUgeW91ciBtZXNzYWdlLi4uJykgaW5wdXQuaWQgPSAnbWVzc2FnZUlucHV0JztcbiAgICBpbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICBjb25zdCBwbGFjZUhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBwbGFjZUhvbGRlci50ZXh0Q29udGVudCA9IGlucHV0UGxhY2VIb2xkZXI7XG4gICAgcGxhY2VIb2xkZXIuY2xhc3NOYW1lID0gJ3BsYWNlSG9sZGVyJztcblxuICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChwbGFjZUhvbGRlcik7XG4gICAgXG4gICAgcmV0dXJuIGlucHV0Q29udGFpbmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5Q29udGFjdCIsIlxuaW1wb3J0IHBlcnNvblBpY3R1cmUgZnJvbSAnLi9pbWFnZXMvcGVyc29uUGljLmpwZWcnO1xuXG5mdW5jdGlvbiBkaXNwbGF5SG9tZShuYXZDb250ZW50KSB7XG4gICAgbmF2Q29udGVudC5zdHlsZS5jc3NUZXh0ID0gJ2Rpc3BsYXk6IGZsZXg7IGZsZXgtZmxvdzogY29sdW1uIHdyYXAnO1xuICAgIGNvbnN0IGZpcnN0TWVzc2FnZSA9IGNyZWF0ZU1lc3NhZ2UoJ1RoZSBiZXN0IHBpenphIGluIE5ldyBZb3JrIENpdHknKTtcblxuICAgIGNvbnN0IHNlY29uZE1lc3NhZ2UgPSBjcmVhdGVNZXNzYWdlKCdNYWRlIHdpdGggcGFzc2lvbiBzaW5jZSAxOTA4Jyk7XG5cbiAgICBjb25zdCBwZXJzb25QaWMgPSBuZXcgSW1hZ2UoMzUwKTtcbiAgICBwZXJzb25QaWMuc3JjID0gcGVyc29uUGljdHVyZTtcbiAgICBwZXJzb25QaWMuY2xhc3NOYW1lID0gJ21lc3NhZ2UnO1xuICAgIHBlcnNvblBpYy5pZCA9ICdwZXJzb25QaWMnO1xuICAgIHBlcnNvblBpYy5zdHlsZS5jc3NUZXh0ID0gJ2FsaWduLXNlbGY6IGNlbnRlcjsnO1xuXG4gICAgY29uc3QgdGhpcmRNZXNzYWdlID0gY3JlYXRlTWVzc2FnZSgnVmlzaXQgdXMgb3Igb3JkZXIgb25saW5lIScpO1xuXG4gICAgbmF2Q29udGVudC5hcHBlbmRDaGlsZChmaXJzdE1lc3NhZ2UpO1xuICAgIG5hdkNvbnRlbnQuYXBwZW5kQ2hpbGQoc2Vjb25kTWVzc2FnZSk7XG4gICAgbmF2Q29udGVudC5hcHBlbmRDaGlsZChwZXJzb25QaWMpO1xuICAgIG5hdkNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcmRNZXNzYWdlKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVzc2FnZShob21lTWVzc2FnZSkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZXNzYWdlLmNsYXNzTmFtZSA9ICdtZXNzYWdlJztcbiAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gaG9tZU1lc3NhZ2U7XG4gICAgXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlIb21lOyIsIlxuXG5pbXBvcnQgcGl6emExIGZyb20gJy4vaW1hZ2VzL3BpenphMS5wbmcnO1xuaW1wb3J0IHBpenphMiBmcm9tICcuL2ltYWdlcy9waXp6YTIucG5nJztcbmltcG9ydCBwaXp6YTMgZnJvbSAnLi9pbWFnZXMvcGl6emEzLnBuZyc7XG5pbXBvcnQgcGl6emE0IGZyb20gJy4vaW1hZ2VzL3BpenphNC5wbmcnO1xuaW1wb3J0IHBpenphNSBmcm9tICcuL2ltYWdlcy9waXp6YTUucG5nJztcbmltcG9ydCBwaXp6YTYgZnJvbSAnLi9pbWFnZXMvcGl6emE2LnBuZyc7XG5pbXBvcnQgcGl6emE3IGZyb20gJy4vaW1hZ2VzL3BpenphNy5wbmcnO1xuaW1wb3J0IHBpenphOCBmcm9tICcuL2ltYWdlcy9waXp6YTgucG5nJztcblxuXG5mdW5jdGlvbiBkaXNwbGF5TWVudShuYXZDb250ZW50KSB7XG4gICAgXG4gICAgbmF2Q29udGVudC5zdHlsZS5jc3NUZXh0ID0gJ2Rpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5OyBmbGV4LXdyYXA6IHdyYXAnO1xuICAgIFxuICAgIGNvbnN0IGZvb2RDb250YWluZXIxID0gY3JlYXRlRm9vZENvbnRhaW5lcihwaXp6YTEsICdTYWNpbGlhJywgJyQxMicsICdUb21hdG8gc2F1Y2UsIE1vemFyZWxsYSwgVG9tYXRvLCBIb21lbWFkZSBzYXVzYWdlLCBHYXJsaWMsIEJhc2lsJyk7XG4gICAgXG4gICAgY29uc3QgZm9vZENvbnRhaW5lcjIgPSBjcmVhdGVGb29kQ29udGFpbmVyKHBpenphMiwgJ0dhbWJlcmknLCAnJDExJywgJ1RvbWF0byBzYXVjZSwgTW96YXJlbGxhLCBTaHJpbXAsIEZldGEgY2hlZXNlLCBPbGl2ZXMsIEJhc2lsJyk7XG5cbiAgICBjb25zdCBmb29kQ29udGFpbmVyMyA9IGNyZWF0ZUZvb2RDb250YWluZXIocGl6emEzLCAnUGVwZScsICckMTEnLCAnVG9tYXRvIHNhdWNlLCBNb3phcmVsbGEsIENoaWxsaSBmbGFrZXMsIE9saXZlcywgQmFzaWwnKTtcblxuICAgIGNvbnN0IGZvb2RDb250YWluZXI0ID0gY3JlYXRlRm9vZENvbnRhaW5lcihwaXp6YTQsICdIYXdhaWlhbicsICckMTMnLCAnVG9tYXRvIHNhdWNlLCBCYWNvbiwgUGluYXBwbGUsIE9saXZlcywgQmFzaWwnKTtcblxuICAgIGNvbnN0IGZvb2RDb250YWluZXI1ID0gY3JlYXRlRm9vZENvbnRhaW5lcihwaXp6YTUsICdDb2xvcmF0bycsICckMTAnLCAnVG9tYXRvIHNhdWNlLCBNb3phcmVsbGEsIE9uaW9uLCBQZXBwZXIsIENoYW1waWdub25zLCBCYXNpbCcpO1xuICAgIFxuICAgIGNvbnN0IGZvb2RDb250YWluZXI2ID0gY3JlYXRlRm9vZENvbnRhaW5lcihwaXp6YTYsICdQb21vZG9ybycsICckMTYnLCAnVG9tYXRvIHNhdWNlLCBNb3phcmVsbGEsIFRvbWF0bywgT25pb24sIEZldGEgQ2hlZXNlLCBDaGlsbGkgcGVwcGVycycpO1xuICAgIFxuICAgIGNvbnN0IGZvb2RDb250YWluZXI3ID0gY3JlYXRlRm9vZENvbnRhaW5lcihwaXp6YTcsICdDcmVtYScsICckMTUnLCAnV2hpdGUgc2F1Y2UsIE1vemFyZWxsYSwgU2hyaW1wLCBTYWxtb24sIFBpbmVhcHBsZSwgT2xpdmVzLCBCYXNpbCcpO1xuXG4gICAgY29uc3QgZm9vZENvbnRhaW5lcjggPSBjcmVhdGVGb29kQ29udGFpbmVyKHBpenphOCwgJ0Nhcm5lJywgJyQxNCcsICdUb21hdG8gc2F1Y2UsIE1vemFyZWxsYSwgSG9tYWRlIHNhdXNhZ2UsIEJhY29uLCBHYXJsaWMsIFBlcHBlciwgQ2hpbGxpJyk7XG5cbiAgICBuYXZDb250ZW50LmFwcGVuZENoaWxkKGZvb2RDb250YWluZXIxKTtcbiAgICBuYXZDb250ZW50LmFwcGVuZENoaWxkKGZvb2RDb250YWluZXIyKTtcbiAgICBuYXZDb250ZW50LmFwcGVuZENoaWxkKGZvb2RDb250YWluZXIzKTtcbiAgICBuYXZDb250ZW50LmFwcGVuZENoaWxkKGZvb2RDb250YWluZXI0KTtcbiAgICBuYXZDb250ZW50LmFwcGVuZENoaWxkKGZvb2RDb250YWluZXI1KTtcbiAgICBuYXZDb250ZW50LmFwcGVuZENoaWxkKGZvb2RDb250YWluZXI2KTtcbiAgICBuYXZDb250ZW50LmFwcGVuZENoaWxkKGZvb2RDb250YWluZXI3KTtcbiAgICBuYXZDb250ZW50LmFwcGVuZENoaWxkKGZvb2RDb250YWluZXI4KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vZENvbnRhaW5lcihwaXp6YUltYWdlLCBwaXp6YUtpbmQsIHByaWNlLCBpbmdyZWRpZW50TGlzdCkge1xuICAgIGNvbnN0IGZvb2RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb29kQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdmb29kQ29udGFpbmVyJztcblxuICAgIGNvbnN0IHBpYyA9IG5ldyBJbWFnZSgxMzApO1xuICAgIHBpYy5zcmMgPSBwaXp6YUltYWdlO1xuICAgIHBpYy5jbGFzc05hbWUgPSAncGl6emFJbWFnZXMnO1xuXG4gICAgY29uc3QgcGl6emFUeXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGl6emFUeXBlLmlubmVySFRNTCA9IGAke3BpenphS2luZH0gPGVtIHN0eWxlID0gJ2ZvbnQtd2VpZ2h0OiBub3JtYWw7IGZvbnQtc2l6ZTogMjBweDsnPiR7cHJpY2V9PC9lbT5gO1xuICAgIHBpenphVHlwZS5jbGFzc05hbWUgPSAncGl6emFUeXBlJztcblxuICAgIGNvbnN0IGluZ3JlZGllbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGluZ3JlZGllbnRzLmNsYXNzTmFtZSA9ICdpbmdyZWRpZW50cyc7XG4gICAgaW5ncmVkaWVudHMudGV4dENvbnRlbnQgPSBgJHtpbmdyZWRpZW50TGlzdH1gO1xuXG4gICAgZm9vZENvbnRhaW5lci5hcHBlbmRDaGlsZChwaWMpO1xuICAgIGZvb2RDb250YWluZXIuYXBwZW5kQ2hpbGQocGl6emFUeXBlKTtcbiAgICBmb29kQ29udGFpbmVyLmFwcGVuZENoaWxkKGluZ3JlZGllbnRzKTtcblxuICAgIHJldHVybiBmb29kQ29udGFpbmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5TWVudTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJcbmltcG9ydCBMb2dvIGZyb20gJy4vaW1hZ2VzL2dpdEh1YkxvZ28ucG5nJztcbmltcG9ydCBkaXNwbGF5TWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IGRpc3BsYXlIb21lIGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgZGlzcGxheUNvbnRhY3QgZnJvbSAnLi9jb250YWN0JztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5mdW5jdGlvbiBkaXNwbGF5VGVtcGxhdGUoKSB7XG4gICAgXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgXG4gICAgY29uc3QgbmF2UGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXZQYW5lbC5pZCA9ICduYXZQYW5lbCc7XG5cbiAgICBjb25zdCBidXNpbmVzc05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXNpbmVzc05hbWUuaWQgPSAnYnVzaW5lc3NOYW1lJztcbiAgICBidXNpbmVzc05hbWUudGV4dENvbnRlbnQgPSAnTW96emFmaWF0byc7XG5cbiAgICBjb25zdCBidHRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnR0bkNvbnRhaW5lci5pZCA9ICdidHRuQ29udGFpbmVyJztcblxuICAgIGNvbnN0IGJ0dG4xID0gY3JlYXRlTmF2QnR0bnMoJ0hvbWUnKTtcbiAgICBcbiAgICBjb25zdCBidHRuMiA9IGNyZWF0ZU5hdkJ0dG5zKCdNZW51Jyk7XG5cbiAgICBjb25zdCBidHRuMyA9IGNyZWF0ZU5hdkJ0dG5zKCdDb250YWN0Jyk7XG5cbiAgICBidHRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0dG4xKTtcbiAgICBidHRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0dG4yKTtcbiAgICBidHRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0dG4zKTtcblxuICAgIG5hdlBhbmVsLmFwcGVuZENoaWxkKGJ1c2luZXNzTmFtZSk7XG4gICAgbmF2UGFuZWwuYXBwZW5kQ2hpbGQoYnR0bkNvbnRhaW5lcik7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdlBhbmVsKTtcblxuICAgIGNvbnN0IG5hdkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXZDb250ZW50LmlkID0gJ25hdkNvbnRlbnQnO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuYXZDb250ZW50KTtcblxuICAgIGNvbnN0IGdpdEh1YkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBnaXRIdWJJbmZvLmlkID0gJ2dpdEh1YkluZm8nO1xuICAgIGdpdEh1YkluZm8uaW5uZXJIVE1MID0gYENvcHlyaWdodCDCqSAyMDIxIGNow6lqb2huIDxhIGhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL2NoZWpvaG4nIHRhcmdldCA9ICdfYmxhbmsnPjxpbWcgd2lkdGggPSAnMTYgaWQgPSAnZ2l0SHViTG9nbycgc3JjID0gJHtMb2dvfT48L2E+YDtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ2l0SHViSW5mbyk7XG4gIFxuICAgIHJldHVybiBuYXZDb250ZW50O1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VUYWIoKSB7XG4gICAgY29uc3QgYnR0bnMgPSBuYXZDb250ZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzO1xuXG4gICAgZm9yIChsZXQgYnR0biBvZiBidHRucykge1xuICAgICAgICBpZiAoYnR0bi5jbGFzc0xpc3QubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICBidHRuLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHdoaWxlIChuYXZDb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgbmF2Q29udGVudC5yZW1vdmVDaGlsZChuYXZDb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnRleHRDb250ZW50ID09PSAnSG9tZScpIGRpc3BsYXlIb21lKG5hdkNvbnRlbnQpO1xuICAgIGVsc2UgaWYgKHRoaXMudGV4dENvbnRlbnQgPT09ICdNZW51JykgZGlzcGxheU1lbnUobmF2Q29udGVudCk7XG4gICAgZWxzZSBkaXNwbGF5Q29udGFjdChuYXZDb250ZW50KTtcblxufVxuXG5mdW5jdGlvbiBjcmVhdGVOYXZCdHRucyhidHRuVGV4dCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGJ0dG5UZXh0O1xuICAgIGJ1dHRvbi5jbGFzc05hbWUgPSAnYnR0bnMnO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZVRhYilcblxuICAgIGlmIChidHRuVGV4dCA9PSAnSG9tZScpIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIHJldHVybiBidXR0b247XG59XG5cbmNvbnN0IG5hdkNvbnRlbnQgPSBkaXNwbGF5VGVtcGxhdGUoKTtcbmRpc3BsYXlIb21lKG5hdkNvbnRlbnQpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=