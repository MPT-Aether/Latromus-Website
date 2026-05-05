AOS.init({
  duration: 800,
  once: false,           
  mirror: true,         
  offset: 100,
  easing: 'ease-out-quad'
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Force AOS to refresh on scroll to ensure animations recalculate
window.addEventListener('scroll', function() {
  if (window.AOS) {
    // AOS handles refresh automatically with once: false and mirror: true
    // This ensures elements animate both when entering and re-entering viewport
  }
});

// Interactive demo button alerts (show system features)
const ctaButton = document.getElementById('ctaButton');
const demoScrollBtn = document.getElementById('demoScrollBtn');
const finalCta = document.getElementById('finalCta');

if (ctaButton) {
  ctaButton.addEventListener('click', () => {
    alert("✨ Latromus is currently in development. Join waitlist to get early access and transform your financial habits!");
  });
}

if (finalCta) {
  finalCta.addEventListener('click', () => {
    alert("📱 Thank you for your interest! Launching soon for Senior High & College students. Stay tuned.");
  });
}

if (demoScrollBtn) {
  demoScrollBtn.addEventListener('click', () => {
    const demoSection = document.getElementById('demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
      // subtle highlight effect
      demoSection.style.transition = 'background 0.4s';
      demoSection.style.backgroundColor = 'rgba(255,255,255,0.1)';
      setTimeout(() => { demoSection.style.backgroundColor = ''; }, 800);
    }
  });
}

// Interactive 'Enter to Categorize' button simulation
const catBtn = document.querySelector('.enter-cat-btn');
if (catBtn) {
  catBtn.addEventListener('click', () => {
    alert("📊 Budget Management: you can create custom categories, adjust percentages, and track every expense category in the full app.");
  });
}

// Hover effect for feature cards - extra microinteraction
const cards = document.querySelectorAll('.feature-card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.02)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });
});

// Additional interactive effect for demo cards
const demoCards = document.querySelectorAll('.demo-card');
demoCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-4px)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});

// Observer for custom fade-in reset - ensures elements re-animate when scrolling back
// This creates an Intersection Observer that adds/removes a class to trigger re-animation
const animatedElements = document.querySelectorAll('[data-aos]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // When element comes into view, ensure animation plays
      const el = entry.target;
      const aosAttr = el.getAttribute('data-aos');
      if (aosAttr && !el.classList.contains('aos-animate')) {
        // AOS will handle adding the animate class naturally
        // This just ensures AOS is aware
        if (window.AOS) {
          // Small delay to allow AOS to reprocess
          setTimeout(() => {
            el.classList.remove('aos-animate');
            el.offsetHeight; // force reflow
            el.classList.add('aos-animate');
          }, 10);
        }
      }
    }
  });
}, { threshold: 0.15 });

// Observe all AOS elements for re-animation on scroll back
animatedElements.forEach(el => observer.observe(el));

// Manual reset trigger for any AOS elements that might have been skipped
window.addEventListener('scroll', () => {
  // This helps re-trigger animations that might have been missed
  if (window.AOS) {
    // AOS.refresh() updates positions but doesn't force re-animation
    // The observer handles the re-animation on re-entry
  }
});

// Console inspirational message
console.log("%c✨ Latromus — Build Smarter Financial Habits on Teal ✨", "color: #3BAF9A; font-size: 16px; font-weight: bold; background: #0B2F2A; padding: 4px 8px; border-radius: 8px;");
console.log("Track expenses · Budget categories · Savings goals · Cash flow simulation");
console.log("%c✨ SCROLL ANIMATIONS RESET: Elements re-animate when you scroll back up! ✨", "color: #F9D56E; font-size: 12px;");