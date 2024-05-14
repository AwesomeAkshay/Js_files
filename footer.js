
function backToTop() {
    var winscroll = $(window).scrollTop();
    if ((winscroll > 100)) {
        $('.back-top').addClass('active');
    }
    else {
        $('.back-top').removeClass('active');
    }
}
$(document).ready(function () {
    $('.js-footer-row .js-title').click(function () {
        $(this).toggleClass('active');
        $(this).siblings('.js-footer-body').slideToggle();
        $(this).parents('.js-footer-row').siblings('.js-footer-row').find('.js-title').removeClass('active');
        $(this).parents('.js-footer-row').siblings('.js-footer-row').find('.js-footer-body').slideUp();
    });
});

$(window).resize(function () {
    leftSpace($('.banner-slider .slick-dots'));
    backToTop()
});

$(window).scroll(function () {
    backToTop()
});