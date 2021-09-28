import { createParagraph, createSubHeader } from "./load";

export const createContact = () => {
    const body = document.getElementById('body');

    const contactDiv = document.createElement('div');
    contactDiv.setAttribute('id', 'contact-div');

    const mapDiv = document.createElement('div');
    mapDiv.setAttribute('id', 'map-div');

    mapDiv.innerHTML = '<iframe id="map" src="https://www.google.com/maps/d/u/0/embed?mid=1z_SKzt9cpSRWG1cA44l5cv0k-3D4423F"></iframe>'
    

    
    
    contactDiv.appendChild(createSubHeader('Contact us'));
    contactDiv.appendChild(createParagraph('Phone: 📞 (123)-456-789'));
    contactDiv.appendChild(mapDiv);

    body.appendChild(contactDiv);

    return { contactDiv };
}

