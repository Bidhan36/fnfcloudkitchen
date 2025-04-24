// Smooth Scroll to Anchors (for navigation links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  
  // Navbar Sticky Effect on Scroll
  window.onscroll = function () {
    let navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  };
  
  // Animated Hero Section (Fade In)
  window.addEventListener('load', () => {
    const hero = document.querySelector('.hero-content');
    hero.classList.add('fade-in');
  });
  
  // Card Hover Animation for Menu Page
  document.querySelectorAll('.menu-card').forEach(card => {
    card.addEventListener('mouseover', () => {
      card.classList.add('hover');
    });
    card.addEventListener('mouseout', () => {
      card.classList.remove('hover');
    });
  });
  
  // Scroll Animations (for About and Class Pages)
  const sections = document.querySelectorAll('.about, .our-story, .class-section');
  const options = {
    threshold: 0.2,
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, options);
  
  sections.forEach(section => observer.observe(section));
  
  // Form Validation for Class Booking
  const form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = form.querySelector('#name');
    const email = form.querySelector('#email');
    const date = form.querySelector('#date');
    const time = form.querySelector('#time');
  
    if (!name.value || !email.value || !date.value || !time.value) {
      alert('Please fill in all fields.');
    } else if (!validateEmail(email.value)) {
      alert('Please enter a valid email address.');
    } else {
      form.submit();
    }
  });
  
  // Email Validation Function
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  }
  
  // Animations for Testimonials Slider
  const testimonialItems = document.querySelectorAll('.testimonial-item');
  let testimonialIndex = 0;
  
  function showNextTestimonial() {
    testimonialItems[testimonialIndex].classList.remove('visible');
    testimonialIndex = (testimonialIndex + 1) % testimonialItems.length;
    testimonialItems[testimonialIndex].classList.add('visible');
  }
  
  setInterval(showNextTestimonial, 4000);
  
  // Hover Animation for Images (Proprietor's Photo in About Page)
  const proprietorImage = document.querySelector('.about-image img');
  proprietorImage.addEventListener('mouseover', () => {
    proprietorImage.classList.add('zoom');
  });
  proprietorImage.addEventListener('mouseout', () => {
    proprietorImage.classList.remove('zoom');
  });
  
  // Initial Animation for Testimonials (on Page Load)
  testimonialItems.forEach(item => {
    item.classList.add('fade-in');
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const tagline = "Where every cup tells a story";
    const target = document.getElementById("tagline");
    let i = 0;
  
    function typeWriter() {
      if (i < tagline.length) {
        target.innerHTML += tagline.charAt(i);
        i++;
        setTimeout(typeWriter, 70);
      }
    }
  
    typeWriter();
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const testimonials = document.querySelectorAll(".testimonial-item");
    let index = 0;
  
    function showTestimonial() {
      testimonials.forEach((item, i) => {
        item.classList.remove("active");
        if (i === index) item.classList.add("active");
      });
  
      index = (index + 1) % testimonials.length;
    }
  
    showTestimonial();
    setInterval(showTestimonial, 4000); // Change testimonial every 4s
  });