let swiper1 = new Swiper(".swiper1", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 4,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },

    pagination: {
        el: ".swiper1-pagination",
    },
});

let swiper2 = new Swiper(".swiper2", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 4,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
});
