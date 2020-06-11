$(function() {
  if ($(".main-nav").hasClass("main-nav--noJs")) {
    $(".main-nav").removeClass("main-nav--noJs");
  }

  $(".main-nav__menu-icon").on("click", function(e) {
    if ($(".main-nav").hasClass("main-nav--opened")) {
      $(".main-nav").removeClass("main-nav--opened").addClass('main-nav--closed');
    } else {
      if ($(".main-nav").hasClass("main-nav--closed")) {
        $(".main-nav").removeClass("main-nav--closed").addClass('main-nav--opened');
      }
    }

  });

  var slider = document.getElementById("myRange");
  var fat = $(".example__foto-fat");
  var thin = $(".example__foto-thin");
  let thinBgPosition = parseFloat($(".example__foto-thin").css("background-position-x"));
  let left = false;
  let right = false;
  let lastNumber = 50;




  slider.oninput = function() {
    let number = this.value;
    let reverse = 100 - number;
    let newBpx = thinBgPosition;

    if (lastNumber <= number) {
      right = true;
      left = false;
    } else {
      right = false;
      left = true;
    }


    if (number >= 50) {
      // console.log(number);
      fat.css({ "flex-basis": number + "%", "max-width": number + "%" });
      thin.css({ "flex-basis": reverse + "%", "max-width": reverse + "%" });

      var bp = $('.example__foto-thin').css('backgroundPosition').split(' ');
      if (right) {
        newBpx = (parseFloat(bp[0]) - 4) + 'px',
          bpy = bp[1];
        console.log(newBpx);
      } else {
        newBpx = (parseFloat(bp[0]) + 4) + 'px',
          bpy = bp[1];
      }

      // console.log(number);
      // console.log(thinBgPosition);

      if (number == 50) {
        newBpx = thinBgPosition + 'px';
      }

      $('.example__foto-thin').css('backgroundPosition', newBpx + ' ' + bpy);



    } else {
      fat.css({ "flex-basis": number - 1 + "%", "max-width": number - 1 + "%" });
      thin.css({ "flex-basis": reverse + 1 + "%", "max-width": reverse + 1 + "%" });

      var bp = $('.example__foto-thin').css('backgroundPosition').split(' ');

      if (left) {
        newBpx = (parseFloat(bp[0]) + 6) + 'px',
          bpy = bp[1];
        console.log(newBpx);
      } else {
        newBpx = (parseFloat(bp[0]) - 6) + 'px',
          bpy = bp[1];
      }
      if (number == 50) {
        newBpx = thinBgPosition + 'px';
      }

      $('.example__foto-thin').css('backgroundPosition', newBpx + ' ' + bpy);
    }

    lastNumber = number;
  }
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