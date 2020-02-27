$(function() {
  $(".header__slider-js").slick({
    infinite: true,
    fade: true,
    prevArrow: ".slider-nav--prev",
    nextArrow: ".slider-nav--next",
    asNavFor: ".slider-dotshead"
  });
  $(".slider-dotshead").slick({
    asNavFor: '.header__slider-js',
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
      breakpoint: 961,
      // settings: "unslick"
    }]

  });
  $(".surf-slider__boxies").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: ".surf-slider--prev",
    nextArrow: ".surf-slider--next",
    asNavFor: ".slider-map",
    responsive: [{
        breakpoint: 1210,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          centerMode: true 
        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      },
    ] 
  });

  $(".slider-map").slick({
    infinite: true,
    slidesToShow: 8,
    asNavFor: ".surf-slider__boxies",
    focusOnSelect: true,
    useTransform: false,
    responsive: [{
        breakpoint: 1102,
        settings: {
          slidesToShow: 3,
          useTransform: true
        }
      },
      {
        breakpoint: 900,

        settings: {
          slidesToShow: 2,
          useTransform: true,
          centerMode: true,
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          useTransform: true,
          centerMode: true,
        }
      }
    ]
  });
  $('.holder__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: ".holder__slider-trigger",
    nextArrow: ".holder__slider-trigger"
  });
  $('.sleep__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: ".sleep__slider-trigger.slider-prev",
    nextArrow: ".sleep__slider-trigger.slider-next"
  });
  $('.shop__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: ".shop__slider-trigger-prev",
    nextArrow: ".shop__slider-trigger-next"
  });
  $('<div class="quantity-nav"><div class="quantity-button quantity-down">-</div><div class="quantity-button quantity-up">+</div></div>').insertAfter('.quantity .holder-slider__info-text');
  $('.quantity').each(function() {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

  });

  $('.quantity-button').on('click', function(event) {
    event.preventDefault();
    calcPrice();
  });

  $('.surfboard-box__circle').on('click', function(event) {
    event.preventDefault();
    $(this).toggleClass('active');
    console.log(123);
  });

  $('.menu-btn').on('click', function(event) {
    $('.menu').toggleClass('active');
  });

  var calcPrice = function() {
    let nights = $('.nights').val() * $('.summ').data("nights");
    let guests = $('.guests').val();
    let summ = $('.nights').val() * $('.summ').data("nights") + ($('.guests').val() - 1) * $('.summ').data("guests");

    $('.summ').html("$" + summ);
  }

  calcPrice();

  new WOW().init();
});

$(window).on("load", function() {
  $(".sk-fading-circle").fadeOut();
  $(".pre-loader")
    .delay(400)
    .fadeOut("slow");
  $("html").removeClass("fixed");

  // if ($(".pre-loader").length > 0)
  // {
  //     $(".pre-loader").fadeOut("slow");
  // }
});