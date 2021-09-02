import { createParagraph } from "./home";

const createMenu = () => {
    const body = document.getElementById('body');

    const menuDiv = document.createElement('div');
    menuDiv.setAttribute('id', 'menu');

    const menuHeaderDiv = document.createElement('div');
    menuHeaderDiv.setAttribute('id', 'menu-header-div');
    
    const menuHeader = document.createElement('h3');
    menuHeader.classList.add('subheader');
    menuHeader.innerText = 'Check out our menu pls'

    menuHeaderDiv.appendChild(menuHeader);

    body.appendChild(menuDiv);

    menuDiv.appendChild(menuHeaderDiv);
    menuDiv.appendChild(createMenuItem('Ramen', 'It\'s decent ig'));
    menuDiv.appendChild(createMenuItem('Grilled Cheese', 'Lol we literally serve grilled cheese'));

    return menuDiv;

}

const createMenuItem = (item, description) => {
    const itemDiv = document.createElement('div');
    itemDiv.setAttribute('id', 'menu-item');

    itemDiv.innerText = item;
    itemDiv.appendChild(createParagraph(description));

    return itemDiv;
}

export { createMenu };