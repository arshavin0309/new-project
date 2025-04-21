let swiper1 = new Swiper(".swiper1", {
    loop: true,
    spaceBetween: 20,

    breakpoints: {
        500: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },

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

    breakpoints: {
        500: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
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