import { getDataImages } from "../../../main";
import { resetPage, page } from "../showMore/showMore";

export let inputValue;

const input = document.querySelector('input');

input.addEventListener('change', (e) => {
    resetPage();

    const gallerySection = document.getElementById('gallery');
    gallerySection.innerHTML = '';
    
    inputValue = e.target.value;
    
    getDataImages(inputValue, page, 10);
    
    input.value = '';
});