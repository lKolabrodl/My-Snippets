<?php

require "db.php";

$data = $_REQUEST;

// здесь регистрируем
$errors = array();
if ($data['login'] == '') {
    $errors[] = 'Введите логин';
}
if ($data['email'] == '') {
    $errors[] = 'Введите email';
}
if ($data['password'] == '') {
    $errors[] = 'Введите пароль';
}

if (R::count('users', 'login = ?', array($data['login'])) > 0) {
    $errors[] = 'Пользователь с таким же логином уже существует!';
}
if (R::count('users', 'email = ?', array($data['email'])) > 0) {
    $errors[] = 'Пользователь с таким же email уже существует!';
}

if (empty($errors)) {
    // все хорошо можно регать
    $user           = R::dispense('users');
    $user->login    = $data['login'];
    $user->email    = $data['email'];
    $user->date     =  $data['date'];
    $user->password =  password_hash($data['password'], PASSWORD_DEFAULT);
    R::store($user);
    echo json_encode("ok");
} else {
    echo json_encode($errors);
}
