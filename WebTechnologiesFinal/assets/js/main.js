'use strict';

const header = document.querySelector('header');
const nav = document.querySelector('nav');
const navbarMenuBtn = document.querySelector('.navbar-menu-btn');

const navbarForm = document.querySelector('.navbar-form');
const navbarFormCloseBtn = document.querySelector('.navbar-form-close');
const navbarSearchBtn = document.querySelector('.navbar-search-btn');

function navIsActive() {
    header.classList.toggle('active');
    nav.classList.toggle('active');
    navbarMenuBtn.classList.toggle('active');
}

navbarMenuBtn.addEventListener('click', navIsActive);

const searchBarIsActive = () => navbarForm.classList.toggle('active');

navbarSearchBtn.addEventListener('click', searchBarIsActive);
navbarFormCloseBtn.addEventListener('click', searchBarIsActive);
  const signInLink = document.querySelector('.navbar-signin');
  const registerBox = document.getElementById('registerBox');
  const closeBtn = registerBox.querySelector('.close');


  signInLink.addEventListener('click', (e) => {
    e.preventDefault();
    registerBox.style.display = 'block';
  });
  closeBtn.addEventListener('click', () => registerBox.style.display = 'none');
  window.addEventListener('click', (e) => {
    if (e.target === registerBox) registerBox.style.display = 'none';
  });

 
  const passwordInput = document.getElementById('password');
  const message = document.getElementById('passwordMessage');

  passwordInput.addEventListener('input', () => {
    const v = passwordInput.value;

    const hasUppercase   = /[A-Z]/.test(v);
    const hasNumber      = /\d/.test(v);
    const hasLength      = v.length >= 8;
   
    const hasSpecialChar = /[^\da-zA-Z]/.test(v) && !/\s/.test(v);

    if (hasUppercase && hasNumber && hasLength && hasSpecialChar) {
      message.textContent = "Strong password";
      message.classList.remove('invalid');
      message.classList.add('valid');
    } else {
      message.textContent = "Password must have: 8+ chars, 1 uppercase, 1 number, 1 symbol";
      message.classList.remove('valid');
      message.classList.add('invalid');
    }
  });

  
  const togglePassword = document.getElementById('togglePassword');
  togglePassword.addEventListener('click', () => {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    togglePassword.setAttribute('name', type === 'password' ? 'eye-outline' : 'eye-off-outline');
  });



  const loginForm = document.getElementById("loginForm");
  const confettiButton = document.querySelector(".confetti-button");
  if(confettiButton && loginForm){
    confettiButton.addEventListener("click",(e)=>{
      if(!loginForm.checkValidity()){
        loginForm.reportValidity();
        return;
      }

      e.preventDefault();

      confetti ({
        particleCount: 150,
        spread: 120,
        origin: { y: 0.6 }
      });

      if (registerBox) {
        registerBox.classList.add("fade-out");
        setTimeout(() => {
          registerBox.style.display = "none";
          showSuccessMessage(); 
        }, 600);
      } else {
        
        showSuccessMessage();
      }
    });
  }
  function showSuccessMessage() {
    if (document.querySelector(".success-message")) return;

    const message = document.createElement("div");
    message.classList.add("success-message");
    message.innerHTML = `
      <span>You have successfully joined!</span>
      <button class="close-success" aria-label="Close">&times;</button>
    `;
    document.body.appendChild(message);

    setTimeout(() => message.classList.add("visible"), 100);

    const closeBtn = message.querySelector(".close-success");
    closeBtn.addEventListener("click", () => removeMessage(message));

    setTimeout(() => removeMessage(message), 2000);
  }

  function removeMessage(message) {
    if (!message) return;
    message.classList.remove("visible");
    setTimeout(() => message.remove(), 200); 
  }
  
  const trailerModal = document.getElementById('trailerModal');
const trailerFrame = document.getElementById('trailerFrame');
const closeTrailer = document.querySelector('.close-trailer');

