(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // menu
  const burger = document.getElementById("burger");
  const menu = document.getElementById("menu");
  if (burger && menu) {
    burger.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      burger.setAttribute("aria-expanded", String(open));
    });
    menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      menu.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    }));
  }

  // slider
  const slides = Array.from(document.querySelectorAll(".slide"));
  const dots = Array.from(document.querySelectorAll(".dot"));
  let i = 0;
  let timer = null;

  function setSlide(n){
    i = (n + slides.length) % slides.length;
    slides.forEach((s, idx) => s.classList.toggle("is-active", idx === i));
    dots.forEach((d, idx) => d.classList.toggle("is-active", idx === i));
  }

  function start(){
    stop();
    timer = setInterval(() => setSlide(i + 1), 4500);
  }
  function stop(){
    if (timer) clearInterval(timer);
    timer = null;
  }

  dots.forEach(d => {
    d.addEventListener("click", () => {
      const n = Number(d.dataset.i || 0);
      setSlide(n);
      start();
    });
  });

  setSlide(0);
  start();

  // back to top
  const toTop = document.getElementById("toTop");
  if (toTop) {
    toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }
})();