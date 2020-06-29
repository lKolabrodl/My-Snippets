function openModal() {
  if (
    document.querySelector("#modal-login") &&
    document.querySelector(".openReg")
  ) {
    let btnReg = document.querySelector(".openReg");
    let modalEnter = document.querySelector("#modal-reg");
    let modalReg = document.querySelector("#modal-login");
    btnReg.addEventListener("click", (e) => {
      e.preventDefault();
      modalEnter.classList.remove("is_open");
      modalReg.classList.toggle("is_open");
    });
    window.addEventListener(
      "keydown",
      function (e) {
        if (e.keyCode == 27) {
          modalReg.classList.remove("is_open");
          modalEnter.classList.remove("is_open");
        }
      },
      true
    );
  }

  if (
    document.querySelector("#modal-reg") &&
    document.querySelectorAll(".openEnter")
  ) {
    let btnEnter = document.querySelectorAll(".openEnter");
    let modalEnter = document.querySelector("#modal-reg");
    let modalReg = document.querySelector("#modal-login");
    btnEnter.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        modalReg.classList.remove("is_open");
        modalEnter.classList.toggle("is_open");
      });
    });
  }
}
openModal();

function registrations() {
  if (!document.querySelector("#modal-reg")) {
    return;
  }
  let form = document.querySelector("#modal-reg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let regT = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    let regE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let phone = document.querySelector('#modal-reg input[name="tel"]');
    let email = document.querySelector('#modal-reg input[name="email"]');

    if (phone.value.length < 5) {
      phone.setCustomValidity("заполните поле");
      return;
    }

    if (email.value.length < 4) {
      email.setCustomValidity("заполните поле");
      return;
    }

    if (!regT.test(phone.value)) {
      phone.setCustomValidity("Неправильный формат телефона");
      return;
    }

    if (!regE.test(email.value)) {
      phone.setCustomValidity("Неправильный формат email-адреса");
      return;
    }

    let password = gen_password(5);
    let date = newData();

    let data = {
      login: phone.value,
      email: email.value,
      password: password,
      date: date,
    };

    formRegistration(data);
    console.log("ПОЕХАЛИ");
  });
}
registrations();

function login() {
  if (!document.querySelector("#modal-login")) {
    return;
  }
  let form = document.querySelector("#modal-login");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = document.querySelector('#modal-login input[name="email"]');
    let password = document.querySelector(
      '#modal-login input[name="password"]'
    );

    let data = {
      login: email.value,
      password: password.value,
    };

    formlogin(data);

    console.log("ПОЕХАЛИ");
  });
}
login();

function gen_password(len) {
  let password = "";
  let symbols =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < len; i++) {
    password += symbols.charAt(Math.floor(Math.random() * symbols.length));
  }
  return password;
}

function newData() {
  let date = new Date();
  let mon = ("0" + (1 + date.getMonth())).replace(/.?(\d{2})/, "$1");

  let modDate = date
    .toString()
    .replace(
      /^[^\s]+\s([^\s]+)\s([^\s]+)\s([^\s]+)\s([^\s]+)\s.*$/gi,
      "$3-" + mon + "-$2 $4"
    );
  return modDate;
}

function formRegistration(data) {
  $.ajax({
    type: "POST",
    url: "./signup.php",
    data: data,
    dataType: "json",
    success: function (response) {
      if (response == "ok") {
        document.querySelector(
          "p.response"
        ).innerHTML = `Пароль: ${data.password}`;
        console.log("Пароль", data.password);
        document.querySelector('#modal-reg input[name="tel"]').style.display =
          "none";
        document.querySelector('#modal-reg input[name="email"]').style.display =
          "none";
        document.querySelector(
          '#modal-reg input[type="submit"]'
        ).style.display = "none";
      } else {
        document.querySelector("p.response").innerHTML = response;
      }
    },
  });
}
function formlogin(data) {
  $.ajax({
    type: "POST",
    url: "./login.php",
    data: data,
    dataType: "json",
    success: function (response) {
      if (response == "ok") {
        location.reload();
      } else {
        document.querySelector("p.response-enter").innerHTML = response;
      }
    },
  });
}
