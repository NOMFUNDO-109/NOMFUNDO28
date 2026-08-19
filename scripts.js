// Minimal interactivity: year and menu toggle
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

// Optional: Basic client-side form success message
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    // Let the external service handle the submission.
    // You can implement AJAX + success UI if using an API.
    setTimeout(()=> alert('Thanks — your message is being sent.'), 200);
  });
}
