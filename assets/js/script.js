window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".custom-navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

// Cek URL aktif saat ini
const currentPage = window.location.pathname.split("/").pop(); // ambil nama file terakhir

const menuItems = document.querySelectorAll(".menu-center ul li");

menuItems.forEach((item) => {
  const link = item.querySelector("a");
  const href = link.getAttribute("href");

  // Jika href sama dengan halaman saat ini, beri class active
  if (href === currentPage || (currentPage === "" && href === "index.html")) {
    item.classList.add("active");
  } else {
    item.classList.remove("active");
  }
});

const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const keyword = this.value.toLowerCase();
    const articles = document.querySelectorAll(".article-card");

    articles.forEach((article) => {
      const title = article.querySelector("a").textContent.toLowerCase();
      const content = article.querySelector("p").textContent.toLowerCase();

      if (title.includes(keyword) || content.includes(keyword)) {
        article.style.display = "block";
      } else {
        article.style.display = "none";
      }
    });
  });
}


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
