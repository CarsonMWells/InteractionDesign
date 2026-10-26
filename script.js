const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

//Partially bootstrapped section below//
document.addEventListener('DOMContentLoaded', () => {
  const images = [
    'images/HeroImageA.png',
    'images/HeroImageB.png'
  ];

  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });

  const heroImg = document.getElementById('heroImage');
  if (!heroImg) return;

  let currentIndex = 0;
  const DISPLAY_TIME = 6000; 

  function swapImage() {
    heroImg.classList.remove('visible');

    heroImg.addEventListener('transitionend', function handleFadeOut() {
      heroImg.removeEventListener('transitionend', handleFadeOut);

      currentIndex = (currentIndex + 1) % images.length;
      heroImg.src = images[currentIndex];

      requestAnimationFrame(() => {
        heroImg.classList.add('visible');
      });
    }, { once: true });
  }

  setInterval(swapImage, DISPLAY_TIME);
});

document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('salePopup');
  const closeBtn = document.getElementById('closePopup');

  function openPopup() {
    if (popup) {
      popup.classList.add('is-open');
    }
  }

  function closePopup() {
    if (popup) {
      popup.classList.remove('is-open');
    }
  }

  openPopup();

  if (closeBtn) {
    closeBtn.addEventListener('click', closePopup);
  }

  if (popup) {
    popup.addEventListener('click', (event) => {
      if (event.target === popup) {
        closePopup();
      }
    });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && popup.classList.contains('is-open')) {
      closePopup();
    }
  });
});