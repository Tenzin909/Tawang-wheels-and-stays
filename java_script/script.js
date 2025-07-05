document.getElementById('contactForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for contacting us!');
});

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,
  loop: false, // or true if you want looping
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
