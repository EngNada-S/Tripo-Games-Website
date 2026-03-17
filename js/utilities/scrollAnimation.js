export function scrollAnimation(img, fraction, screen) {
  if (!img) return;
  window.addEventListener("scroll", () => {
    if (window.innerWidth > screen) {
      img.style.transform = `translateX(${-window.scrollY * fraction}px)`;
    } else {
      img.style.transform = "translateX(0)";
    }
  });
}
