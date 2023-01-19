
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


// scroll up
let scrollBtn = document.querySelector(".scrollBtn");
window.addEventListener("scroll", ()=>{
scrollup()
})
scrollBtn.addEventListener('click',()=>{
window.scrollTo({
top : 0 ,
behavior : "auto"
})
})
scrollup()
function scrollup(){
window.scrollY > 100 ? scrollBtn.classList.add('active') : scrollBtn.classList.
remove('active'); 
}



// Data
const scriptURL = 'https://script.google.com/macros/s/AKfycbwNsfThyZJkYcYolW4y7pKhCPt_u5e8UCxa06dauPeP9J6u462UP9_gdrpxGs2k_j8uzg/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit1', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(Response => $("#form_alerts").html("<div class='alert alert-sucess'>contact message sent sucess</div>"))
    .catch(error => $("#form_alerts").html("<div class='alert alert-danger'>contact message sent sucess</div>"))
})