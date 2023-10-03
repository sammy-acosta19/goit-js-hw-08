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
const lightbox = new SimpleLightbox('.gallery a', {
});

gallery.addEventListener('click', (e) => {
  e.preventDefault();
  lightbox.open();
});

console.log(galleryItems);
