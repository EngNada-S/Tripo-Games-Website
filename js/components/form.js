import { displayMsg } from "../utilities/message.js";
import { clearForm } from "../utilities/clearForm.js";

export function initForm() {
  const formContainers = document.querySelectorAll(".application-form");

  fetch("components/form.html")
    .then((res) => res.text())
    .then((data) => {
      formContainers.forEach((ele) => {
        ele.innerHTML = data;

        const openBtn = document.querySelector(".open-form");
        const closeBtn = ele.querySelector("#close-form");
        const form = ele.querySelector("#apply-form");

        /* ----- Toggle Form Visibility ----- */
        function toggleForm(isOpen) {
          ele.classList.toggle("open", isOpen);
          document.body.classList.toggle("no-scroll", isOpen);
        }

        if (!openBtn || !closeBtn) return;

        openBtn.addEventListener("click", () =>
          toggleForm(!ele.classList.contains("open")),
        );

        closeBtn.addEventListener("click", (e) => {
          e.preventDefault();
          toggleForm(false);
        });

        window.addEventListener("click", (e) => {
          if (
            ele.classList.contains("open") &&
            !form.contains(e.target) &&
            e.target !== openBtn
          ) {
            toggleForm(false);
          }
        });

        document.addEventListener("keydown", function (e) {
          if (e.key === "Escape") toggleForm(false);
        });

        /* ----- Phone Input Plugin ----- */
        const phoneInput = ele.querySelector("#phone");
        if (!phoneInput) return;

        const script = document.createElement("script");
        script.src =
          "https://cdn.jsdelivr.net/npm/intl-tel-input@25.11.3/build/js/intlTelInput.min.js";
        script.onload = () => {
          window.intlTelInput(phoneInput, {
            loadUtils: () =>
              import("https://cdn.jsdelivr.net/npm/intl-tel-input@26.8.1/build/js/utils.js"),
          });
        };
        document.body.appendChild(script);

        form.addEventListener("submit", (event) => sendMail(event, closeBtn));
      });
    });
}

/* ----- Send Form via EmailJS ----- */
function sendMail(event, closeBtn) {
  event.preventDefault();

  const params = {
    from_firstname: document.getElementById("first-name").value,
    from_lastname: document.getElementById("last-name").value,
    from_email: document.getElementById("email").value,
    from_phone: document.getElementById("phone").value,
    position: document.getElementById("position").value,
    linkedin_url: document.getElementById("linkedin").value,
    cv_url: document.getElementById("cv").value,
  };

  const serviceID = "service_dva21bi";
  const templateID = "template_ble5u16";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      clearForm([
        "first-name",
        "last-name",
        "email",
        "phone",
        "position",
        "linkedin",
        "cv",
      ]);
      closeBtn.click();
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
}
