document.addEventListener('DOMContentLoaded', function() {
    // Get all menu links
    var menuLinks = document.querySelectorAll('.nav-link');

    // Add event listener to each link
    menuLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        // Close the menu when a link is clicked
        var navbarToggler = document.querySelector('.navbar-toggler');
        if (navbarToggler.getAttribute('aria-expanded') === 'true') {
          navbarToggler.click();
        }
      });
    });
  });