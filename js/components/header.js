import { headerFooterCommonLogic } from "../utilities/headerFooterLogic.js";

export function initHeader() {
  fetch("components/header.html")
    .then((res) => res.text())
    .then((data) => {
      document.querySelector("#header").innerHTML = data;

      const body = document.body;
      const header = document.querySelector("#header");
      const nav = document.querySelector(".links");
      const navToggle = document.getElementById("nav-toggle");
      const gamesLink = document.querySelector(".games-link");
      const gamesMenu = document.getElementById("gamesMenu");
      const headerContactLink = document.querySelector("header .contact-link");

      /* ----- Toggle Nav ----- */
      function toggleNav(isOpen) {
        navToggle.classList.toggle("active", isOpen);
        nav.classList.toggle("open", isOpen);
        body.classList.toggle("no-scroll", isOpen);
        body.classList.toggle("overlay", isOpen);

        if (!isOpen) toggleGamesMenu(isOpen);
      }

      navToggle.addEventListener("click", () => {
        toggleNav(!nav.classList.contains("open"));
      });

      document.querySelectorAll(".links a").forEach((link) => {
        link.addEventListener("click", () => {
          toggleNav(false);
        });
      });

      window.addEventListener("click", (e) => {
        if (!e.target) return;
        const clickedOutsideHeader = !header.contains(e.target);

        if (!clickedOutsideHeader) return;

        if (body.classList.contains("overlay")) {
          toggleNav(false);
        }

        if (window.innerWidth >= 992 && gamesMenu.classList.contains("open")) {
          toggleGamesMenu(false);
        }
      });

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          toggleNav(false);
        }
      });

      window.addEventListener("resize", () => {
        if (window.innerWidth >= 992) {
          toggleNav(false);
        }
      });

      /* ----- Active Nav Link ----- */
      const currentPage = body.dataset.page;

      document.querySelectorAll(".nav-link").forEach((link) => {
        if (link.classList.contains("contact-link")) return;

        if (link.dataset.page === currentPage) {
          link.classList.add("active");
        }
      });

      /* ----- Games Dropdown ----- */
      function toggleGamesMenu(isOpen) {
        gamesMenu.classList.toggle("open", isOpen);
        gamesLink.classList.toggle("active", isOpen);
      }

      gamesLink?.addEventListener("click", () => {
        toggleGamesMenu(!gamesMenu?.classList.contains("open"));
      });

      /* ----- Active Game Link / Contact Link ----- */
      headerFooterCommonLogic(gamesMenu, headerContactLink);
    });
}
