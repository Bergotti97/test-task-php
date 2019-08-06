<?php

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$tariff = $_POST['tariff'];
$adress = $_POST['adress'];
$data = $_POST['data'];

// config
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$dbname = 'orders';

// Подключение к БД
$mysqli = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
    
//Выявление ошибок
if (mysqli_connect_errno($mysqli)) {
    echo "Не удалось подключиться к БД".mysqli_connect_error();
}

//Кодировка
mysqli_query($mysqli, "SET NAMES 'utf8' COLLATE 'utf8_general_ci'");

//Передача полученных данных в БД
$costumer = "INSERT INTO `customer` (`name`,`email`,`phone`) 
VALUES (`$name`,`$email`,`$phone`)";
$costumer_orders = "INSERT INTO `costumer_orders` 
(`customer_phone`,`tariff`,`data`,`adress`) 
VALUES (`$phone`,`$tariff`,`$data`,`$adress`)";

$mysqli->query($costumer);
$mysqli->query($costumer_orders);

mysqli_close($mysqli);
