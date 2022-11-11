import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery')

const imagesMarkup = createCardGallery(galleryItems)

galleryEl.insertAdjacentHTML('beforeend', imagesMarkup)

function createCardGallery (galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `
    }).join('')
}

galleryEl.addEventListener('click', evt => {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
		return
    }
    
    var lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250 });
})