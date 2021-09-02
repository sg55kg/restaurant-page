const homeBody = () => {
    const body = document.getElementById('body');

    const homeBodyDiv = document.createElement('div');
    homeBodyDiv.setAttribute('id', 'home');
    
    const welcome = document.createElement('h3');
    welcome.classList.add('subheader');
    welcome.innerText = 'Welcome';

    const introDescription = document.createElement('p');
    introDescription.classList.add('home-para');

    homeBodyDiv.appendChild(welcome);
    homeBodyDiv.appendChild(createParagraph('Welcome to unamed restaurant\'s website'));
    homeBodyDiv.appendChild(createParagraph('We have been in business for 1 day'));
    homeBodyDiv.appendChild(createParagraph('Check out our menu... please. I have a family'));

    body.appendChild(homeBodyDiv);

    return homeBodyDiv;
}

const createParagraph = (text) => {
    const paragraph = document.createElement('p');
    paragraph.innerText = text;
    return paragraph;
}

export { homeBody, createParagraph };