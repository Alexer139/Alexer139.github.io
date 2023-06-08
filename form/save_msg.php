<?php

$servername = 'localhost';
$username = 'пользователь';
$password = 'пароль';
$bdname = 'имя_бд';

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Ошибка подключения к базе данных: " . $conn->connect_error);
}

$message = $_POST['message'];

$sql = "INSERT INTO messages (message) VALUES ('$message')";
if ($conn->query($sql) === TRUE) {
  echo "Сообщение сохранено успешно";
} else {
  echo "Ошибка при сохранении сообщения: " . $conn->error;
}

$conn->close();
?>
