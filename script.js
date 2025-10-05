//Bilddaten anlegen
const images = [
  { src: "img/image1.jpeg", alt: "Sonnenuntergang", caption: "Sonnenuntergang am Meer" },
  { src: "img/image2.jpg", alt: "Berge", caption: "Wanderung in den Alpen" },
  { src: "img/image3.jpg", alt: "Wald", caption: "Morgendlicher Waldspaziergang" },
  { src: "img/image4.jpg", alt: "Stadt", caption: "Abendliche Skyline" },
  { src: "img/image5.jpg", alt: "Blumen", caption: "Blühendes Feld im Frühling" }
];
//Elemente aus dem HTML auswählen
const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const closeBtn = document.getElementById("closeBtn");
//Index für das aktuelle Bild
let currentIndex = 0;
//Galerie aufbauen
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
//. Lightbox öffnen 
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
//Lightbox schließen
function updateLightbox() {
  const imgData = images[currentIndex];
  lightboxImg.src = imgData.src;
  lightboxImg.alt = imgData.alt;
  lightboxCaption.textContent = imgData.caption;

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === images.length - 1;
}
//Bild in der Lightbox aktualisieren
function showNext() {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateLightbox();
  }
}
// Bild in der Lightbox aktualisieren
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


