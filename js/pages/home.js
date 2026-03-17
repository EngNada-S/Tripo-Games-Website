import { scrollAnimation } from "../utilities/scrollAnimation.js";
import { displayMsg } from "../utilities/message.js";
import { clearForm } from "../utilities/clearForm.js";

/* ----- Navigate to Game Page ----- */
function openPage(id) {
  window.location.href = `game.html?gameid=${id}`;
}

/* ----- Handle Scroll Animation for Cover ----- */
function initCoverAnimation() {
  const coverImg = document.querySelector(".home-cover img");
  if (coverImg) {
    scrollAnimation(coverImg, 0.25, 991);
  }
}

/* ----- Handle Click on Game Cards ----- */
function initGameCards() {
  const featuredGames = document.querySelectorAll(
    ".featured-games div.game-card",
  );
  if (featuredGames.length > 0) {
    featuredGames.forEach((gameCard) => {
      gameCard.addEventListener("click", function () {
        const gameId = this.dataset.gameId;
        if (gameId) openPage(gameId);
      });
    });
  }
}

/* ----- Handle Contact Form Submission ----- */
function initContactForm() {
  const contactForm = document.querySelector(".contact-form");
  if (!contactForm) return;

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const serviceID = "service_dva21bi";
    const templateID = "template_mdvnxm7";

    const templateParams = {
      first_name: document.getElementById("firstName").value,
      last_name: document.getElementById("lastName").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    emailjs
      .send(serviceID, templateID, templateParams)
      .then(() => {
        clearForm(["firstName", "lastName", "email", "message"]);
        displayMsg(
          "🚀 Your application has been sent successfully!",
          "#64a96eff",
        );
      })
      .catch((err) => {
        console.error("Error:", err);
        displayMsg(
          "❌ There was an error sending your application.",
          "#a92d40ff",
        );
      });
  });
}

/* ----- Main Init Function ----- */
export function initHomePage() {
  initCoverAnimation();
  initGameCards();
  initContactForm();
}
