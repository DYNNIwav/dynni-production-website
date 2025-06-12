// Animate-in on scroll
let ticking = false;
function animateInOnScroll() {
  const els = document.querySelectorAll('.animate-in');
  const trigger = window.innerHeight * 0.92;
  els.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < trigger) {
      el.classList.add('visible');
    }
  });
}

function onScroll() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      animateInOnScroll();
      ticking = false;
    });
    ticking = true;
  }
}

window.addEventListener('scroll', onScroll);

// Animate-in on load
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelectorAll('.animate-in').forEach(el => el.classList.add('visible'));
  }, 200);
});

// Loading animation
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loading-overlay').style.opacity = '0';
    setTimeout(() => {
      document.getElementById('loading-overlay').style.display = 'none';
    }, 600);
  }, 1200);
});

// Hamburger menu toggle
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navLinks = document.querySelector('.nav-links');
if (hamburgerBtn && navLinks) {
  hamburgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

// Scroll-triggered glassy navbar
const mainNav = document.getElementById('mainNav');
let lastScrollY = window.scrollY;
function handleNavScroll() {
  if (!mainNav) return;
  if (window.scrollY > window.innerHeight * 0.7) {
    mainNav.classList.add('visible');
  } else {
    mainNav.classList.remove('visible');
  }
  lastScrollY = window.scrollY;
}
window.addEventListener('scroll', handleNavScroll);
window.addEventListener('DOMContentLoaded', handleNavScroll);

// Carousel: horizontal scroll with mouse/touch
const carousels = document.querySelectorAll('.carousel');
carousels.forEach(carousel => {
  let isDown = false;
  let startX, scrollLeft;
  carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    carousel.classList.add('dragging');
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });
  carousel.addEventListener('mouseleave', () => {
    isDown = false;
    carousel.classList.remove('dragging');
  });
  carousel.addEventListener('mouseup', () => {
    isDown = false;
    carousel.classList.remove('dragging');
  });
  carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1.2;
    carousel.scrollLeft = scrollLeft - walk;
  });
  // Touch support
  carousel.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });
  carousel.addEventListener('touchend', () => {
    isDown = false;
  });
  carousel.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1.2;
    carousel.scrollLeft = scrollLeft - walk;
  });
});

// Parallax blobs (hero)
window.addEventListener('mousemove', (e) => {
  const blobs = document.querySelectorAll('.blob');
  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;
  blobs.forEach((blob, i) => {
    const factor = (i + 1) * 12;
    blob.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
  });
});

// Animated logo (pulse)
window.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.liquid-logo');
  if (logo) {
    logo.animate([
      { filter: 'drop-shadow(0 8px 32px rgba(0,224,211,0.18)) scale(1)' },
      { filter: 'drop-shadow(0 16px 48px rgba(0,224,211,0.28)) scale(1.04)' },
      { filter: 'drop-shadow(0 8px 32px rgba(0,224,211,0.18)) scale(1)' }
    ], {
      duration: 3200,
      iterations: Infinity,
      delay: 1200
    });
  }
});

// Dark mode toggle
const darkToggle = document.getElementById('dark-toggle');
function setDarkMode(on) {
  if (on) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('dynni-dark', '1');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('dynni-dark', '0');
  }
}
if (darkToggle) {
  darkToggle.addEventListener('click', () => {
    setDarkMode(!document.body.classList.contains('dark-mode'));
  });
}
window.addEventListener('DOMContentLoaded', () => {
  const darkPref = localStorage.getItem('dynni-dark');
  if (darkPref === '1' || (darkPref === null && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    setDarkMode(true);
  }
});

// Animate elements on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.animate-in');
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const isVisible = (elementTop < window.innerHeight) && (elementBottom >= 0);
    
    if (isVisible) {
      element.classList.add('visible');
    }
  });
};

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);
});

// Initialize Lenis smooth scroll
if (window.Lenis) {
  const lenis = new Lenis({
    duration: 1.2,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
    smooth: true
  });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
} 