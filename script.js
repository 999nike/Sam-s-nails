(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Mobile nav
  const navBtn = document.getElementById("navBtn");
  const navMenu = document.getElementById("navMenu");
  if (navBtn && navMenu) {
    navBtn.addEventListener("click", () => {
      const open = navMenu.classList.toggle("open");
      navBtn.setAttribute("aria-expanded", String(open));
    });

    navMenu.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        navMenu.classList.remove("open");
        navBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Lightbox
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxClose = document.getElementById("lightboxClose");

  const openLightbox = (src) => {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightbox.style.display = "grid";
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.style.display = "none";
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  document.querySelectorAll(".shot").forEach(btn => {
    btn.addEventListener("click", () => {
      const src = btn.getAttribute("data-full");
      if (src) openLightbox(src);
    });
  });

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  // Demo form button
  const fakeSend = document.getElementById("fakeSend");
  if (fakeSend) {
    fakeSend.addEventListener("click", () => {
      fakeSend.textContent = "Sent (demo)";
      fakeSend.disabled = true;
      setTimeout(() => {
        fakeSend.textContent = "Send message";
        fakeSend.disabled = false;
      }, 1400);
    });
  }
})();
