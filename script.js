// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });
});

// Smooth scroll function
function scrollToContact() {
  document.querySelector('#contact').scrollIntoView({
    behavior: 'smooth'
  });
}

// Form submission handler
function handleSubmit(event) {
  event.preventDefault();
  
  const form = event.target;
  const formData = new FormData(form);
  
  // Here you would typically send the form data to your backend
  console.log('Form submitted:', Object.fromEntries(formData));
  
  // Show success message
  alert('Thank you for your interest! We will contact you soon.');
  form.reset();
}

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > lastScroll) {
    nav.style.transform = 'translateY(-100%)';
  } else {
    nav.style.transform = 'translateY(0)';
  }
  
  lastScroll = currentScroll;
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
  const heroSection = document.querySelector('.hero');
  const scrolled = window.pageYOffset;
  
  heroSection.style.backgroundPosition = `center ${scrolled * 0.5}px`;
});

// Lazy loading for benefits section
const benefitSection = document.querySelector('.benefits-grid');
const benefits = document.querySelectorAll('.benefit');

const benefitObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.1
});

benefits.forEach(benefit => {
  benefit.style.opacity = 0;
  benefit.style.transform = 'translateY(20px)';
  benefit.style.transition = 'all 0.6s ease-out';
  benefitObserver.observe(benefit);
});
