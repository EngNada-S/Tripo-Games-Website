import { scrollAnimation } from "../utilities/scrollAnimation.js";

export function initAboutPage() {
  const aboutDescImg = document.querySelector(".about-image img");

  if (aboutDescImg) scrollAnimation(aboutDescImg, 0.1, 767);
}
