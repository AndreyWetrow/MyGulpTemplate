import $ from "jquery";
import devide from "./test";
import "core-js/features/promise";
// import dAdaptive from './dAdaptive';
import DynamicAdapt from "./DynamicAdapt";
import Swiper from "swiper/bundle";
import noUiSlider from "nouislider";
import wNumb from "wNumb";

// console.log(devide(30));
// console.log(devide(120));
// $("h1").addClass("red");

// new Promise((resolve, reject) => {
//   setTimeout(resolve, 1500);
// }).then(() => {
//   console.log(111111);
// });

// Слайдер начало
var mainslider = new Swiper(".mainslider__body", {
  // var mainslider = new Swiper("._swiper", {
  observer: true,
  observeParents: true,
  slidesPerView: 1,
  spaceBetween: 0,
  autoHeight: true,
  speed: 800,
  // loop: true,

  // Navigation arrows
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },

  pagination: {
    el: ".mainslider__dots",
    clickable: true,
  },
});

if (document.querySelector(".mainslider")) {
  const mainsliderImages = document.querySelectorAll(".mainslider__image ");
  const mainsliderDots = document.querySelectorAll(
    ".mainslider__dots .swiper-pagination-bullet"
  );
  console.log(mainsliderDots);
  for (let i = 0; i < mainsliderImages.length; i++) {
    const mainsliderImage = mainsliderImages[i]
      .querySelector("img")
      .getAttribute("src");
    mainsliderDots[i].style.backgroundImage = `url(${mainsliderImage})`;
  }
}

if (document.querySelector(".products-slider")) {
  var productsSlider = new Swiper(".products-slider__item", {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoHeight: true,
    speed: 800,
    pagination: {
      el: ".products-slider__info",
      type: "fraction",
    },
    // Navigation arrows
    navigation: {
      nextEl: ".products-slider__arrow-next",
      prevEl: ".products-slider__arrow-prev",
    },
  });
}

if (document.querySelector(".brands-slider")) {
  var brandsSlider = new Swiper(".brands-slider__body", {
    observer: true,
    observeParents: true,
    slidesPerView: 5,
    spaceBetween: 0,
    // autoHeight: true,
    speed: 800,
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".brands-slider__arrow_next",
      prevEl: ".brands-slider__arrow_prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      760: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1180: {
        slidesPerView: 5,
      },
    },
  });
}

if (document.querySelector(".images-product__subslider")) {
  var imagesSubSlider = new Swiper(".images-product__subslider", {
    observer: true,
    observeParents: true,
    slidesPerView: 4,
    spaceBetween: 1,
    // autoHeight: true,
    speed: 800,
    // loop: true,
    // pagination: {
    //   el: ".products-slider__info",
    //   type: "fraction",
    // },
    // Navigation arrows
    // navigation: {
    //   nextEl: ".products-slider__arrow-next",
    //   prevEl: ".products-slider__arrow-prev",
    // },
  });
}

if (document.querySelector(".images-product")) {
  var imagesMainSlider = new Swiper(".images-product__mainslider", {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 1,
    // autoHeight: true,
    speed: 800,
    thumbs: {
      swiper: imagesSubSlider,
    },
    // loop: true,
    // pagination: {
    //   el: ".products-slider__info",
    //   type: "fraction",
    // },
    // Navigation arrows
    // navigation: {
    //   nextEl: ".products-slider__arrow-next",
    //   prevEl: ".products-slider__arrow-prev",
    // },
  });
}

// Слайдер конец

const menIcon = document.querySelector(".icon-menu");
const menuBody = document.querySelector(".menu__body");
menIcon.addEventListener("click", function (e) {
  menIcon.classList.toggle("_active");
  menuBody.classList.toggle("_active");
});

// dAdaptive();
const da = new DynamicAdapt("max");
da.init();

///////////////////////////
let allow = true;
let _slideUp = (target, duration = 500) => {
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.height = target.offsetHeight + "px";
  target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(() => {
    target.style.display = "none";
    target.style.removeProperty("height");
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
    target.classList.remove("_slide");
    allow = true;
    allowMenu = true;
  }, duration);
};

let _slideDown = (target, duration = 500) => {
  target.style.removeProperty("display");
  let display = window.getComputedStyle(target).display;
  if (display === "none") {
    display = "block";
  }
  target.style.display = display;
  let height = target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.height = height + "px";
  target.style.removeProperty("padding-top");
  target.style.removeProperty("padding-bottom");
  target.style.removeProperty("margin-top");
  target.style.removeProperty("margin-bottom");
  window.setTimeout(() => {
    target.style.removeProperty("height");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
    target.classList.remove("_slide");
    allow = true;
    allowMenu = true;
  }, duration);
};

