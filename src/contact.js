import { createParagraph, createSubHeader } from "./home";

export const createContact = () => {
    const body = document.getElementById('body');

    const contactDiv = document.createElement('div');
    contactDiv.setAttribute('id', 'contact-div');

    contactDiv.appendChild(createSubHeader('Contact us'));
    contactDiv.appendChild(createParagraph('Insert contact info here'));

    body.appendChild(contactDiv);

    return contactDiv;
}