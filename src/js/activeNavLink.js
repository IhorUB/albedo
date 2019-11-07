import $ from "jquery";

$(document).ready(function() {
    $('.nav-link').on('click', function () {
        $('.nav-link').removeClass('active_nav_link');
        $(this).addClass('active_nav_link');
    });
});