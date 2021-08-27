

import pizza1 from './images/pizza1.png';
import pizza2 from './images/pizza2.png';
import pizza3 from './images/pizza3.png';
import pizza4 from './images/pizza4.png';
import pizza5 from './images/pizza5.png';
import pizza6 from './images/pizza6.png';
import pizza7 from './images/pizza7.png';
import pizza8 from './images/pizza8.png';

// try condensing this code into a food-container function

function displayMenu(navContent) {
    
    navContent.style.cssText = 'display: flex; justify-content: space-evenly; flex-wrap: wrap';
    
    // 1st food container
    const foodContainer1 = document.createElement('div');
    foodContainer1.classList.add('foodContainer');
    
    const p1 = new Image(130);
    p1.src = pizza1;
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
    p2.src = pizza2;
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
    p3.src = pizza3;
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
    p4.src = pizza4;
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
    p5.src = pizza5;
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
    p6.src = pizza6;
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
    p7.src = pizza7;
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
    p8.src = pizza8;
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

export default displayMenu;