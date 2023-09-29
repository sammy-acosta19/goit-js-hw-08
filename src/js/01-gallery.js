import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

function renderGalleryItems() {
  const galleryHTML = galleryItems
    .map(
      (item, index) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            data-index="${index}"
            alt="${item.description}"
          />
        </a>
      </li>
    `
    )
    .join('');

  gallery.innerHTML = galleryHTML;
}

renderGalleryItems();

let activeLightbox = null;

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.classList.contains('gallery__image')) {
    const largeImageURL = e.target.dataset.source;

    activeLightbox = new SimpleLightbox(`
      <img src="${largeImageURL}" alt="Image description">
    `); 

    activeLightbox.show();

    document.addEventListener('keydown', closeModalOnEscape);
  }
});

function closeModalOnEscape(e) {
  if (e.key === 'Escape' && activeLightbox) {
    activeLightbox.close();
    activeLightbox = null;

    document.removeEventListener('keydown', closeModalOnEscape);
  }
}
console.log(galleryItems);




 