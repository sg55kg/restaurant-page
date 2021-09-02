import { createParagraph } from "./home";

const createContact = () => {
    const body = document.getElementById('body');

    const contactDiv = document.createElement('div');
    contactDiv.setAttribute('id', 'contact-div');

    const contactHeader = document.createElement('h3');
    contactHeader.classList.add('subheader');
    contactHeader.innerText = 'Contact us';

    contactDiv.appendChild(contactHeader);
    contactDiv.appendChild(createParagraph('You can call me right now and I will answer\n I have nothing better to do'));

    body.appendChild(contactDiv);

    return contactDiv;
}

export { createContact };