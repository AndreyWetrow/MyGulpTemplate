$(function() {
  $(".header__slider").slick({
    infinite: true,
    fade:true
  });
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
