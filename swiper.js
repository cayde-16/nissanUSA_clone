const swiper = new Swiper('.swiper', {
    // Optional parameters
    centeredSlides: false,
    allowSlideNext:true,
    effect: 'cube',
    longSwipes:false,
    grabCursor:true,
    edgeSwipeDetection:'prevent',
    loop: true,


    // If we need pagination
    // pagination: {
    //     el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar



    
});






const x = window.matchMedia("(max-width:580px");