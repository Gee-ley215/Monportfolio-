// Attendre le chargement complet du DOM
document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Gestion de la soumission du formulaire de contact
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Empêche le rechargement de la page
      
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;

      alert(`Merci ${name} ! Votre message a bien été envoyé.`);
      contactForm.reset(); // Réinitialise les champs du formulaire
    });
  }

  // 2. Optionnel : effet de surbrillance sur les liens du menu lors du scroll
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  window.addEventListener("scroll", () => {
    let currentSectionId = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  });

});