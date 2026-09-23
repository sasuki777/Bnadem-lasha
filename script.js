// =========================
// LOADER
// =========================

window.addEventListener("load", function() {
  
  const loader = document.querySelector(".loader");
  
  setTimeout(function() {
    loader.classList.add("hide");
  }, 700);
  
});


// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function() {
  
  navLinks.classList.toggle("open");
  
});


// Close menu when clicking a link

document.querySelectorAll(".nav-links a").forEach(function(link) {
  
  link.addEventListener("click", function() {
    
    navLinks.classList.remove("open");
    
  });
  
});


// =========================
// SCROLL ANIMATION
// =========================

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  
  const windowHeight = window.innerHeight;
  
  revealElements.forEach(function(element) {
    
    const elementTop =
      element.getBoundingClientRect().top;
    
    if (elementTop < windowHeight - 100) {
      
      element.classList.add("active");
      
    }
    
  });
  
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function() {
  
  if (window.scrollY > 50) {
    
    navbar.style.padding = "15px 7%";
    
  } else {
    
    navbar.style.padding = "25px 7%";
    
  }
  
});
