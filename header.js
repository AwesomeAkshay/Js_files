// function bodyPdTop() {
//   var headerHeight = $('.header').outerHeight();
//   $('body').css('padding-top', headerHeight);
// }

/* mob header hamburger */
$(document).ready(function () {

  // bodyPdTop()

  if ($(window).width() < 992) {
    $('.notification-search-items.login-field .login-btn').click(function () {
      $('.header #jsToggleBtn').removeClass("animate-hamburger");
      $('.mob-header').removeClass('opened');
      $('body').removeClass('overflow-hidden-tb');
      $('.js-close-details').removeClass('subopened');
      $('.js-showDetail').removeClass('active');

      $('.js-close-details2').removeClass('subopened');
      $('.js-showDetail2').removeClass('active');

      $('.js-close-details3').removeClass('subopened');
      $('.js-showDetail3').removeClass('active');

      $('.js-showDetail').parents('.mob-inner-details').removeClass('sub-no-bg');
      $('.js-showDetail2').parents('.mob-inner-details').removeClass('sub-no-bg2');
      $('.js-showDetail3').parents('.mob-inner-details').removeClass('sub-no-bg3');
    })
  }


  $(document).on("click", function (event) {
    var $trigger = $(".close-on-outside");
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
      $('#jsBellMenu').removeClass('active');
      $('#jsCallMenu').removeClass('active');
      $('#jsCall').removeClass('show');
      $('#jsBell').removeClass('show');
    }
  });

  $('.header #jsToggleBtn').click(function () {
    $(this).toggleClass("animate-hamburger");
    $('.mob-header').toggleClass('opened');
    $('body').toggleClass('overflow-hidden-tb');
    $('.js-close-details').removeClass('subopened');
    $('.js-showDetail').removeClass('active');

    $('.js-close-details2').removeClass('subopened');
    $('.js-showDetail2').removeClass('active');

    $('.js-close-details3').removeClass('subopened');
    $('.js-showDetail3').removeClass('active');

    $('.js-showDetail').parents('.mob-inner-details').removeClass('sub-no-bg');
    $('.js-showDetail2').parents('.mob-inner-details').removeClass('sub-no-bg2');
    $('.js-showDetail3').parents('.mob-inner-details').removeClass('sub-no-bg3');

  });

  /*First lavel*/
  $('.js-showDetail').click(function () {
    $('.js-showDetail').removeClass('active');
    $(this).addClass('active');
    $('body').addClass('overflow-hidden-tb');
    ele_showDetail = $(this).attr('data-value');
    $('.js-close-details').removeClass('subopened');
    $('#' + ele_showDetail).addClass('subopened');
    $('.js-showDetail').parents('.mob-inner-details').addClass('sub-no-bg');
  })

  $('.js-menu-back').click(function () {
    $('body').addClass('overflow-hidden-tb');
    $(this).parents('.js-close-details').removeClass('subopened');
    $('.js-showDetail').removeClass('active');
    $('.js-showDetail').parents('.mob-inner-details').removeClass('sub-no-bg');
  })
  /*First lavel*/

  /*two lavel*/
  $('.js-showDetail2').click(function () {
    $('.js-showDetail2').removeClass('active');
    $(this).addClass('active');
    $('body').addClass('overflow-hidden-tb');
    ele_showDetail2 = $(this).attr('data-value');
    $('.js-close-details2').removeClass('subopened');
    $('#' + ele_showDetail2).addClass('subopened');
    $('.js-showDetail2').parents('.mob-inner-details').addClass('sub-no-bg2');
  })
  $('.js-menu-back2').click(function () {
    $('body').addClass('overflow-hidden-tb');
    $(this).parents('.js-close-details2').removeClass('subopened');
    $('.js-showDetail2').removeClass('active');
    $('.js-showDetail2').parents('.mob-inner-details').removeClass('sub-no-bg2');
  })
  /*two lavel*/

  /*three lavel*/
  $('.js-showDetail3').click(function () {
    $('.js-showDetail3').removeClass('active');
    $(this).addClass('active');
    $('body').addClass('overflow-hidden-tb');
    ele_showDetail3 = $(this).attr('data-value');
    $('.js-close-details3').removeClass('subopened');
    $('#' + ele_showDetail3).addClass('subopened');
    $('.js-showDetail3').parents('.mob-inner-details').addClass('sub-no-bg3');
  })
  $('.js-menu-back3').click(function () {
    $('body').addClass('overflow-hidden-tb');
    $(this).parents('.js-close-details3').removeClass('subopened');
    $('.js-showDetail3').removeClass('active');
    $('.js-showDetail3').parents('.mob-inner-details').removeClass('sub-no-bg3');
  })
  /*three lavel*/


  $('.js-MobSubAccodian .jsLinkBtn').each(function () {
    $(this).click(function () {
      $(this).toggleClass('active-links');
      $(this).siblings('.accord-body').slideToggle('fast');
      $(this).parents('.js-accord-col-mob').siblings('.js-accord-col-mob').find('.jsLinkBtn').removeClass('active-links');
      $(this).parents('.js-accord-col-mob').siblings('.js-accord-col-mob').find('.accord-body').slideUp('fast');
    })
  });


  $('.jsSubSubMenu li a').hover(function () {
    var tab_id = $(this).attr('data-target');

    $(this).parents('.jsTabInnerContent').find('.jsSubSubMenu .nav-item .nav-link-two').removeClass('active');
    $(this).addClass('active');

    $(this).parents('.jsTabInnerContent').find('.jsSubSubMenuContent').removeClass('show active');
    $("#" + tab_id).addClass('show active');
  });

  $('#searchJs').click(function () {
    $('.nav-search-overlay').slideDown();
    $('body').css('overflow', 'hidden');
  });
  $('.cross-btn').click(function () {
    $('.nav-search-overlay').slideUp();
  });

  // top-menu
  $('#jsCall').click(function () {
    $('#jsBellMenu').removeClass('active');
    $('#jsCallMenu').addClass('active');
    $(this).addClass('show');
    $('#jsBell').removeClass('show');
  });
  $('.close-btn').click(function () {
    $('#jsCallMenu').removeClass('active');
    $('#jsBellMenu').removeClass('active');
    $('#jsCall').removeClass('show');
    $('#jsBell').removeClass('show');
  });
  $('#jsBell').click(function () {
    $('#jsCallMenu').removeClass('active');
    $('#jsBellMenu').addClass('active');
    $(this).addClass('show');
    $('#jsCall').removeClass('show');
  });


  $('.js-close').click(function () {
    $('.announcement-box').removeClass('active');
    // $(this).css('padding-top', totalHeight);
    $('body').removeAttr('style');
    $('.header').removeAttr('style');
  });

  $('.js-close').on('click', function () {
    $('.announcement-box').removeClass('active');
    var headerHeight = $('.header').outerHeight();
    // $(this).css('padding-top', totalHeight);
    $('body').css('padding-top', headerHeight);
  });



  setTimeout(function () {
    var announcementHeight = $('.announcement-box').outerHeight();
    var headerHeight = $('.header').outerHeight();
    var totalHeight = headerHeight + announcementHeight;
    if ($(".announcement-box").length > 0) {
      $('body').css('padding-top', headerHeight);
      // $('.header').css('padding-top', announcementHeight);
    }
  }, 2000);
})

$(window).resize(function () {
  // bodyPdTop()
});
