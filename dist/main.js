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
    personPic.classList.add('message');
    personPic.id = 'personPic';
    personPic.style.cssText = 'align-self: center;'

    const thirdMessage = createMessage('Visit us or order online!');

    navContent.appendChild(firstMessage);
    navContent.appendChild(secondMessage);
    navContent.appendChild(personPic)
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

    //tab specific code goes here
    // tab specific code ends here

    content.appendChild(navContent);

    const gitHubInfo = document.createElement('div');
    gitHubInfo.id = 'gitHubInfo';
    gitHubInfo.innerHTML = `Copyright © 2021 chéjohn <a href = 'https://github.com/chejohn' target = '_blank'><img width = '16 id = 'gitHubLogo' src = ${_images_gitHubLogo_png__WEBPACK_IMPORTED_MODULE_0__}></a>`;

    content.appendChild(gitHubInfo);
  
    return navContent;
}

function changeTab() {
    const bttns = navContent.previousElementSibling.childNodes[1].childNodes;

    for (let i = 0; i < 3; i++) {
        if (bttns[i].classList[1] === 'selected')
            bttns[i].classList.remove('selected');
            this.classList.add('selected');
    }

    while (navContent.firstChild) {
        navContent.removeChild(navContent.firstChild);
    }

    if (this.textContent === 'Home') (0,_home__WEBPACK_IMPORTED_MODULE_3__.default)(navContent);
    else if (this.textContent === 'Menu') (0,_menu__WEBPACK_IMPORTED_MODULE_2__.default)(navContent);
    else (0,_contact__WEBPACK_IMPORTED_MODULE_4__.default)(navContent);

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
(0,_home__WEBPACK_IMPORTED_MODULE_3__.default)(navContent);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDLDhDQUFXO0FBQ2hELDBDQUEwQyw4Q0FBVztBQUNyRCxTQUFTLGlEQUFjOztBQUV2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhDQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5mdW5jdGlvbiBkaXNwbGF5Q29udGFjdChuYXZDb250ZW50KSB7XG4gICAgXG4gICAgbmF2Q29udGVudC5zdHlsZS5jc3NUZXh0ID0gJ2Rpc3BsYXk6IGZsZXg7IGZsZXgtZmxvdzogY29sdW1uIHdyYXA7IHRleHQtYWxpZ246IGxlZnQ7JztcblxuICAgIGNvbnN0IGFkZHJlc3MgPSBjcmVhdGVDb250YWN0SGVhZGVycygnYWRkcmVzcycsICcxMDM0IE9ha3dvb2QgQXZlIFNhbiBEaWVnbywgQ0EgMzI4OTknKTtcbiAgICBcbiAgICBjb25zdCB0aW1lT3BlbiA9IGNyZWF0ZUNvbnRhY3RIZWFkZXJzKCd0aW1lT3BlbicsICdNb24tRnJpOiA4YW0tOHBtLCBGcmktU3VuOiA4YW0tMTFwbScpO1xuXG4gICAgY29uc3QgcGhvbmVOdW0gPSBjcmVhdGVDb250YWN0SGVhZGVycygncGhvbmVOdW0nLCAnKDIyMiktODg4LTc3NycpO1xuICAgIFxuICAgIGNvbnN0IG1lc3NhZ2VVcyA9IGNyZWF0ZUNvbnRhY3RIZWFkZXJzKCdtZXNzYWdlVXMnLCAnTWVzc2FnZSB1cycpO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLmlkID0gJ2Zvcm0nO1xuXG4gICAgY29uc3QgbmFtZUlucHV0Q29udGFpbmVyID0gY3JlYXRlSW5wdXRDb250YWluZXIoJ05hbWUnKTtcblxuICAgIGNvbnN0IGVtYWlsSW5wdXRDb250YWluZXIgPSBjcmVhdGVJbnB1dENvbnRhaW5lcignRW1haWwnKTtcbiAgICBcbiAgICBjb25zdCBtZXNzYWdlSW5wdXRDb250YWluZXIgPSBjcmVhdGVJbnB1dENvbnRhaW5lcignVHlwZSB5b3VyIG1lc3NhZ2UuLi4nKTtcblxuICAgIGNvbnN0IHN1bWJpdEJ0dG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHN1bWJpdEJ0dG4udHlwZSA9ICdzdWJtaXQnO1xuICAgIHN1bWJpdEJ0dG4udGV4dENvbnRlbnQgPSAnU3VibWl0JztcblxuICAgIGNvbnN0IGdvb2dsZU1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdvb2dsZU1hcC5pZCA9ICdnb29nbGVNYXAnO1xuICAgIGdvb2dsZU1hcC5pbm5lckhUTUwgPSBgPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMjYhMW0xMiExbTMhMWQyMzAwNzIuMzQwNzA1NDMxMzYhMmQtMTIyLjU3NTg0NzY5MzYwMjE3ITNkMzcuOTE1MTQzMzkyMTkzMDk0ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSE0bTExITNlMCE0bTMhM20yITFkMzcuNzc4MDY3ODk5OTk5OTk2ITJkLTEyMi40NTEyMTgzITRtNSExczB4ODA4NTgwYmIwNTgzNjVmNyUzQTB4ZmQ1ZWUxYjc1ZTUzOWQ0MSEyc21jZG9uYWxkJiMzOTtzJTIwc2FuJTIwZnJhbmNpc2NvITNtMiExZDM3Ljc3OTg3MTI5OTk5OTk5NiEyZC0xMjIuNDMxNzE3MiE1ZTAhM20yITFzZW4hMnN1cyE0djE2Mjk5MTYzMzIzMTQhNW0yITFzZW4hMnN1c1wiIHN0eWxlPVwiYm9yZGVyOjA7XCIgYWxsb3dmdWxsc2NyZWVuPVwiXCIgbG9hZGluZz1cImxhenlcIj48L2lmcmFtZT5gO1xuXG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKG5hbWVJbnB1dENvbnRhaW5lcik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChlbWFpbElucHV0Q29udGFpbmVyKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKG1lc3NhZ2VJbnB1dENvbnRhaW5lcik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdW1iaXRCdHRuKTtcblxuICAgIG5hdkNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG4gICAgbmF2Q29udGVudC5hcHBlbmRDaGlsZCh0aW1lT3Blbik7XG4gICAgbmF2Q29udGVudC5hcHBlbmRDaGlsZChwaG9uZU51bSk7XG4gICAgbmF2Q29udGVudC5hcHBlbmRDaGlsZChtZXNzYWdlVXMpO1xuICAgIG5hdkNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgbmF2Q29udGVudC5hcHBlbmRDaGlsZChnb29nbGVNYXApO1xuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RIZWFkZXJzKGlkTmFtZSwgaGVhZGVyVGV4dCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBoZWFkZXIuY2xhc3NOYW1lID0gJ2NvbnRhY3RJbmZvJztcbiAgICBoZWFkZXIuaWQgPSBpZE5hbWU7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gaGVhZGVyVGV4dDtcblxuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUlucHV0Q29udGFpbmVyKGlucHV0UGxhY2VIb2xkZXIpIHtcbiAgICBjb25zdCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlucHV0Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdpbnB1dENvbnRhaW5lcic7XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICBpbnB1dC5jbGFzc05hbWUgPSAnaW5wdXRzJztcbiAgICBpZiAoaW5wdXRQbGFjZUhvbGRlciA9PT0gJ1R5cGUgeW91ciBtZXNzYWdlLi4uJykgaW5wdXQuaWQgPSAnbWVzc2FnZUlucHV0JztcbiAgICBpbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICBjb25zdCBwbGFjZUhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBwbGFjZUhvbGRlci50ZXh0Q29udGVudCA9IGlucHV0UGxhY2VIb2xkZXI7XG4gICAgcGxhY2VIb2xkZXIuY2xhc3NOYW1lID0gJ3BsYWNlSG9sZGVyJztcblxuICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChwbGFjZUhvbGRlcik7XG4gICAgXG4gICAgcmV0dXJuIGlucHV0Q29udGFpbmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5Q29udGFjdCIsIlxuaW1wb3J0IHBlcnNvblBpY3R1cmUgZnJvbSAnLi9pbWFnZXMvcGVyc29uUGljLmpwZWcnO1xuXG5mdW5jdGlvbiBkaXNwbGF5SG9tZShuYXZDb250ZW50KSB7XG4gICAgbmF2Q29udGVudC5zdHlsZS5jc3NUZXh0ID0gJ2Rpc3BsYXk6IGZsZXg7IGZsZXgtZmxvdzogY29sdW1uIHdyYXAnO1xuICAgIGNvbnN0IGZpcnN0TWVzc2FnZSA9IGNyZWF0ZU1lc3NhZ2UoJ1RoZSBiZXN0IHBpenphIGluIE5ldyBZb3JrIENpdHknKTtcblxuICAgIGNvbnN0IHNlY29uZE1lc3NhZ2UgPSBjcmVhdGVNZXNzYWdlKCdNYWRlIHdpdGggcGFzc2lvbiBzaW5jZSAxOTA4Jyk7XG5cbiAgICBjb25zdCBwZXJzb25QaWMgPSBuZXcgSW1hZ2UoMzUwKTtcbiAgICBwZXJzb25QaWMuc3JjID0gcGVyc29uUGljdHVyZTtcbiAgICBwZXJzb25QaWMuY2xhc3NMaXN0LmFkZCgnbWVzc2FnZScpO1xuICAgIHBlcnNvblBpYy5pZCA9ICdwZXJzb25QaWMnO1xuICAgIHBlcnNvblBpYy5zdHlsZS5jc3NUZXh0ID0gJ2FsaWduLXNlbGY6IGNlbnRlcjsnXG5cbiAgICBjb25zdCB0aGlyZE1lc3NhZ2UgPSBjcmVhdGVNZXNzYWdlKCdWaXNpdCB1cyBvciBvcmRlciBvbmxpbmUhJyk7XG5cbiAgICBuYXZDb250ZW50LmFwcGVuZENoaWxkKGZpcnN0TWVzc2FnZSk7XG4gICAgbmF2Q29udGVudC5hcHBlbmRDaGlsZChzZWNvbmRNZXNzYWdlKTtcbiAgICBuYXZDb250ZW50LmFwcGVuZENoaWxkKHBlcnNvblBpYylcbiAgICBuYXZDb250ZW50LmFwcGVuZENoaWxkKHRoaXJkTWVzc2FnZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lc3NhZ2UoaG9tZU1lc3NhZ2UpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVzc2FnZS5jbGFzc05hbWUgPSAnbWVzc2FnZSc7XG4gICAgbWVzc2FnZS50ZXh0Q29udGVudCA9IGhvbWVNZXNzYWdlO1xuICAgIFxuICAgIHJldHVybiBtZXNzYWdlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5SG9tZTsiLCJcblxuaW1wb3J0IHBpenphMSBmcm9tICcuL2ltYWdlcy9waXp6YTEucG5nJztcbmltcG9ydCBwaXp6YTIgZnJvbSAnLi9pbWFnZXMvcGl6emEyLnBuZyc7XG5pbXBvcnQgcGl6emEzIGZyb20gJy4vaW1hZ2VzL3BpenphMy5wbmcnO1xuaW1wb3J0IHBpenphNCBmcm9tICcuL2ltYWdlcy9waXp6YTQucG5nJztcbmltcG9ydCBwaXp6YTUgZnJvbSAnLi9pbWFnZXMvcGl6emE1LnBuZyc7XG5pbXBvcnQgcGl6emE2IGZyb20gJy4vaW1hZ2VzL3BpenphNi5wbmcnO1xuaW1wb3J0IHBpenphNyBmcm9tICcuL2ltYWdlcy9waXp6YTcucG5nJztcbmltcG9ydCBwaXp6YTggZnJvbSAnLi9pbWFnZXMvcGl6emE4LnBuZyc7XG5cblxuZnVuY3Rpb24gZGlzcGxheU1lbnUobmF2Q29udGVudCkge1xuICAgIFxuICAgIG5hdkNvbnRlbnQuc3R5bGUuY3NzVGV4dCA9ICdkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTsgZmxleC13cmFwOiB3cmFwJztcbiAgICBcbiAgICBjb25zdCBmb29kQ29udGFpbmVyMSA9IGNyZWF0ZUZvb2RDb250YWluZXIocGl6emExLCAnU2FjaWxpYScsICckMTInLCAnVG9tYXRvIHNhdWNlLCBNb3phcmVsbGEsIFRvbWF0bywgSG9tZW1hZGUgc2F1c2FnZSwgR2FybGljLCBCYXNpbCcpO1xuICAgIFxuICAgIGNvbnN0IGZvb2RDb250YWluZXIyID0gY3JlYXRlRm9vZENvbnRhaW5lcihwaXp6YTIsICdHYW1iZXJpJywgJyQxMScsICdUb21hdG8gc2F1Y2UsIE1vemFyZWxsYSwgU2hyaW1wLCBGZXRhIGNoZWVzZSwgT2xpdmVzLCBCYXNpbCcpO1xuXG4gICAgY29uc3QgZm9vZENvbnRhaW5lcjMgPSBjcmVhdGVGb29kQ29udGFpbmVyKHBpenphMywgJ1BlcGUnLCAnJDExJywgJ1RvbWF0byBzYXVjZSwgTW96YXJlbGxhLCBDaGlsbGkgZmxha2VzLCBPbGl2ZXMsIEJhc2lsJyk7XG5cbiAgICBjb25zdCBmb29kQ29udGFpbmVyNCA9IGNyZWF0ZUZvb2RDb250YWluZXIocGl6emE0LCAnSGF3YWlpYW4nLCAnJDEzJywgJ1RvbWF0byBzYXVjZSwgQmFjb24sIFBpbmFwcGxlLCBPbGl2ZXMsIEJhc2lsJyk7XG5cbiAgICBjb25zdCBmb29kQ29udGFpbmVyNSA9IGNyZWF0ZUZvb2RDb250YWluZXIocGl6emE1LCAnQ29sb3JhdG8nLCAnJDEwJywgJ1RvbWF0byBzYXVjZSwgTW96YXJlbGxhLCBPbmlvbiwgUGVwcGVyLCBDaGFtcGlnbm9ucywgQmFzaWwnKTtcbiAgICBcbiAgICBjb25zdCBmb29kQ29udGFpbmVyNiA9IGNyZWF0ZUZvb2RDb250YWluZXIocGl6emE2LCAnUG9tb2Rvcm8nLCAnJDE2JywgJ1RvbWF0byBzYXVjZSwgTW96YXJlbGxhLCBUb21hdG8sIE9uaW9uLCBGZXRhIENoZWVzZSwgQ2hpbGxpIHBlcHBlcnMnKTtcbiAgICBcbiAgICBjb25zdCBmb29kQ29udGFpbmVyNyA9IGNyZWF0ZUZvb2RDb250YWluZXIocGl6emE3LCAnQ3JlbWEnLCAnJDE1JywgJ1doaXRlIHNhdWNlLCBNb3phcmVsbGEsIFNocmltcCwgU2FsbW9uLCBQaW5lYXBwbGUsIE9saXZlcywgQmFzaWwnKTtcblxuICAgIGNvbnN0IGZvb2RDb250YWluZXI4ID0gY3JlYXRlRm9vZENvbnRhaW5lcihwaXp6YTgsICdDYXJuZScsICckMTQnLCAnVG9tYXRvIHNhdWNlLCBNb3phcmVsbGEsIEhvbWFkZSBzYXVzYWdlLCBCYWNvbiwgR2FybGljLCBQZXBwZXIsIENoaWxsaScpO1xuXG4gICAgbmF2Q29udGVudC5hcHBlbmRDaGlsZChmb29kQ29udGFpbmVyMSk7XG4gICAgbmF2Q29udGVudC5hcHBlbmRDaGlsZChmb29kQ29udGFpbmVyMik7XG4gICAgbmF2Q29udGVudC5hcHBlbmRDaGlsZChmb29kQ29udGFpbmVyMyk7XG4gICAgbmF2Q29udGVudC5hcHBlbmRDaGlsZChmb29kQ29udGFpbmVyNCk7XG4gICAgbmF2Q29udGVudC5hcHBlbmRDaGlsZChmb29kQ29udGFpbmVyNSk7XG4gICAgbmF2Q29udGVudC5hcHBlbmRDaGlsZChmb29kQ29udGFpbmVyNik7XG4gICAgbmF2Q29udGVudC5hcHBlbmRDaGlsZChmb29kQ29udGFpbmVyNyk7XG4gICAgbmF2Q29udGVudC5hcHBlbmRDaGlsZChmb29kQ29udGFpbmVyOCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb2RDb250YWluZXIocGl6emFJbWFnZSwgcGl6emFLaW5kLCBwcmljZSwgaW5ncmVkaWVudExpc3QpIHtcbiAgICBjb25zdCBmb29kQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vZENvbnRhaW5lci5jbGFzc05hbWUgPSAnZm9vZENvbnRhaW5lcic7XG5cbiAgICBjb25zdCBwaWMgPSBuZXcgSW1hZ2UoMTMwKTtcbiAgICBwaWMuc3JjID0gcGl6emFJbWFnZTtcbiAgICBwaWMuY2xhc3NOYW1lID0gJ3BpenphSW1hZ2VzJztcblxuICAgIGNvbnN0IHBpenphVHlwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBpenphVHlwZS5pbm5lckhUTUwgPSBgJHtwaXp6YUtpbmR9IDxlbSBzdHlsZSA9ICdmb250LXdlaWdodDogbm9ybWFsOyBmb250LXNpemU6IDIwcHg7Jz4ke3ByaWNlfTwvZW0+YDtcbiAgICBwaXp6YVR5cGUuY2xhc3NOYW1lID0gJ3BpenphVHlwZSc7XG5cbiAgICBjb25zdCBpbmdyZWRpZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpbmdyZWRpZW50cy5jbGFzc05hbWUgPSAnaW5ncmVkaWVudHMnO1xuICAgIGluZ3JlZGllbnRzLnRleHRDb250ZW50ID0gYCR7aW5ncmVkaWVudExpc3R9YDtcblxuICAgIGZvb2RDb250YWluZXIuYXBwZW5kQ2hpbGQocGljKTtcbiAgICBmb29kQ29udGFpbmVyLmFwcGVuZENoaWxkKHBpenphVHlwZSk7XG4gICAgZm9vZENvbnRhaW5lci5hcHBlbmRDaGlsZChpbmdyZWRpZW50cyk7XG5cbiAgICByZXR1cm4gZm9vZENvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheU1lbnU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiXG5pbXBvcnQgTG9nbyBmcm9tICcuL2ltYWdlcy9naXRIdWJMb2dvLnBuZyc7XG5pbXBvcnQgcGVyc29uUGljdHVyZSBmcm9tICcuL2ltYWdlcy9wZXJzb25QaWMuanBlZyc7XG5pbXBvcnQgZGlzcGxheU1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBkaXNwbGF5SG9tZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IGRpc3BsYXlDb250YWN0IGZyb20gJy4vY29udGFjdCc7XG5cbmZ1bmN0aW9uIGRpc3BsYXlUZW1wbGF0ZSgpIHtcbiAgICBcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBcbiAgICBjb25zdCBuYXZQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdlBhbmVsLmlkID0gJ25hdlBhbmVsJztcblxuICAgIGNvbnN0IGJ1c2luZXNzTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1c2luZXNzTmFtZS5pZCA9ICdidXNpbmVzc05hbWUnO1xuICAgIGJ1c2luZXNzTmFtZS50ZXh0Q29udGVudCA9ICdNb3p6YWZpYXRvJztcblxuICAgIGNvbnN0IGJ0dG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidHRuQ29udGFpbmVyLmlkID0gJ2J0dG5Db250YWluZXInO1xuXG4gICAgY29uc3QgYnR0bjEgPSBjcmVhdGVOYXZCdHRucygnSG9tZScpO1xuICAgIFxuICAgIGNvbnN0IGJ0dG4yID0gY3JlYXRlTmF2QnR0bnMoJ01lbnUnKTtcblxuICAgIGNvbnN0IGJ0dG4zID0gY3JlYXRlTmF2QnR0bnMoJ0NvbnRhY3QnKTtcblxuICAgIGJ0dG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnR0bjEpO1xuICAgIGJ0dG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnR0bjIpO1xuICAgIGJ0dG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnR0bjMpO1xuXG4gICAgbmF2UGFuZWwuYXBwZW5kQ2hpbGQoYnVzaW5lc3NOYW1lKTtcbiAgICBuYXZQYW5lbC5hcHBlbmRDaGlsZChidHRuQ29udGFpbmVyKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2UGFuZWwpO1xuXG4gICAgY29uc3QgbmF2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdkNvbnRlbnQuaWQgPSAnbmF2Q29udGVudCc7XG5cbiAgICAvL3RhYiBzcGVjaWZpYyBjb2RlIGdvZXMgaGVyZVxuICAgIC8vIHRhYiBzcGVjaWZpYyBjb2RlIGVuZHMgaGVyZVxuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuYXZDb250ZW50KTtcblxuICAgIGNvbnN0IGdpdEh1YkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBnaXRIdWJJbmZvLmlkID0gJ2dpdEh1YkluZm8nO1xuICAgIGdpdEh1YkluZm8uaW5uZXJIVE1MID0gYENvcHlyaWdodCDCqSAyMDIxIGNow6lqb2huIDxhIGhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL2NoZWpvaG4nIHRhcmdldCA9ICdfYmxhbmsnPjxpbWcgd2lkdGggPSAnMTYgaWQgPSAnZ2l0SHViTG9nbycgc3JjID0gJHtMb2dvfT48L2E+YDtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ2l0SHViSW5mbyk7XG4gIFxuICAgIHJldHVybiBuYXZDb250ZW50O1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VUYWIoKSB7XG4gICAgY29uc3QgYnR0bnMgPSBuYXZDb250ZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgaWYgKGJ0dG5zW2ldLmNsYXNzTGlzdFsxXSA9PT0gJ3NlbGVjdGVkJylcbiAgICAgICAgICAgIGJ0dG5zW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgfVxuXG4gICAgd2hpbGUgKG5hdkNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBuYXZDb250ZW50LnJlbW92ZUNoaWxkKG5hdkNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudGV4dENvbnRlbnQgPT09ICdIb21lJykgZGlzcGxheUhvbWUobmF2Q29udGVudCk7XG4gICAgZWxzZSBpZiAodGhpcy50ZXh0Q29udGVudCA9PT0gJ01lbnUnKSBkaXNwbGF5TWVudShuYXZDb250ZW50KTtcbiAgICBlbHNlIGRpc3BsYXlDb250YWN0KG5hdkNvbnRlbnQpO1xuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdkJ0dG5zKGJ0dG5UZXh0KSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gYnR0blRleHQ7XG4gICAgYnV0dG9uLmNsYXNzTmFtZSA9ICdidHRucyc7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlVGFiKVxuXG4gICAgaWYgKGJ0dG5UZXh0ID09ICdIb21lJykgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuY29uc3QgbmF2Q29udGVudCA9IGRpc3BsYXlUZW1wbGF0ZSgpO1xuZGlzcGxheUhvbWUobmF2Q29udGVudCk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==