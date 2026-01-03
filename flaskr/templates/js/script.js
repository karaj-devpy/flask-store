var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5.5,
    spaceBetween: 10,
    grabCursor:true,

    // loop:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
});

