
import Logo from './images/gitHubLogo.png';
import displayMenu from './menu';
import displayHome from './home';
import displayContact from './contact';
import './style.css';

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
    gitHubInfo.innerHTML = `Copyright © 2021 chéjohn <a href = 'https://github.com/chejohn' target = '_blank'><img width = '16 id = 'gitHubLogo' src = ${Logo}></a>`;

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

    if (this.textContent === 'Home') displayHome(navContent);
    else if (this.textContent === 'Menu') displayMenu(navContent);
    else displayContact(navContent);

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
displayHome(navContent);

