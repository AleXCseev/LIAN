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

$('.share-btn').click(function () {
    $('.dropdown').toggleClass('active');
});

$('.previous, .next').click(function () {
    $('.slider-section').toggleClass('visually-hidden');
});

$('.all').click(function () {
    $('.slider-section').removeClass('visually-hidden');
});

var sliderElement = $('.slider-section');

console.log(sliderElement);