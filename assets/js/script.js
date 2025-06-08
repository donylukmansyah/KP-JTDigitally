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

// ? menu search
async function fetchGalleryData() {
  try {
    const response = await fetch("assets/data/data-articles.json");
    const data = await response.json();
    tampilkanArtikel(data);

    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
      searchInput.addEventListener("keyup", function () {
        const keyword = this.value.trim().toLowerCase();
        const hasilFilter = data.filter(item =>
          item.name.toLowerCase().includes(keyword) ||
          item.desc.toLowerCase().includes(keyword)
        );
        tampilkanArtikel(hasilFilter);
      });
    }
  } catch (error) {
    console.error("Gagal memuat data JSON:", error);
    const container = document.getElementById("articleSection");
    container.innerHTML = "<p>Gagal memuat artikel. Silakan coba lagi nanti.</p>";
  }
}

function tampilkanArtikel(data) {
  const container = document.getElementById("articleSection");
  container.innerHTML = "";

  if (data.length === 0) {
    container.innerHTML = `<div class="no-result"><p>Tidak ada artikel yang cocok.</p></div>`;
    return;
  }

  data.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("article-card");

    const link = item.link; // langsung ambil dari JSON

    card.innerHTML = `
      <img src="${item.src}" alt="${item.name}">
      <div class="article-content">
        <a href="${link}">${item.name}</a>
        <p>${item.desc}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

function getLink(namaArtikel) {
  if (namaArtikel.includes("Layanan Desain Grafis")) {
    return "pages/layanan-desain.html";
  }
  if (namaArtikel.includes("Jasa Pasang Iklan")) {
    return "pages/pasang-iklan.html";
  }
  if (namaArtikel.includes("Jasa Branding Produk UMKM")) {
    return "pages/branding-umkm.html";
  }
  return "#";
}

document.addEventListener("DOMContentLoaded", fetchGalleryData);




// ? menu search end


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
