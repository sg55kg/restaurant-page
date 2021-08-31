function createHeader() {
    let header = document.createElement('header');
    header.classList.add('header');
    header.style.background = 'blue';

    let restaurantName = document.createElement('h1');
    restaurantName.classList.add('restaurant-name');
    restaurantName.innerText = 'Restaurant';

    header.appendChild(restaurantName);
    header.appendChild(createNavBar());

    return header;
}

function createNavBar() {
    const nav = document.createElement('nav');
    nav.style.background = 'red';

    const homeButton = document.createElement('button');
    homeButton.classList.add('nav-button');
    homeButton.innerText = 'Home';

    const menuButton = document.createElement('button');
    menuButton.classList.add('nav-button');
    menuButton.innerText = 'Menu';

    const contactButton = document.createElement('button');
    contactButton.classList.add('nav-button');
    contactButton.innerText = ('Contact us');

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav;
}

const initPage = () => {
    let contentDiv = document.getElementById('content');
    contentDiv.appendChild(createHeader());
}

export { initPage };