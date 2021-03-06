// Modal view 

const allImages = document.querySelectorAll(".grid-img");
const modalPopup = document.querySelector(".modal-container");
const modalImgElement = document.querySelector(".modal-img");
const body = document.querySelector("body");

document.addEventListener('click', () => {
  body.style.overflow = 'auto';
  modalPopup.style.display = 'none';
})

allImages.forEach(img => {
  img.addEventListener('click', e => {
    body.style.overflow = 'hidden';
    e.stopPropagation()
    modalPopup.style.display = "block";
    modalImgElement.src = img.src;
  });
});
