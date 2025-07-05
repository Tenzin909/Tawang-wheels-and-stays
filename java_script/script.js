document.getElementById('contactForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for contacting us!');
});

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  centeredSlides: true, // ✅ This solves the centering issue
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      centeredSlides: false // Disable center mode on wider screens
    },
    1024: {
      slidesPerView: 3,
      centeredSlides: false
    },
  },
});

