export function initSwiper() {
  const swiperContainer = document.querySelector(".game-reviews .swiper");
  if (!swiperContainer) return;

  const numOfSlides = document.querySelectorAll(".swiper-slide").length;
  const currentSlidesPerView =
    window.innerWidth >= 992 ? 3 : window.innerWidth >= 768 ? 2 : 1;

  new Swiper(swiperContainer, {
    grabCursor: true,
    loop: currentSlidesPerView < numOfSlides,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    breakpoints: {
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
    },
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
      dynamicBullets: numOfSlides > 4,
    },
  });
}
