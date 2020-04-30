// ! a.anhor__link - все наши ссылки
// ! id должен совпадать с a.href
if (document.querySelectorAll("a.anhor__link")) {
  let anchors = document.querySelectorAll("a.anhor__link");

  for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      let blockID = anchor.getAttribute("href").substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: "smooth", // Принимает значение "auto" или "smooth". По умолчанию "auto".
        block: "start", //"start", "center", "end" или "nearest" По умолчанию "center".
      });
    });
  }
}
