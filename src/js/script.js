import $ from "jquery";
import devide from "./test";
import 'core-js/features/promise';

console.log(devide(30));
console.log(devide(120));
$("h1").addClass("red");

new Promise((resolve, reject) => {
  setTimeout(resolve, 1500);
}).then(() => {
  console.log(111111);
});

// $(window).on("load", function () {
// $(".sk-fading-circle").fadeOut();
// $(".pre-loader")
//   .delay(400)
//   .fadeOut("slow");
// $("html").removeClass("fixed");
// if ($(".pre-loader").length > 0)
// {
//     $(".pre-loader").fadeOut("slow");
// }
// });
