import { getDataImages } from "../../../main";
import { changeInputValue } from "../filter/filter";
import './noDataSearch.css';

export const noDataSearch = () => {
    const gallery = document.getElementById('gallery');
    
    gallery.innerHTML = `
        <article>
            <p>¡Vaya! Parece que no hay resultados para tu búsqueda</p>
            <p>Te dejamos con unas fotos de gatitos...</p>
        </article>
    `;
    
    changeInputValue('gato');

    getDataImages();
}
