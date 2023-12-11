// Attente du chargement complet du document
document.addEventListener('DOMContentLoaded', function() {
  // Sélection de tous les liens dans la classe .mesIcons
  const links = document.querySelectorAll('.mesIcons li a');

  // Ajout d'un écouteur d'événement de clic sur chaque lien
  links.forEach(function(link) {
      link.addEventListener('click', function(e) {
          // Récupération de l'ID cible à partir du lien
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);

          // Si l'élément cible existe, défilement fluide jusqu'à cet élément
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop,
                  behavior: 'smooth'
              });
          }
      });
  });
});

// Gestion du bouton "Voir Plus/Voir Moins"
var boutonVoirPlus = document.getElementById('voirPlus');
var etatOuvert = true;

boutonVoirPlus.addEventListener('click', function() {
  // Sélection de tous les éléments avec la classe .autresIcons
  var autresIcons = document.querySelectorAll('.autresIcons');
  autresIcons.forEach(function(icon) {
      // Bascule entre l'affichage et le masquage des éléments
      if (icon.style.display === 'none' || icon.style.display === '') {
          icon.style.display = 'flex';
      } else {
          icon.style.display = 'none';
      }
  });

  etatOuvert = !etatOuvert;

  // Modification du texte et de la couleur du bouton
  if (etatOuvert) {
      boutonVoirPlus.textContent = "Voir plus";
      boutonVoirPlus.style.backgroundColor = "#007bff"; 
  } else {
      boutonVoirPlus.textContent = "Voir moins";
      boutonVoirPlus.style.backgroundColor = "green"; 
  }
});

// Animation des éléments lors du défilement
const elements = document.querySelectorAll('.animate-on-scroll');

// Création d'un observateur pour détecter quand les éléments entrent dans la vue
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    // Si l'élément est visible, appliquer l'animation
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

// Initialisation des éléments pour l'animation
elements.forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  observer.observe(element);
});

// Écouteur d'événement pour la soumission du formulaire
document.querySelector('form').addEventListener('submit', function(event) {
  // Récupération des valeurs des champs du formulaire
  var name = document.getElementById('name').value;
  var prenom = document.getElementById('prenom').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Vérification si tous les champs sont remplis
  if (name === '' || prenom === '' || email === '' || password === '') {
      alert('Veuillez remplir tous les champs.'); // Affiche une alerte si un champ est vide
      event.preventDefault(); // Empêche la soumission du formulaire si un champ est vide
  }
});
