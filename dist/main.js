/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gitHubLogo.png":
/*!****************************!*\
  !*** ./src/gitHubLogo.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "266ca63177bca6f330a7.png";

/***/ }),

/***/ "./src/personPic.jpeg":
/*!****************************!*\
  !*** ./src/personPic.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "60662ab94471abcde0fe.jpeg";

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
/* harmony import */ var _gitHubLogo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gitHubLogo.png */ "./src/gitHubLogo.png");
/* harmony import */ var _personPic_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personPic.jpeg */ "./src/personPic.jpeg");




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
    const firstMessage = document.createElement('div');
    firstMessage.classList.add('message');
    firstMessage.textContent = 'The best pizza in New York City';

    const secondMessage = document.createElement('div');
    secondMessage.classList.add('message');
    secondMessage.textContent = 'Made with passion since 1908';

    const personPic = new Image(350);
    personPic.src = _personPic_jpeg__WEBPACK_IMPORTED_MODULE_1__;
    personPic.classList.add('message');
    personPic.id = 'personPic';

    const thirdMessage = document.createElement('div');
    thirdMessage.classList.add('message');
    thirdMessage.textContent = 'Visit us or order online!';

    navContent.appendChild(firstMessage);
    navContent.appendChild(secondMessage);
    navContent.appendChild(personPic)
    navContent.appendChild(thirdMessage);
    // tab specific code ends here

    content.appendChild(navContent);

    const gitHubInfo = document.createElement('div');
    gitHubInfo.id = 'gitHubInfo';
    gitHubInfo.innerHTML = `Copyright © 2021 chéjohn <a href = 'https://github.com/chejohn' target = '_blank'><img width = '16 id = 'gitHubLogo' src = ${_gitHubLogo_png__WEBPACK_IMPORTED_MODULE_0__}></a>`;

    content.appendChild(gitHubInfo);

    
    return content;
}

document.body.appendChild(displayTemplate());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7QUNkb0M7QUFDUzs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsNENBQWE7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EseUpBQXlKLDRDQUFJLENBQUM7O0FBRTlKOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiXG5pbXBvcnQgTG9nbyBmcm9tICcuL2dpdEh1YkxvZ28ucG5nJztcbmltcG9ydCBwZXJzb25QaWN0dXJlIGZyb20gJy4vcGVyc29uUGljLmpwZWcnO1xuXG5mdW5jdGlvbiBkaXNwbGF5VGVtcGxhdGUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgXG4gICAgY29uc3QgbmF2UGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXZQYW5lbC5pZCA9ICduYXZQYW5lbCc7XG5cbiAgICBjb25zdCBidXNpbmVzc05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXNpbmVzc05hbWUuaWQgPSAnYnVzaW5lc3NOYW1lJztcbiAgICBidXNpbmVzc05hbWUudGV4dENvbnRlbnQgPSAnTW96emFmaWF0byc7XG5cbiAgICBjb25zdCBidHRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnR0bkNvbnRhaW5lci5pZCA9ICdidHRuQ29udGFpbmVyJztcbiAgICBcbiAgICBjb25zdCBidHRuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0dG4xLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgIGJ0dG4xLmNsYXNzTGlzdC5hZGQoJ2J0dG5zJywgJ3NlbGVjdGVkJyk7XG5cbiAgICBjb25zdCBidHRuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0dG4yLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgIGJ0dG4yLmNsYXNzTGlzdC5hZGQoJ2J0dG5zJyk7XG5cbiAgICBjb25zdCBidHRuMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0dG4zLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuICAgIGJ0dG4zLmNsYXNzTGlzdC5hZGQoJ2J0dG5zJyk7XG5cbiAgICBidHRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0dG4xKTtcbiAgICBidHRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0dG4yKTtcbiAgICBidHRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0dG4zKTtcblxuICAgIG5hdlBhbmVsLmFwcGVuZENoaWxkKGJ1c2luZXNzTmFtZSk7XG4gICAgbmF2UGFuZWwuYXBwZW5kQ2hpbGQoYnR0bkNvbnRhaW5lcik7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdlBhbmVsKTtcblxuICAgIGNvbnN0IG5hdkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXZDb250ZW50LmlkID0gJ25hdkNvbnRlbnQnO1xuXG4gICAgLy90YWIgc3BlY2lmaWMgY29kZSBnb2VzIGhlcmVcbiAgICBjb25zdCBmaXJzdE1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmaXJzdE1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnbWVzc2FnZScpO1xuICAgIGZpcnN0TWVzc2FnZS50ZXh0Q29udGVudCA9ICdUaGUgYmVzdCBwaXp6YSBpbiBOZXcgWW9yayBDaXR5JztcblxuICAgIGNvbnN0IHNlY29uZE1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZWNvbmRNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2UnKTtcbiAgICBzZWNvbmRNZXNzYWdlLnRleHRDb250ZW50ID0gJ01hZGUgd2l0aCBwYXNzaW9uIHNpbmNlIDE5MDgnO1xuXG4gICAgY29uc3QgcGVyc29uUGljID0gbmV3IEltYWdlKDM1MCk7XG4gICAgcGVyc29uUGljLnNyYyA9IHBlcnNvblBpY3R1cmU7XG4gICAgcGVyc29uUGljLmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2UnKTtcbiAgICBwZXJzb25QaWMuaWQgPSAncGVyc29uUGljJztcblxuICAgIGNvbnN0IHRoaXJkTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXJkTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdtZXNzYWdlJyk7XG4gICAgdGhpcmRNZXNzYWdlLnRleHRDb250ZW50ID0gJ1Zpc2l0IHVzIG9yIG9yZGVyIG9ubGluZSEnO1xuXG4gICAgbmF2Q29udGVudC5hcHBlbmRDaGlsZChmaXJzdE1lc3NhZ2UpO1xuICAgIG5hdkNvbnRlbnQuYXBwZW5kQ2hpbGQoc2Vjb25kTWVzc2FnZSk7XG4gICAgbmF2Q29udGVudC5hcHBlbmRDaGlsZChwZXJzb25QaWMpXG4gICAgbmF2Q29udGVudC5hcHBlbmRDaGlsZCh0aGlyZE1lc3NhZ2UpO1xuICAgIC8vIHRhYiBzcGVjaWZpYyBjb2RlIGVuZHMgaGVyZVxuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuYXZDb250ZW50KTtcblxuICAgIGNvbnN0IGdpdEh1YkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBnaXRIdWJJbmZvLmlkID0gJ2dpdEh1YkluZm8nO1xuICAgIGdpdEh1YkluZm8uaW5uZXJIVE1MID0gYENvcHlyaWdodCDCqSAyMDIxIGNow6lqb2huIDxhIGhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL2NoZWpvaG4nIHRhcmdldCA9ICdfYmxhbmsnPjxpbWcgd2lkdGggPSAnMTYgaWQgPSAnZ2l0SHViTG9nbycgc3JjID0gJHtMb2dvfT48L2E+YDtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ2l0SHViSW5mbyk7XG5cbiAgICBcbiAgICByZXR1cm4gY29udGVudDtcbn1cblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXNwbGF5VGVtcGxhdGUoKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=