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
    if (data?.length === 0) return data
    const hashData = {};
    const result = [];
    data.forEach(obj => hashData[obj.id] = obj);

    for (item in hashData) {
        const id = hashData[item]?.parent_id;
        if (!id) continue;

        const parent = hashData[id];
        if (!parent?.children) parent.children = [];
        parent.children.push(hashData[item]);
        parent.children.sort((a, b) => a?.srt > b?.srt ? 1 : -1);
    }

    Object.keys(hashData).forEach((obj) => {
        if (!hashData[obj].parent_id) result.push(hashData[obj]);
    })

    return result;
}

// выстраиваем дерево эл-ов
function createTree(data) {
    const ul = document.createElement("ul");
    data.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.title;
        if (item.children) li.appendChild(createTree(item.children));
        ul.appendChild(li);
    });
    return ul;
}

//функция сворачивания - разворачивания списка
function rollList(container) {
    let li = container.querySelectorAll("li");
    li.forEach((item) => {
        if (item.children.length === 0) return;
        else {
            item.classList.add("main__title");
            item.addEventListener("click", function (e) {
                //останавливаем распстранение клика
                e.stopPropagation();
                item.children[0].classList.toggle("active");
            });
        }
    });
}
