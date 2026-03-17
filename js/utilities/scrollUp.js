export function initScrollUp() {
  const scrollUpBtn = document.querySelector(".scroll-up");

  if (!scrollUpBtn) return;

  window.addEventListener("scroll", function () {
    scrollUpBtn.classList.toggle("show-scroll-up", window.scrollY >= 350);
  });

  scrollUpBtn.addEventListener("click", function (e) {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
