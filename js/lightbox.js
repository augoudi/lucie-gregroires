(function () {
  const overlay = document.getElementById("lightbox-overlay");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");
  const counter = document.getElementById("lightbox-counter");
  if (!overlay || !lightboxImg || !closeBtn || !prevBtn || !nextBtn || !counter) return;

  let images = [];
  let currentIndex = 0;

  function getGalleryImages() {
    return Array.from(document.querySelectorAll("img")).filter(
      (img) => img.id !== "lightbox-img" && img.src
    );
  }

  function bindImg(img) {
    if (img.id === "lightbox-img" || img.dataset.lightboxBound === "1") return;
    img.dataset.lightboxBound = "1";
    img.classList.add("zoomable-img");
    img.addEventListener("click", function (e) {
      e.stopPropagation();
      images = getGalleryImages();
      currentIndex = images.indexOf(this);
      if (currentIndex === -1) currentIndex = 0;
      openLightbox();
    });
  }

  function initImages() {
    images = getGalleryImages();
    images.forEach(bindImg);
  }

  function openLightbox() {
    if (!images.length) return;
    updateLightboxImage();
    overlay.classList.add("open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function updateLightboxImage() {
    if (!images.length) return;
    const img = images[currentIndex];
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt || "";
    counter.textContent = currentIndex + 1 + " / " + images.length;
    const showArrows = images.length > 1;
    prevBtn.style.display = showArrows ? "flex" : "none";
    nextBtn.style.display = showArrows ? "flex" : "none";
  }

  function showNext() {
    if (images.length < 2) return;
    currentIndex = (currentIndex + 1) % images.length;
    updateLightboxImage();
  }

  function showPrev() {
    if (images.length < 2) return;
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightboxImage();
  }

  function closeLightbox() {
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    lightboxImg.src = "";
  }

  function isOpen() {
    return overlay.classList.contains("open");
  }

  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closeLightbox();
  });

  closeBtn.addEventListener("click", closeLightbox);
  nextBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    showNext();
  });
  prevBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    showPrev();
  });

  document.addEventListener("keydown", function (e) {
    if (!isOpen()) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
  });

  let touchStartX = 0;
  lightboxImg.addEventListener(
    "touchstart",
    function (e) {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );

  lightboxImg.addEventListener(
    "touchend",
    function (e) {
      if (!isOpen()) return;
      const touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      const swipeThreshold = 50;
      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) showNext();
        else showPrev();
      }
    },
    { passive: true }
  );

  lightboxImg.addEventListener("click", (e) => e.stopPropagation());

  const observer = new MutationObserver(() => {
    images = getGalleryImages();
    images.forEach(bindImg);
  });
  observer.observe(document.body, { childList: true, subtree: true });

  window.refreshLightboxImages = initImages;

  initImages();
})();
