//запрос
fetch("https://rcslabs.ru/locations.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return dataTree(data);
  })
  .then((res) => {
    let container = document.getElementById("container");
    //
    container.appendChild(createTree(res));
    rollList(container);
  });

/// функция принимает данные с сервера и сортирует
function dataTree(data) {
  // массив id - ключ
  let buffer = new Map(
    data.map((item) => {
      return [item.id, item];
    })
  );

  // обходим массив
  for (let item of buffer.values()) {
    // получаем ссылку на родителя
    const parent = buffer.get(item.parent_id);

    //если ссылка = null
    if (!parent) {
      continue;
    }

    //создаем массив
    if (!parent.children) {
      parent.children = [];
    }
    //добавляем в родителя item
    parent.children = [...parent.children, item];
    //сортирует по srt
    parent.children.sort((a, b) => {
      return a.srt > b.srt ? 1 : -1;
    });
  }
  //разворачиваю map
  result = [...buffer.values()];
  // вывожу объект с пустым parent
  return result.filter((item) => {
    return !item.parent_id;
  });
}
// выстраиваем дерево эл-ов
function createTree(data) {
  const ul = document.createElement("ul");

  data.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.title;

    if (item.children) {
      li.appendChild(createTree(item.children));
    }

    ul.appendChild(li);
  });

  return ul;
}

//функция сворачивания - разворачивания списка
function rollList(container) {
  let li = container.querySelectorAll("li");
  li.forEach((item) => {
    if (item.children.length === 0) {
      return;
    } else {
      item.classList.add("main__title");
      item.addEventListener("click", function (e) {
        //останавливаем распстранение клика
        e.stopPropagation();
        item.children[0].classList.toggle("active");
      });
    }
  });
}
