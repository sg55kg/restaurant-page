import "./styles.css";
import { homeBody } from "./home";
import { createMenu } from "./menu";
import { createContact } from "./contact";

function createHeader() {
    let header = document.createElement('header');
    header.classList.add('header');

    let restaurantName = document.createElement('h1');
    restaurantName.classList.add('restaurant-name');
    restaurantName.innerText = 'Restaurant';

    header.appendChild(restaurantName);
    header.appendChild(createNavBar());

    return header;
}

function createNavBar() {
    const nav = document.createElement('nav');

    const homeButton = document.createElement('button');
    homeButton.classList.add('nav-button');
    homeButton.innerText = 'Home';

    homeButton.addEventListener('click', () => {
        body.innerHTML = "";
        homeBody();
    })

    const menuButton = document.createElement('button');
    menuButton.classList.add('nav-button');
    menuButton.innerText = 'Menu';

    menuButton.addEventListener('click', () => {
        body.innerHTML = "";
        createMenu();
    })

    const contactButton = document.createElement('button');
    contactButton.classList.add('nav-button');
    contactButton.innerText = ('Contact us');

    contactButton.addEventListener('click', () => {
        body.innerHTML = "";
        createContact();
    })

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav;
}

function createBody() {
    const body = document.createElement('div');
    body.setAttribute('id', 'body');

    return body;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.innerText = 'Test';

    return footer;
}

export const createParagraph = (text) => {
    const paragraph = document.createElement('p');
    paragraph.classList.add('home-para');
    paragraph.innerText = text;
    return paragraph;
}

export const createSubHeader = (text) => {
    const subHeader = document.createElement('h3');
    subHeader.classList.add('subheader');
    subHeader.innerText = text;
    return subHeader;
}

export const initPage = () => {
    let contentDiv = document.getElementById('content');
    contentDiv.appendChild(createHeader());
    contentDiv.appendChild(createBody());
    contentDiv.appendChild(createFooter());

    homeBody();
}