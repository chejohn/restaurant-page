


function displayContact(navContent) {
    
    navContent.style.cssText = 'display: flex; flex-flow: column wrap; text-align: left;';

    const address = createContactHeaders('address', '1034 Oakwood Ave San Diego, CA 32899');
    
    const timeOpen = createContactHeaders('timeOpen', 'Mon-Fri: 8am-8pm, Fri-Sun: 8am-11pm');

    const phoneNum = createContactHeaders('phoneNum', '(222)-888-777');
    
    const messageUs = createContactHeaders('messageUs', 'Message us');

    const form = document.createElement('form');
    form.id = 'form';

    const nameInputContainer = createInputContainer('Name');

    const emailInputContainer = createInputContainer('Email');
    
    const messageInputContainer = createInputContainer('Type your message...');

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

function createContactHeaders(idName, headerText) {
    const header = document.createElement('p');
    header.className = 'contactInfo';
    header.id = idName;
    header.textContent = headerText;

    return header;
}

function createInputContainer(inputPlaceHolder) {
    const inputContainer = document.createElement('div');
    inputContainer.className = 'inputContainer';

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'inputs';
    if (inputPlaceHolder === 'Type your message...') input.id = 'messageInput';
    input.required = true;

    const placeHolder = document.createElement('span');
    placeHolder.textContent = inputPlaceHolder;
    placeHolder.className = 'placeHolder';

    inputContainer.appendChild(input);
    inputContainer.appendChild(placeHolder);
    
    return inputContainer;
}

export default displayContact