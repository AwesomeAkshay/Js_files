const bannerSlide = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false
};

function leftSpace(spaceItem) {
  var containerLeft = $('.container').offset().left + 15;
  spaceItem.css({
    left: containerLeft
  })
}

// slick slider function
function sliderFunc(sliderParent, sliderProp = sliderProperties) {
  if (sliderParent.length) {
    if (sliderParent.hasClass('slick-initialized')) {
      sliderParent.slick('unslick');
    }
    else {
      sliderParent.not('.slick-initialized').slick(
        sliderProp
      );
    }
  }
}
$(document).ready(function () {
  sliderFunc($('.js-banner-slider'), bannerSlide);
  leftSpace($('.banner-slider .slick-dots'));

  $('.js-fd-rate').on('click', function () {
    $('.js-advisory-notification').addClass('d-none');
    if ($(window).width() > 767) {
      $('.js-fd-rate-info').removeClass('d-none')
    } else {
      $('.js-fd-rate-info-mobile').addClass('active')
    }
  })
  $('.js-close').on('click', function () {
    if ($(window).width() > 767) {
      $('.js-fd-rate-info').addClass('d-none');
    } else {
      $('.js-fd-rate-info-mobile').removeClass('active');
    }
  })
  $('.js-important-advisory').on('click', function () {
    $('.js-fd-rate-info').addClass('d-none');
    $('.js-fd-rate-info-mobile').removeClass('active');
    $('.js-advisory-notification').removeClass('d-none');
  })
  $('.js-close-advisory').on('click', function () {
    $('.js-advisory-notification').addClass('d-none')
  })
});

/* resize */
$(window).resize(function () {
  leftSpace($('.banner-slider .slick-dots'));
  backToTop()
});

/* resize */
// $(window).scroll(function () {
//   backToTop()
// });