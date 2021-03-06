function minimized__img() {
  const allPhoto = document.querySelectorAll("img.minimized__img");
  const allGallery = [];

  allPhoto.forEach((photo) => {
    if (photo.hasAttribute("data-gallery")) {
      allGallery.push(photo);
    }

    photo.addEventListener("click", () => {
      //берем атрибут большой фото

      let i_path = photo.getAttribute("data-minimized");
      if (!i_path) {
        i_path = photo.getAttribute("src");
      }
      //создаем объекты
      minimizedCreateObject(i_path);
      //добавляем актив
      document.getElementById("minimized__overplay").classList.add("_active");
      document.getElementById("minimized__magnify").classList.add("_active");

      document.getElementById("minimized__overplay").onclick = () => {
        document
          .getElementById("minimized__overplay")
          .classList.remove("_active");
        document
          .getElementById("minimized__magnify")
          .classList.remove("_active");
      };
      document.getElementById("minimized_close_popup").onclick = () => {
        document
          .getElementById("minimized__overplay")
          .classList.remove("_active");
        document
          .getElementById("minimized__magnify")
          .classList.remove("_active");
      };

      window.addEventListener(
        "keydown",
        function (e) {
          if (e.keyCode == 27) {
            document
              .getElementById("minimized__overplay")
              .classList.remove("_active");
            document
              .getElementById("minimized__magnify")
              .classList.remove("_active");
          }
        },
        true
      );

      if (!photo.hasAttribute("data-gallery")) {
        if (document.querySelector("#minimized__arrw__left")) {
          document.querySelector("#minimized__arrw__left").remove;
          document.getElementById("minimized__arrw__right").remove;
        }
      } else {
        arrowSlider(allGallery);
      }
    });
  });

  function minimizedCreateObject(img_scr) {
    if (
      !document.getElementById("minimized__overplay") &&
      !document.getElementById("minimized__magnify") &&
      !document.getElementById("minimized_img") &&
      !document.getElementById("minimized_close_popup")
    ) {
      //!overplay
      const minimized_overplay = document.createElement("div");
      minimized_overplay.id = "minimized__overplay";
      //!magnify
      const minimized_magnify = document.createElement("div");
      minimized_magnify.id = "minimized__magnify";
      //!minimized_img
      const minimized_img = document.createElement("img");
      minimized_img.src = img_scr;
      minimized_img.id = "minimized_img";
      //!minimized_close_popup
      const minimized_close_popup = document.createElement("div");
      minimized_close_popup.id = "minimized_close_popup";
      // вставляем в раземтку

      document.body.appendChild(minimized_overplay);
      document.body.appendChild(minimized_magnify);
      minimized_magnify.appendChild(minimized_img);
      minimized_magnify.appendChild(minimized_close_popup);
    } else {
      document.getElementById("minimized_img").src = img_scr;
    }
  }

  function arrowSlider(array) {
    if (array.length <= 0) {
      return;
    }
    if (
      !document.getElementById("minimized__arrw__left") &&
      !document.getElementById("minimized__arrw__right")
    ) {
      const minimized__arrw__left = document.createElement("div");
      minimized__arrw__left.id = "minimized__arrw__left";

      const minimized__arrw__right = document.createElement("div");
      minimized__arrw__right.id = "minimized__arrw__right";

      let minimized__magnify = document.getElementById("minimized__magnify");
      minimized__magnify.appendChild(minimized__arrw__left);
      minimized__magnify.appendChild(minimized__arrw__right);
    }
  }
}
minimized__img();
