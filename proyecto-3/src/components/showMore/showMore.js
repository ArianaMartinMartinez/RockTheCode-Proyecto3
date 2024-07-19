import { getDataImages } from "../../../main";

export let page = 1;

const button = document.createElement('button');

export const createShowMoreButton = () => {
    const app = document.getElementById('app');

    const gallerySection = document.createElement('section');
    gallerySection.id = 'gallery';
 
    button.textContent = 'Ver más';
    button.id = 'showMore';
    
    app.appendChild(gallerySection);
    app.appendChild(button);
}

button.addEventListener('click', () => {
    page++;

    getDataImages();
});