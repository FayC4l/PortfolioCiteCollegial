document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.mesIcons li a');

  links.forEach(function(link) {
      link.addEventListener('click', function(e) {
      

          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop,
                  behavior: 'smooth'
              });
          }
      });
  });
});

//--------------------
var boutonVoirPlus = document.getElementById('voirPlus');
var etatOuvert = true;

boutonVoirPlus.addEventListener('click', function() {
  var autresIcons = document.querySelectorAll('.autresIcons');
  autresIcons.forEach(function(icon) {
      if (icon.style.display === 'none' || icon.style.display === '') {
          icon.style.display = 'flex';
      } else {
          icon.style.display = 'none';
      }
  });

  etatOuvert = !etatOuvert;

  if (etatOuvert) {
      boutonVoirPlus.textContent = "Voir plus";
      boutonVoirPlus.style.backgroundColor = "#007bff"; 
  } else {
      boutonVoirPlus.textContent = "Voir moins";
      boutonVoirPlus.style.backgroundColor = "green"; 
  }
});

document.getElementById('voirPlus').addEventListener('click', function() {
  var autresIcons = document.querySelectorAll('.autresIcons');
  autresIcons.forEach(function(icon) {
      icon.classList.toggle('show');
  });
});


//----------------------------------

const elements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.style.opacity = '1';
    entry.target.style.transform = 'translateY(0)';
    observer.unobserve(entry.target);
  }
});
}, { threshold: 0.5 });

elements.forEach(element => {
element.style.opacity = '0';
element.style.transform = 'translateY(20px)';
observer.observe(element);
});

