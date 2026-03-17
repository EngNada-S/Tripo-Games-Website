export function initLibraries() {
  AOS.init({
    once: true,
    easing: "ease-out-cubic",
    duration: 700,
  });

  if (
    document.querySelector(".contact-form") ||
    document.querySelector(".application-form")
  ) {
    emailjs.init({
      publicKey: "QGWpa7G1EDKIyPWfc",
    });
  }
}
