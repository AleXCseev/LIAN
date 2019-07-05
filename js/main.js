$('.burger-button').click(function () {
    $('.mobile-menu').removeClass('active-mobile-menu');
    $('.mobile-menu').addClass('active-mobile-menu');
});

$('.burger-button-close').click(function () {
    $('.mobile-menu').removeClass('active-mobile-menu');
})

$('.header-slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000
});