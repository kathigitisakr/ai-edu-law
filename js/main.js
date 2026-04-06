/* ============================================================
   ΤΝ & Εκπαιδευτικό Δίκαιο — Κοινό JavaScript
   Περιλαμβάνει: πλοήγηση, theme toggle, animations, back-to-top
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------------
     1. THEME TOGGLE (dark/light)
     Αποθήκευση προτίμησης στο localStorage
     -------------------------------------------------------- */
  const themeToggle = document.querySelector('.theme-toggle');
  const htmlEl = document.documentElement;

  // Φόρτωση αποθηκευμένου θέματος ή default dark
  const savedTheme = localStorage.getItem('ai-edu-theme') || 'dark';
  htmlEl.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = htmlEl.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      htmlEl.setAttribute('data-theme', next);
      localStorage.setItem('ai-edu-theme', next);
      updateThemeIcon(next);
    });
  }

  // Ενημέρωση εικονιδίου θέματος
  function updateThemeIcon(theme) {
    if (!themeToggle) return;
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    themeToggle.setAttribute('aria-label',
      theme === 'dark' ? 'Εναλλαγή σε φωτεινό θέμα' : 'Εναλλαγή σε σκούρο θέμα'
    );
  }

  /* --------------------------------------------------------
     2. MOBILE HAMBURGER MENU
     -------------------------------------------------------- */
  const hamburger = document.querySelector('.hamburger');
  const mainNav = document.querySelector('.main-nav');

  if (hamburger && mainNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mainNav.classList.toggle('open');
      // Αποτροπή scroll όταν το μενού είναι ανοιχτό
      document.body.style.overflow = mainNav.classList.contains('open') ? 'hidden' : '';
    });

    // Κλείσιμο μενού όταν πατηθεί σύνδεσμος
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mainNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* --------------------------------------------------------
     3. ACTIVE NAV LINK — επισήμανση τρέχουσας σελίδας
     -------------------------------------------------------- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* --------------------------------------------------------
     4. FADE-IN ON SCROLL (Intersection Observer)
     Στοιχεία με class "fade-in" εμφανίζονται σταδιακά
     -------------------------------------------------------- */
  const fadeElements = document.querySelectorAll('.fade-in, .stagger');
  if (fadeElements.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    fadeElements.forEach(el => observer.observe(el));
  }

  /* --------------------------------------------------------
     5. BACK TO TOP BUTTON
     Εμφανίζεται μετά από scroll 400px
     -------------------------------------------------------- */
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }, { passive: true });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* --------------------------------------------------------
     6. SMOOTH SCROLL για εσωτερικούς συνδέσμους
     -------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});

/* ============================================================
   ΒΟΗΘΗΤΙΚΕΣ ΣΥΝΑΡΤΗΣΕΙΣ (εξαγωγή για χρήση σε άλλα αρχεία)
   ============================================================ */

/**
 * Δημιουργία HTML-safe string (αποφυγή XSS)
 * @param {string} str - Κείμενο προς sanitize
 * @returns {string} - Safe HTML string
 */
function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/**
 * Αναζήτηση κειμένου σε πολλαπλά πεδία αντικειμένου
 * @param {Object} item - Αντικείμενο αναζήτησης
 * @param {string[]} fields - Πεδία προς αναζήτηση
 * @param {string} query - Κείμενο αναζήτησης
 * @returns {boolean}
 */
function searchInFields(item, fields, query) {
  const q = query.toLowerCase().trim();
  if (!q) return true;
  return fields.some(field => {
    const value = item[field];
    if (typeof value === 'string') {
      return value.toLowerCase().includes(q);
    }
    if (Array.isArray(value)) {
      return value.some(v => String(v).toLowerCase().includes(q));
    }
    return false;
  });
}

/**
 * Δημιουργία κοινού HTML navigation header
 * Χρήση: καλείται από κάθε σελίδα αν δεν έχει hardcoded header
 * @param {string} activePage - Όνομα αρχείου τρέχουσας σελίδας
 * @returns {string} - HTML string
 */
function generateNav(activePage) {
  const pages = [
    { href: 'index.html', label: 'Αρχική', icon: '🏠' },
    { href: 'legislation.html', label: 'Νομοθεσία', icon: '⚖️' },
    { href: 'qa.html', label: 'Q&A', icon: '❓' },
    { href: 'quiz.html', label: 'Quiz', icon: '📝' },
    { href: 'resources.html', label: 'Πηγές', icon: '📚' },
    { href: 'glossary.html', label: 'Γλωσσάρι', icon: '📖' },
    { href: 'timeline.html', label: 'Χρονολόγιο', icon: '📅' },
  ];

  return pages.map(p =>
    `<a href="${p.href}" class="${p.href === activePage ? 'active' : ''}">${p.label}</a>`
  ).join('\n');
}
