const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('is-open');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => nav.classList.remove('is-open'));
  });
}

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const existingNote = contactForm.querySelector('.success-note');
    if (existingNote) existingNote.remove();

    const success = document.createElement('p');
    success.className = 'success-note';
    success.textContent = 'Demo-sivulla viestiä ei lähetetä minnekään, mutta tähän voidaan kytkeä myöhemmin oikea lomaketoiminto.';
    success.style.margin = '0';
    success.style.padding = '12px 14px';
    success.style.borderRadius = '14px';
    success.style.background = 'rgba(47, 226, 122, 0.12)';
    success.style.border = '1px solid rgba(47, 226, 122, 0.24)';
    success.style.color = '#dbffea';
    success.style.fontSize = '14px';
    success.style.lineHeight = '1.6';

    contactForm.appendChild(success);
    contactForm.reset();
  });
}
