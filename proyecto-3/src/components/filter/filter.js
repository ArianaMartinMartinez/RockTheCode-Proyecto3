import { getDataImages } from "../../../main";

export let inputValue;

const input = document.querySelector('input');

input.addEventListener('change', (e) => {
    const galleryDiv = document.getElementById('gallery');
    galleryDiv.innerHTML = '';
    
    inputValue = e.target.value;
    
    getDataImages();
    
    input.value = '';
});