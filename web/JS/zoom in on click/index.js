function minimized__img() {
  const allPhoto = document.querySelectorAll("img.minimized__img");
  allPhoto.forEach((photo) => {
    photo.addEventListener("click", () => {
      //берем атрибут большой фото
      const i_path = photo.getAttribute("data-minimized");
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

      //
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
}
minimized__img();
