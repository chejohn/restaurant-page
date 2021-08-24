


function displayContact(navContent) {
    navContent.style.cssText = 'display: flex; flex-flow: column wrap;';
    const address = document.createElement('p');
    address.classList.add('contactInfo');
    address.id = 'address';
    address.textContent = '1034 Oakwood Ave San Diego, CA 32899';

    const timeOpen = document.createElement('p');
    timeOpen.classList.add('contactInfo');
    timeOpen.id = 'timeOpen';
    timeOpen.textContent = 'Mon-Fri: 8am-8pm, Fri-Sun: 8am-11pm';

    const phoneNum = document.createElement('p');
    phoneNum.classList.add('contactInfo');
    phoneNum.id = 'phoneNum';
    phoneNum.textContent = '(222)-888-777';

    const messageUs = document.createElement('p');
    messageUs.classList.add('contactInfo');
    messageUs.id = 'messageUs';
    messageUs.textContent = 'Message us';

    const form = document.createElement('form');
    form.autocomplete = 'off';
    
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Full Name';
    nameInput.classList.add('inputs');

    const emailInput = document.createElement('input');
    emailInput.type = 'text'
    emailInput.placeholder = 'Email';
    emailInput.classList.add('inputs');

    const messageInput = document.createElement('input');
    messageInput.type = 'text';
    messageInput.placeholder = 'Type your message...';
    messageInput.classList.add('inputs');

    const sumbitBttn = document.createElement('input');
    sumbitBttn.type = 'submit';
    sumbitBttn.textContent = 'Submit';

    form.appendChild(nameInput);
    form.appendChild(emailInput);
    form.appendChild(messageInput);
    form.appendChild(sumbitBttn);

    navContent.appendChild(address);
    navContent.appendChild(timeOpen);
    navContent.appendChild(phoneNum);
    navContent.appendChild(messageUs);
    navContent.appendChild(form);
}

export default displayContact