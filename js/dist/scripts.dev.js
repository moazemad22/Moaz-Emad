"use strict";

window.addEventListener('DOMContentLoaded', function (event) {
  // Navbar shrink function
  var navbarShrink = function navbarShrink() {
    var navbarCollapsible = document.body.querySelector('#mainNav');

    if (!navbarCollapsible) {
      return;
    }

    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink');
    } else {
      navbarCollapsible.classList.add('navbar-shrink');
    }
  }; // Shrink the navbar 


  navbarShrink(); // Shrink the navbar when page is scrolled

  document.addEventListener('scroll', navbarShrink); // Activate Bootstrap scrollspy on the main nav element

  var mainNav = document.body.querySelector('#mainNav');

  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      offset: 72
    });
  }

  ; // Collapse responsive navbar when toggler is visible

  var navbarToggler = document.body.querySelector('.navbar-toggler');
  var responsiveNavItems = [].slice.call(document.querySelectorAll('#navbarResponsive .nav-link'));
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', function () {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });
}); // scroll up

var scrollBtn = document.querySelector(".scrollBtn");
window.addEventListener("scroll", function () {
  scrollup();
});
scrollBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: "auto"
  });
});
scrollup();

function scrollup() {
  window.scrollY > 100 ? scrollBtn.classList.add('active') : scrollBtn.classList.remove('active');
} // Data


var scriptURL = 'https://script.google.com/macros/s/AKfycbwNsfThyZJkYcYolW4y7pKhCPt_u5e8UCxa06dauPeP9J6u462UP9_gdrpxGs2k_j8uzg/exec';
var form = document.forms['google-sheet'];
form.addEventListener('submit1', function (e) {
  e.preventDefault();
  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form)
  }).then(function (Response) {
    return $("#form_alerts").html("<div class='alert alert-sucess'>contact message sent sucess</div>");
  })["catch"](function (error) {
    return $("#form_alerts").html("<div class='alert alert-danger'>contact message sent sucess</div>");
  });
});
//# sourceMappingURL=scripts.dev.js.map
