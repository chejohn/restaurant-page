/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/


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
    bttn1.innerText = 'Home';
    bttn1.classList.add('bttns', 'selected');

    const bttn2 = document.createElement('button');
    bttn2.innerText = 'Menu';
    bttn2.classList.add('bttns');

    const bttn3 = document.createElement('button');
    bttn3.innerText = 'Contact';
    bttn3.classList.add('bttns');

    bttnContainer.appendChild(bttn1);
    bttnContainer.appendChild(bttn2);
    bttnContainer.appendChild(bttn3);

    navPanel.appendChild(businessName);
    navPanel.appendChild(bttnContainer);

    content.appendChild(navPanel);

    const navContent = document.createElement('div');
    navContent.id = 'navContent';

    const gitHubInfo = document.createElement('div');
    gitHubInfo.id = 'gitHubInfo';
    gitHubInfo.innerHTML = "Copyright © 2021 chejohn <a href = 'https://github.com/chejohn' target = '_blank'><img src = './gitHubLogo.png'></a>";

    content.appendChild(navContent);
    content.appendChild(gitHubInfo);

    
    return content;
}

document.body.appendChild(displayTemplate());

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmZ1bmN0aW9uIGRpc3BsYXlUZW1wbGF0ZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBcbiAgICBjb25zdCBuYXZQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdlBhbmVsLmlkID0gJ25hdlBhbmVsJztcblxuICAgIGNvbnN0IGJ1c2luZXNzTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1c2luZXNzTmFtZS5pZCA9ICdidXNpbmVzc05hbWUnO1xuICAgIGJ1c2luZXNzTmFtZS50ZXh0Q29udGVudCA9ICdNb3p6YWZpYXRvJztcblxuICAgIGNvbnN0IGJ0dG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidHRuQ29udGFpbmVyLmlkID0gJ2J0dG5Db250YWluZXInO1xuICAgIFxuICAgIGNvbnN0IGJ0dG4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnR0bjEuaW5uZXJUZXh0ID0gJ0hvbWUnO1xuICAgIGJ0dG4xLmNsYXNzTGlzdC5hZGQoJ2J0dG5zJywgJ3NlbGVjdGVkJyk7XG5cbiAgICBjb25zdCBidHRuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0dG4yLmlubmVyVGV4dCA9ICdNZW51JztcbiAgICBidHRuMi5jbGFzc0xpc3QuYWRkKCdidHRucycpO1xuXG4gICAgY29uc3QgYnR0bjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidHRuMy5pbm5lclRleHQgPSAnQ29udGFjdCc7XG4gICAgYnR0bjMuY2xhc3NMaXN0LmFkZCgnYnR0bnMnKTtcblxuICAgIGJ0dG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnR0bjEpO1xuICAgIGJ0dG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnR0bjIpO1xuICAgIGJ0dG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnR0bjMpO1xuXG4gICAgbmF2UGFuZWwuYXBwZW5kQ2hpbGQoYnVzaW5lc3NOYW1lKTtcbiAgICBuYXZQYW5lbC5hcHBlbmRDaGlsZChidHRuQ29udGFpbmVyKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2UGFuZWwpO1xuXG4gICAgY29uc3QgbmF2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdkNvbnRlbnQuaWQgPSAnbmF2Q29udGVudCc7XG5cbiAgICBjb25zdCBnaXRIdWJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ2l0SHViSW5mby5pZCA9ICdnaXRIdWJJbmZvJztcbiAgICBnaXRIdWJJbmZvLmlubmVySFRNTCA9IFwiQ29weXJpZ2h0IMKpIDIwMjEgY2hlam9obiA8YSBocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9jaGVqb2huJyB0YXJnZXQgPSAnX2JsYW5rJz48aW1nIHNyYyA9ICcuL2dpdEh1YkxvZ28ucG5nJz48L2E+XCI7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdkNvbnRlbnQpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ2l0SHViSW5mbyk7XG5cbiAgICBcbiAgICByZXR1cm4gY29udGVudDtcbn1cblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXNwbGF5VGVtcGxhdGUoKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=