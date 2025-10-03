const images = [
  { src: "img/image1.jpeg", alt: "Sonnenuntergang", caption: "Sonnenuntergang am Meer" },
  { src: "img/image2.jpg", alt: "Berge", caption: "Wanderung in den Alpen" },
  { src: "img/image3.jpg", alt: "Wald", caption: "Morgendlicher Waldspaziergang" },
  { src: "img/image4.jpg", alt: "Stadt", caption: "Abendliche Skyline" },
  { src: "img/image5.jpg", alt: "Blumen", caption: "Blühendes Feld im Frühling" }
];

const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const closeBtn = document.getElementById("closeBtn");

let currentIndex = 0;

function renderGallery() {
  images.forEach((img, index) => {
    const imgEl = document.createElement("img");
    imgEl.src = img.src;
    imgEl.alt = img.alt;
    imgEl.loading = "lazy";
    imgEl.addEventListener("click", () => openLightbox(index));
    gallery.appendChild(imgEl);
  });
}

function openLightbox(index) {
  currentIndex = index;
  updateLightbox();
  lightbox.classList.add("show");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  lightbox.classList.remove("show");
  lightbox.setAttribute("aria-hidden", "true");
}

function updateLightbox() {
  const imgData = images[currentIndex];
  lightboxImg.src = imgData.src;
  lightboxImg.alt = imgData.alt;
  lightboxCaption.textContent = imgData.caption;

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === images.length - 1;
}

function showNext() {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateLightbox();
  }
}

function showPrev() {
  if (currentIndex > 0) {
    currentIndex--;
    updateLightbox();
  }
}

// Event Listener
closeBtn.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
prevBtn.addEventListener("click", showPrev);
nextBtn.addEventListener("click", showNext);


