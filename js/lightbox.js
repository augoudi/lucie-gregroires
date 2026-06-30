(function () {
  const overlay = document.getElementById("lightbox-overlay");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("lightbox-close");
  if (!overlay || !lightboxImg || !closeBtn) return;

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || "";
    overlay.classList.add("open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    lightboxImg.src = "";
  }

  function bindImg(img) {
    if (img.id === "lightbox-img" || img.dataset.lightboxBound === "1") return;
    img.dataset.lightboxBound = "1";
    img.classList.add("zoomable-img");
    img.addEventListener("click", function (e) {
      e.stopPropagation();
      if (this.src) openLightbox(this.src, this.alt);
    });
  }

  document.querySelectorAll("img").forEach(bindImg);

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType !== 1) return;
        if (node.tagName === "IMG") bindImg(node);
        node.querySelectorAll?.("img").forEach(bindImg);
      });
    });
  });
  observer.observe(document.body, { childList: true, subtree: true });

  overlay.addEventListener("click", closeLightbox);
  closeBtn.addEventListener("click", closeLightbox);
  lightboxImg.addEventListener("click", (e) => e.stopPropagation());
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
})();
