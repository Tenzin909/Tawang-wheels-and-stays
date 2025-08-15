document.getElementById('contactForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for contacting us!');
});

let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    // At the very top — always show header
    header.style.transform = "translateY(0)";
    return;
  }

  if (currentScroll > lastScroll) {
    // Scrolling down — hide header
    header.style.transform = "translateY(-100%)";
  } else {
    // Scrolling up — show header
    header.style.transform = "translateY(0)";
  }

  lastScroll = currentScroll;
});


