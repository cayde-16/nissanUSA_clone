const webSite = 'https://www.nissanusa.com/vehicles/sports-cars/gt-r.html' 
console.log(webSite)

const hamburgerIcon = document.querySelector('.hamburger--icon');
const navbarMobileLinks = document.querySelector('.navlinks--mobile');
const closeIcon = document.querySelector('.close--icon');
const navbarContainer = document.querySelector('.navbar-container ');



const caruselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img')


const prevBTN = document.querySelector('#prevBtn');
const nextBTN = document.querySelector('#nextBtn');

// expands the footer list down for mobile users

// Row 1
const expandMoreChevron = document.querySelector('#footer--expand');
const footerList = document.querySelector('.col-list');

// Row 2
const expandMoreChevron2 = document.querySelector('#footer--expand-2');
const footerList2 = document.querySelector('#col-list-2');


// Row 3
const expandMoreChevron3 = document.querySelector('#footer--expand-3');
const footerList3 = document.querySelector('#col-list-3');


// Row 4
const expandMoreChevron4 = document.querySelector('#footer--expand-4');
const footerList4 = document.querySelector('#col-list-4');


// ----------------------------------------------------------
// gtr-header

const gtrHeader = document.querySelector('.gtr-header')

document.addEventListener('scroll', ()=>{
    let scroll_position = window.scrollY;


    if(scroll_position > 150){
        gtrHeader.classList.add('gtr-header--fixed')
    }else{
        gtrHeader.classList.remove('gtr-header--fixed')
    }

})

expandMoreChevron4.addEventListener('click', ()=>{
    footerList4.classList.toggle('show--footer--list')
    expandMoreChevron4.classList.toggle('rotate--chevron')
})


expandMoreChevron3.addEventListener('click', ()=>{
    footerList3.classList.toggle('show--footer--list')
    expandMoreChevron3.classList.toggle('rotate--chevron')  
})


expandMoreChevron2.addEventListener("click", ()=>{
    footerList2.classList.toggle('show--footer--list')
    expandMoreChevron2.classList.toggle('rotate--chevron')   
})



expandMoreChevron.addEventListener('click', ()=>{   
    footerList.classList.toggle('show--footer--list')
    expandMoreChevron.classList.toggle('rotate--chevron')
})




hamburgerIcon.addEventListener("click", () => {
    navbarMobileLinks.classList.toggle('show--mobile--links');
    hamburgerIcon.classList.toggle('hide--hamburger--icon');
    closeIcon.classList.toggle('show--close--icon')
    navbarContainer.classList.toggle('nissan--sticky');
})

closeIcon.addEventListener('click', () => {
    navbarMobileLinks.classList.toggle('show--mobile--links');
    hamburgerIcon.classList.toggle('hide--hamburger--icon');
    closeIcon.classList.toggle('show--close--icon');
    navbarContainer.classList.toggle('nissan--sticky');

})


let counter = 1;
const size = carouselImages[0].clientWidth;

caruselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';


nextBTN.addEventListener("click", ()=>{
    if(counter >= carouselImages.length - 1){
        return
    }
    caruselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++
    caruselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});


prevBTN.addEventListener("click", ()=>{
    if(counter <= 0){
        return
    }
    caruselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--
    caruselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})


caruselSlide.addEventListener('transitionend', ()=>{
   
    if(carouselImages[counter].id === 'lastClone'){
        caruselSlide.style.transition = 'none';
        counter = carouselImages.length -2;
        caruselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }


    if(carouselImages[counter].id === 'firstClone'){
        caruselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;
        caruselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
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