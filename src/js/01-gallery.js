import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const list = document.querySelector(".gallery");
const createItems = createMarkUp(galleryItems);
list.insertAdjacentHTML("beforeend", createItems);

function createMarkUp(items) {
    return items.map(({preview, original, description}) => {
      return  `<a class="gallery__item" href="${original}">
        <img class="gallery__image"
        src="${preview}" 
        alt="${description}">
       </a>` 
    }).join("");
}

const simple = new SimpleLightbox(".gallery a", {
    captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250

});
console.log(galleryItems);