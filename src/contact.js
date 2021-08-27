


function displayContact(navContent) {
    
    navContent.style.cssText = 'display: flex; flex-flow: column wrap; text-align: left;';

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
    form.id = 'form';
    
    const nameInputContainer = document.createElement('div');
    nameInputContainer.className = 'inputContainer';

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.classList.add('inputs');
    nameInput.required = true;

    const namePlaceHolder = document.createElement('span');
    namePlaceHolder.textContent = 'Name';
    namePlaceHolder.className = 'placeHolder';
    
    nameInputContainer.appendChild(nameInput);
    nameInputContainer.appendChild(namePlaceHolder);

    const emailInputContainer = document.createElement('div');
    emailInputContainer.className = 'inputContainer';

    const emailInput = document.createElement('input');
    emailInput.type = 'text';
    emailInput.classList.add('inputs');
    emailInput.required = true;

    const emailPlaceHolder = document.createElement('span');
    emailPlaceHolder.textContent = 'Email';
    emailPlaceHolder.className = 'placeHolder';

    emailInputContainer.appendChild(emailInput);
    emailInputContainer.appendChild(emailPlaceHolder);
    
    const messageInputContainer = document.createElement('div');
    messageInputContainer.className = 'inputContainer';

    const messageInput = document.createElement('input');
    messageInput.type = 'text';
    messageInput.classList.add('inputs');
    messageInput.id = 'messageInput';
    messageInput.required = true;

    const messagePlaceHolder = document.createElement('span');
    messagePlaceHolder.textContent = 'Type your message...';
    messagePlaceHolder.className = 'placeHolder';

    messageInputContainer.appendChild(messageInput);
    messageInputContainer.appendChild(messagePlaceHolder);

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

export default displayContact