// Minimal interactivity: year, menu toggle, and mobile nav behavior
document.getElementById('year').textContent = new Date().getFullYear();

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    if (nav) nav.style.display = expanded ? '' : 'flex';
  });
}

// Close mobile nav when a nav link is clicked
if (nav) {
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      if (window.innerWidth <= 900 && menuToggle) {
        menuToggle.setAttribute('aria-expanded', 'false');
        nav.style.display = 'none';
      }
    });
  });
}

// Optional: Basic client-side form success message
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    // Let the external service handle the submission.
    setTimeout(()=> alert('Thanks — your message is being sent.'), 200);
  });
}
