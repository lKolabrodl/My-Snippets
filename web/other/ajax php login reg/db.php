<?php
require "libs/rb.php";
R::setup(
   'mysql:host=localhost;dbname=contacts',
   'root',
   ''
);

session_start();
