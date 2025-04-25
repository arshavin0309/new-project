let swiper1 = new Swiper(".swiper1", {
    loop: true,
    spaceBetween: 20,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },

    breakpoints: {
        500: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
            autoplay: false,
        },
    },

    pagination: {
        el: ".swiper1-pagination",
    },
});

let swiper2 = new Swiper(".swiper2", {
    loop: true,
    spaceBetween: 20,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },

    breakpoints: {
        500: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
            autoplay: false,
        },
    },
});

let swiperPlatform = new Swiper(".swiper-platform", {
    spaceBetween: 20,
    slidesPerView: 'auto',

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        500: {
            slidesPerView: 'auto',
        },
        1200: {
            slidesPerView: 4,
            autoplay: false,
        },
    },

    pagination: {
        el: ".swiper-platform__pagination",
    },
});

let swiperMainPlatform = new Swiper(".swiper-main-platform", {
    spaceBetween: 20,
    slidesPerView: 'auto',
    centeredSlides: true,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },

    breakpoints: {
        500: {
            centeredSlides: false,
        },
        1024: {
            centeredSlides: false,
            slidesPerView: 3,
            autoplay: false,
        },
    },

    pagination: {
        el: ".swiper-main-platform-pagination",
    },
});

let swiperRate = new Swiper(".swiper-rate", {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },

    breakpoints: {
        600: {
            centeredSlides: false,
        },
        1200: {
            centeredSlides: false,
            slidesPerView: 4,
            autoplay: false,
        },
    },
});

document.addEventListener('DOMContentLoaded', () => {
    for (let table of document.getElementsByTagName("table")) {
        let tableOverflow = document.createElement("div");
        tableOverflow.className = "table-overflow";
        table.parentElement.replaceChild(tableOverflow, table);
        tableOverflow.appendChild(table);
    }
})