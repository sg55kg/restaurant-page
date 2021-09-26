export const homeBody = () => {
    const body = document.getElementById('body');

    const homeBodyDiv = document.createElement('div');
    homeBodyDiv.setAttribute('id', 'home');

    homeBodyDiv.appendChild(createSubHeader('Welcome'));

    homeBodyDiv.appendChild(createParagraph('Welcome to unamed restaurant\'s website'));
    homeBodyDiv.appendChild(createParagraph('We have been providing the best authentic ramen in the city for 4 years now!'));
    homeBodyDiv.appendChild(createSubHeader(' \n '));
    //insert picture here? A generic trophy or star icon etc to go above the accolades

    homeBodyDiv.appendChild(createSubHeader('Voted best authentic asian food 2018 2019 and 2021'));

    homeBodyDiv.appendChild(createParagraph('Come see us today, or check out our menu and place a delivery order!'));

    body.appendChild(homeBodyDiv);

    return homeBodyDiv;
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