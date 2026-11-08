document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("is-open", !expanded);
    });
  }
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      const data = new FormData(form);
      const email = "[REMPLACER-PAR-VOTRE-EMAIL]";
      const subject = encodeURIComponent("Demande depuis le site DSI Gardiennage — " + data.get("subject"));
      const body = encodeURIComponent(
        "Nom : " + data.get("name") + "\nE-mail : " + data.get("email") +
        "\nTéléphone : " + (data.get("phone") || "Non renseigné") +
        "\n\nMessage :\n" + data.get("message")
      );
      if (email.includes("REMPLACER")) {
        document.getElementById("form-note").textContent =
          "Avant utilisation, remplacez l'adresse e-mail dans assets/js/main.js et connectez le formulaire à une solution adaptée. Aucun message n'a été envoyé.";
        return;
      }
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    });
  }
});