/* =================================================================
   script.js — Abuja Hair Doctor
   Handles interactions: mobile menu toggle, scroll animations,
   and form submission feedback.
   ================================================================= */


/* =================================================================
   1. MOBILE NAVIGATION TOGGLE
   When the hamburger button is clicked, the menu slides smoothly
   in and out. The hamburger animates into an X shape.
   ================================================================= */

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

// When the hamburger is clicked
navToggle.addEventListener('click', () => {
  // Toggle the "open" class on both the button and the menu
  navToggle.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close the menu when a link is clicked
function closeMenu() {
  navToggle.classList.remove('open');
  navLinks.classList.remove('open');
}

// Make closeMenu available globally so onclick in HTML can call it
window.closeMenu = closeMenu;


/* =================================================================
   2. SCROLL-TRIGGERED FADE-IN ANIMATION
   Uses IntersectionObserver — a browser tool that watches when
   elements scroll into view. When they do, we add the "visible"
   class which triggers the CSS fade-in animation.
   ================================================================= */

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // "isIntersecting" means the element is now visible on screen
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.1  // Trigger when 10% of the element is visible
  }
);

// Apply the observer to every element with the class "fade-in"
document.querySelectorAll('.fade-in').forEach((el) => {
  observer.observe(el);
});


/* =================================================================
   3. BOOKING FORM SUBMIT BUTTON FEEDBACK
   When the "Request Appointment" button is clicked, we show a
   confirmation message. In a real website, this would send the
   form data to a server, but for now we just update the button.
   ================================================================= */

const submitBtn = document.getElementById('submitBtn');

if (submitBtn) {
  submitBtn.addEventListener('click', function() {
    // Change the button text to show confirmation
    this.textContent = '✓ Request Sent — We\'ll contact you shortly';
    // Change the button colour to green
    this.style.background = '#2d5a27';
    this.style.color = '#fff';
    // Disable the button so it can't be clicked again
    this.disabled = true;
  });
}


/* =================================================================
   4. SMOOTH SCROLL ENHANCEMENT (optional extra)
   This ensures smooth scrolling works even in older browsers
   that don't support CSS scroll-behavior: smooth
   ================================================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    
    // Only apply to internal anchor links (not external links)
    if (href !== '#' && href.startsWith('#')) {
      const target = document.querySelector(href);
      
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});
