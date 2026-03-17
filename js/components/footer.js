import { headerFooterCommonLogic } from "../utilities/headerFooterLogic.js";

export function initFooter() {
  fetch("components/footer.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;

      const footerGamesLink = document.querySelector(".footer-games-link");
      const footerGamesMenu = document.querySelector(".footer-games-menu");
      const footerContactLink = document.querySelector("footer .contact-link");

      footerGamesLink?.addEventListener("click", () => {
        const isOpen = footerGamesMenu.classList.contains("open");
        footerGamesMenu.classList.toggle("open", !isOpen);
        footerGamesLink.classList.toggle("active", !isOpen);
      });

      /* ----- Active Game Link / Contact Link ----- */
      headerFooterCommonLogic(footerGamesMenu, footerContactLink);
    });
}
