const CONFIG = {
  whatsappNumber: '553138613100',
  whatsappMessage: 'Olá! Vi a página do Clube Estrela do Supermercado Araújo e gostaria de saber como faço para participar.'
};

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.main-nav');

menuToggle?.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    menu?.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`;

document.querySelectorAll('#whatsappLink, #whatsappFloating').forEach((button) => {
  button.href = whatsappUrl;
  button.target = '_blank';
  button.rel = 'noopener';
  button.addEventListener('click', () => {
    window.dataLayer?.push({
      event: 'click_whatsapp',
      source: button.id === 'whatsappFloating' ? 'floating_button' : 'cta_section'
    });
  });
});

document.querySelectorAll('a[href="#cadastro"]').forEach((link) => {
  link.addEventListener('click', () => {
    window.dataLayer?.push({event: 'click_cta_cadastro'});
  });
});
