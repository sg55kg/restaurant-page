import { createParagraph, createSubHeader } from "./load";

export const createContact = () => {
    const body = document.getElementById('body');

    const contactDiv = document.createElement('div');
    contactDiv.setAttribute('id', 'contact-div');

    const mapDiv = document.createElement('div');
    mapDiv.setAttribute('id', 'map');
    contactDiv.appendChild(mapDiv);
    let map;

    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8
        });
    }

    
    
    contactDiv.appendChild(createSubHeader('Contact us'));
    contactDiv.appendChild(createParagraph('Phone: 📞 (123)-456-789'));

    body.appendChild(contactDiv);

    return { contactDiv };
}
