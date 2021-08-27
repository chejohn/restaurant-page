
import personPicture from './images/personPic.jpeg';

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

export default displayHome;