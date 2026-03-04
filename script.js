const navbar = document.querySelector(".navbar");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;

  if (currentScroll > 200) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  lastScroll = currentScroll;
});



// Smooth scroll navigation
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    const headerOffset = 80;
    const elementPosition = targetSection.offsetTop;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  });
});



// Smooth scroll for all internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (!target) return;

    const headerOffset = 80; 
    const elementPosition = target.offsetTop;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});


document.getElementById("quoteBtn").addEventListener("click", function() {
  const contactSection = document.querySelector("#contact");

  const headerOffset = 80;
  const offsetPosition = contactSection.offsetTop - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
});



const catalogueBtn = document.getElementById("catalogueBtn");
const catalogueEmail = document.getElementById("catalogueEmail");
const catalogueMessage = document.getElementById("catalogueMessage");

catalogueBtn.addEventListener("click", function () {

  const email = catalogueEmail.value.trim();

  // Empty check
  if (!email) {
    showMessage("Please enter your email address", "error");
    return;
  }

  // Email format check
  if (!validateEmail(email)) {
    showMessage("Please enter a valid email address", "error");
    return;
  }

  // Loading state
  catalogueBtn.textContent = "Sending...";
  catalogueBtn.disabled = true;

  setTimeout(() => {
    showMessage("Catalogue request sent successfully!", "success");
    catalogueEmail.value = "";
    catalogueBtn.textContent = "Request Catalogue";
    catalogueBtn.disabled = false;
  }, 1200);
});

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showMessage(text, type) {
  catalogueMessage.textContent = text;
  catalogueMessage.className = "form-message " + type;
}


// CONTACT FORM FUNCTIONALITY

const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const companyName = document.getElementById("companyName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  // Basic Validation
  if (!fullName || !companyName || !email || !phone) {
    showMessage("Please fill all fields", "error");
    return;
  }

  if (!validateEmail(email)) {
    showMessage("Enter a valid email address", "error");
    return;
  }

  if (!/^[0-9]{10}$/.test(phone)) {
    showMessage("Enter a valid 10-digit phone number", "error");
    return;
  }

  // Simulate loading
  const button = form.querySelector("button");
  button.textContent = "Submitting...";
  button.disabled = true;

  setTimeout(() => {
    showMessage("Quote request submitted successfully!", "success");
    form.reset();
    button.textContent = "Request Custom Quote";
    button.disabled = false;
  }, 1500);
});

// Email validation function
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Show message
function showMessage(text, type) {
  message.textContent = text;
  message.className = "form-message " + type;
}




const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

const track = document.querySelector(".industry-track");
const nextBtn = document.querySelector(".industry-btn.next");
const prevBtn = document.querySelector(".industry-btn.prev");

let scrollAmount = 0;

nextBtn.addEventListener("click", () => {
  scrollAmount += 300;
  track.style.transform = `translateX(-${scrollAmount}px)`;
});

prevBtn.addEventListener("click", () => {
  scrollAmount -= 300;
  if (scrollAmount < 0) scrollAmount = 0;
  track.style.transform = `translateX(-${scrollAmount}px)`;
});

const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
  });
});


document.getElementById("expertBtn").addEventListener("click", function() {

  const footer = document.getElementById("footer");

  footer.scrollIntoView({
    behavior: "smooth"
  });

});



