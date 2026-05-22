// THEME

const body = document.body;
const toggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  body.classList.add("light-mode");
}

// TOGGLE

toggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
});

// CUSTOM CURSOR

window.addEventListener("DOMContentLoaded", () => {
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");

  // HARD CHECK (prevents silent failure)
  if (!dot || !ring) {
    console.error("Cursor elements missing in DOM");
    return;
  }

  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;

  window.addEventListener("mousemove", (e) => {
    x = e.clientX;
    y = e.clientY;

    dot.style.left = x + "px";
    dot.style.top = y + "px";
  });

  let rx = x;
  let ry = y;

  function animate() {
    rx += (x - rx) * 0.12;
    ry += (y - ry) * 0.12;

    ring.style.left = rx + "px";
    ring.style.top = ry + "px";

    requestAnimationFrame(animate);
  }

  animate();
});

// LOADER FIX

document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";

    loader.style.pointerEvents = "none";

    setTimeout(() => {
      loader.style.display = "none";
    }, 800);
  }, 1700);
});

// MENU

const menuBtn = document.getElementById("menuBtn");
const fullscreenMenu = document.getElementById("fullscreenMenu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");

  fullscreenMenu.classList.toggle("active");
});

// SLIDER

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentSlide = 0;

// SHOW SLIDE

function showSlide(index){

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  slides[index].classList.add("active");
  dots[index].classList.add("active");

}

// NEXT

function nextSlide(){

  currentSlide++;

  if(currentSlide >= slides.length){
    currentSlide = 0;
  }

  showSlide(currentSlide);

}

// PREV

function prevSlide(){

  currentSlide--;

  if(currentSlide < 0){
    currentSlide = slides.length - 1;
  }

  showSlide(currentSlide);

}

// BUTTON EVENTS

nextBtn.addEventListener("click", nextSlide);

prevBtn.addEventListener("click", prevSlide);

// DOT EVENTS

dots.forEach((dot, index) => {

  dot.addEventListener("click", () => {

    currentSlide = index;

    showSlide(currentSlide);

  });

});

// AUTO SLIDE

setInterval(() => {

  nextSlide();

}, 5000);

// external links for slide images

document.querySelectorAll(".slide").forEach((slide) => {
  slide.addEventListener("click", () => {
    window.location.href = slide.dataset.link;
  });
});

// FOOTER DROPDOWN

const footerDropdownBtn =
document.getElementById("footerDropdownBtn");

const footerDropdown =
document.getElementById("footerDropdown");

footerDropdownBtn.addEventListener("click", () => {

  footerDropdown.classList.toggle("active");

});

// MOBILE SOCIAL MENU

const mobileSocialBtn =
document.getElementById("mobileSocialBtn");

const mobileSocialMenu =
document.getElementById("mobileSocialMenu");

mobileSocialBtn.addEventListener("click", () => {

  mobileSocialMenu.classList.toggle("active");

  // ICON SWITCH

  const icon =
  mobileSocialBtn.querySelector("i");

  if(mobileSocialMenu.classList.contains("active")){

    icon.classList.remove("fa-link");
    icon.classList.add("fa-xmark");

  }else{

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-link");

  }

});