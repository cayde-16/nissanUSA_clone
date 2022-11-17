const webSite = 'https://www.nissanusa.com/vehicles/sports-cars/gt-r.html' 
console.log(webSite)


const mobileMenu = document.querySelector('.close');
const navLinks = document.querySelector('.navbar-links');
const openList = document.querySelector('.open-list');


openList.addEventListener("click", () => {
    navLinks.classList.toggle('show-link');
    openList.classList.toggle('toggle-open-list')
    mobileMenu.classList.toggle('toggle-close')

})

mobileMenu.addEventListener('click', () =>{
    mobileMenu.classList.toggle('toggle-close');
    openList.classList.toggle('toggle-open-list');
    navLinks.classList.toggle('show-link');
})