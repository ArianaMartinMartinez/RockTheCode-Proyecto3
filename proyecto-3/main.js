import { inputValue } from './src/components/filter/filter';
import { printGallery } from './src/components/gallery/gallery';
import { createShowMoreButton, deleteShowMoreButton, page } from './src/components/showMore/showMore';
import './style.css';

/*
https://ipixelphotography.netlify.app/
https://igram-sr.netlify.app/
https://arianoid-proyecto3.netlify.app/
https://github.com/Quinteroo/fetch-gallery
https://github.com/PaulaCR90/ProjectThree_WebDev

https://github.com/Shuertad/M1_p4_pinterestapp
https://pinterestapp.netlify.app/

https://www.youtube.com/watch?v=QgVOFMLXyrs&ab_channel=C%C3%B3digoWeb
*/

const accessKey = "HK4yvMhRraOHwBjlNVmmJnHYAyXM9TZvw2mtbE36XJA";
const apiUrl = "https://api.unsplash.com/search/photos";

// ${apiUrl}?query=${inputValue}&client_id=${accessKey}
// ${apiUrl}?query=${inputValue'&page=${page}&per_page=20&client_id=${accessKey}

const logo = document.querySelector('.logo');
logo.addEventListener('click', () => { defaultGallery() });

const app = document.getElementById('app');
const gallerySection = document.createElement('section');
gallerySection.id = 'gallery';
app.appendChild(gallerySection);

export const getDataImages = async () => {
    let data = [];

    try {
        const response = await fetch(`${apiUrl}?query=${inputValue}&page=${page}&client_id=${accessKey}`);
        const res = await response.json();

        console.log(res);

        if(res.results.length>0) {
            for(let i=0; i<res.results.length; i++) {
                data.push(res.results[i].urls.full);
            }
        } else {
            console.log('No hay resultados para la consulta');
        }

        printGallery(data);
        createShowMoreButton();
    } catch (error) {
        console.log(error);
    }
}

const defaultGallery = async () => {
    let data = [];

    try {
        const response = await fetch(`${apiUrl}?query=crochet&page=1&per_page=20&client_id=${accessKey}`);
        const res = await response.json();

        console.log(res);

        for(let i=0; i<res.results.length; i++) {
            data.push(res.results[i].urls.full);
        }

        const galleryDiv = document.getElementById('gallery');
        galleryDiv.innerHTML = '';

        printGallery(data);
        deleteShowMoreButton();
    } catch (error) {
        console.log(error);
    }
}

defaultGallery();