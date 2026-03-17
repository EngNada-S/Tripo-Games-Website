import { initHeader } from "./components/header.js";
import { initFooter } from "./components/footer.js";
import { initForm } from "./components/form.js";
import { initHomePage } from "./pages/home.js";
import { initGamePage } from "./pages/game.js";
import { initCareersPage } from "./pages/careers.js";
import { initJobPage } from "./pages/job.js";
import { initAboutPage } from "./pages/about.js";
import { initScrollUp } from "./utilities/scrollUp.js";
import { initSwiper } from "./utilities/swiper.js";
import { initLibraries } from "./utilities/initLibraries.js";

window.addEventListener("DOMContentLoaded", () => {
  const currentPage = document.body.dataset.page;

  initHeader();
  initFooter();
  initForm();
  initScrollUp();
  initLibraries();

  if (currentPage === "home") {
    initHomePage();
  }

  if (currentPage === "game") {
    initGamePage();
    initSwiper();
  }

  if (currentPage === "careers") {
    initCareersPage();
  }

  if (currentPage === "job") {
    initJobPage();
  }

  if (currentPage === "about") {
    initAboutPage();
  }
});