document.querySelectorAll('.live-card .play').forEach(playBtn => {
  playBtn.addEventListener('click', () => {
    const movieTitle = playBtn
      .closest('.live-card')
      .querySelector('.card-title')
      .textContent
      .replace(/\s+/g, ' ') 
      .trim()
      .toLowerCase(); 

    const trailers = {
      "alice in borderland season 3": "https://www.youtube-nocookie.com/embed/_8p6YkEPVco?autoplay=1",
      "squid game season 3": "https://www.youtube-nocookie.com/embed/oqxAJKy0ii4",
      "stranger things season 5": "https://www.youtube-nocookie.com/embed/b9EkMc79ZSU?autoplay=1",
      "wednesday season 2": "https://www.youtube-nocookie.com/embed/03u4xyj0TH4?autoplay=1"
    };
    const trailerURL =
      trailers[movieTitle] ||
      "https://www.youtube-nocookie.com/embed/zSWdZVtXT7E?autoplay=1";
    trailerFrame.src = trailerURL;
    trailerModal.style.display = 'flex';
  });
});
closeTrailer.addEventListener('click', () => {
  trailerModal.style.display = 'none';
  trailerFrame.src = '';
});
window.addEventListener('click', (e) => {
  if (e.target === trailerModal) {
    trailerModal.style.display = 'none';
    trailerFrame.src = '';
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // 🌐 Переключатель языкового меню
  const langToggle = document.getElementById("languageToggle");
  const langMenu = document.querySelector(".language-menu");

  if (!langToggle || !langMenu) {
    console.warn("Language menu elements not found!");
    return;
  }

  // Открыть / закрыть меню при клике на кнопку 
  langToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    langMenu.classList.toggle("active");
  });

  // Закрыть меню при клике вне его
  window.addEventListener("click", (e) => {
    if (!langMenu.contains(e.target) && e.target !== langToggle) {
      langMenu.classList.remove("active");
    }
  });

  // Выбор языка
  document.querySelectorAll(".language-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const lang = e.target.dataset.lang;
      console.log(`🌐 Language switched to: ${lang}`);
      langMenu.classList.remove("active");
    });
  });
});



  document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");
  const movieCards = Array.from(document.querySelectorAll(".movie-card"));
  const genreSelect = document.querySelector(".filter-dropdowns .genre");
  const yearSelect = document.querySelector(".filter-dropdowns .year");
  const radioButtons = document.querySelectorAll(".filter-radios input[type='radio']");

  // 🔍 Search
  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    applyFilters();
  });

  // 🔄 Filter on select change
  genreSelect.addEventListener("change", applyFilters);
  yearSelect.addEventListener("change", applyFilters);

  // 🔘 Sort on radio change
  radioButtons.forEach(radio => {
    radio.addEventListener("change", applyFilters);
  });

  function applyFilters() {
    const query = searchInput.value.toLowerCase().trim();
    const selectedGenre = genreSelect.value.toLowerCase();
    const selectedYear = yearSelect.value;
    const selectedSort = document.querySelector(".filter-radios input[type='radio']:checked").id;

    let filteredMovies = movieCards.filter(card => {
      const title = card.querySelector(".card-title").textContent.toLowerCase();
      const genre = card.querySelector(".genre").textContent.toLowerCase();
      const year = card.querySelector(".year").textContent.trim();

      const matchesSearch = !query || title.includes(query) || genre.includes(query);
      const matchesGenre = selectedGenre === "all genres" || genre.includes(selectedGenre);
      const matchesYear = checkYearRange(selectedYear, year);

      return matchesSearch && matchesGenre && matchesYear;
    });

    // 🔄 Sort movies
    if (selectedSort === "newest") {
      filteredMovies.sort((a, b) => {
        const yearA = parseInt(a.querySelector(".year").textContent);
        const yearB = parseInt(b.querySelector(".year").textContent);
        return yearB - yearA; // newest first
      });
    } else if (selectedSort === "popular") {
      filteredMovies.sort((a, b) => {
        const ratingA = parseFloat(a.querySelector(".rating span").textContent);
        const ratingB = parseFloat(b.querySelector(".rating span").textContent);
        return ratingB - ratingA; // highest rating first
      });
    } else if (selectedSort === "featured") {
      // Custom rule — let's assume featured = rating > 8.5
      filteredMovies.sort((a, b) => {
        const ratingA = parseFloat(a.querySelector(".rating span").textContent);
        const ratingB = parseFloat(b.querySelector(".rating span").textContent);
        const isFeaturedA = ratingA >= 8.5 ? 1 : 0;
        const isFeaturedB = ratingB >= 8.5 ? 1 : 0;
        return isFeaturedB - isFeaturedA;
      });
    }

    // 🧱 Clear and display filtered/sorted movies
    const moviesGrid = document.querySelector(".movies-grid");
    moviesGrid.innerHTML = "";
    filteredMovies.forEach(card => moviesGrid.appendChild(card));
  }

  // 📆 Helper function to handle year ranges
  function checkYearRange(selected, year) {
    const y = parseInt(year);
    if (selected === "all years") return true;
    if (selected.includes("-")) {
      const [start, end] = selected.split("-").map(Number);
      return y >= start && y <= end;
    }
    return y === parseInt(selected);
  }
});


  document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");
    const movieCards = document.querySelectorAll(".movie-card");

    searchForm.addEventListener("submit", function(e) {
        e.preventDefault(); // Prevent page reload
        const query = searchInput.value.toLowerCase().trim();

        movieCards.forEach(card => {
            const title = card.querySelector(".card-title").textContent.toLowerCase();
            const genre = card.querySelector(".genre").textContent.toLowerCase();

            if (title.includes(query) || genre.includes(query)) {
                card.style.display = "block"; // show
            } else {
                card.style.display = "none"; // hide
            }
        });
    });
});

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const body = document.body;
const brandName = document.getElementById("brandName").querySelector("span");

// 🕶 Load previous theme if saved
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-mode");
  themeIcon.setAttribute("name", "moon-outline");
  brandName.style.color = "black";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    themeIcon.setAttribute("name", "moon-outline");
    brandName.style.color = "black"; // light mode → dark text
    localStorage.setItem("theme", "light");
  } else {
    themeIcon.setAttribute("name", "sunny-outline");
    brandName.style.color = "white"; // dark mode → white text
    localStorage.setItem("theme", "dark");
  }
});
