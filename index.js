const webSite = 'https://www.nissanusa.com/vehicles/sports-cars/gt-r.html' 
console.log(webSite)


const hamburgerIcon = document.querySelector('.hamburger--icon');
const navbarMobileLinks = document.querySelector('.navlinks--mobile');
const closeIcon = document.querySelector('.close--icon');

hamburgerIcon.addEventListener("click", () => {
    navbarMobileLinks.classList.toggle('show--mobile--links');
    hamburgerIcon.classList.toggle('hide--hamburger--icon');
    closeIcon.classList.toggle('show--close--icon')
})

closeIcon.addEventListener('click', () => {
    navbarMobileLinks.classList.toggle('show--mobile--links');
    hamburgerIcon.classList.toggle('hide--hamburger--icon');
    closeIcon.classList.toggle('show--close--icon')
})


// const mobileMenu = document.querySelector('.close');
// const navLinks = document.querySelector('.navbar-links');
// const openList = document.querySelector('.open-list');


// openList.addEventListener("click", () => {
//     navLinks.classList.toggle('show-link');
//     openList.classList.toggle('toggle-open-list')
//     mobileMenu.classList.toggle('toggle-close')

// })

// mobileMenu.addEventListener('click', () =>{
//     mobileMenu.classList.toggle('toggle-close');
//     openList.classList.toggle('toggle-open-list');
//     navLinks.classList.toggle('show-link');
// })