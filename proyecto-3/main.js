import { inputValue } from './src/components/filter/filter';
import { printGallery } from './src/components/gallery/gallery';
import { noDataSearch } from './src/components/noDataSearch/noDataSearch';
import { createShowMoreButton, deleteShowMoreButton, page } from './src/components/showMore/showMore';
import './style.css';


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

        if(res.results.length>0) {
            for(let i=0; i<res.results.length; i++) {
                data.push(res.results[i].urls.full);
            }
        } else {
            noDataSearch();
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