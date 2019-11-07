import $ from 'jquery';
$('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('menu-btn_active');
    $('.nav .main-nav').toggleClass('active_nav_menu');
    $('.nav .btn-buy').toggleClass('active_btn_buy');
});