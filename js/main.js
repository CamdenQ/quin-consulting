// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('#site-nav');
if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Contact form: progressive enhancement with fetch (works statically via Formspree)
const form = document.querySelector('#contact-form');
const statusEl = document.querySelector('.form-status');
if (form && statusEl) {
  form.addEventListener('submit', async (e) => {
    // If action is provided (e.g., Formspree endpoint), use it; else prevent and show guidance
    const action = form.getAttribute('action');
    if (!action) {
      e.preventDefault();
      statusEl.textContent = 'Form not connected yet. See README to hook up Formspree.';
      return;
    }
    e.preventDefault();
    statusEl.textContent = 'Sending…';
    try {
      const formData = new FormData(form);
      const response = await fetch(action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        form.reset();
        statusEl.textContent = 'Thanks! Message sent.';
      } else {
        statusEl.textContent = 'There was a problem sending your message.';
      }
    } catch (err) {
      statusEl.textContent = 'Network error. Please try again.';
    }
  });
}

// Footer year
const yearEl = document.querySelector('#year');
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}