let _slideToggle = (target, duration = 500) => {
  if (!target.classList.contains("_slide")) {
    target.classList.add("_slide");
    if (window.getComputedStyle(target).display === "none") {
      return _slideDown(target, duration);
    } else {
      return _slideUp(target, duration);
    }
  }
};

//////////////
window.isMobile = function () {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};
// Работа меню
let allowMenu = true;
if (window.isMobile()) {
  const menuParents = document.querySelectorAll(".menu-page__parent>a");
  for (let i = 0; i < menuParents.length; i++) {
    const menuParent = menuParents[i];
    menuParent.addEventListener("click", function (e) {
      e.preventDefault();
      menuParent.parentElement.classList.toggle("_active");
    });
  }
} else {
  const menuParents = document.querySelectorAll(".menu-page__parent");

  for (let i = 0; i < menuParents.length; i++) {
    const menuParent = menuParents[i];
    menuParent.addEventListener("mouseenter", (e) => {
      menuParent.classList.add("_active");
    });
    menuParent.addEventListener("mouseleave", (e) => {
      menuParent.classList.remove("_active");
    });
  }
}

const menuPageBurger = document.querySelector(".menu-page__burger");
const menuPageBoby = document.querySelector(".menu-page__body");

menuPageBurger.addEventListener("click", (e) => {
  if (allowMenu) {
    allowMenu = false;
    menuPageBurger.classList.toggle("_active");
    // menuPageBoby.classList.toggle("_active");
    _slideToggle(menuPageBoby);
    // showHideMenu();
  }
});
// _slideToggle(menuPageBoby);

//==============Фильтр каталога товаров начало=======================
function checkWidth(x) {
  return x.matches;
}
let width992 = window.matchMedia("(max-width: 992px)");

if (window.isMobile() || checkWidth(width992)) {
  let filterTitle = document.querySelector(".filter__title");
  if (filterTitle) {
    filterTitle.addEventListener("click", () => {
      filterTitle.classList.toggle("._active");
      _slideToggle(filterTitle.nextElementSibling);
    });
  }
}

window.addEventListener("resize", () => {
  setTimeout(() => {
    location.reload();
  }, 300);
});

//==============Фильтр каталога товаров конец=======================
//===========================Кастомный select начало========================
import { getTemplate, Select } from "./customSelect";
import { getTemplateShow, SelectShow } from "./showSelect";

const select = new Select("#select", {
  placeholder: "Выбери элемент",
  selectedId: "1",
  data: [
    { id: "1", value: "По умолчанию" },
    { id: "2", value: "По цене" },
    { id: "3", value: "По популярности" },
    { id: "4", value: "По названию" },
  ],

  onSelect(item) {
    // console.log("Selected Item", item);
  },
});

const selectPages = new SelectShow("#selectPages", {
  placeholder: "Выбери элемент",
  selectedId: "1",
  data: [
    { id: "1", value: "9" },
    { id: "2", value: "18" },
    { id: "3", value: "32" },
    { id: "4", value: "100" },
  ],

  onSelect(item) {
    // console.log("Selected Item", item);
  },
});
const selectPages1 = new SelectShow("#selectPages1", {
  placeholder: "Выбери элемент",
  selectedId: "1",
  data: [
    { id: "1", value: "9" },
    { id: "2", value: "18" },
    { id: "3", value: "32" },
    { id: "4", value: "100" },
  ],

  onSelect(item) {
    // console.log("Selected Item", item);
  },
});
//===========================Кастомный select конец========================

//======== Меню поиска на главной странице - начало
const searchSelect = document.querySelector(".search-page__title");
const categoriesSearch = document.querySelector(".categories-search");

searchSelect.addEventListener("click", (e) => {
  // e.stopPropagation();
  // console.log(e.target);
  // searchSelect.parentElement.classList.toggle('_active');
  searchSelect.classList.toggle("_active");
  _slideToggle(categoriesSearch);
});

const checkboxCategories = document.querySelectorAll(
  ".categories-search__checkbox"
);

