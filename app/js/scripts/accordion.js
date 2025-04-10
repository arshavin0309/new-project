// аккордеон

$(document).ready(function () {
    $('.analytics-basics__list > li > .answer').hide();

    $('.analytics-basics__list > li').click(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").find(".answer").slideUp();
        } else {
            $(".analytics-basics__list > li.active .answer").slideUp();
            $(".analytics-basics__list > li.active").removeClass("active");
            $(this).addClass("active").find(".answer").slideDown();
        }
        return false;
    });
});
