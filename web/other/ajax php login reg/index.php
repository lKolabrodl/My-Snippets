<?php
require "db.php";
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Тестовое задание</title>

    <link rel="stylesheet" href="style.css">

</head>

<body>



    <header>
        <div class="wrapper">
            <nav>
                <?php if (isset($_SESSION['logged_user'])) : ?>
                    Авторизован <br>
                    Привет, <?php echo $_SESSION['logged_user']->login; ?>
                    <a style="display: block; text-align: center;" href="logout.php">Выйти</a>
                <?php else : ?>
                    <a href="" class="openReg">Войти</a>
                    <a href="" class="openEnter">Регистрация</a>
                <?php endif; ?>

            </nav>
        </div>
    </header>





    <section id="modal-login">
        <form>
            <h1>Войти</h1>
            <input name="email" type="text" class="username" placeholder="E-mail" required="" style="cursor: auto;">
            <input name="password" type="password" placeholder="Пароль" required="" class="password" style="cursor: auto;">
            <div>
                <input type="submit" value="Войти">
                <a class="openEnter" href="#">нет аккаунта?</a>
            </div>
            <p class="response-enter"></p>
        </form><!-- form -->

    </section>

    <section id="modal-reg">
        <form>
            <h1>Регистрация</h1>

            <input name="tel" type="text" placeholder="Телефон" required="" style="cursor: auto;">
            <input name="email" type="email" placeholder="E-mail" required="" style="cursor: auto;">
            <input type="submit" value="Отправить">
            <p class="response"></p>

        </form><!-- form -->

    </section>

    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>

    <script src="commnon.js"></script>
</body>

</html>