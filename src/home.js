
import personPicture from './images/personPic.jpeg';

function displayHome(navContent) {
    navContent.style.cssText = 'display: flex; flex-flow: column wrap';
    const firstMessage = createMessage('The best pizza in New York City');

    const secondMessage = createMessage('Made with passion since 1908');

    const personPic = new Image(350);
    personPic.src = personPicture;
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

export default displayHome;