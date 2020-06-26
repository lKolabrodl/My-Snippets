function formValidation() {
  //существует форма
  if (!document.querySelector("#myForm form")) {
    return;
  }
  let myForm = document.querySelector("#myForm form");

  //вешаю слушателя
  myForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.querySelector("#myForm input[name='name']");
    let phone = document.querySelector("#myForm input[name='phone']");
    let email = document.querySelector("#myForm input[name='email']");

    let nameData = false;
    let namePhone = false;
    let nameEmail = false;

    //обработка ввода
    nameData = nameValid(name);
    namePhone = phoneValid(phone);
    nameEmail = emailValid(email);

    if (nameData && namePhone && nameEmail) {
      let data = {
        name: name.value,
        phone: phone.value,
        email: email.value,
      };

      formData(data);
      // name.value = "";
      // phone.value = "";
      // email.value = "";
    }
  });

  function nameValid(name) {
    let errorValue = document.querySelector("#errorName");
    let regexp = /^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]{1,}|[А-ЯA-Z][\x27а-яa-z]{1,}\-([А-ЯA-Z][\x27а-яa-z]{1,}|(оглы)|(кызы)))\040[А-ЯA-Z][\x27а-яa-z]{1,}(\040[А-ЯA-Z][\x27а-яa-z]{1,})?$/;

    //меньше n символов
    if (name.value.length < 6) {
      errorValue.innerHTML = "Введите полное ФИО";
      return false;
    }
    //совпадение с регуляркой
    if (!regexp.test(name.value)) {
      errorValue.innerHTML = "Введите полное ФИО кириллицей с заглавной буквы";
      return false;
    }
    errorValue.innerHTML = "";
    return true;
  }

  function phoneValid(phone) {
    let errorValue = document.querySelector("#errorPhone");
    phone.value = phone.value.replace(/[^+0-9]/gim, "");

    let regexp = /(\+7|8|07)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d))/g;

    //меньше n символов
    if (phone.value.length < 5) {
      errorValue.innerHTML = "Номер слишком короткий";
      return false;
    }
    //совпадение с регуляркой
    if (!regexp.test(phone.value)) {
      errorValue.innerHTML =
        "Неправильный формат телефона, телефон должен начинаться с +7* или 8* или 07*";
      return false;
    }
    errorValue.innerHTML = "";
    return true;
  }

  function emailValid(email) {
    let errorValue = document.querySelector("#errorEmail");

    let regexp = /^([^@\s]+){4,}@((?:[gmail]+\.)+[com]{3,})$/i;
    //меньше n символов
    if (email.value.length < 6) {
      errorValue.innerHTML = "Введите правильный email";
      return false;
    }
    //совпадение с регуляркой
    if (!regexp.test(email.value)) {
      errorValue.innerHTML = "Неправильный формат email, ";
      return false;
    }
    errorValue.innerHTML = "";
    return true;
  }
}
formValidation();

const formData = (data) => {
  fetch("/mail.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify(data),
  })
    .then((response) => console.log("Сообщение отправлено", data))
    .catch((err) => console.error(err));
};
