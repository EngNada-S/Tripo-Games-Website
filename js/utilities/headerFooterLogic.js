export function headerFooterCommonLogic(gamesMenu, contactLink) {
  /* ----- Active Game Link  ----- */
  const urlParams = new URLSearchParams(window.location.search);
  const gameId = urlParams.get("gameid");

  if (gameId) {
    gamesMenu?.querySelectorAll("a").forEach((link) => {
      if (link.dataset.id === gameId) {
        link.classList.add("active");
      }
    });
  }

  /* ----- Contact Link ----- */
  if (!contactLink) return;
  
  if (document.body.dataset.page === "home") {
    contactLink.href = "#contact";
  } else {
    contactLink.href = "../index.html#contact";
  }
}
