import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector('.gallery')

const imagesMarkup = createCardGallery(galleryItems)

galleryEl.insertAdjacentHTML('beforeend', imagesMarkup)

function createCardGallery (galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>
        `
    }).join('')
}

galleryEl.addEventListener('click', evt => {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
		return
    }
    
    const itemUrl = evt.target.getAttribute('data-source')
    console.log(itemUrl)

    const instance = basicLightbox.create(`
    <img src=${itemUrl} width="800" height="600">,`,
    { closable: true,
        className: '',
        onShow: (instance) => {
            galleryEl.addEventListener('keydown', closeImageAfterKeydown)
        },
        onClose: (instance) => {
            galleryEl.removeEventListener('keydown', closeImageAfterKeydown)
        }
    })
    instance.show()


    function closeImageAfterKeydown(ev) {
        if (ev.key === 'Escape') {
            instance.close()
        }
    }
})


