$(function() {
  $('.products__slider').slick({
    prevArrow: '<button class="slider-btn slider-btn__left"><svg width="10" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.218 1L1 9l8.218 8"/></svg></button>',
    nextArrow: '<button class="slider-btn slider-btn__right"><svg width="10" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.782 17L9 9 .782 1" /></svg></button>',
    infinite: false,
  });

  $('.questions__item-text').not(($('.questions__item--active .questions__item-text'))).css("display", "none"); 

  $('.questions__item-title').on('click', function(e) {

    if ($(this).parent().hasClass('questions__item--active')) {
      $(this).next('.questions__item-text').slideUp();
      $(this).parent().removeClass('questions__item--active');
    } else {
      $(this).parent().addClass('questions__item--active');
      $(this).next('.questions__item-text').slideDown();
      $('.questions__item-text').not($(this).next('.questions__item-text')).slideUp();
      $('.questions__item-text').not($(this).next('.questions__item-text')).parent().removeClass('questions__item--active');
    }
  })

  $('#fullpage').fullpage({
    //options here
    autoScrolling:true,
    scrollHorizontally: true,
    sectionSelector: '.page-section',
  });

});



$(window).on("load", function() {
  // $(".sk-fading-circle").fadeOut();
  // $(".pre-loader")
  //   .delay(400)
  //   .fadeOut("slow");
  // $("html").removeClass("fixed");

  // if ($(".pre-loader").length > 0)
  // {
  //     $(".pre-loader").fadeOut("slow");
  // }
});