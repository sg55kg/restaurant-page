import { createParagraph, createSubHeader } from "./load";

export const createMenu = () => {
    const body = document.getElementById('body');

    const menuDiv = document.createElement('div');
    menuDiv.setAttribute('id', 'menu');

    const menuHeaderDiv = document.createElement('div');
    menuHeaderDiv.setAttribute('id', 'menu-header-div');
    
    menuHeaderDiv.appendChild(createSubHeader('Menu'));

    body.appendChild(menuDiv);

    menuDiv.appendChild(menuHeaderDiv);
    menuDiv.appendChild(createMenuItem(
            'Ramen', 
            'Our classic recipe in chicken broth with tofu, chicken, or shrimp.'
        ));
    menuDiv.appendChild(createMenuItem(
            'Spicy Ramen', 
            'Spicy beef bone broth with tofu, chicken, or shrimp'
        ));
    menuDiv.appendChild(createMenuItem(
            'Chicken Teriyaki', 
            'Classic dish with fried rice and grilled teriyaki chicken'
        ));
    menuDiv.appendChild(createMenuItem('House salad', 'For vegetarians'));

    return menuDiv;

}

const createMenuItem = (item, description) => {
    const itemDiv = document.createElement('div');
    itemDiv.setAttribute('id', 'menu-item');

    //add third argument for picture URL and insert a picture of the food into each itemDiv
    itemDiv.appendChild(createSubHeader(item));
    itemDiv.appendChild(createParagraph(description));

    return itemDiv;
}