for (let i = 0; i < checkboxCategories.length; i++) {
  const checkboxCategory = checkboxCategories[i];
  checkboxCategory.addEventListener("change", function (e) {
    checkboxCategory.classList.toggle("_active");

    const checkboxActiveCategories = document.querySelectorAll(
      ".categories-search__checkbox._active"
    );

    if (checkboxActiveCategories.length > 0) {
      searchSelect.classList.add("categories");
      const searchQuantity = document.querySelector(".search-page__quantity");
      searchQuantity.innerHTML =
        searchQuantity.dataset.text + " " + checkboxActiveCategories.length;
    } else {
      searchSelect.classList.remove("categories");
    }
  });
}

//======== Меню поиска на главной странице - конец

//============= Фильтр на странице каталог- начало

let catalogTitles = document.querySelectorAll(
  ".section-filter__title._spoller"
);
for (let i = 0; i < catalogTitles.length; i++) {
  const element = catalogTitles[i];

  element.addEventListener("click", function (e) {
    if (allow) {
      allow = false;
      let elem = this.nextElementSibling;
      element.classList.toggle("_active");
      _slideToggle(elem);
    }
  });
}

// const catalogTitle = $(".section-filter__title._spoller");
// catalogTitle.on("click", function () {
//   $(this).toggleClass("_active");
//   $(this).next(".section-filter__body").slideToggle();
// });

//========= Фильтр на странице каталог- конец

function showHideMenu() {
  const bodyJq = $(".menu-page__body");
  const add = bodyJq.hasClass("_active");
  if (add) {
    bodyJq.slideDown();
  } else {
    bodyJq.slideUp();
  }
}

// Фильтр товаров
if (document.querySelector(".price-filter__slider")) {
  let startSlider = document.querySelector(".price-filter__slider");
  let input0 = document.getElementById("price-start");
  let input1 = document.getElementById("price-end");
  let inputs = [input0, input1];

  noUiSlider.create(startSlider, {
    start: [0, 200000],
    // tooltips: [true, wNumb({decimals: 1})],
    tooltips: [
      wNumb({ decimals: 0, thousand: " " }),
      wNumb({ decimals: 0, thousand: " " }),
    ],
    // tooltips: [false, decimals: 1, true],
    connect: true,
    range: {
      min: 0,
      max: 200000,
    },
    format: wNumb({
      decimals: 0,
      thousand: " ",
    }),
  });

  startSlider.noUiSlider.on("update", function (values, handle) {
    inputs[handle].value = values[handle];
  });

  inputs.forEach(function (input, handle) {
    input.addEventListener("change", function () {
      startSlider.noUiSlider.setHandle(handle, this.value);
    });
  });
}

///Увеличение уменьшение количества.........../////////////////
let quantityButtons = document.querySelectorAll(".quantity__button");
if (quantityButtons.length > 0) {
  for (let i = 0; i < quantityButtons.length; i++) {
    const quantityButton = quantityButtons[i];
    quantityButton.addEventListener("click", () => {
      let value = parseInt(
        quantityButton.closest(".quantity").querySelector("input").value
      );
      if (quantityButton.classList.contains("quantity__button_plus")) {
        value++;
      } else {
        value--;
        if (value < 1) {
          value = 1;
        }
      }
      quantityButton.closest(".quantity").querySelector("input").value = value;
    });
  }
}

//===========Tabs===============================
let tab = function () {
  let tabNav = document.querySelectorAll("._tabs-item");
  // let tabContent = document.querySelectorAll("._tabs-block");
  let tabName;
  let mainTab;
  let tabContent;

  tabNav.forEach((item) => {
    item.addEventListener("click", selectTabNav);
  });

  function selectTabNav() {
    mainTab = this.closest("._tabs");
    mainTab.querySelectorAll("._tabs-item").forEach((item) => {
      item.classList.remove("_active");
    });
    // tabNav.forEach((item) => {
    //   item.classList.remove("_active");
    // });
    this.classList.add("_active");
    tabName = this.dataset.tabName;
    selectTabContent(tabName);

    function selectTabContent(tabName) {
      tabContent = mainTab.querySelectorAll("._tabs-block");
      tabContent.forEach((item) => {
        if (item.classList.contains(`${tabName}`)) {
          item.classList.add("_active");
        } else {
          item.classList.remove("_active");
        }
      });
    }
  }
};

tab();

// setButton.addEventListener("click", function () {
//   animatedSlider.noUiSlider.set(60);
//   unAnimatedSlider.noUiSlider.set(60);
// });
// showHideMenu();

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
console.log(window.isMobile());
