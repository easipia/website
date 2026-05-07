/* ========================================
   East Asia Section of IPIA - Main JavaScript
   ======================================== */

// --- Mobile Nav Toggle ---
(function() {
  var toggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function() {
      navLinks.classList.toggle('open');
    });

    // Close nav when a link is clicked (mobile)
    navLinks.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        navLinks.classList.remove('open');
      });
    });
  }
})();

// --- Scroll to Top Button ---
(function() {
  var btn = document.getElementById('scrollTop');

  if (btn) {
    window.addEventListener('scroll', function() {
      btn.classList.toggle('visible', window.scrollY > 300);
    });

    btn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();

// --- Highlight Active Sidebar Link ---
(function() {
  var sidebarLinks = document.querySelectorAll('.sidebar a');

  function updateActiveLink() {
    var scrollPos = window.scrollY + 150;
    var currentId = '';

    document.querySelectorAll('.page-section').forEach(function(section) {
      if (section.offsetTop <= scrollPos) {
        currentId = section.getAttribute('id');
      }
    });

    sidebarLinks.forEach(function(link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentId) {
        link.classList.add('active');
      }
    });
  }

  if (sidebarLinks.length) {
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
  }
})();
