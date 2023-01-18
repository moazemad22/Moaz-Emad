//navbarResponsive

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
        document.querySelectorAll('#collapseExample .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            } else {
                (window.getComputedStyle(navbarToggler).display !== 'block')
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


//loading page
var loader = document.querySelector('.preloader');

window.addEventListener('load', function(){
    //loader.style.display = 'none';
})


// Data
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwNsfThyZJkYcYolW4y7pKhCPt_u5e8UCxa06dauPeP9J6u462UP9_gdrpxGs2k_j8uzg/exec'
        const form = document.forms['google-sheet']
        
        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, {method: 'POST', body: new FormData(form)})
            //.then(Response => $("#form_alerts").html("<div class='alert alert-sucess'>contact message sent sucess</div>"))
            //.catch(error => $("#form_alerts").html("<div class='alert alert-danger'>contact message sent sucess</div>"))
        })

        let send = document.getElementById('send');
        let rest = document.getElementById('format');
        const success = document.getElementById('form_alerts');

        send.addEventListener('click', () => {
            success.style.display = 'block';
        });

        rest.addEventListener('click', () => {
            success.style.display = 'none';
        });



