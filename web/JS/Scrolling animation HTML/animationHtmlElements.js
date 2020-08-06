const animHtml = () => {
  //! находим все эл-ты с классом _animated-items
  const animItems = document.querySelectorAll("._animated-items");

  if (animItems.length > 0) {
    window.addEventListener("scroll", animOnScroll);
    function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        // определяем положение эл-та и егго высоту
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        // домотка до  1/4 высоты контейнера  = анимация
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if (
          pageYOffset > animItemOffset - animItemPoint &&
          pageYOffset < animItemOffset + animItemHeight
        ) {
          //!добавляем класс
          animItem.classList.add("_active");
        } else {
          //! не убираем класс если есть класс _animated-no-hide
          if (!animItem.classList.contains("_animated-no-hide")) {
            animItem.classList.remove("_active");
          }
        }
      }
    }
    //!до функция для определения высоты
    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }

    // animOnScroll();
  }
};
animHtml();
