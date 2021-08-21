

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
