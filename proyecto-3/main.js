import { inputValue } from './src/components/filter/filter';
import { printGallery } from './src/components/gallery/gallery';
import { createShowMoreButton, page } from './src/components/showMore/showMore';
import './style.css';


const accessKey = "HK4yvMhRraOHwBjlNVmmJnHYAyXM9TZvw2mtbE36XJA";
const apiUrl = "https://api.unsplash.com/search/photos";

// ${apiUrl}?query=${inputValue}&client_id=${accessKey}
// ${apiUrl}?query=${inputValue'&page=${page}&per_page=20&client_id=${accessKey}

export const getDataImages = async () => {
    const data = [];

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

    } catch (error) {
        console.log(error);
    }
}

createShowMoreButton();