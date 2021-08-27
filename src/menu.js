

import pizza1 from './images/pizza1.png';
import pizza2 from './images/pizza2.png';
import pizza3 from './images/pizza3.png';
import pizza4 from './images/pizza4.png';
import pizza5 from './images/pizza5.png';
import pizza6 from './images/pizza6.png';
import pizza7 from './images/pizza7.png';
import pizza8 from './images/pizza8.png';


function displayMenu(navContent) {
    
    navContent.style.cssText = 'display: flex; justify-content: space-evenly; flex-wrap: wrap';
    
    const foodContainer1 = createFoodContainer(pizza1, 'Sacilia', '$12', 'Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil');
    
    const foodContainer2 = createFoodContainer(pizza2, 'Gamberi', '$11', 'Tomato sauce, Mozarella, Shrimp, Feta cheese, Olives, Basil');

    const foodContainer3 = createFoodContainer(pizza3, 'Pepe', '$11', 'Tomato sauce, Mozarella, Chilli flakes, Olives, Basil');

    const foodContainer4 = createFoodContainer(pizza4, 'Hawaiian', '$13', 'Tomato sauce, Bacon, Pinapple, Olives, Basil');

    const foodContainer5 = createFoodContainer(pizza5, 'Colorato', '$10', 'Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil');
    
    const foodContainer6 = createFoodContainer(pizza6, 'Pomodoro', '$16', 'Tomato sauce, Mozarella, Tomato, Onion, Feta Cheese, Chilli peppers');
    
    const foodContainer7 = createFoodContainer(pizza7, 'Crema', '$15', 'White sauce, Mozarella, Shrimp, Salmon, Pineapple, Olives, Basil');

    const foodContainer8 = createFoodContainer(pizza8, 'Carne', '$14', 'Tomato sauce, Mozarella, Homade sausage, Bacon, Garlic, Pepper, Chilli');

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

export default displayMenu;