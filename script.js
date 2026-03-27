const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const contactForm = document.getElementById('contactForm');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

Array.from(document.querySelectorAll('.reveal')).forEach((element) => {
  observer.observe(element);
});

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = encodeURIComponent(formData.get('name') || '');
    const email = encodeURIComponent(formData.get('email') || '');
    const phone = encodeURIComponent(formData.get('phone') || '');
    const message = encodeURIComponent(formData.get('message') || '');

    const subject = encodeURIComponent('Uusi demo-/yhteydenottopyyntö verkkosivulta');
    const body = encodeURIComponent(
      `Nimi: ${decodeURIComponent(name)}\n` +
      `Sähköposti: ${decodeURIComponent(email)}\n` +
      `Puhelin: ${decodeURIComponent(phone)}\n\n` +
      `Viesti:\n${decodeURIComponent(message)}`
    );

    window.location.href = `mailto:jerry.chatpalvelu@gmail.com?subject=${subject}&body=${body}`;
  });
}
