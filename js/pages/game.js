import { gamesDetails } from "../data/data.js";

/* ----- Helper Functions ----- */
function totalRating(reviews) {
  return reviews
    .map((r) => r.stars)
    .reduce((acc, cur, _, arr) => acc + cur / arr.length, 0)
    .toFixed(1);
}

function updateHead(game) {
  document.title = game.seo.title;
  document
    .querySelector("meta[name='description']")
    ?.setAttribute("content", game.seo.description);
}

/* ----- Game Display Functions ----- */
function setHero(game) {
  const hero = document.querySelector(".game-hero");
  const img = document.querySelector(".game-img img");
  img.src = game.images.gameImg;
  img.alt = `${game.name} game cover`;
  hero.style.setProperty("--hero-bg", `url(${game.images.heroCover})`);
  document.querySelector(".game-name").textContent = game.name;
  document.querySelector(".game-category").textContent = game.category;
  document.querySelector(".game-title").textContent = game.hero.title;
  document.querySelector(".game-desc-text").textContent = game.hero.description;
}

function setScreenshots(game) {
  const container = document.querySelector(".screenshots-container");
  container.innerHTML = game.images.screenshots
    .slice(0, 2)
    .map(
      (img, i) =>
        `<div class="screenshot" data-index=${i}><img src="${img}" alt="${game.name} gameplay screenshot" loading="lazy"></div>`,
    )
    .join("");
  handleScreenshotsViewer(game.images.screenshots);
}

function setReviews(game) {
  const reviewsContainer = document.querySelector(".reviews-grid");
  reviewsContainer.innerHTML = game.reviews
    .map(
      (r) =>
        `<div class="review swiper-slide"><p>${r.text}</p><p>${r.user}</p></div>`,
    )
    .join("");
  document.querySelector(".total-rating").textContent =
    `${totalRating(game.reviews)} Rating`;
}

function setHighlight(game) {
  const gameHighlight = document.querySelector(".game-highlight");
  if (!gameHighlight) return;
  gameHighlight.style.setProperty("--sec-bg", `url(${game.images.promoImg})`);
  gameHighlight.querySelector("h2").textContent = game.promoText.title;
  gameHighlight.querySelector("p").textContent = game.promoText.text;
}

function displayGameDetails(game) {
  setHero(game);
  setScreenshots(game);
  setReviews(game);
  setHighlight(game);
}

/* ----- Init Page ----- */
export function initGamePage() {
  const params = new URLSearchParams(window.location.search);
  const gameId = Number(params.get("gameid"));
  const selectedGame = gamesDetails.find((g) => g.id === gameId);
  if (!selectedGame) return;

  updateHead(selectedGame);
  displayGameDetails(selectedGame);
}

/* ----- viewer logic ----- */
function handleScreenshotsViewer(screenshots) {
  const screenshotEles = document.querySelectorAll(".screenshot");
  const viewer = document.querySelector(".viewer");
  const viewerImg = document.querySelector(".img-holder img");
  const closeViewerBtn = document.querySelector(".close-viewer");
  const previousBtn = document.querySelector(".previous");
  const nextBtn = document.querySelector(".next");

  let nowOpenedIndex = null;
  function toggleViewer(isOpen) {
    viewer?.classList.toggle("show", isOpen);
    document.body.classList.toggle("no-scroll", isOpen);
  }

  function showScreenshot(index) {
    viewerImg.src = screenshots[index];
  }

  function updateBtnsVisibility() {
    if (nowOpenedIndex === 0) {
      previousBtn.style.display = "none";
    } else {
      previousBtn.style.display = "block";
    }

    if (nowOpenedIndex === screenshots.length - 1) {
      nextBtn.style.display = "none";
    } else {
      nextBtn.style.display = "block";
    }
  }

  function handlePrevious() {
    if (nowOpenedIndex > 0) {
      nowOpenedIndex--;
      showScreenshot(nowOpenedIndex);
      updateBtnsVisibility();
    }
  }

  function handleNext() {
    if (nowOpenedIndex < screenshots.length - 1) {
      nowOpenedIndex++;
      showScreenshot(nowOpenedIndex);
      updateBtnsVisibility();
    }
  }

  screenshotEles?.forEach((ele) => {
    ele.addEventListener("click", function (e) {
      e.stopPropagation();
      const index = Number(ele.dataset.index);
      if (index >= 0) {
        nowOpenedIndex = index;
        toggleViewer(true);
        showScreenshot(nowOpenedIndex);
        updateBtnsVisibility();
      }
    });
  });

  closeViewerBtn.addEventListener("click", () => toggleViewer(false));
  previousBtn.addEventListener("click", handlePrevious);
  nextBtn.addEventListener("click", handleNext);

  window.addEventListener("click", function (e) {
    if (
      viewer.classList.contains("show") &&
      !viewerImg.parentElement.contains(e.target) &&
      !closeViewerBtn.contains(e.target) &&
      !previousBtn.contains(e.target) &&
      !nextBtn.contains(e.target)
    ) {
      toggleViewer(false);
    }
  });

  // Keyboard
  document.addEventListener("keydown", function (e) {
    if (!viewer.classList.contains("show")) return;
    if (e.key === "Escape") toggleViewer(false);
    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === "ArrowRight") handleNext();
  });
}
