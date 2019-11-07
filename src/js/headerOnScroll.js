import $ from 'jquery'

$(function () {
    let header = $("header");
    $(window).scroll(function () {
        let scroll = $(window).scrollTop();

        if (scroll >= 50) {
            header.addClass("scroll-header");
        } else {
            header.removeClass("scroll-header");
        }
    });
});