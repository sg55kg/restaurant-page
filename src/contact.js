import { createParagraph, createSubHeader } from "./load";

export const createContact = () => {
    const body = document.getElementById('body');

    const contactDiv = document.createElement('div');
    contactDiv.setAttribute('id', 'contact-div');

    const mapDiv = document.createElement('div');
    mapDiv.setAttribute('id', 'map');

    const initMap = () => {
        const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    })}

    mapDiv.appendChild(initMap);
    
    contactDiv.appendChild(mapDiv);
    contactDiv.appendChild(createSubHeader('Contact us'));
    contactDiv.appendChild(createParagraph('Insert contact info here'));

    body.appendChild(contactDiv);

    return contactDiv;
}

// var map;
//       function initMap() {
//         map = new google.maps.Map(document.getElementById('map'), {
//           center: {lat: -34.397, lng: 150.644},
//           zoom: 8
//         });
//       }