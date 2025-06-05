window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".custom-navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

const hamburger = document.getElementById("hamburger");
const menuClose = document.getElementById("menuClose");
const slideMenu = document.getElementById("slideMenu");

// Buka menu saat hamburger diklik
hamburger.addEventListener("click", () => {
  slideMenu.classList.add("active");
});

// Tutup menu saat tombol close diklik
menuClose.addEventListener("click", () => {
  slideMenu.classList.remove("active");
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  question.addEventListener("click", () => {
    // Close all if you want accordion style
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
        const otherAnswer = otherItem.querySelector(".faq-answer");
        otherAnswer.style.maxHeight = null;
        otherAnswer.style.opacity = 0;
        otherAnswer.style.padding = "0 20px";
        otherAnswer.style.transform = "translateY(-10px)";
      }
    });

    item.classList.toggle("active");

    if (item.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
      answer.style.opacity = 1;
      answer.style.padding = "20px";
      answer.style.transform = "translateY(0)";
    } else {
      answer.style.maxHeight = 0;
      answer.style.opacity = 0;
      answer.style.padding = "0 20px";
      answer.style.transform = "translateY(-10px)";
    }
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    clickable: true,
  },
});
