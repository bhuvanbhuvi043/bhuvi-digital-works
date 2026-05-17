const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const menuBackdrop = document.querySelector('.mobile-menu-backdrop');

if (menuToggle && navLinks) {
  const setMenuOpen = (isOpen) => {
    navLinks.classList.toggle('open', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  };

  menuToggle.addEventListener('click', () => {
    setMenuOpen(!navLinks.classList.contains('open'));
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      setMenuOpen(false);
    });
  });

  if (menuBackdrop) {
    menuBackdrop.addEventListener('click', () => setMenuOpen(false));
  }

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setMenuOpen(false);
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 760) {
      setMenuOpen(false);
    }
  });
}

const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

const backTop = document.querySelector('.back-top');
const showBackTop = () => {
  if (!backTop) return;
  backTop.classList.toggle('visible', window.scrollY > 420);
};

if (backTop) {
  backTop.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  });

  showBackTop();
  window.addEventListener('scroll', showBackTop, { passive: true });
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('active');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

const revealItems = document.querySelectorAll('.reveal');
const activateVisibleReveal = (el) => {
  const rect = el.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    el.classList.add('active');
  }
};

revealItems.forEach(el => {
  activateVisibleReveal(el);
  revealObserver.observe(el);
});

window.addEventListener('load', () => {
  revealItems.forEach(activateVisibleReveal);
});

const glow = document.querySelector('.cursor-glow');
if (glow) {
  window.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });
}
