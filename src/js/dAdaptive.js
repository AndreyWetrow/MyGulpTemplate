export default function () {
  let originalPosition = [];
  let daElements = document.querySelectorAll("[data-da]");
  let daElementsArray = [];
  let daMatchMedia = [];
  // Заполняем массивы
  if (daElements.length > 0) {
    let number = 0;
    for (let index = 0; index < daElements.length; index++) {
      const daElement = daElements[index];
      const daMove = daElement.getAttribute("data-da");
      const daArray = daMove.split(",");
      console.log(daMove);
      console.log(daElement);
      if (daArray.length == 3) {
        daElement.setAttribute("data-da-index", number);

        originalPosition[number] = {
          parent: daElement.parentNode,
          index: indexInParent(daElement),
        };

        daElementsArray[number] = {
          element: daElement,
          destination: document.querySelector("." + daArray[0].trim()),
          place: daArray[1].trim(),
          breakpoint: daArray[2].trim(),
        };
        number++;
      }
    }
    dynamicAdaptSort(daElementsArray);

    // Создаем события в точке брекпойнта
    for (let index = 0; index < daElementsArray.length; index++) {
      const el = daElementsArray[index];
      const daBreakPoint = el.breakpoint;
      const daType = "max"; // Для MobileFirst поменять на min
      daMatchMedia.push(
        window.matchMedia("(" + daType + "-width: " + daBreakPoint + "px)")
      );

      daMatchMedia[index].addEventListener("change", dynamicAdapt);
    }
  }
  function indexInParent() {}

  // Основная функция
  function dynamicAdapt(e) {
    console.log(e);
    for (let index = 0; index < daElementsArray.length; index++) {
      const el = daElementsArray[index];
      const daElement = el.element;
      const daDestination = el.destination;
      const daPlace = el.place;
      const daBreakpoint = el.breakpoint;
      const daClassname = "_dynamic_adapt_" + daBreakpoint;

      if (daMatchMedia[index].matches) {
        // Перебрасываем элементы
        if (!daElement.classList.contains(daClassname)) {
          let actual_index;
          if (daPlace == "first") {
            actual_index = indexOfElements(daDestination)[0];
          } else if (daPlace == "last") {
            actual_index = indexOfElements(daDestination)[
              indexOfElements(daDestination).length
            ];
          } else {
            actual_index = indexOfElements(daDestination)[daPlace];
          }
          daDestination.insertBefore(
            daElement,
            daDestination.children[actual_index]
          );
          daElement.classList.add(daClassname);
        }
      } else {
        // Возвращаем на место
        if (daElement.classList.contains(daClassname)) {
          dynamicAdaptBack(daElement);
          daElement.classList.remove(daClassname);
        }
      }
    }

    customAdapt();
  }
  // Вызов основной фунции
  dynamicAdapt();
}

