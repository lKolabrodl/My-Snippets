<?php
require "db.php";
$data = $_REQUEST;

// здесь логинимся
$errors = array();
$user = R::findOne('users', 'login = ?', array($data['login']));
if ($user) {
    // логин существует
    if (password_verify($data['password'], $user->password)) {
        // Все хорошо
        $_SESSION['logged_user'] = $user;
        echo json_encode("ok");
    } else {
        echo json_encode("Неверный пароль");
    }
} else {
    echo json_encode('Пользователь с таким логином не найден!');
}
