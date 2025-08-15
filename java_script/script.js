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


let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop <= 0) {
    // Always show at the top
    header.style.transform = "translateY(0)";
  } else if (scrollTop > lastScrollTop) {
    // Down
    header.style.transform = "translateY(-100%)";
  } else {
    // Up
    header.style.transform = "translateY(0)";
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});


