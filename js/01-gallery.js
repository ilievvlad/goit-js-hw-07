import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const createGalleryItem = ({ preview, original, description }) =>
	`<div class="gallery__item">
		<a class="gallery__link" href="${preview}">
			<img
				class="gallery__image"
				src="${preview}"
				data-source="${original}"
				alt="${description}"
			/>
		</a>
	</div>`;

const galleryMarkup = galleryItems.map(item => createGalleryItem(item)).join("");
gallery.insertAdjacentHTML("afterbegin", galleryMarkup);

gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(e) {
	e.preventDefault();

	const srcValue = e.target.getAttribute("data-source");
	const altValue = e.target.alt;

	const instance = basicLightbox.create(`<img src="${srcValue}" alt="${altValue}" width="800" height="600">`);
	instance.show();

	document.addEventListener("keydown", e => {
		if (e.code === "Escape") {
			instance.close();
		}
	});
}

console.log(galleryItems);


