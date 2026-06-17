import './style.css';
import { createIcons, icons } from 'lucide';

// Initialize Lucide icons
createIcons({ icons });

// Update footer year dynamically
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear().toString();
}

// Intersection Observer for scroll animations
const setupScrollAnimations = () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Optional: Stop observing once animated in
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
  elementsToAnimate.forEach((el) => observer.observe(el));
};

// Initialize animations once DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  setupScrollAnimations();
});
