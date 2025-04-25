// мобильное меню

let header = $('.header');
let menuItem = $('.header .menu > .menu-item');
let subMenu = $('.header .menu > .menu-item .sub-menu');
let burger = $('.header__burger'); // кнопка открытия мобильного меню
let headerMenu = $('.header .menu'); // меню хедера
let headerNav = $('.header__nav'); // блок внутри контейнера хедера, например если он в виде острова и при выпадении мобильного меню, нужно его дополнительно стилизовать
let mobileWidth = 1200; // ширина, с которой начинается мобильная версия хедера
let mobileMode; // версия сайта, если true - мобильная версия, если false - версия для пк

header.removeClass('active');
menuItem.removeClass('active');
subMenu.removeClass('active').slideUp();
burger.removeClass('active');
headerMenu.removeClass('active');
headerNav.removeClass('active');

function changeMobileMode() {
    if ($(window).width() <= mobileWidth) {
        mobileMode = true;
    } else {
        mobileMode = false;

        burger.removeClass('active');
        headerNav.removeClass('active');
        header.removeClass('active');
        headerMenu.removeClass('active');

        subMenu.removeClass('active').slideUp();
        menuItem.removeClass('active');
    }
}

changeMobileMode();
$(window).on('resize', changeMobileMode);

navMenuNew();

function navMenuNew() {

    // mobile menu
    burger.on('click', function () {
        if ($(window).width() <= mobileWidth) {
            burger.toggleClass('active');
            headerNav.toggleClass('active');
            header.toggleClass('active');
            headerMenu.toggleClass('active');

            subMenu.removeClass('active').slideUp();
            menuItem.removeClass('active');
        }
    })

    $('.upButton').on('click', function () {
        if ($(window).width() <= mobileWidth) {
            burger.removeClass('active');
            headerNav.removeClass('active');
            header.removeClass('active');
            headerMenu.removeClass('active');

            subMenu.removeClass('active').slideUp();
            menuItem.removeClass('active');
        }
    });

    for (let click = 0; click < menuItem.length; click++) {
        menuItem.eq(click).on('click', function () {
            if ($(window).width() <= mobileWidth) {
                if (menuItem.eq(click).hasClass('active')) {
                    menuItem.eq(click).removeClass('active');
                    subMenu.eq(click).removeClass('active').slideUp();
                } else {
                    for (let other = 0; other < menuItem.length; other++) {
                        if (menuItem.eq(other) != menuItem.eq(click)) {
                            subMenu.eq(other).removeClass('active').slideUp();
                            menuItem.removeClass('active');
                        }
                    }

                    subMenu.eq(click).addClass('active').slideDown();
                    menuItem.eq(click).addClass('active');
                }
            }
        })
    }

    // desktop
    for (let hover = 0; hover < menuItem.length; hover++) {
        menuItem.eq(hover).hover(
            function () {
                if ($(window).width() >= mobileWidth) {
                    menuItem.eq(hover).addClass('active');
                    subMenu.eq(hover).slideDown();

                    if (hover == 0) {
                        headerMenu.addClass('first');
                    }

                    if (hover == menuItem.length - 1) {
                        headerMenu.addClass('last');
                    }
                }
            },
            function () {
                if ($(window).width() >= mobileWidth) {
                    subMenu.eq(hover).slideUp();

                    if (hover == 0) {
                        headerMenu.removeClass('first');
                    }

                    if (hover == menuItem.length - 1) {
                        headerMenu.removeClass('last');
                    }
                }
            }
        )
    }
}