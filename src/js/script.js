$(function() {
  $('.header-slider').slick({
    dots: true,
    // appendDots: $(".test"),
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: false
  });

  $('.conditions__list-item').click(function() {
    var tabName = $(this).attr('show-tab');
    $(this).addClass('conditions__list-item--active').siblings().removeClass('conditions__list-item--active');
    $('.tabs-content.' + tabName).addClass('tab--active').siblings().removeClass('tab--active');
  });


  var popupLink = function() {
    $('.js-popup-link').magnificPopup({
      showCloseBtn: false,
      fixedBgPos: true,
      fixedContentPos: true
    });
    // $(document).on('click', '.popup__close', function() {
    //   $.magnificPopup.close();
    // });
  };

  $('.catalog__btn').on('click', function() {
    $('.full-nav').toggleClass('full-nav--active');
    $('.catalog__block').toggleClass('catalog__block--active');
  });

  let writeUs = document.querySelector('.write-us');
  let overlay = document.querySelector('.overlay');
  let send = document.querySelector('.popup.send');
  let sendCloseBtn = document.querySelector('.popup .close__btn');
  let name = send.querySelector('[name=name]');
  let email = send.querySelector('[name=email]');
  let form = send.querySelector('form');
  let login = localStorage.getItem('login');


  function popupSend() {
    send.classList.remove('send--active');
    overlay.classList.remove('overlay--active');
  }

  writeUs.addEventListener('click', function(e) {
    e.preventDefault();
    send.classList.add('send--active');
    overlay.classList.add('overlay--active');
    name.focus();
    if (login) {
      name.value = login;
      email.focus();
    }
  });

  sendCloseBtn.addEventListener('click', function(e) {
    popupSend();
  });
  overlay.addEventListener('click', function(e) {
    popupSend();
  });
  form.addEventListener('submit', function(e) {

    if (!email.value || !name.value) {
      e.preventDefault();
      console.log(" не ввел");
    } else {
      localStorage.setItem('login', name.value);
    }
  });
  window.addEventListener('keydown', function(e) {
    if (e.keyCode === 27) {
      if (send.classList.contains('send--active')) {
        e.preventDefault();
        popupSend();
      } 
    }
  });
  console.log(document.documentElement);

  popupLink();
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